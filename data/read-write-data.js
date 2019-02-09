;

const fs = require('fs');
const util = require(__dirname + '/../utility/kgutility.js');

var pad = util.pad;
var dateyymmdd = util.dateyymmdd;
var dateyymmddhhmmss = util.dateyymmddhhmmss;
var nsCreator = util.nsCreator;
var nsChecker = util.nsChecker;

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
