;
const puppeteer = require('puppeteer');
const emmet = require('emmet');

const sniph002 = 'html>(head>(title+meta+link+style+script>{var initprop=Object.getOwnPropertyNames(window);}))+(body>(header+main+footer+script[src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"]))';

var html = emmet.expandAbbreviation(sniph002);

html2 = html.replace(/\$\{0\}/g, '');

console.log(html2);

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  // await page.goto('https://google.com');

  await page.setContent(html2);

  // Get the "viewport" of the page, as reported by the page.
  const dimensions = await page.evaluate(() => {
    return {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
      deviceScaleFactor: window.devicePixelRatio,
      init: JSON.stringify(initprop),
      props: JSON.stringify(Object.getOwnPropertyNames(window)),
    };
  });

  await console.log('Dimensions:', dimensions);
  // await console.log(page);

  await browser.close();
})();
