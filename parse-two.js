const _http = require('https');
const _cher = require('cheerio');
const _lg = console.log;
const log = console.log;

const _jsdom = require('jsdom');
const { JSDOM } = _jsdom;

const fmtHost = function fmtHost( hostName, hostPath ) {
  var theObj = {};
	 theObj.host = hostName;
	 theObj.path = hostPath;
	 return theObj;
};

const httpGet = function httpGet( httpOption, responseCallback ) {
  _http.get( httpOption, function httpExecGet( res, req ) {
    var responseText = "";
    
    res.on('data', function onData( response ){
      responseText += response;
    });
    
    res.on('end', function onEnd( response ) {
      responseCallback( responseText );
    });
  });
};

const responseParse = function responseParse( res ) {
	 var $$ = _cher.load(res);
	 var $$body = $$('body')
  _lg($$.html());
};

// log(Object.getOwnPropertyNames(global));
//*
var checkNodeGLobalProperties = [
  'Object',
  'Function',
  'Array',
  'Number',
  'parseFloat',
  'parseInt',
  'Infinity',
  'NaN',
  'undefined',
  'Boolean',
  'String',
  'Symbol',
  'Date',
  'Promise',
  'RegExp',
  'Error',
  'EvalError',
  'RangeError',
  'ReferenceError',
  'SyntaxError',
  'TypeError',
  'URIError',
  'JSON',
  'Math',
  'console',
  'ArrayBuffer',
  'Uint8Array',
  'Int8Array',
  'Uint16Array',
  'Int16Array',
  'Uint32Array',
  'Int32Array',
  'Float32Array',
  'Float64Array',
  'Uint8ClampedArray',
  'DataView',
  'Map',
  'Set',
  'WeakMap',
  'WeakSet',
  'Proxy',
  'Reflect',
  'decodeURI',
  'decodeURIComponent',
  'encodeURI',
  'encodeURIComponent',
  'escape',
  'unescape',
  'eval',
  'isFinite',
  'isNaN',
  'WebAssembly',
  'global',
  'process',
  'GLOBAL',
  'root',
  'Buffer',
  'clearImmediate',
  'clearInterval',
  'clearTimeout',
  'setImmediate',
  'setInterval',
  'setTimeout' ];
//*/

//httpGet( fmtHost("www.pse.com.ph","/stockMarket/home.html"), responseParse);
//httpGet( fmtHost("www.pse.com.ph","/stockMarket/marketInfo-marketActivity.html?tab=1&indexName=PSEi"), responseParse);
//httpGet( fmtHost("www.pse.com.ph","/stockMarket/marketInfo-marketActivity-indicesComposition.html?method=viewIndicesComposition&ajax=true&indexName=PSEi"), responseParse);

//_lg(_cher.load());				
//url: 'marketInfo-marketActivity-indicesComposition.html?method=viewIndicesComposition',
//params: '&ajax=true&indexName=PSEi',

// https://m.investing.com/indices/psei-composite
// https://m.investing.com/indices/psei-composite-components

