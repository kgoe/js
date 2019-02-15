;

var assert = require('assert');
var log = console.log;

if ( typeof describe == 'function') {
  describe('suite', function() {
    it('assertion container', function() {
      assert.equal(true, true);
    });
  });
} else {
  log('!!! no mocha running !!!');
}
