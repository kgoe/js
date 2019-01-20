;

var doc = {};
var log = console.log;
var root = typeof global !== 'undefined' ? global : window;

var doc.valueProperties =
`
Infinity
NaN
undefined
null
`;

doc.functiobProperties =
`
eval
uneval
isFinite
isNaN
`;

// Function Properties
printDetails('eval');
printDetails('uneval');
printDetails('isFinite');
printDetails('isNaN');
printDetails('parseFloat');
printDetails('parseInt');
printDetails('decodeURI');
printDetails('decodeURIComponent');
printDetails('encodeURI');
printDetails('encodeURIComponent');
printDetails('escape');
printDetails('unescape');

// Fundamental Objects
printDetails('Object');
printDetails('Function');
printDetails('Boolean');
printDetails('Symbol');
printDetails('Error');
printDetails('EvalError');
printDetails('InternalError');
printDetails('RangeError');
printDetails('ReferenceError');
printDetails('SyntaxError');
printDetails('TypeError');
printDetails('URIError');

// Numbers and Dates
printDetails('Number');
printDetails('Math');
printDetails('Date');

// Text Processing
printDetails('String');
printDetails('RegExp');

// Indexed Collection
printDetails('Array');
printDetails('Int8Array');
printDetails('Uint8Array');
printDetails('Uint8ClampedArray');
printDetails('Int16Array');
printDetails('Uint16Array');
printDetails('Int32Array');
printDetails('Uint32Array');
printDetails('Float32Array');
printDetails('Float64Array');

// Keyed Collection
printDetails('Map');
printDetails('Set');
printDetails('WeakMap');
printDetails('WeakSet');

// Structured Data
printDetails('ArrayBuffer');
printDetails('SharedArrayBuffer');
printDetails('Atomics');
printDetails('DataView');
printDetails('JSON');

// Conrol Abstraction
printDetails('Promise');
printDetails('Generator');
printDetails('GeneratorFunction');
printDetails('AsyncFunction');

// Reflection
printDetails('Reflect');
printDetails('Proxy');

// Internationalization
printDetails('Intl');

// WebAssembly
printDetails('WebAssembly');

(function() {
  printDetails('arguments');
})();
