var eventCC = 0;
console.log('SCRIPT START', eventCC);

setInterval(function() {
  eventCC = eventCC + 1;
});
var theOutput = (function iifeEnvDetect() {
  var output = false;
  if ( typeof global !== 'undefined' && typeof module !== 'undefined' && typeof require !== 'undefined' ) {
    if ( require.main === module ) {
      output = 'node';
    } else {
      output = 'node-module';
    }
  }

  if ( typeof window !== 'undefined' && typeof document !== 'undefined' ) {
    output = 'browser';
    if ( typeof require === 'undefined' ) {
      // require = function( value ) { console.log("%c TO REQUIRE : " + value,"color: ##FF0000;"); }
      require = function( value ) {
        console.log('TO REQUIRE : ' + value);
      };
    }
  }
  return output;
})();

var filename = typeof __filename !== 'undefined' ? __filename : 'browser';

console.log(theOutput, filename, eventCC);

var log = console.log;

var rdom = require('./reflect-properties.js');
rdom.prop = Object.getOwnPropertyNames;

// log(rdom.prop(String.prototype));

function getPropType( val ) {
  var prop = Object.getOwnPropertyNames( val );
  var ll = prop.length;
  var output = {};
  for ( cc = 0; cc < ll; cc++ ) {
    try {
      output[prop[cc]] = typeof val[prop[cc]];
    } catch ( err ) {
    	 console.log( err, prop[cc]);
    	 output[prop[cc]] = false;
    }
  }
  return output;
}

log(Object.__proto__ == Function.__proto__);
log(Object.__proto__ == Number.__proto__);
log(Object.__proto__ == String.__proto__);
log(Object.__proto__ == Boolean.__proto__);
log(Object.__proto__ == Array.__proto__);
log(Object.__proto__ == Error.__proto__);
log(Object.__proto__ == eval.__proto__);

function fnfn(a, b, c, d) {
	 var one = 1;
	 return one;
}

// log(getPropType(fnfn));

// get function signature
log(fnfn.toString().split('\n')[0]);

var functionLiteralProperties = {
  length: 'number',
  name: 'string',
  arguments: 'object',
  caller: 'object',
  prototype: 'object',
};

function reflectGlobalPropertyTree() {
  var theRoot = typeof global != 'undefined' ? global : window;
  props = Object.getOwnPropertyNames( theRoot || {} );
  propsPrototype = Object.getOwnPropertyNames( theRoot || {} );
  propsProto = Object.getOwnPropertyNames( theRoot || {});
  var theOutput = {};
  var theOutputPrototype = {};
  var theOutputProto = {};

  for ( var cd = 0; cd < props.length; cd++ ) {
    try {
      theOutput[props[cd]] = getPropType(theRoot[props[cd]]);
    } catch ( err ) {
      console.log(err);
      theOutput[props[cd]] = false;
      continue;
    }
  }

  for ( var cd1 = 0; cd1 < propsPrototype.length; cd1++ ) {
    try {
      theOutputPrototype[propsPrototype[cd1]] = getPropType(theRoot[propsPrototype[cd1]].prototype);
    } catch ( err ) {
      console.log(err);
      theOutputPrototype[propsPrototype[cd1]] = false;
      continue;
    }
  }

  for ( var cd = 0; cd < propsProto.length; cd++ ) {
    try {
      theOutputProto[propsProto[cd]] = getPropType(theRoot[propsProto[cd]].__proto__);
    } catch ( err ) {
      console.log(err);
      theOutputProto[propsProto[cd]] = false;
      continue;
    }
  }

  // console.log(theOutput);
  // console.log(theOutputPrototype);
  // console.log(theOutputProto);

  // return theOutput;
}

// reflectGlobalPropertyTree();

var arrayTypes = [
  'Object',
  'Function',
  'Array',
  'Number',
  'parseFloat',
  'parseInt',
  'Infinity',
  'NaN',
  'undefined',
  'Boolean',
  'String',
  'Symbol',
  'Date',
  'Promise',
  'RegExp',
  'Error',
  'EvalError',
  'RangeError',
  'ReferenceError',
  'SyntaxError',
  'TypeError',
  'URIError',
  'JSON',
  'Math',
  'console',
  'ArrayBuffer',
  'Uint8Array',
  'Int8Array',
  'Uint16Array',
  'Int16Array',
  'Uint32Array',
  'Int32Array',
  'Float32Array',
  'Float64Array',
  'Uint8ClampedArray',
  'DataView',
  'Map',
  'Set',
  'WeakMap',
  'WeakSet',
  'Proxy',
  'Reflect',
  'decodeURI',
  'decodeURIComponent',
  'encodeURI',
  'encodeURIComponent',
  'escape',
  'unescape',
  'eval',
  'isFinite',
  'isNaN',
  'WebAssembly',
  'global',
  'process',
  'GLOBAL',
  'root',
  'Buffer',
  'clearImmediate',
  'clearInterval',
  'clearTimeout',
  'setImmediate',
  'setInterval',
  'setTimeout',
];

// arrayTypes.forEach(function( value ){
//  log( value,global[value].__proto__ == Object.__proto__,eventCC);
// });

setTimeout(function() {
  console.log('T', eventCC);
}, 1000);

// log(JSON.stringify(getGlobalPropertyTree()));

console.log('SCRIPT END', eventCC);
