;

/*
 * test.js entry point
 * executor : node.js + mocha
 *
 * Project Wide Test Entry Point
 * Load Files From Test Folder
 */

var Mocha = require('mocha');
var fs = require('fs');
var path = require('path');

// Instantiate a Mocha instance.
var mocha = new Mocha();
var testDir = '_008-testing';

// Add each .js file to the mocha instance
fs.readdirSync(testDir)
    .filter(function(file) {
      // Only keep the .js files
      var check = file.substr(-3) === '.js';
      check = check && file.indexOf('testrun-') === 0;
      return check;
    })
    .forEach((file) => {
      mocha.addFile( path.join(testDir, file) );
    });

// Run the tests.
mocha.run(function(failures) {
  process.exitCode = failures ? 1 : 0;
  // exit with non-zero status if there were failures
});
