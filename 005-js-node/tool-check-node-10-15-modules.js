;

var nodeModules = {};

nodeModules.node10_15 =
`
assert|function
async_hooks|object
buffer|object
child_process|object
cluster|object
console|object
constants|object
crypto|object
dgram|object
dns|object
domain|object
events|function
fs|object
http|object
http2|object
https|object
inspector|undefined
module|function
net|object
os|object
path|object
perf_hooks|object
process|object
punycode|object
querystring|object
readline|object
repl|object
stream|function
string_decoder|object
sys|object|deprecated, use util
timers|object
tls|object
trace_events|object
tty|object
url|object
util|object
v8|object
vm|object
worker_threads|undefined|module not found
zlib|object
`;

// console.log(node_modules.node10_15.split('\n'));

/**
 * eachModule
 * @param {string} str
 * @param {array} arr
 */
function eachModule( str, arr ) {
	 if ( str.trim().length > 0 ) {
	 	 var item = str.split('|')[0];
	 	 var type = str.split('|')[1];
	 	 try {
      nodeModules[item] = require(item);
      console.log( item, type, typeof nodeModules[item] == type );
    } catch ( err ) {
    	 console.log( item, type, err );
    }
  }
}

nodeModules.node10_15.split('\n').forEach(eachModule);

// console.log('timers',nodeModules['timers']);
/*
timers { 
  active: [Function],
  _unrefActive: [Function],
  unenroll: [Function: deprecated],
  enroll: [Function: deprecated],
  setTimeout:
   { [Function: setTimeout] [Symbol(util.promisify.custom)]: [Function] },
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  clearInterval: [Function: clearInterval],
  setImmediate:
   { [Function: setImmediate] [Symbol(util.promisify.custom)]: [Function] },
  clearImmediate: [Function: clearImmediate] 
}
*/

// console.log('tls',nodeModules['tls']);
/*
tls { 
  CLIENT_RENEG_LIMIT: 3,
  CLIENT_RENEG_WINDOW: 600,
  DEFAULT_CIPHERS:
   'ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA256:ECDHE-RSA-AES256-SHA384:DHE-RSA-AES256-SHA384:ECDHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA256:HIGH:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!MD5:!PSK:!SRP:!CAMELLIA',
  DEFAULT_ECDH_CURVE: 'auto',
  getCiphers: [Function],
  convertNPNProtocols: [Function: deprecated],
  convertALPNProtocols: [Function: convertALPNProtocols],
  checkServerIdentity: [Function: checkServerIdentity],
  parseCertString: [Function: deprecated],
  createSecureContext: [Function: createSecureContext],
  SecureContext: [Function: SecureContext],
  TLSSocket:
   { [Function: TLSSocket] super_: { [Function: Socket] super_: [Function] } },
  Server:
   { [Function: Server] super_: { [Function: Server] super_: [Function] } },
  createServer: [Function: createServer],
  connect: [Function: connect],
  createSecurePair: [Function: deprecated] 
}
*/

// console.log('trace_events',nodeModules['trace_events']);
/*
trace_events { 
  createTracing: [Function: createTracing],
  getEnabledCategories: [Function: getEnabledCategories] 
}
*/

// console.log('tty',nodeModules['tty']);
/*
tty { 
  isatty: [Function: isatty],
  ReadStream:
   { [Function: ReadStream] super_: { [Function: Socket] super_: [Function] } },
  WriteStream:
   { [Function: WriteStream] super_: { [Function: Socket] super_: [Function] } }
}
*/

// console.log('url',nodeModules['url']);
/*
url { 
  Url: [Function: Url],
  parse: [Function: urlParse],
  resolve: [Function: urlResolve],
  resolveObject: [Function: urlResolveObject],
  format: [Function: urlFormat],
  URL: [Function: URL],
  URLSearchParams: [Function: URLSearchParams],
  domainToASCII: [Function: domainToASCII],
  domainToUnicode: [Function: domainToUnicode],
  pathToFileURL: [Function: pathToFileURL],
  fileURLToPath: [Function: fileURLToPath]
}
*/

// console.log('util',nodeModules['util']);
/*
util {
  _errnoException: [Function: errnoException],
  _exceptionWithHostPort: [Function: exceptionWithHostPort],
  _extend: [Function: _extend],
  callbackify: [Function: callbackify],
  debuglog: [Function: debuglog],
  deprecate: [Function: deprecate],
  format: [Function: format],
  formatWithOptions: [Function: formatWithOptions],
  getSystemErrorName: [Function: getSystemErrorName],
  inherits: [Function: inherits],
  inspect:
   { [Function: inspect]
     custom: Symbol(nodejs.util.inspect.custom),
     colors:
      { bold: [Array],
        italic: [Array],
        underline: [Array],
        inverse: [Array],
        white: [Array],
        grey: [Array],
        black: [Array],
        blue: [Array],
        cyan: [Array],
        green: [Array],
        magenta: [Array],
        red: [Array],
        yellow: [Array] },
     styles:
      { special: 'cyan',
        number: 'yellow',
        bigint: 'yellow',
        boolean: 'yellow',
        undefined: 'grey',
        null: 'bold',
        string: 'green',
        symbol: 'green',
        date: 'magenta',
        regexp: 'red' } },
  isArray: [Function: isArray],
  isBoolean: [Function: isBoolean],
  isBuffer: [Function: isBuffer],
  isDeepStrictEqual: [Function: isDeepStrictEqual],
  isNull: [Function: isNull],
  isNullOrUndefined: [Function: isNullOrUndefined],
  isNumber: [Function: isNumber],
  isString: [Function: isString],
  isSymbol: [Function: isSymbol],
  isUndefined: [Function: isUndefined],
  isRegExp: [Function: isRegExp],
  isObject: [Function: isObject],
  isDate: [Function: isDate],
  isError: [Function: isError],
  isFunction: [Function: isFunction],
  isPrimitive: [Function: isPrimitive],
  log: [Function: log],
  promisify:
   { [Function: promisify] custom: Symbol(util.promisify.custom) },
  TextDecoder: [Function: TextDecoder],
  TextEncoder: [Function: TextEncoder],
  types:
   { isExternal: [Function: isExternal],
     isDate: [Function: isDate],
     isArgumentsObject: [Function: isArgumentsObject],
     isBigIntObject: [Function: isBigIntObject],
     isBooleanObject: [Function: isBooleanObject],
     isNumberObject: [Function: isNumberObject],
     isStringObject: [Function: isStringObject],
     isSymbolObject: [Function: isSymbolObject],
     isNativeError: [Function: isNativeError],
     isRegExp: [Function: isRegExp],
     isAsyncFunction: [Function: isAsyncFunction],
     isGeneratorFunction: [Function: isGeneratorFunction],
     isGeneratorObject: [Function: isGeneratorObject],
     isPromise: [Function: isPromise],
     isMap: [Function: isMap],
     isSet: [Function: isSet],
     isMapIterator: [Function: isMapIterator],
     isSetIterator: [Function: isSetIterator],
     isWeakMap: [Function: isWeakMap],
     isWeakSet: [Function: isWeakSet],
     isArrayBuffer: [Function: isArrayBuffer],
     isDataView: [Function: isDataView],
     isSharedArrayBuffer: [Function: isSharedArrayBuffer],
     isProxy: [Function: isProxy],
     isWebAssemblyCompiledModule: [Function: isWebAssemblyCompiledModule],
     isModuleNamespaceObject: [Function: isModuleNamespaceObject],
     isAnyArrayBuffer: [Function: isAnyArrayBuffer],
     isBoxedPrimitive: [Function: isBoxedPrimitive],
     isArrayBufferView: [Function: isView],
     isTypedArray: [Function: isTypedArray],
     isUint8Array: [Function: isUint8Array],
     isUint8ClampedArray: [Function: isUint8ClampedArray],
     isUint16Array: [Function: isUint16Array],
     isUint32Array: [Function: isUint32Array],
     isInt8Array: [Function: isInt8Array],
     isInt16Array: [Function: isInt16Array],
     isInt32Array: [Function: isInt32Array],
     isFloat32Array: [Function: isFloat32Array],
     isFloat64Array: [Function: isFloat64Array],
     isBigInt64Array: [Function: isBigInt64Array],
     isBigUint64Array: [Function: isBigUint64Array] },
  debug: [Function: deprecated],
  error: [Function: deprecated],
  print: [Function: deprecated],
  puts: [Function: deprecated] 
}
*/

// console.log('v8',nodeModules['v8']);
/*
v8 { 
  cachedDataVersionTag: [Function: cachedDataVersionTag],
  getHeapStatistics: [Function: getHeapStatistics],
  getHeapSpaceStatistics: [Function: getHeapSpaceStatistics],
  setFlagsFromString: [Function: setFlagsFromString],
  Serializer: [Function: Serializer],
  Deserializer: [Function: Deserializer],
  DefaultSerializer: [Function: DefaultSerializer],
  DefaultDeserializer: [Function: DefaultDeserializer],
  deserialize: [Function: deserialize],
  serialize: [Function: serialize]
}
*/

// console.log('vm',nodeModules['vm']);
/*
vm {
  Script: [Function: Script],
  createContext: [Function: createContext],
  createScript: [Function: createScript],
  runInContext: [Function: runInContext],
  runInNewContext: [Function: runInNewContext],
  runInThisContext: [Function: runInThisContext],
  isContext: [Function: isContext],
  compileFunction: [Function: compileFunction]
}
*/

// console.log('zlib',nodeModules['zlib']);
/*
zlib { 
  Deflate:
   { [Function: Deflate] super_: { [Function: Zlib] super_: [Function] } },
  Inflate:
   { [Function: Inflate] super_: { [Function: Zlib] super_: [Function] } },
  Gzip:
   { [Function: Gzip] super_: { [Function: Zlib] super_: [Function] } },
  Gunzip:
   { [Function: Gunzip] super_: { [Function: Zlib] super_: [Function] } },
  DeflateRaw:
   { [Function: DeflateRaw] super_: { [Function: Zlib] super_: [Function] } },
  InflateRaw:
   { [Function: InflateRaw] super_: { [Function: Zlib] super_: [Function] } },
  Unzip:
   { [Function: Unzip] super_: { [Function: Zlib] super_: [Function] } },
  deflate: [Function: asyncBufferWrapper],
  deflateSync: [Function: syncBufferWrapper],
  gzip: [Function: asyncBufferWrapper],
  gzipSync: [Function: syncBufferWrapper],
  deflateRaw: [Function: asyncBufferWrapper],
  deflateRawSync: [Function: syncBufferWrapper],
  unzip: [Function: asyncBufferWrapper],
  unzipSync: [Function: syncBufferWrapper],
  inflate: [Function: asyncBufferWrapper],
  inflateSync: [Function: syncBufferWrapper],
  gunzip: [Function: asyncBufferWrapper],
  gunzipSync: [Function: syncBufferWrapper],
  inflateRaw: [Function: asyncBufferWrapper],
  inflateRawSync: [Function: syncBufferWrapper],
  createDeflate: [Function: value],
  createInflate: [Function: value],
  createDeflateRaw: [Function: value],
  createInflateRaw: [Function: value],
  createGzip: [Function: value],
  createGunzip: [Function: value],
  createUnzip: [Function: value],
  constants:
   { Z_NO_FLUSH: 0,
     Z_PARTIAL_FLUSH: 1,
     Z_SYNC_FLUSH: 2,
     Z_FULL_FLUSH: 3,
     Z_FINISH: 4,
     Z_BLOCK: 5,
     Z_OK: 0,
     Z_STREAM_END: 1,
     Z_NEED_DICT: 2,
     Z_ERRNO: -1,
     Z_STREAM_ERROR: -2,
     Z_DATA_ERROR: -3,
     Z_MEM_ERROR: -4,
     Z_BUF_ERROR: -5,
     Z_VERSION_ERROR: -6,
     Z_NO_COMPRESSION: 0,
     Z_BEST_SPEED: 1,
     Z_BEST_COMPRESSION: 9,
     Z_DEFAULT_COMPRESSION: -1,
     Z_FILTERED: 1,
     Z_HUFFMAN_ONLY: 2,
     Z_RLE: 3,
     Z_FIXED: 4,
     Z_DEFAULT_STRATEGY: 0,
     ZLIB_VERNUM: 4784,
     DEFLATE: 1,
     INFLATE: 2,
     GZIP: 3,
     GUNZIP: 4,
     DEFLATERAW: 5,
     INFLATERAW: 6,
     UNZIP: 7,
     Z_MIN_WINDOWBITS: 8,
     Z_MAX_WINDOWBITS: 15,
     Z_DEFAULT_WINDOWBITS: 15,
     Z_MIN_CHUNK: 64,
     Z_MAX_CHUNK: Infinity,
     Z_DEFAULT_CHUNK: 16384,
     Z_MIN_MEMLEVEL: 1,
     Z_MAX_MEMLEVEL: 9,
     Z_DEFAULT_MEMLEVEL: 8,
     Z_MIN_LEVEL: -1,
     Z_MAX_LEVEL: 9,
     Z_DEFAULT_LEVEL: -1 },
  codes:
   { '0': 'Z_OK',
     '1': 'Z_STREAM_END',
     '2': 'Z_NEED_DICT',
     Z_OK: 0,
     Z_STREAM_END: 1,
     Z_NEED_DICT: 2,
     Z_ERRNO: -1,
     Z_STREAM_ERROR: -2,
     Z_DATA_ERROR: -3,
     Z_MEM_ERROR: -4,
     Z_BUF_ERROR: -5,
     Z_VERSION_ERROR: -6,
     '-1': 'Z_ERRNO',
     '-2': 'Z_STREAM_ERROR',
     '-3': 'Z_DATA_ERROR',
     '-4': 'Z_MEM_ERROR',
     '-5': 'Z_BUF_ERROR',
     '-6': 'Z_VERSION_ERROR' },
  Z_NO_FLUSH: 0,
  Z_PARTIAL_FLUSH: 1,
  Z_SYNC_FLUSH: 2,
  Z_FULL_FLUSH: 3,
  Z_FINISH: 4,
  Z_BLOCK: 5,
  Z_OK: 0,
  Z_STREAM_END: 1,
  Z_NEED_DICT: 2,
  Z_ERRNO: -1,
  Z_STREAM_ERROR: -2,
  Z_DATA_ERROR: -3,
  Z_MEM_ERROR: -4,
  Z_BUF_ERROR: -5,
  Z_VERSION_ERROR: -6,
  Z_NO_COMPRESSION: 0,
  Z_BEST_SPEED: 1,
  Z_BEST_COMPRESSION: 9,
  Z_DEFAULT_COMPRESSION: -1,
  Z_FILTERED: 1,
  Z_HUFFMAN_ONLY: 2,
  Z_RLE: 3,
  Z_FIXED: 4,
  Z_DEFAULT_STRATEGY: 0,
  ZLIB_VERNUM: 4784,
  DEFLATE: 1,
  INFLATE: 2,
  GZIP: 3,
  GUNZIP: 4,
  DEFLATERAW: 5,
  INFLATERAW: 6,
  UNZIP: 7,
  Z_MIN_WINDOWBITS: 8,
  Z_MAX_WINDOWBITS: 15,
  Z_DEFAULT_WINDOWBITS: 15,
  Z_MIN_CHUNK: 64,
  Z_MAX_CHUNK: Infinity,
  Z_DEFAULT_CHUNK: 16384,
  Z_MIN_MEMLEVEL: 1,
  Z_MAX_MEMLEVEL: 9,
  Z_DEFAULT_MEMLEVEL: 8,
  Z_MIN_LEVEL: -1,
  Z_MAX_LEVEL: 9,
  Z_DEFAULT_LEVEL: -1 
}
*/
