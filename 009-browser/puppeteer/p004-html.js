const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  // await page.goto('https://google.com');

  await page.setContent('<html><p>Hello World!</p></html>');

  // Get the "viewport" of the page, as reported by the page.
  const dimensions = await page.evaluate(() => {
    return {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
      deviceScaleFactor: window.devicePixelRatio,
      props: JSON.stringify(Object.getOwnPropertyNames(window)),
    };
  });

  console.log('Dimensions:', dimensions);

  await browser.close();
})();
