;

const fs = require('fs');
const emmet = require('emmet');
// const kutility = require('./utility/utility.js');
// const kcheck = require('./999-project/tool-project-checker.js');

var html1 = emmet.expandAbbreviation('html>(head>(title))+(body>(header{test}+main{test}+footer{test}))');
// console.log(html1.replace(/\$\{0\}/g,''));

// puppeteer : android : platform not supported
// const m1 = require('./009-frontend/tool-emmet-puppeteer-001.js');
// console.log(kutility);

var node_modules = {};

node_modules.node10_15 =
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
sys|object
timers|object
tls|object
trace_events|undefined
tty|object
url|object
util|object
v8|object
vm|object
worker_threads|object
zlib|object
`;

// console.log(node_modules.node10_15.split('\n'));

function eachModule( str, arr ) {
	 if ( str.trim().length > 0 ) {
	 	 var item = str.split('|')[0];
	 	 var type = str.split('|')[1];
	 	 try {
      node_modules[item] = require(item);
      console.log( item, type, typeof node_modules[item] == type );
    } catch ( err ) {
    	 console.log( item, type, err );
    }
  }
}

node_modules.node10_15.split('\n').forEach(eachModule);
