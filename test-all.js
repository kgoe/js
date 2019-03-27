const fs = require('fs');
const path = require('path');

if (process. argv. length <= 2) {
  console.log("Usage: " + __filename + " " + argv[2]);
  process.exit(-1);
};

var rootPath = process.argv[2];
var loaded = [];

function readPath( thisPath ) {
  fs.readdir(thisPath, function(err, items) {
    // console.log(items);

    var forEachItem = function forEachItem( item ) {
      var fullPath = path.join(thisPath,item);
      console.log(fullPath);
      if ( item.indexOf('.js') !== -1 && item.indexOf('.json') == -1 ) {
        var ignore = 
        [
          'test-all.js',
          // 'test.js',
          // 'tool-complexity-consolidate.js'
        ];
        if ( ignore.indexOf(item) == -1 ) {
          console.log('>>> FILE >>> ', fullPath);
          loaded.push(require('./' + fullPath));
        }
      }
      if ( fs.lstatSync(fullPath).isDirectory() ) {
        readPath(fullPath);
      }
    }

    items.forEach(forEachItem);
  });
}

readPath(rootPath);
