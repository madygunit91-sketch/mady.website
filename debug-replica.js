const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', err => console.log('PAGE ERROR:', err.message));
  
  await page.goto('http://localhost:3001/', { waitUntil: 'networkidle2' });
  
  const bodyClasses = await page.$eval('body', el => el.className);
  const canvasCount = await page.$$eval('canvas', els => els.length);
  const isDark = await page.$eval('html', el => el.classList.contains('dark'));
  
  console.log('Body classes:', bodyClasses);
  console.log('Canvas count:', canvasCount);
  console.log('HTML has dark class:', isDark);
  
  await browser.close();
})();
