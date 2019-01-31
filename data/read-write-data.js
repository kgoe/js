;

const fs = require('fs');

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
  // return theDate.getFullYear() + sep + pad(theDate.getMonth() + 1,2) + sep + pad(theDate.getDate(),2);
  output += [theDate.getFullYear(), pad(theDate.getMonth() + 1, 2), pad(theDate.getDate(), 2)].join(sep);

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
  // output = theDate.getFullYear() + sep + pad(theDate.getMonth() + 1,2) + sep + pad(theDate.getDate(),2);
  // output += dateyymmdd(sep);
  output += [theDate.getFullYear(), pad(theDate.getMonth() + 1, 2), pad(theDate.getDate(), 2)].join(sep);
  output += '-';
  output += [pad(theDate.getHours(), 2), pad(theDate.getMinutes(), 2), pad(theDate.getSeconds(), 2)].join(sep);

  return output;
}

/**
 * nsCreator
 * @param {string} path
 * @param {*} value
 * @param {*} parent ?
 */
function nsCreator( path, value, parent ) {
  var theParent = typeof parent !== 'undefined' ? parent : typeof global !== 'undefined' ? global : window;
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

var filename = dateyymmdd() + '-data.json';

var filecontent = fs.readFileSync(filename);

var data = JSON.parse(filecontent);

var count = nsChecker('2019.01.count', data);

if ( count !== false ) {
  data['2019']['01']['count'] ++;
} else {
  nsCreator('2019.01.count', 0, data);
}

fs.writeFileSync(filename, JSON.stringify(data));
