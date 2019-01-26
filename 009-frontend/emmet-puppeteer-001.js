const puppeteer = require('puppeteer');
const emmet = require('emmet');

const snip_h002 = 'html>(head>(title+meta+link+style+script))+(body>(header+main+footer+script[src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"]))';

var html = emmet.expandAbbreviation(snip_h002);

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  // await page.goto('https://google.com');

  await page.setContent(html);

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
