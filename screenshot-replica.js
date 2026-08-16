const puppeteer = require('puppeteer');

(async () => {
  try {
    const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    
    // Local site
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });
    await page.goto('http://localhost:3001/', { waitUntil: 'networkidle2' });
    await page.screenshot({ path: 'replica_screenshot.png' });

    await browser.close();
    console.log("Screenshot captured");
  } catch (e) {
    console.log("Error capturing screenshot:", e);
    process.exit(1);
  }
})();
