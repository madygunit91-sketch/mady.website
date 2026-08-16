import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  page.on('console', msg => console.log('PAGE LOG:', msg.text()));

  await page.goto('http://localhost:5173', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 1000));

  // Screenshot FAQ
  const faq = await page.$('#haeufige-fragen');
  if (faq) {
    await faq.evaluate(el => el.scrollIntoView());
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({ path: 'screenshot_faq.png' });
    console.log('FAQ screenshot taken');
  }

  // Screenshot System
  const system = await page.$('#das-system');
  if (system) {
    await system.evaluate(el => el.scrollIntoView());
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({ path: 'screenshot_system.png' });
    console.log('System screenshot taken');
  }

  await browser.close();
})();
