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
    var toString = typeof root[item] !== 'undefined' && typeof root[item].toString == 'function' ? root[item].toString() : '';
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
    getRandomColor: getRandomColor,
    globalProperties: globalProperties,
    globalPrpperties1: globalProperties1,
    globalProperties2: globalProperties2,
    checkTypes: checkTypes,
    printDetails: printDetails,
    getPropType: getPropType,
  };
}
