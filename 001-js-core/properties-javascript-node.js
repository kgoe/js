;

var doc = {};

doc.node_global =
`
Object|function
Function|function
Array|function
Number|function
parseFloat|function
parseInt|function
Infinity|number
NaN|number
undefined|undefined
Boolean|function
String|function
Symbol|function
Date|function
Promise|function
RegExp|function
Error|function
EvalError|function
RangeError|function
ReferenceError|function
SyntaxError|function
TypeError|function
URIError|function
JSON|object
Math|object
console|object
ArrayBuffer|function
Uint8Array|function
Int8Array|function
Uint16Array|function
Int16Array|function
Uint32Array|function
Int32Array|function
Float32Array|function
Float64Array|function
Uint8ClampedArray|function
DataView|function
Map|function
Set|function
WeakMap|function
WeakSet|function
Proxy|function
Reflect|object
decodeURI|function
decodeURIComponent|function
encodeURI|function
encodeURIComponent|function
escape|function
unescape|function
eval|function
isFinite|function
isNaN|function
WebAssembly|object
global|object
process|object
GLOBAL|object
root|object
Buffer|function
clearImmediate|function
clearInterval|function
clearTimeout|function
setImmediate|function
setInterval|function
setTimeout|function
`;

// End
if ( typeof global !== 'undefined' ) {
  if ( typeof module !== 'undefined'
    && typeof require !== 'undefined'
    && typeof require.main !== 'undefined'
    && typeof module.exports !== 'undefined'
    && require.main === module
  ) {
    console.log('LOADED : node', __filename);
    console.log('script running itself');
  } else {
    console.log('LOADED : node-module', __filename);
    module.exports = doc;
  }
};
