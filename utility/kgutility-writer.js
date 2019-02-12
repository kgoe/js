;

if ( typeof global !== 'undefined' ) {
  const fs = require('fs');
  var logs = [];
  var output = {};
  output.one = 1;
  output.two = 2;
  output.three = 3;
  output.four = 4;
  output.obj = {};
  output.obj.a = 'a';
  output.obj.b = 'b';
  output.obj.c = 'c';

  var filename = 'test-file.json';

  /**
   * writeJsonPretty
   * @param {*} filename
   * @param {*} theObject
   */
  function writeJsonPretty( filename, theObject ) {
    fs.writeFileSync(filename, JSON.stringify(theObject, null, 2));
  }

  // End
  if ( typeof module !== 'undefined'
    && typeof require !== 'undefined'
    && typeof require.main !== 'undefined'
    && typeof module.exports !== 'undefined'
    && require.main === module
  ) {
    console.log('LOADED : node', __filename);
    writeJsonPretty(filename, output);
  } else {
    console.log('LOADED : node-module', __filename);
    module.exports = {
      writeJsonPretty: writeJsonPretty,
    };
  }
};
