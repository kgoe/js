;

/*
 * test.js entry point
 * executor : node.js
 *
 * Project Wide Test Entry Point
 * Load Files From Test Folder
 */

var Mocha = require('mocha');
var fs = require('fs');
var path = require('path');

// Instantiate a Mocha instance.
var mocha = new Mocha();
var testDir = '008-js-testing';

// Add each .js file to the mocha instance
fs.readdirSync(testDir)
    .filter(function(file) {
      // Only keep the .js files
      return file.substr(-3) === '.js';
    })
    .forEach(function(file) {
      mocha.addFile( path.join(testDir, file) );
    });

// Run the tests.
mocha.run(function(failures) {
  process.exitCode = failures ? 1 : 0;
  // exit with non-zero status if there were failures
});
