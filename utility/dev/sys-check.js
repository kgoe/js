var fs = require('fs');

fs.readFileSync('./../kgutility.js', function(str) {
  console.log('file', str);
});

console.log(__dirname);
console.log(__filename);
