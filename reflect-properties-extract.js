var customProperty = {
  Object: {
     length: 'number',
     name: 'string',
     prototype: 'object',
     assign: 'function',
     getOwnPropertyDescriptor: 'function',
     getOwnPropertyDescriptors: 'function',
     getOwnPropertyNames: 'function',
     getOwnPropertySymbols: 'function',
     is: 'function',
     preventExtensions: 'function',
     seal: 'function',
     create: 'function',
     defineProperties: 'function',
     defineProperty: 'function',
     freeze: 'function',
     getPrototypeOf: 'function',
     setPrototypeOf: 'function',
     isExtensible: 'function',
     isFrozen: 'function',
     isSealed: 'function',
     keys: 'function',
     entries: 'function',
     values: 'function' },
  Function: { length: 'number', name: 'string', prototype: 'function' },
  Array: 
   { length: 'number',
     name: 'string',
     prototype: 'object',
     isArray: 'function',
     from: 'function',
     of: 'function' },
  Number: 
   { length: 'number',
     name: 'string',
     prototype: 'object',
     isFinite: 'function',
     isInteger: 'function',
     isNaN: 'function',
     isSafeInteger: 'function',
     parseFloat: 'function',
     parseInt: 'function',
     MAX_VALUE: 'number',
     MIN_VALUE: 'number',
     NaN: 'number',
     NEGATIVE_INFINITY: 'number',
     POSITIVE_INFINITY: 'number',
     MAX_SAFE_INTEGER: 'number',
     MIN_SAFE_INTEGER: 'number',
     EPSILON: 'number' },
  parseFloat: { length: 'number', name: 'string' },
  parseInt: { length: 'number', name: 'string' },
  Infinity: {},
  NaN: {},
  undefined: false,
  Boolean: { length: 'number', name: 'string', prototype: 'object' },
  String: {
     length: 'number',
     name: 'string',
     prototype: 'object',
     fromCharCode: 'function',
     fromCodePoint: 'function',
     raw: 'function' },
  Symbol: 
   { length: 'number',
     name: 'string',
     prototype: 'object',
     for: 'function',
     keyFor: 'function',
     hasInstance: 'symbol',
     isConcatSpreadable: 'symbol',
     iterator: 'symbol',
     match: 'symbol',
     replace: 'symbol',
     search: 'symbol',
     species: 'symbol',
     split: 'symbol',
     toPrimitive: 'symbol',
     toStringTag: 'symbol',
     unscopables: 'symbol' },
  Date: 
   { length: 'number',
     name: 'string',
     prototype: 'object',
     now: 'function',
     parse: 'function',
     UTC: 'function' },
  Promise: 
   { length: 'number',
     name: 'string',
     prototype: 'object',
     all: 'function',
     race: 'function',
     resolve: 'function',
     reject: 'function' },
  RegExp: 
   { length: 'number',
     name: 'string',
     prototype: 'object',
     input: 'string',
     '$_': 'string',
     lastMatch: 'string',
     '$&': 'string',
     lastParen: 'string',
     '$+': 'string',
     leftContext: 'string',
     '$`': 'string',
     rightContext: 'string',
     '$\'': 'string',
     '$1': 'string',
     '$2': 'string',
     '$3': 'string',
     '$4': 'string',
     '$5': 'string',
     '$6': 'string',
     '$7': 'string',
     '$8': 'string',
     '$9': 'string' },
  Error: 
   { length: 'number',
     name: 'string',
     prototype: 'object',
     captureStackTrace: 'function',
     stackTraceLimit: 'number' },
  EvalError: { length: 'number', name: 'string', prototype: 'object' },
  RangeError: { length: 'number', name: 'string', prototype: 'object' },
  ReferenceError: { length: 'number', name: 'string', prototype: 'object' },
  SyntaxError: { length: 'number', name: 'string', prototype: 'object' },
  TypeError: { length: 'number', name: 'string', prototype: 'object' },
  URIError: { length: 'number', name: 'string', prototype: 'object' },
  JSON: { parse: 'function', stringify: 'function' },
  Math: 
   { abs: 'function',
     acos: 'function',
     acosh: 'function',
     asin: 'function',
     asinh: 'function',
     atan: 'function',
     atanh: 'function',
     atan2: 'function',
     ceil: 'function',
     cbrt: 'function',
     expm1: 'function',
     clz32: 'function',
     cos: 'function',
     cosh: 'function',
     exp: 'function',
     floor: 'function',
     fround: 'function',
     hypot: 'function',
     imul: 'function',
     log: 'function',
     log1p: 'function',
     log2: 'function',
     log10: 'function',
     max: 'function',
     min: 'function',
     pow: 'function',
     random: 'function',
     round: 'function',
     sign: 'function',
     sin: 'function',
     sinh: 'function',
     sqrt: 'function',
     tan: 'function',
     tanh: 'function',
     trunc: 'function',
     E: 'number',
     LN10: 'number',
     LN2: 'number',
     LOG10E: 'number',
     LOG2E: 'number',
     PI: 'number',
     SQRT1_2: 'number',
     SQRT2: 'number' },
  console: 
   { _stdout: 'object',
     _stderr: 'object',
     _ignoreErrors: 'boolean',
     _times: 'object',
     _stdoutErrorHandler: 'function',
     _stderrErrorHandler: 'function',
     log: 'function',
     info: 'function',
     warn: 'function',
     error: 'function',
     dir: 'function',
     time: 'function',
     timeEnd: 'function',
     trace: 'function',
     assert: 'function',
     clear: 'function',
     count: 'function',
     countReset: 'function',
     group: 'function',
     groupCollapsed: 'function',
     groupEnd: 'function',
     Console: 'function' },
  ArrayBuffer: 
   { length: 'number',
     name: 'string',
     prototype: 'object',
     isView: 'function' },
  Uint8Array: 
   { length: 'number',
     name: 'string',
     prototype: 'object',
     BYTES_PER_ELEMENT: 'number' },
  Int8Array: 
   { length: 'number',
     name: 'string',
     prototype: 'object',
     BYTES_PER_ELEMENT: 'number' },
  Uint16Array: 
   { length: 'number',
     name: 'string',
     prototype: 'object',
     BYTES_PER_ELEMENT: 'number' },
  Int16Array: 
   { length: 'number',
     name: 'string',
     prototype: 'object',
     BYTES_PER_ELEMENT: 'number' },
  Uint32Array: 
   { length: 'number',
     name: 'string',
     prototype: 'object',
     BYTES_PER_ELEMENT: 'number' },
  Int32Array: 
   { length: 'number',
     name: 'string',
     prototype: 'object',
     BYTES_PER_ELEMENT: 'number' },
  Float32Array: 
   { length: 'number',
     name: 'string',
     prototype: 'object',
     BYTES_PER_ELEMENT: 'number' },
  Float64Array: 
   { length: 'number',
     name: 'string',
     prototype: 'object',
     BYTES_PER_ELEMENT: 'number' },
  Uint8ClampedArray: 
   { length: 'number',
     name: 'string',
     prototype: 'object',
     BYTES_PER_ELEMENT: 'number' },
  DataView: { length: 'number', name: 'string', prototype: 'object' },
  Map: { length: 'number', name: 'string', prototype: 'object' },
  Set: { length: 'number', name: 'string', prototype: 'object' },
  WeakMap: { length: 'number', name: 'string', prototype: 'object' },
  WeakSet: { length: 'number', name: 'string', prototype: 'object' },
  Proxy: 
   { length: 'number',
     name: 'string',
     arguments: 'object',
     caller: 'object',
     revocable: 'function' },
  Reflect: 
   { defineProperty: 'function',
     deleteProperty: 'function',
     apply: 'function',
     construct: 'function',
     get: 'function',
     getOwnPropertyDescriptor: 'function',
     getPrototypeOf: 'function',
     has: 'function',
     isExtensible: 'function',
     ownKeys: 'function',
     preventExtensions: 'function',
     set: 'function',
     setPrototypeOf: 'function' },
  decodeURI: { length: 'number', name: 'string' },
  decodeURIComponent: { length: 'number', name: 'string' },
  encodeURI: { length: 'number', name: 'string' },
  encodeURIComponent: { length: 'number', name: 'string' },
  escape: { length: 'number', name: 'string' },
  unescape: { length: 'number', name: 'string' },
  eval: { length: 'number', name: 'string' },
  isFinite: { length: 'number', name: 'string' },
  isNaN: { length: 'number', name: 'string' },
  WebAssembly: 
   { compile: 'function',
     validate: 'function',
     instantiate: 'function',
     Module: 'function',
     Instance: 'function',
     Table: 'function',
     Memory: 'function',
     CompileError: 'function',
     LinkError: 'function',
     RuntimeError: 'function' },
  global: 
   { Object: 'function',
     Function: 'function',
     Array: 'function',
     Number: 'function',
     parseFloat: 'function',
     parseInt: 'function',
     Infinity: 'number',
     NaN: 'number',
     undefined: 'undefined',
     Boolean: 'function',
     String: 'function',
     Symbol: 'function',
     Date: 'function',
     Promise: 'function',
     RegExp: 'function',
     Error: 'function',
     EvalError: 'function',
     RangeError: 'function',
     ReferenceError: 'function',
     SyntaxError: 'function',
     TypeError: 'function',
     URIError: 'function',
     JSON: 'object',
     Math: 'object',
     console: 'object',
     ArrayBuffer: 'function',
     Uint8Array: 'function',
     Int8Array: 'function',
     Uint16Array: 'function',
     Int16Array: 'function',
     Uint32Array: 'function',
     Int32Array: 'function',
     Float32Array: 'function',
     Float64Array: 'function',
     Uint8ClampedArray: 'function',
     DataView: 'function',
     Map: 'function',
     Set: 'function',
     WeakMap: 'function',
     WeakSet: 'function',
     Proxy: 'function',
     Reflect: 'object',
     decodeURI: 'function',
     decodeURIComponent: 'function',
     encodeURI: 'function',
     encodeURIComponent: 'function',
     escape: 'function',
     unescape: 'function',
     eval: 'function',
     isFinite: 'function',
     isNaN: 'function',
     WebAssembly: 'object',
     global: 'object',
     process: 'object',
     GLOBAL: 'object',
     root: 'object',
     Buffer: 'function',
     clearImmediate: 'function',
     clearInterval: 'function',
     clearTimeout: 'function',
     setImmediate: 'function',
     setInterval: 'function',
     setTimeout: 'function',
     props: 'object',
     propsPrototype: 'object',
     propsProto: 'object',
     cc: 'number' },
  process: 
   { title: 'string',
     version: 'string',
     moduleLoadList: 'object',
     versions: 'object',
     _promiseRejectEvent: 'object',
     arch: 'string',
     platform: 'string',
     release: 'object',
     argv: 'object',
     execArgv: 'object',
     env: 'object',
     pid: 'number',
     features: 'object',
     _needImmediateCallback: 'boolean',
     execPath: 'string',
     debugPort: 'number',
     _startProfilerIdleNotifier: 'function',
     _stopProfilerIdleNotifier: 'function',
     _getActiveRequests: 'function',
     _getActiveHandles: 'function',
     reallyExit: 'function',
     abort: 'function',
     chdir: 'function',
     cwd: 'function',
     umask: 'function',
     _kill: 'function',
     _debugProcess: 'function',
     _debugPause: 'function',
     _debugEnd: 'function',
     hrtime: 'function',
     cpuUsage: 'function',
     dlopen: 'function',
     uptime: 'function',
     memoryUsage: 'function',
     binding: 'function',
     _linkedBinding: 'function',
     _setupDomainUse: 'function',
     _events: 'object',
     _rawDebug: 'function',
     _eventsCount: 'number',
     domain: 'object',
     _maxListeners: 'undefined',
     _fatalException: 'function',
     _exiting: 'boolean',
     assert: 'function',
     config: 'object',
     emitWarning: 'function',
     nextTick: 'function',
     _tickCallback: 'function',
     _tickDomainCallback: 'function',
     stdout: 'object',
     stderr: 'object',
     stdin: 'object',
     openStdin: 'function',
     exit: 'function',
     kill: 'function',
     argv0: 'string',
     mainModule: 'object' },
  GLOBAL: 
   { Object: 'function',
     Function: 'function',
     Array: 'function',
     Number: 'function',
     parseFloat: 'function',
     parseInt: 'function',
     Infinity: 'number',
     NaN: 'number',
     undefined: 'undefined',
     Boolean: 'function',
     String: 'function',
     Symbol: 'function',
     Date: 'function',
     Promise: 'function',
     RegExp: 'function',
     Error: 'function',
     EvalError: 'function',
     RangeError: 'function',
     ReferenceError: 'function',
     SyntaxError: 'function',
     TypeError: 'function',
     URIError: 'function',
     JSON: 'object',
     Math: 'object',
     console: 'object',
     ArrayBuffer: 'function',
     Uint8Array: 'function',
     Int8Array: 'function',
     Uint16Array: 'function',
     Int16Array: 'function',
     Uint32Array: 'function',
     Int32Array: 'function',
     Float32Array: 'function',
     Float64Array: 'function',
     Uint8ClampedArray: 'function',
     DataView: 'function',
     Map: 'function',
     Set: 'function',
     WeakMap: 'function',
     WeakSet: 'function',
     Proxy: 'function',
     Reflect: 'object',
     decodeURI: 'function',
     decodeURIComponent: 'function',
     encodeURI: 'function',
     encodeURIComponent: 'function',
     escape: 'function',
     unescape: 'function',
     eval: 'function',
     isFinite: 'function',
     isNaN: 'function',
     WebAssembly: 'object',
     global: 'object',
     process: 'object',
     GLOBAL: 'object',
     root: 'object',
     Buffer: 'function',
     clearImmediate: 'function',
     clearInterval: 'function',
     clearTimeout: 'function',
     setImmediate: 'function',
     setInterval: 'function',
     setTimeout: 'function',
     props: 'object',
     propsPrototype: 'object',
     propsProto: 'object',
     cc: 'number' },
  root: 
   { Object: 'function',
     Function: 'function',
     Array: 'function',
     Number: 'function',
     parseFloat: 'function',
     parseInt: 'function',
     Infinity: 'number',
     NaN: 'number',
     undefined: 'undefined',
     Boolean: 'function',
     String: 'function',
     Symbol: 'function',
     Date: 'function',
     Promise: 'function',
     RegExp: 'function',
     Error: 'function',
     EvalError: 'function',
     RangeError: 'function',
     ReferenceError: 'function',
     SyntaxError: 'function',
     TypeError: 'function',
     URIError: 'function',
     JSON: 'object',
     Math: 'object',
     console: 'object',
     ArrayBuffer: 'function',
     Uint8Array: 'function',
     Int8Array: 'function',
     Uint16Array: 'function',
     Int16Array: 'function',
     Uint32Array: 'function',
     Int32Array: 'function',
     Float32Array: 'function',
     Float64Array: 'function',
     Uint8ClampedArray: 'function',
     DataView: 'function',
     Map: 'function',
     Set: 'function',
     WeakMap: 'function',
     WeakSet: 'function',
     Proxy: 'function',
     Reflect: 'object',
     decodeURI: 'function',
     decodeURIComponent: 'function',
     encodeURI: 'function',
     encodeURIComponent: 'function',
     escape: 'function',
     unescape: 'function',
     eval: 'function',
     isFinite: 'function',
     isNaN: 'function',
     WebAssembly: 'object',
     global: 'object',
     process: 'object',
     GLOBAL: 'object',
     root: 'object',
     Buffer: 'function',
     clearImmediate: 'function',
     clearInterval: 'function',
     clearTimeout: 'function',
     setImmediate: 'function',
     setInterval: 'function',
     setTimeout: 'function',
     props: 'object',
     propsPrototype: 'object',
     propsProto: 'object',
     cc: 'number' },
  Buffer: 
   { length: 'number',
     name: 'string',
     prototype: 'object',
     poolSize: 'number',
     from: 'function',
     alloc: 'function',
     allocUnsafe: 'function',
     allocUnsafeSlow: 'function',
     isBuffer: 'function',
     compare: 'function',
     isEncoding: 'function',
     concat: 'function',
     byteLength: 'function' },
  clearImmediate: { length: 'number', name: 'string', prototype: 'object' },
  clearInterval: { length: 'number', name: 'string', prototype: 'object' },
  clearTimeout: { length: 'number', name: 'string', prototype: 'object' },
  setImmediate: { length: 'number', name: 'string', prototype: 'object' },
  setInterval: { length: 'number', name: 'string', prototype: 'object' },
  setTimeout: { length: 'number', name: 'string', prototype: 'object' 
  }
}

var customProto = {
  constructor: {
     length: 'number',
     name: 'string',
     prototype: 'object',
     assign: 'function',
     getOwnPropertyDescriptor: 'function',
     getOwnPropertyDescriptors: 'function',
     getOwnPropertyNames: 'function',
     getOwnPropertySymbols: 'function',
     is: 'function',
     preventExtensions: 'function',
     seal: 'function',
     create: 'function',
     defineProperties: 'function',
     defineProperty: 'function',
     freeze: 'function',
     getPrototypeOf: 'function',
     setPrototypeOf: 'function',
     isExtensible: 'function',
     isFrozen: 'function',
     isSealed: 'function',
     keys: 'function',
     entries: 'function',
     values: 'function' 
  }
}