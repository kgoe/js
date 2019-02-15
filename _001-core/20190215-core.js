;

var doc = {};

doc.valueProp =
`
Infinity|number
NaN|number
undefined|undefined
null|undefined
`;

doc.funcProp =
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
`;

doc.fundamentalObjects =
`
Object|function
Function|function
Boolean|function
Symbol|function
Error|function
EvalError|function
InternalError|undefined
RangeError|function
ReferenceError|function
SyntaxError|function
TypeError|function
URIError|function
`;

doc.numbersDates =
`
Number|function
Math|object
Date|function
`;

doc.textProcessing =
`
String|function
RegExp|function
`;

doc.indexedCollections =
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
`;

doc.keyedCollections =
`
Map|function
Set|function
WeakMap|function
WeakSet|function
`;

doc.controlAbstraction =
`
Promise|function
Generator|undefined
GeneratorFunction|undefined
AsyncFunction|undefined
`;

doc.reflection =
`
Reflect|object
Proxy|function
`;

doc.intl =
`
Intl|object
`;

doc.webassembly =
`
WebAssembly|object
`;

doc.arguments =
`
arguments|object
`;

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
Reflect|function
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

if ( typeof module !== 'undefined' ) {
  module.exports = doc;
}