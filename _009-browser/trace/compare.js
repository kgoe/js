var fs = require('fs');
var files = fs.readdirSync(__dirname);
console.log(files);
var filesContent = {};

files.forEach(function(theValue, theIndex, theArray) {
  if ( theValue.indexOf('.json') > 0 ) {
    filesContent[theIndex] = JSON.parse(fs.readFileSync(theValue));
  }
});

var theFilter = [];
var theOutput = [];

files.forEach(function(theValue, theIndex, theArray) {
  console.log(files[theIndex]);
  if ( theValue.indexOf('.json') > 0 ) {
    if ( theIndex === 0 ) {
      // console.log(filesContent[theIndex]);
      // theFilter = JSON.parse(JSON.stringify(filesContent[theValue]));
      theFilter = JSON.parse(JSON.stringify(filesContent[theIndex]));
    } else {
      // filesContent[theValue]
      theFilter = theFilter.filter( (thatValue) => {
        if ( typeof filesContent[theIndex] !== 'undefined' ) {
          return filesContent[theIndex].indexOf(thatValue) >= 0;
        } else {
          return false;
        }
      });
    }
  }
});

console.log(JSON.stringify(theFilter));
