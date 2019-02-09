;
/**
 * utility.js
 */

/**
 * makeid
 * creates uuid
 * @param {number} length
 * @return {string}
 */
function makeid(length) {
  var text = '';
  var possible = '';
  possible += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  possible += 'abcdefghijklmnopqrstuvwxyz';
  possible += '0123456789';
  length = length || 5;

  for (var counter = 0; counter < length; counter++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
}

/**
 * pad
 * pads input number with zeros
 * @param {number|string} n
 * @param {number} width
 * @param {number|string} z
 * @return {string}
 */
function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  width = width || 2;
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

/**
 * dateyymmdd
 * @param {string} sep
 * @return {string}
 */
function dateyymmdd( sep ) {
  var output = '';
  sep = sep || '';
  var theDate = new Date();

  /*
  var dateString =
    theDate.getFullYear() +
    sep +
    pad(theDate.getMonth() + 1, 2) +
    sep +
    pad(theDate.getDate(), 2);
  return dateString;
  /*/
  var dateArray =
  [
    theDate.getFullYear(),
    pad(theDate.getMonth() + 1, 2),
    pad(theDate.getDate(), 2),
  ];
  output += dateArray.join(sep);
  // */

  return output;
}

/**
 * dateyymmddhhmmss
 * @param {string} sep
 * @return {string}
 */
function dateyymmddhhmmss( sep ) {
  var output = '';
  sep = sep || '';

  var theDate = new Date();
  /*
    output =
      theDate.getFullYear() +
      sep +
      pad(theDate.getMonth() + 1, 2) +
      sep +
      pad(theDate.getDate(), 2);


  */

  // output += dateyymmdd(sep);

  var dateArray =
  [
    theDate.getFullYear(),
    pad(theDate.getMonth() + 1, 2),
    pad(theDate.getDate(), 2),
  ];

  var timeArray =
  [
    pad(theDate.getHours(), 2),
    pad(theDate.getMinutes(), 2),
    pad(theDate.getSeconds(), 2),
  ];

  output += dateArray.join(sep);
  output += '-';
  output += timeArray.join(sep);

  return output;
}

/**
 * isoDate
 * @param {string} sep
 * @return {string}
 */
var isoDate = function isoDate( sep ) {
  var date = new Date();
  var output = [];
  var separator = sep === undefined ? '-' : sep;
  output.push(date.getFullYear());
  output.push(pad(date.getMonth(), 2));
  output.push(pad(date.getDate(), 2));
  return output.join(separator);
};

/**
 * isoTime
 * @param {string} sep
 * @return {string}
 */
var isoTime = function isoTime( sep ) {
  var date = new Date();
  var output = [];
  var separator = sep === undefined ? '-' : sep;
  output.push(pad(date.getHours(), 2));
  output.push(pad(date.getMinutes(), 2));
  output.push(pad(date.getSeconds(), 2));
  return output.join(separator);
};

/**
 * getRandomColor
 * @return {string}
 */
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

/**
 * checkTypes
 * @param {object} obj
 * @return {*}
 */
function checkTypes(obj) {
  var props = Object.getOwnPropertyNames( obj );
  props.forEach((element, index)=>{
    console.log(element, typeof window[element] == obj[element], index);
  });
  return true;
}

/**
 * printDetails
 * @param {*} input
 */
function printDetails( input ) {
  console.log(input, typeof global[input]);
}

/**
  * globalProperties
  * @param {*} parent
  * @return {array}
  */
function globalProperties( parent ) {
  var root =
    typeof parent != 'undefined'
    ? parent
    : typeof global != 'undefined'
    ? global
    : window;
  var prop = Object.getOwnPropertyNames(root);
  console.log(prop);
  return prop;
}

/**
  * globalProperties1
  * @param {*} parent
  * @return {array}
  */
function globalProperties1( parent ) {
  var root =
    typeof parent != 'undefined'
    ? parent
    : typeof global != 'undefined'
    ? global
    : window;
  var prop = Object.getOwnPropertyNames(root);
  var output = [];
  for ( var cnt = 0; cnt < prop.length; cnt++ ) {
    var item = prop[cnt];
    var type = typeof root[item];
    output.push([item, type]);
  }
  console.log(output);
  return output;
}

/**
  * globalProperties2
  * @param {*} parent
  * @return {array}
  */
function globalProperties2( parent ) {
  var root =
    typeof parent != 'undefined'
    ? parent
    : typeof global != 'undefined'
    ? global
    : window;

  var prop = Object.getOwnPropertyNames(root);
  var output = [];

  for ( var cnt = 0; cnt < prop.length; cnt++ ) {
    var item = prop[cnt];
    var type = typeof root[item];
    var chkStr = typeof root[item] !== 'undefined';
    chkStr = chkStr && typeof root[item].toString == 'function';
    var toString = chkStr ? root[item].toString() : '';
    var syntax =
      type == 'function'
      ? toString
          .split('{')[0]
          .trim().replace('function ', '')
      : toString;
    output.push([item, type, syntax]);
  }

  // console.log(output);
  return output;
}

/**
 * getPropType
 * @param {*} val
 * @return {object}
 */
function getPropType( val ) {
  var prop = Object.getOwnPropertyNames( val );
  var ll = prop.length;
  var output = {};
  for ( cc = 0; cc < ll; cc++ ) {
    try {
      output[prop[cc]] = typeof val[prop[cc]];
    } catch ( err ) {
      console.log( 'error: ', err, prop[cc] );
      output[prop[cc]] = false;
    }
  }
  return output;
};

/**
 * nsCreator
 * @param {string} path
 * @param {*} value
 * @param {*} parent ?
 * @return {*}
 */
function nsCreator( path, value, parent ) {
  var theRoot = typeof global !== 'undefined' ? global : window;
  var theParent = typeof parent !== 'undefined' ? parent : theRoot;
  var thePath = path.split('.');
  var theReference = [];
  var pathContext = false;

  for ( var nsLvl = 0; nsLvl < thePath.length; nsLvl ++ ) {
    if ( nsLvl > 3 ) {
      console.log('info : level > 3');
    }
    pathContext = thePath[nsLvl];

    if ( nsLvl == 0 ) {
      if ( typeof theParent[pathContext] == 'undefined' ) {
        if ( nsLvl == thePath.length - 1 ) {
          theParent[pathContext] = value;
        } else {
          theParent[pathContext] = {};
        }
        theReference[nsLvl] = theParent[pathContext];
      } else {
        theReference[nsLvl] = theParent[pathContext];
      }
    } else {
      if ( typeof theReference[nsLvl - 1][pathContext] == 'undefined' ) {
        if ( nsLvl == thePath.length - 1 ) {
          theReference[nsLvl - 1][pathContext] = value;
        } else {
          theReference[nsLvl - 1][pathContext] = {};
        }
        theReference[nsLvl] = theReference[nsLvl - 1][pathContext];
      } else {
        theReference[nsLvl] = theReference[nsLvl - 1][pathContext];
      }
    }
  }

  return theReference[theReference.length - 1];
}

/**
 * nsChecker
 * @param {string} path
 * @param {*} parent ?
 * @return {*}
 */
function nsChecker( path, parent ) {
  var theParent = typeof parent !== 'undefined'
    ? parent : typeof global !== 'undefined'
    ? global : window;
  var thePath = path.split('.');
  var theReference = [];
  var pathContext = false;

  for ( var nsLvl = 0; nsLvl < thePath.length; nsLvl ++ ) {
    if ( nsLvl > 3 ) {
      console.log('info : level > 3');
    }
    pathContext = thePath[nsLvl];
    if ( nsLvl == 0 ) {
      theReference[nsLvl] = theParent[pathContext];
    } else {
      theReference[nsLvl] = theReference[nsLvl - 1][pathContext];
    }
    // console.log(pathContext);
    if ( typeof theReference[nsLvl] == 'undefined' ) {
      console.log(pathContext);
      return false;
    } else if ( nsLvl == thePath.length - 1 ) {
      return theReference[nsLvl];
    }
  }
}

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

/**
 * hereDocHelper
 * @param {*} f
 * @return {string}
 */
function hereDocHelper(f) {
  return f.toString().
      replace(/^[^\/]+\/\*!?/, '').
      replace(/\*\/[^\/]+$/, '');
};

// End
if ( typeof module !== 'undefined'
  && typeof require !== 'undefined'
  && typeof require.main !== 'undefined'
  && typeof module.exports !== 'undefined'
  && require.main === module
) {
  console.log('LOADED : node', __filename);
  // console.log(makeid());
  // console.log(pad(5, 5));
  // console.log(dateyymmdd());
  // console.log(dateyymmddhhmmss());
  // console.log(getRandomColor());
  // var aws = require('aws-sdk');
  var output = globalProperties2();
  // console.log(output);
  console.log(JSON.stringify(output));
} else {
  console.log('LOADED : node-module', __filename);
  module.exports = {
    makeid: makeid,
    pad: pad,
    dateyymmdd: dateyymmdd,
    dateyymmddhhmmss: dateyymmddhhmmss,
    isoDate: isoDate,
    isoTime: isoTime,
    getRandomColor: getRandomColor,
    globalProperties: globalProperties,
    globalPrpperties1: globalProperties1,
    globalProperties2: globalProperties2,
    checkTypes: checkTypes,
    printDetails: printDetails,
    getPropType: getPropType,
    nsCreator: nsCreator,
    nsChecker: nsChecker,
    nsStringExtend: nsStringExtend,
    nsObjectExtend: nsObjectExtend,
    hereDocHelper: hereDocHelper,
  };
}
