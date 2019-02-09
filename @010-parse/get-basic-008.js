const _http = require('https');
const _cher = require('cheerio');
const _fs = require('fs');
const log = console.log;

/*
{
  host:'www.google.com',
  path:'/'
}
*/

/*
{
  hostname: 'localhost',
  port: 80,
  path: '/',
  agent: false  // create a new agent just for this one request
}
*/

var HTTU =
(function iife() {
  var httpRequestUtility = {
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36',
    formatRequest: function(theHost, thePath) {
      return {host: theHost, path: thePath};
    },
    formatRequest443: function(theHost, thePath) {
      return {host: theHost, path: thePath, port: 443};
    },
    formatRequest8080: function(theHost, thePath) {
      return {host: theHost, path: thePath, port: 8080};
    },
    logResponse: function(value) {
      console.log(value);
    },
    httpBasicGetResponse: function(theRequest, promiseResolve) {
      var requestCallback = function requestCallback(response) {
        var body = '';
        // console.log(response);
        response.on('data', function dataCallback(d) {
          body += d;
        });
        response.on('end', function endCallback() {
          // console.log(body);
          promiseResolve(body);
        });
      };
      var requestHandler = _http.get(theRequest, requestCallback);
    },
    httpBasicPromise: function(blockRequest) {
      var httpRequest = false;
      var thePromise = new Promise( function thePromiseCallback( resolve, reject ) {
        httpRequestUtility.httpBasicGetResponse(theRequest, resolve);
      });
      return thePromise;
    },
  };
  return httpRequestUtility;
})();

// https://en.wikipedia.org/wiki/Provinces_of_the_Philippines
var theRequest = HTTU.formatRequest('en.wikipedia.org', '/wiki/Provinces_of_the_Philippines');

var cherrioParseResponse = function cheerioParseResponse( res, req ) {
  // console.log({res,req});
  var $$ = _cher.load(res);
  // log($$('body #mw-content-text table.wikitable.sortable').length);
  // log($$('body #mw-content-text table.wikitable.sortable').html());
  $$('body #mw-content-text table.wikitable.sortable tr').each(function(id, element) {
    // console.log($$(element).html());
    $$(element).find('span.sortkey').html('');
    console.log(
        $$(element).find('th').text().trim(),
        '|',
        $$(element).find('td').eq(0).text().trim(),
        '|',
        $$(element).find('td').eq(1).text().trim(),
        '|',
        $$(element).find('td').eq(2).text().trim(),
        '|',
        $$(element).find('td').eq(3).text().trim(),
        '|',
        $$(element).find('td').eq(4).text().trim(),
        '|',
        $$(element).find('td').eq(5).text().trim(),
        '|',
        $$(element).find('td').eq(6).text().trim(),
        '|',
        $$(element).find('td').eq(7).text().trim(),
        '|',
        $$(element).find('td').eq(8).text().trim(),
        '|',
        $$(element).find('td').eq(9).text().trim(),
        '|',
        $$(element).find('td').eq(10).text().trim(),
        '|',
        $$(element).find('td').eq(11).text().trim(),
        '|',
        $$(element).find('td').eq(12).text().trim(),
        '|',
        $$(element).find('td').eq(13).text().trim(),
        '|',
        $$(element).find('td').eq(14).text().trim(),
        '|',
        $$(element).find('td').eq(15).text().trim(),
    );
  });
};

// var theResponse = HTTU.logResponse;
var theResponse = cherrioParseResponse;
HTTU.httpBasicPromise(theRequest).then(theResponse);
