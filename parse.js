const http = require('http');

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

const fmtHost = function fmtHost( hostName, hostPath ) {
  var theObj = {};
	 theObj.host = hostName;
	 theObj.path = hostPath;
	 return theObj;
};

const httpGet = function httpGet( httpOption, responseCallback ) {
  http.get( httpOption, function httpExecGet( res, req ) {
    var responseText = "";
    
    res.on('data', function onData( response ){
      responseText += response;
    });
    
    res.on('end', function onEnd( response ) {
      responseCallback( responseText );
    });
  });
};

httpGet( fmtHost("www.google.com","/"), console.log);
