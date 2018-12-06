var fs = require('fs');
var files = fs.readdirSync(__dirname + '\\..\\');

// console.log(files);

files.forEach((value, index, array)=>{
  value.toString();
  index.toString();
  array.toString();
  if ( value.indexOf('') >= 0 ) {
    console.log(value);
  }
});
