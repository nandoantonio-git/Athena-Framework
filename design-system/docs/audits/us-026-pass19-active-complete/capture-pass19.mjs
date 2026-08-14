import { createHash } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';

import { chromium } from 'playwright';

const baseUrl = 'http://localhost:6116';
const outDir = '.audit-artifacts/us-026-active';
const screenshotDir = `${outDir}/screenshots-pass19`;

const targetTitles = new Set([
  'Atoms/CloseButton',
  'Atoms/ArchiveItem',
  'Atoms/FolderItem',
  'Atoms/ImageItem',
  'Atoms/VideoItem',
  'Celules/CleanSpaceListSelection',
  'Celules/FreeModeOutputNode',
  'Organisms/CleanSpaceStorage',
  'Organisms/DialogTemplateReviewModal',
  'Organisms/FileListContainer',
  'Organisms/Header',
  'Organisms/OrganizeFreeModeCanvas',
  'Organisms/OrganizePanelDropZone',
  'Organisms/Sidebar',
  'Organisms/SidebarToggle',
]);

const indexResponse = await fetch(`${baseUrl}/index.json`);
if (!indexResponse.ok) {
  throw new Error(`Could not read Storybook index: ${indexResponse.status}`);
}

const storyIndex = await indexResponse.json();
const stories = Object.values(storyIndex.entries)
  .filter((entry) => entry.type === 'story' && targetTitles.has(entry.title))
  .sort((a, b) => a.id.localeCompare(b.id));

await mkdir(screenshotDir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 1100 } });
const results = [];

for (const [index, story] of stories.entries()) {
  console.log(`[${index + 1}/${stories.length}] ${story.id}`);
  const screenshot = `${screenshotDir}/${story.id}.png`;
  const url = `${baseUrl}/iframe.html?id=${story.id}&viewMode=story`;
  await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(500);
  await page.screenshot({ path: screenshot, fullPage: false, timeout: 30000 });
  const buffer = await readFile(screenshot);
  results.push({
    id: story.id,
    title: story.title,
    name: story.name,
    sha256: createHash('sha256').update(buffer).digest('hex'),
    screenshot,
  });
}

await browser.close();

await writeFile(
  `${outDir}/screenshot-results-pass19.json`,
  `${JSON.stringify({ pass: 19, date: '2026-08-13', storyCount: results.length, results }, null, 2)}\n`,
);

console.log(`Captured ${results.length} stories for pass19 recheck.`);
