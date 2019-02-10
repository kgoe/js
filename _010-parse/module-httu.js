;
const http = require('http');
const https = require('https');
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

var HTTU =
(function iife() {
  var httpRequestUtility = {
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36',
    formatRequest: function(theHost, thePath) {
      return {host: theHost, path: thePath, port: 443, method: 'GET'};
    },
    formatRequest443: function(theHost, thePath) {
      return {host: theHost, path: thePath, port: 443, method: 'GET'};
    },
    formatRequest8080: function(theHost, thePath) {
      return {host: theHost, path: thePath, port: 8080, method: 'GET'};
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
      return requestHandler;
    },
    httpBasicPromise: function(blockRequest) {
      // var httpRequest = false;
      blockRequest.toString();
      var thePromise = new Promise( function thePromiseCallback( resolve, reject ) {
        httpRequestUtility.httpBasicGetResponse(theRequest, resolve);
      });
      return thePromise;
    },
  };
  return httpRequestUtility;
})();

if ( typeof global !== 'undefined' && typeof module !== 'undefined' ) {
  module.exports = {
    HTTU: HTTU,
  };
}
