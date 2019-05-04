;doc={};


doc.template=
[
`
`
];


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