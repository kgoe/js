;

var global_props = Object.getOwnPropertyNames(typeof global !== 'undefined' ? global : window);

// console.log(JSON.stringify(global_props));

var nodeModules = {};

nodeModules.globals =
`
Object
Function
Array
Number
parseFloat
parseInt
Infinity
NaN
undefined
Boolean
String
Symbol
Date
Promise
RegExp
Error
EvalError
RangeError
ReferenceError
SyntaxError
TypeError
URIError
JSON
Math
console
Intl
ArrayBuffer
Uint8Array
Int8Array
Uint16Array
Int16Array
Uint32Array
Int32Array
Float32Array
Float64Array
Uint8ClampedArray
BigUint64Array
BigInt64Array
DataView
Map
Set
WeakMap
WeakSet
Proxy
Reflect
decodeURI
decodeURIComponent
encodeURI
encodeURIComponent
escape
unescape
eval
isFinite
isNaN
SharedArrayBuffer
Atomics
BigInt
WebAssembly
DTRACE_NET_SERVER_CONNECTION
DTRACE_NET_STREAM_END
DTRACE_HTTP_SERVER_REQUEST
DTRACE_HTTP_SERVER_RESPONSE
DTRACE_HTTP_CLIENT_REQUEST
DTRACE_HTTP_CLIENT_RESPONSE
COUNTER_NET_SERVER_CONNECTION
COUNTER_NET_SERVER_CONNECTION_CLOSE
COUNTER_HTTP_SERVER_REQUEST
COUNTER_HTTP_SERVER_RESPONSE
COUNTER_HTTP_CLIENT_REQUEST
COUNTER_HTTP_CLIENT_RESPONSE
global
process
GLOBAL
root
Buffer
clearImmediate
clearInterval
clearTimeout
setImmediate
setInterval
setTimeout
URL
URLSearchParams
fs
path
`;

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
inspector|object
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
