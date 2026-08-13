// Usage: node scripts/screenshot-story.mjs <story-id> <output-path.png>
// Example: node scripts/screenshot-story.mjs atoms-pushbutton--default /tmp/pushbutton.png
import { chromium } from 'playwright';

const [, , storyId, outPath] = process.argv;
if (!storyId || !outPath) {
  console.error('Usage: node scripts/screenshot-story.mjs <story-id> <output-path.png>');
  process.exit(1);
}

const url = `http://localhost:6006/iframe.html?id=${storyId}&viewMode=story`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
await page.waitForTimeout(500);
await page.screenshot({ path: outPath, fullPage: true });
await browser.close();
console.log(`Saved ${outPath}`);
