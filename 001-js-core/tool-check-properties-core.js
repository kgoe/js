;doc={};


doc.template=
[
`
`
];


if ( typeof require == 'function' ) {
  var core = require('./properties-javascript-core.js');
  var helper = require('./tool-core-helper.js');

  // console.log('core',core);
  // console.log('helper',helper);
}


if ( typeof window == 'object' && typeof document == 'object' ) {
  // handle for browser

  // equivalent to require from node.js
  // not effective
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

  function loadscript(scriptUrl, callback) {
    var script = document.createElement('script');
    script.onload = function () {
        //do stuff with the script
        console.log(scriptUrl);
        if ( typeof callback == 'function' ) {
          callback();
        }
    };
    script.src = scriptUrl;
    
    document.head.appendChild(script); //or something of the likes
  }

  // var core = require('properties-javascript-core.js');
  // var helper = require('tool-core-helper.js');

  loadscript('properties-javascript-core.js', function(){core = properties_javascript_core;});
  loadscript('tool-core-helper.js', function(){helper = tool_core_helper;});
}

if ( typeof helper !== 'undefined' ) {
  getGlobalRoot = helper.getGlobalRoot;
  splitTemplateVariables = helper.splitTemplateVariables;
}

/**
 * processEachLine
 * @param {*} line
 * @sideeffect
 */
function processEachLine(line) {
  var theRoot = helper.getGlobalRoot();
  line = line.split('|');

  var theProperty = line[0];
  var theType = typeof line[1] == 'string' ? line[1] : false;
  var typeCheck = (theType) ?
    typeof theRoot[theProperty] == theType :
      typeof theRoot[theProperty] !== 'undefined';

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
  // typeCheck = false; // Force
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
  try {
    console.log('>>> Item :', cat);
    var lines = helper.splitTemplateVariables(core[cat][0]);
    lines.forEach(processEachLine);
  } catch(err) {
    console.log('ERROR', cat, err);
  }
}

/**
 * main
 * @entrypoint
 */
function main() {
  Object.getOwnPropertyNames(core).forEach(forEachCategory);
}

if ( typeof global == 'object' && typeof module == 'object' ) {
  setTimeout(main, 1000);
}

if ( typeof window == 'object' && typeof document == 'object' ) {
  // todo : handle for browser
  setTimeout(main, 1000);
}
