const http = require('http');

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
        response.on('data', function dataCallback(d) {
          body += d;
        });
        response.on('end', function endCallback() {
          // console.log(body);
          promiseResolve(body);
        });
      };
      var requestHandler = http.get(theRequest, requestCallback);
    },
    httpBasicPromise: function(blockRequest) {
      var thePromise = new Promise( function thePromiseCallback( resolve, reject ) {
        httpRequestUtility.httpBasicGetResponse(theRequest, resolve);
      });
      return thePromise;
    },
  };
  return httpRequestUtility;
})();

var theRequest = HTTU.formatRequest('www.google.com', '/');
var theResponse = HTTU.logResponse;

HTTU.httpBasicPromise(theRequest).then(theResponse);
