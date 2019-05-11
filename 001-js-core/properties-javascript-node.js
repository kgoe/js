var properties_javascript_node = (function thisModule(){


;doc={};


doc.template=
[
`
`
];


doc.node_global=
[
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
global|object|no browser
process|object|no browser
GLOBAL|object|no browser
root|object|no browser
Buffer|function|no browser
clearImmediate|function|no browser
clearInterval|function
clearTimeout|function
setImmediate|function|no browser
setInterval|function
setTimeout|function
`
];

return doc;

})();

var output = properties_javascript_node;

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
    module.exports = output;
  }
};
