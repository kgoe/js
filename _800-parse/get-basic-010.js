const _http = require('http');
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
// const _cher = require('cheerio');
// const _fs = require('fs');
// const log = console.log;

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

// var theRequest = HTTU.formatRequest('en.wikipedia.org','/wiki/Provinces_of_the_Philippines');

/**
 * formatRequestOptions
 * @param {*} host
 * @param {*} path
 * @param {*} port
 * @param {*} method
 * @return {object}
 */
function formatRequestOptions(host, path, port, method) {
  port = port || 80;
  method = method || 'GET';
  path = path || '/';

  return {
    host: host,
    port: port,
    path: path,
    method: method,
    headers: {
      'User-Agent': HTTU.userAgent,
      'Cookie': 'PHPSESSID=afmunq5h54619d507qnp4j6fdo; path=/',
    },
    // ca: [fs.readFileSync([certificate path], {encoding: 'utf-8'})],
    // rejectUnauthorized: false,
    // requestCert: true,
    // agent: false
  };
}

var thisRequest = formatRequestOptions('127.0.0.1', '/session.php');

/*
var req = https.request({
  host: '192.168.1.1',
  port: 443,
  path: '/',
  method: 'GET'
}, function(res){

  var body = [];
  res.on('data', function(data){
      body.push(data);
  });

  res.on('end', function(){
      console.log( body.join('') );
  });

});
req.end();

req.on('error', function(err){
  console.log(err);
});
*/

/**
 * processRequestResponse
 * @param {*} res
 * @return {void}
 */
function processRequestResponse(res) {
  var body = [];
  console.log(res.headers);
  res.on('data', function(data) {
    body.push(data);
  });

  res.on('end', function() {
    console.log( body.join('') );
  });
}

/**
 * logResponse
 * @param {*} msg
 * @return {void}
 */
function logResponse( msg ) {
  console.log(msg);
}

console.log(thisRequest);
var secondRequest = _http.request(thisRequest, processRequestResponse);
secondRequest.end();
secondRequest.on('error', logResponse);
