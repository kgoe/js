var properties_javascript_core = (function thisModule(){

;doc={};


// reference :
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects


doc.template=
[
`
`
];


doc.valueProp=
[
`
Infinity|number
NaN|number
undefined|undefined
null|object
`
];


doc.funcProp=
[
`
eval|function
uneval|undefined
isFinite|function
isNaN|function
parseFloat|function
parseInt|function
decodeURI|function
decodeURIComponent|function
encodeURI|function
encodeURIComponent|function
escape|function
unescape|function
`
];


doc.fundamentalObjects=
[
`
Object|function
Function|function
Boolean|function
Symbol|function
Error|function
EvalError|function
InternalError|function
RangeError|function
ReferenceError|function
SyntaxError|function
TypeError|function
URIError|function
`
];


doc.numbersDates=
[
`
Number|function
BigInt|function
Math|object
Date|function
`
];


doc.textProcessing=
[
`
String|function
RegExp|function
`
];


doc.indexedCollections =
[
`
Array|function
Int8Array|function
Uint8Array|function
Uint8ClampedArray|function
Int16Array|function
Uint16Array|function
Int32Array|function
Uint32Array|function
Float32Array|function
Float64Array|function
`
];


doc.keyedCollections =
[
`
Map|function
Set|function
WeakMap|function
WeakSet|function
`
];


doc.structuredData =
[
`
ArrayBuffer|function
SharedArrayBuffer|function
Atomics|object
DataView|function
JSON|object
`
];


doc.controlAbstraction =
[
`
Promise|function
Generator|function
GeneratorFunction|function
AsyncFunction|function
`
];


doc.reflection =
[
`
Reflect|object
Proxy|function
`
];


doc.intl =
[
`
Intl|object
Intl.Collarot|object|no browser node
Intl.DateTimeFormat|function
Intl.NumberFormat|function
Intl.PluralRules|function
Intl.RelativeTimeFormat|object|no browser node
`
];


doc.webassembly =
[
`
WebAssembly|object
WebAssembly.Module|function
WebAssembly.Instance|function
WebAssembly.Memory|function
WebAssembly.Table|function
WebAssembly.CompileError|function
WebAssembly.LinkError|function
WebAssembly.RuntimeError|function
`
];


doc.arguments =
[
`
arguments|object
`
];


doc.node_global =
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
global|object|no browser|no browser
process|object|no browser|no browser
GLOBAL|object|no browser|no browser
root|object|no browser|no browser
Buffer|function|no browser|no browser
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

var output = properties_javascript_core;
function main() {
  console.log('main')
}

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
    if ( typeof main == 'function' ) {
      main();
    }
  } else {
    console.log('LOADED : node-module', __filename);
    module.exports = output;
  }
};
