;

// reference : addy osmani

var myApplication = myApplication || {};

if ( !MyApplication ) {
  MyApplication = {}
};

window.myApplication || ( window.myApplication = {} );

myApplication || (myApplication = {});

var myApplication = $.fn.myApplication = function() {};

var myApplication = myApplication === undefined ? {} : myApplication;

var theApp1 = (function() {
  var output = {};
  output.property1 = 1;
  output.property2 = 2;
  return output;
});

var theApp2 = {};
(function(app) {
  app.property1 = 1;
  app.property2 = 2;
})(theApp2);

/**
 * nsStringExtend
 * @desc Addy Osmani
 * @desc a convenience function for parsing string namespaces and
 * @desc automatically generating nested namespaces
 * @param {*} ns
 * @param {*} nsString
 * @return {*}
 */
function nsStringExtend( ns, nsString ) {
  var parts = nsString.split('.');
  var parent = ns;
  var pl;

  pl = parts.length;

  for ( var i = 0; i < pl; i++ ) {
    // create a property if it doesn't exist
    if ( typeof parent[parts[i]] === 'undefined' ) {
      parent[parts[i]] = {};
    }
    parent = parent[parts[i]];
  }

  return parent;
}

/**
 * nsObjectExtend
 * @desc Written by Andrew Dupont, optimized by Addy Osmani
 * @param {*} destination
 * @param {*} source
 * @return {*}
 */
function nsObjectExtend( destination, source ) {
  var toString = Object.prototype.toString;
  var objTest = toString.call({});

  for ( var property in source ) {
    if ( source[property] && objTest === toString.call(source[property]) ) {
      destination[property] = destination[property] || {};
      extend(destination[property], source[property]);
    } else {
      destination[property] = source[property];
    }
  }

  return destination;
};

// jquery extend example
$.extend( true, myApp, {
  library: {
    bar: function() {
      // ...
    },
  },
});
