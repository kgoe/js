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
   * @return {*} requestHandler
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

    return requestHandler;
  };

  var theRequest = formatRequest(theHost, thePath);
  var thePromise = new Promise( function thePromiseCallback( resolve ) {
    // console.log(theRequest);
    httpBasicGetResponse(theRequest, resolve);
  });

  return thePromise;
};

/**
 * validateOutput
 * @param {*} input
 * @return {object} output
 */
function valiateHttpOutput( input ) {
  var isHTML = /<(br|basefont|hr|input|source|frame|param|area|meta|!--|col|link|option|base|img|wbr|!DOCTYPE).*?>|<(a|abbr|acronym|address|applet|article|aside|audio|b|bdi|bdo|big|blockquote|body|button|canvas|caption|center|cite|code|colgroup|command|datalist|dd|del|details|dfn|dialog|dir|div|dl|dt|em|embed|fieldset|figcaption|figure|font|footer|form|frameset|head|header|hgroup|h1|h2|h3|h4|h5|h6|html|i|iframe|ins|kbd|keygen|label|legend|li|map|mark|menu|meter|nav|noframes|noscript|object|ol|optgroup|output|p|pre|progress|q|rp|rt|ruby|s|samp|script|section|select|small|span|strike|strong|style|sub|summary|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|track|tt|u|ul|var|video).*?<\/\2>/i.test(input);

  try {
    var isJSON = typeof JSON.parse(input) == 'object' ? true : false;
  } catch ( err ) {
    var isJSON = false;
    console.log('json error', err);
  }

  var output = {
    isHTML: isHTML,
    isJSON: isJSON,
    isStr: typeof input == 'string',
    isNum: typeof input == 'number',
    // body: input,
  };

  console.log(output);
  return output;
}

httpBasicPromise('www.google.com', '/?gws_rd=ssl').then(valiateHttpOutput);
