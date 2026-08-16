const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--use-gl=swiftshader']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  console.log('Navigating...');
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle0' });

  // Get canvas info
  const canvasInfo = await page.evaluate(() => {
    const canvas = document.querySelector('canvas');
    if (!canvas) return 'NO CANVAS FOUND';
    const rect = canvas.getBoundingClientRect();
    return {
      width: rect.width,
      height: rect.height,
      display: window.getComputedStyle(canvas).display,
      visibility: window.getComputedStyle(canvas).visibility,
      opacity: window.getComputedStyle(canvas).opacity,
      zIndex: window.getComputedStyle(canvas).zIndex,
    };
  });

  console.log('Canvas Info:', canvasInfo);

  await browser.close();
})();
