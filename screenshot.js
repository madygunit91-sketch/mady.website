const puppeteer = require('puppeteer');

(async () => {
  try {
    const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    
    // Live site
    const page1 = await browser.newPage();
    await page1.setViewport({ width: 1280, height: 800 });
    await page1.goto('https://scfo.de/', { waitUntil: 'networkidle2' });
    await page1.screenshot({ path: 'live_screenshot.png' });

    // Local site
    const page2 = await browser.newPage();
    await page2.setViewport({ width: 1280, height: 800 });
    await page2.goto('http://localhost:5173/', { waitUntil: 'networkidle2' });
    await page2.screenshot({ path: 'local_screenshot.png' });

    await browser.close();
    console.log("Screenshots captured");
  } catch (e) {
    console.log("Error capturing screenshot:", e);
    process.exit(1);
  }
})();
