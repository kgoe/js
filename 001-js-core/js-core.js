var log = console.log;
var root = typeof global !== 'undefined' ? global : window;

function getDetails( input ) {
  console.log(input, typeof global[input])
}

// Value Properties
getDetails('Infinity');
getDetails('NaN');
getDetails('undefined');
getDetails('null');

// Function Properties
getDetails('eval');
getDetails('uneval');
getDetails('isFinite');
getDetails('isNaN');
getDetails('parseFloat');
getDetails('parseInt');
getDetails('decodeURI');
getDetails('decodeURIComponent');
getDetails('encodeURI');
getDetails('encodeURIComponent');
getDetails('escape');
getDetails('unescape');

// Fundamental Objects
getDetails('Object');
getDetails('Function');
getDetails('Boolean');
getDetails('Symbol');
getDetails('Error');
getDetails('EvalError');
getDetails('InternalError');
getDetails('RangeError');
getDetails('ReferenceError');
getDetails('SyntaxError');
getDetails('TypeError');
getDetails('URIError');

// Numbers and Dates
getDetails('Number');
getDetails('Math');
getDetails('Date');

// Text Processing
getDetails('String');
getDetails('RegExp');

// Indexed Collection
getDetails('Array');
getDetails('Int8Array');
getDetails('Uint8Array');
getDetails('Uint8ClampedArray');
getDetails('Int16Array');
getDetails('Uint16Array');
getDetails('Int32Array');
getDetails('Uint32Array');
getDetails('Float32Array');
getDetails('Float64Array');

// Keyed Collection
getDetails('Map');
getDetails('Set');
getDetails('WeakMap');
getDetails('WeakSet');

// Structured Data
getDetails('ArrayBuffer');
getDetails('SharedArrayBuffer');
getDetails('Atomics');
getDetails('DataView');
getDetails('JSON');

// Conrol Abstraction
getDetails('Promise');
getDetails('Generator');
getDetails('GeneratorFunction');
getDetails('AsyncFunction');

// Reflection
getDetails('Reflect');
getDetails('Proxy');

// Internationalization
getDetails('Intl');

// WebAssembly
getDetails('WebAssembly');

(function(){
  getDetails('arguments');
})();