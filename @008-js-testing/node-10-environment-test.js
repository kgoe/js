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
worker_threads
zlib
`;

describe('node modules test', function() {
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
