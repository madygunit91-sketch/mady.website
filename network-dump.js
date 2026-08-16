const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  
  page.on('response', response => {
    const url = response.url();
    if (url.includes('.glb') || url.includes('.gltf') || url.includes('.obj') || url.includes('knight') || url.includes('model') || url.includes('3d')) {
      console.log('Found 3D asset:', url);
    }
    // Also dump any large responses that might be models
    const contentLength = response.headers()['content-length'];
    if (contentLength > 500000) { // > 500kb
      console.log('Large asset:', url, 'Size:', contentLength);
    }
  });

  await page.goto('https://scfo.de/', { waitUntil: 'networkidle2' });
  await browser.close();
})();
