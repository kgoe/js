;

var assert = require('assert');

var nodeModuleList =
`
assert
async_hooks
buffer
child_process
cluster
console
constants
crypto
dgram
dns
domain
events
fs
http
http2
https
inspector
module
net
os
path
perf_hooks
process
punycode
querystring
readline
repl
stream
string_decoder
sys
timers
tls
trace_events
tty
url
util
v8
vm
zlib
`;

var nodeModuleError =
`
worker_threads | node 11.x +
`;

var nodeGlobalPropertiesList =
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
`;

describe('node modules group', function() {
  nodeModuleList.split('\n').forEach((item)=>{
    if ( item.length > 0 ) {
      var thisModule = undefined;
      try {
        thisModule = require(item.trim().toString());
      } catch ( err ) {
        console.log('error', err);
      }
      it('node module ' + item, function() {
        assert.ok(typeof thisModule !== 'undefined');
      });
    }
  });
});

describe('node properties group', function() {
  nodeGlobalPropertiesList.split('\n').forEach((item)=>{
    if ( item.length > 0 ) {
      it('node property ' + item, function() {
        if ( item !== 'undefined' ) {
          assert.ok(typeof global[item.trim().toString()] !== 'undefined');
        } else {
          assert.ok(typeof global[item.trim().toString()] == 'undefined');
        }
        
      });
    }
  });
});
