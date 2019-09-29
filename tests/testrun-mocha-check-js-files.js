;doc={};
;app={};
;const print=console.log;
;const assert=require('assert');
;const log=console.log;
;const fs=require('fs');


function filterJsFile(item) {
  return item.indexOf('.json') == -1 && item.indexOf('.js') > -1;
}


if ( typeof describe == 'function') {
  describe('checkingdoc js-topics', function folder_check() {
    let path = './doc'
    let fileList = fs.readdirSync(path);

    fileList.filter(filterJsFile).forEach((item, index, arr) => {
      // print(path, item);
      it('checking ' + item, function(){
        var output = false;
        try {
          require('./../' + path + '/' + item);
          output = true;
        } catch( err ) {
          output = false;
        }
        assert.equal(true, output);
      })
    });
  });
  describe('checking js-core', function folder_check() {
    let path = './src/js-core'
    let fileList = fs.readdirSync(path);

    fileList.filter(filterJsFile).forEach((item, index, arr) => {
      // print(path, item);
      it('checking ' + item, function(){
        var output = false;
        try {
          require('./../' + path + '/' + item);
          output = true;
        } catch( err ) {
          output = false;
        }
        assert.equal(true, output);
      })
    });
  });
  describe('checking js-node-core', function folder_check() {
    let path = './src/js-node-core'
    let fileList = fs.readdirSync(path);

    fileList.filter(filterJsFile).forEach((item, index, arr) => {
      // print(path, item);
      it('checking ' + item, function(){
        var output = false;
        try {
          require('./../' + path + '/' + item);
          output = true;
        } catch( err ) {
          output = false;
        }
        assert.equal(true, output);
      })
    });
  });
} else {
  log('!!! no mocha running !!!');
}
