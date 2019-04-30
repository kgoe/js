;doc={};


doc.template=
[
`
`
];


/**
 * getGlobalRoot
 * @return {object}
 */
function getGlobalRoot() {
  var output = false;
  output = typeof global !== 'undefined' ?
    global : typeof window !== 'undefined' ?
    window : false;
  return output;
}

/**
 * checkTypeRoot
 * @param {string} value
 * @return {string}
 */
function checkTypeRoot( value ) {
  var root = typeof global !== 'undefined' ? global : window;
  value = value.split('|');
  return typeof root[value[0]];
}

/**
 * splitTemplateVariables
 * @param {string} text
 * @return {array}
 */
function splitTemplateVariables( text ) {
  return text.split('\n').filter((item)=>{
    return item.length > 0;
  });
}

/**
 * checkEachStringList
 * @param {*} input
 * @return {object}
 */
function checkEachStringList( input ) {
  var theArray = input.split('\n');
  var len = theArray.length;
  var set = [];
  var unset = [];

  for ( itemCnt = 0; itemCnt < len; itemCnt ++ ) {
    var theItem = theArray[itemCnt];
    if ( theItem == '' ) {
      // blank string
    } else {
      var item = theItem.split('|');
      var type = checkTypeRoot(theItem);
      if ( typeof item[1] !== 'undefined' && type !== 'undefined' && type == item[1] ) {
        set.push(item[0]);
      } else if ( type !== 'undefined' ) {
        set.push(item[0] + ' *');
      } else if ( type == 'undefined' ) {
        unset.push(item[0]);
      } else {
        unset.push(item[0]);
      }
    }
  }

  return {
    set: set,
    unset: unset,
  };
}

if ( typeof global !== 'undefined' ) {
  // End
  if ( typeof module !== 'undefined'
    && typeof require !== 'undefined'
    && typeof require.main !== 'undefined'
    && typeof module.exports !== 'undefined'
    && require.main === module
  ) {
    console.log('LOADED : node', __filename);
    console.log('script running itself');
  } else {
    console.log('LOADED : node-module', __filename);
    module.exports = {
      checkEachStringList: checkEachStringList,
      checkTypeRoot: checkTypeRoot,
      getGlobalRoot: getGlobalRoot,
      splitTemplateVariables: splitTemplateVariables,
    };
  }
}


var root = getGlobalRoot();

;

;

// reference :
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects

var doc = {};

doc.valueProp =
`
Infinity|number
NaN|number
undefined|undefined
null|object
`;

doc.funcProp =
`
eval|function
uneval|undefined
isFinite|function
isNaN|function
parseFloat|function
parseInt|function
decodeURI|function
decodeURIComponent|function
encodeURI|function
encodeURIComponent|function
escape|function
unescape|function
`;

doc.fundamentalObjects =
`
Object|function
Function|function
Boolean|function
Symbol|function
Error|function
EvalError|function
InternalError|undefined
RangeError|function
ReferenceError|function
SyntaxError|function
TypeError|function
URIError|function
`;

doc.numbersDates =
`
Number|function
Math|object
Date|function
`;

doc.textProcessing =
`
String|function
RegExp|function
`;

doc.indexedCollections =
`
Array|function
Int8Array|function
Uint8Array|function
Uint8ClampedArray|function
Int16Array|function
Uint16Array|function
Int32Array|function
Uint32Array|function
Float32Array|function
Float64Array|function
`;

doc.keyedCollections =
`
Map|function
Set|function
WeakMap|function
WeakSet|function
`;

doc.structuredData =
`
ArrayBuffer|function
SharedArrayBuffer|function
Atomics|object
DataView|function
JSON|object
`;

doc.controlAbstraction =
`
Promise|function
Generator|undefined
GeneratorFunction|undefined
AsyncFunction|undefined
`;

doc.reflection =
`
Reflect|object
Proxy|function
`;

doc.intl =
`
Intl|object
Intl.Collarot|object
Intl.DateTimeFormat|object
Intl.NumberFormat|object
Intl.PluralRules|object
Intl.RelativeTimeFormat|object
`;

doc.webassembly =
`
WebAssembly|object
WebAssembly.Module|object
WebAssembly.Instance|object
WebAssembly.Memory|object
WebAssembly.Table|object
WebAssembly.CompileError|object
WebAssembly.LinkError|object
WebAssembly.RuntimeError|object
`;

doc.arguments =
`
arguments|object
`;

doc.node_global =
`
Object|function
Function|function
Array|function
Number|function
parseFloat|function
parseInt|function
Infinity|number
NaN|number
undefined|undefined
Boolean|function
String|function
Symbol|function
Date|function
Promise|function
RegExp|function
Error|function
EvalError|function
RangeError|function
ReferenceError|function
SyntaxError|function
TypeError|function
URIError|function
JSON|object
Math|object
console|object
ArrayBuffer|function
Uint8Array|function
Int8Array|function
Uint16Array|function
Int16Array|function
Uint32Array|function
Int32Array|function
Float32Array|function
Float64Array|function
Uint8ClampedArray|function
DataView|function
Map|function
Set|function
WeakMap|function
WeakSet|function
Proxy|function
Reflect|object
decodeURI|function
decodeURIComponent|function
encodeURI|function
encodeURIComponent|function
escape|function
unescape|function
eval|function
isFinite|function
isNaN|function
WebAssembly|object
global|object
process|object
GLOBAL|object
root|object
Buffer|function
clearImmediate|function
clearInterval|function
clearTimeout|function
setImmediate|function
setInterval|function
setTimeout|function
`;

// End
if ( typeof global !== 'undefined' ) {
  if ( typeof module !== 'undefined'
    && typeof require !== 'undefined'
    && typeof require.main !== 'undefined'
    && typeof module.exports !== 'undefined'
    && require.main === module
  ) {
    console.log('LOADED : node', __filename);
    console.log('script running itself');
  } else {
    console.log('LOADED : node-module', __filename);
    module.exports = doc;
  }
};


;

;

if ( typeof require == 'function' ) {
  var doc = require('./properties-javascript-core.js');
  var helper = require('./tool-core-helper.js');
}

if ( typeof window == 'object' && typeof document == 'object' ) {
  // todo : handle for browser

  // equivalent to require from node.js
  var require = function require(url){
    // to allow loading without js suffix;
    if (url.toLowerCase().substr(-3)!=='.js') url+='.js';

    // init cache
    if (!require.cache) require.cache=[];

    // get from cache
    var exports=require.cache[url];

    // not cached
    if (!exports) {
      try {
        exports={};
        var X=new XMLHttpRequest();
        X.open("GET", url, 0); // sync
        X.send();
        if (X.status && X.status !== 200)  throw new Error(X.statusText);
        var source = X.responseText;
        // fix (if saved form for Chrome Dev Tools)
        if (source.substr(0,10)==="(function("){ 
            var moduleStart = source.indexOf('{');
            var moduleEnd = source.lastIndexOf('})');
            var CDTcomment = source.indexOf('//@ ');
            if (CDTcomment>-1 && CDTcomment<moduleStart+6) moduleStart = source.indexOf('\n',CDTcomment);
            source = source.slice(moduleStart+1,moduleEnd-1); 
        } 
        // fix, add comment to show source on Chrome Dev Tools
        source="//@ sourceURL="+window.location.origin+url+"\n" + source;
        //------
        // according to node.js modules
        var module = { id: url, uri: url, exports:exports }; 
        // create a Fn with module code, and 3 params: require, exports & module
        var anonFn = new Function("require", "exports", "module", source);
        // call the Fn, Execute the module
        anonFn(require, exports, module);
        // cache obj exported by module
        require.cache[url]  = exports = module.exports;
      } catch (err) {
          throw new Error("Error loading module "+url+": "+err);
      }
    }
    return exports; //require returns object exported by module
  }

  // var doc = require('./properties-javascript-core.js');
  // var helper = require('./tool-core-helper.js');
}

if ( typeof helper !== 'undefined' ) {
  var getGlobalRoot = helper.getGlobalRoot;
  var splitTemplateVariables = helper.splitTemplateVariables;
}

/**
 * processEachLine
 * @param {*} line
 * @sideeffect
 */
function processEachLine(line) {
  line = line.split('|');

  var theProperty = line[0];
  var theType = typeof line[1] == 'string' ? line[1] : false;
  var typeCheck = (theType) ?
    typeof root[theProperty] == theType :
      typeof root[theProperty] !== 'undefined';

  if ( theProperty == 'null' ) {
    typeCheck = typeof null == theType;
  } else if ( theProperty == 'arguments' ) {
    typeCheck = typeof arguments == theType;
  } else if ( theProperty.indexOf('.') === -1 ) {
    // check without namespace
  } else {
    // todo : check with namespace
  }

  // output
  if ( typeCheck === false ) {
    // display invalid
    console.log(theProperty, theType, typeCheck);

    if ( typeof document !== 'undefined' ) {
      document.getElementById('logger').innerHTML += '<p>'+theProperty+ ' | ' + theType + ' | ' + typeCheck + '</p>';
    }
  } else {
    // display valid
    // console.log(theProperty, theType, typeCheck);
  }
}

/**
 * forEachCategory
 * @param {*} cat
 * @sideeffect
 */
function forEachCategory(cat) {
  console.log('>>> Item :', cat);
  var lines = splitTemplateVariables(doc[cat]);
  lines.forEach(processEachLine);
}


/**
 * main
 * @entrypoint
 */
function main() {
  // var root = getGlobalRoot();
  Object.getOwnPropertyNames(doc).forEach(forEachCategory);
}

if ( typeof global == 'object' && typeof module == 'object' ) {
  main();
}

if ( typeof window == 'object' && typeof document == 'object' ) {
  // todo : handle for browser
  main();
}


;
