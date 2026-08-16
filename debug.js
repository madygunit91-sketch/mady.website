const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  page.on('console', msg => console.log('BROWSER LOG:', msg.text()));
  page.on('pageerror', err => console.log('BROWSER ERROR:', err.message));
  
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle0' });
  await page.waitForTimeout(1000);
  
  // Scroll down
  await page.evaluate(() => window.scrollBy(0, 1000));
  await page.waitForTimeout(1000);
  
  const scrollY = await page.evaluate(() => window.scrollY);
  console.log('Scroll Y after scrolling:', scrollY);
  
  await page.screenshot({ path: 'screenshot_test.png' });
  await browser.close();
})();
