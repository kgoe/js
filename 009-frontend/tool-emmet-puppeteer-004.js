;
const puppeteer = require('puppeteer');
const emmet = require('emmet');

/**
 * makeEmmet
 * @return {string}
 */
function makeEmmet() {
  var output = '';

  var scriptJquery1 = 'script[src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"]';
  var scriptAngular1 = 'script[src="https://ajax.googleapis.com/ajax/libs/angularjs/1.7.5/angular.min.js"]';
  var scriptD35 = 'script[src="https://ajax.googleapis.com/ajax/libs/d3js/5.7.0/d3.min.js"]';

  var head = 'head>(title+meta+link+style+script>{script})';
  var headScript = '{var initprop=Object.getOwnPropertyNames(window);}';
  head = head.replace('{script}', headScript);

  var body = 'body>(header+main+footer+{scripts})';
  // +script[]+script
  var bodyScript = '+' + scriptJquery1 + '+' + scriptAngular1 + '+' + scriptD35;
  body = body.replace('+{scripts}', bodyScript);

  var html = 'html>(head<>)+(body<>)';
  html = html.replace('head<>', head).replace('body<>', body);

  output = html;
  return output;
}

// const sniph002 = 'html>(head>(title+meta+link+style+script>{var initprop=Object.getOwnPropertyNames(window);}))+(body>(header+main+footer+script[src="https://ajax.googleapis.com/ajax/libs/angularjs/1.7.5/angular.min.js"]))';
const sniph002 = makeEmmet();

var html = emmet.expandAbbreviation(sniph002);
html2 = html.replace(/\$\{0\}/g, '');
// console.log(html2);

/**
 * compareProperties
 * @description compares 2 json objects, returns properties not present in p1
 * @param {string} p1
 * @param {string} p2
 * @return {*}
 */
function compareProperties( p1, p2 ) {
  if ( typeof p1 == 'string' && typeof p2 == 'string' ) {
    var pp1 = JSON.parse(p1);
    var pp2 = JSON.parse(p2);
    var pp1l = pp1.length;
    var pp2l = pp2.length;
    var set = [];
    var unset = [];
    for ( itemcnt = 0; itemcnt < pp2l; itemcnt ++ ) {
      var theItem = pp2[itemcnt];
      if ( pp1.indexOf(theItem) >= 0 ) {
        set.push(theItem);
      } else {
        unset.push(theItem);
      }
    }
    return unset;
  } else {
    return false;
  }
}

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

  // await console.log('Dimensions:', dimensions);
  // await console.log(page);
  await console.log(compareProperties(dimensions.init, dimensions.props));
  // [ 'angular' ]

  await browser.close();
})();
