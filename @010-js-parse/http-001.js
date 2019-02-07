// const http = require('http');
const http = require('https');

/**
 * httpBasicPromise
 * @param {string} theHost
 * @param {string} thePath
 * @return {Promise}
 */
var httpBasicPromise = function httpBasicPromise(theHost, thePath) {
  /**
   * formatRequest
   * @param {*} theHost
   * @param {*} thePath
   * @return {object}
   */
  var formatRequest = function formatRequest(theHost, thePath) {
    var userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36';

    return {
      host: theHost,
      path: thePath,
      headers: {
        'User-Agent': userAgent,
      },
    };
  };

  /**
   * httpBasicGetResponse
   * @param {*} theRequest
   * @param {*} theCallback
   */
  var httpBasicGetResponse = function httpBasicGetResponse(theRequest, theCallback) {
    var requestCallback = function requestCallback(response) {
      var body = '';
      response.on('data', function dataCallback(d) {
        body += d;
      });
      response.on('end', function endCallback() {
        // console.log(body);
        typeof theCallback === 'function' ? theCallback(body) : console.log(body);
      });
    };
    var requestHandler = http.get(theRequest, requestCallback);
  };

  var theRequest = formatRequest(theHost, thePath);
  var thePromise = new Promise( function thePromiseCallback( resolve ) {
    // console.log(theRequest);
    httpBasicGetResponse(theRequest, resolve);
  });

  return thePromise;
};

httpBasicPromise('www.google.com', '/?gws_rd=ssl').then(console.log);
