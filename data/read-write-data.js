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

var filename = dateyymmdd() + '-data.json';

var filecontent = fs.readFileSync(filename);

var data = JSON.parse(filecontent);

if ( typeof data['2019'] !== 'undefined'
  && typeof data['2019']['01'] !== 'undefined'
  && typeof data['2019']['01']['count'] !== 'undefined' ) {
  data['2019']['01']['count'] ++;
} else {
  data['2019'] = {};
  data['2019']['01'] = {};
  data['2019']['01']['count'] = 0;
}

/*
var data = {};

data.name = "test";

data['2019'] = {};

data['2019']['01'] = {
  count: 0,
};
*/

fs.writeFileSync(filename, JSON.stringify(data));
