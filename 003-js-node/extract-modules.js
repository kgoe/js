var nmod = require("module");

// Built In Modules : node.js 9.3.0 +
if ( typeof nmod !== 'undefined' ) {
  // var output = require("module").builtinModules;
  var output = require('repl')._builtinLibs;
  console.log(JSON.stringify(output));
};