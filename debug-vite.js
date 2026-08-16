const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', err => console.log('PAGE ERROR:', err.message));
  
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle2' });
  
  await page.screenshot({ path: 'local_screenshot_v2.png' });
  console.log('Screenshot saved to local_screenshot_v2.png');
  
  await browser.close();
})();
