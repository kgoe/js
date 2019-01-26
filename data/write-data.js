;

const fs = require('fs');

var data = {};

data.name = "test";

data['2019'] = {};

data['2019']['01'] = {};

fs.writeFileSync('data.json',JSON.stringify(data));