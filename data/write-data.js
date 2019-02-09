;

const fs = require('fs');
const util = require(__dirname + '/../utility/kgutility.js');

var pad = util.pad;
var dateyymmdd = util.dateyymmdd;
var dateyymmddhhmmss = util.dateyymmddhhmmss;

var filename = dateyymmdd() + '-data.json';

var data = {};

data.name = "test";

data['2019'] = {};

data['2019']['01'] = {
  count: 0,
};

fs.writeFileSync(filename, JSON.stringify(data));
