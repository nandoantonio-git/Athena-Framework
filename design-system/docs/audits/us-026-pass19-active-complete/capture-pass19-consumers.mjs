import { mkdir, readFile } from 'node:fs/promises';

import { chromium } from 'playwright';

const baseUrl = 'http://localhost:6116';
const outDir = '.audit-artifacts/us-026-active';
const screenshotDir = `${outDir}/screenshots-pass19-consumers`;

const ids = [
  'molecules-notification--default',
  'molecules-notification--with-image',
  'molecules-popovernotification--default',
  'organisms-archivebrowsermodal--default',
  'organisms-savelongtermfilestorage--default',
  'organisms-dialogsaveorganizationmodal--default',
];

await mkdir(screenshotDir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 1100 } });

for (const id of ids) {
  console.log(id);
  const url = `${baseUrl}/iframe.html?id=${id}&viewMode=story`;
  await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(500);
  await page.screenshot({ path: `${screenshotDir}/${id}.png`, fullPage: false, timeout: 30000 });
}

await browser.close();
console.log('done');
