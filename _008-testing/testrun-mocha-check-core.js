;

// js core properties checker
// checks if javascript core properties is supported

var assert = require('assert');
var log = console.log;

if ( typeof describe == 'function') {
  describe('js core properties', function() {
    it('js environment', function() {
      assert.equal(typeof arguments,'object');
      assert.equal(typeof this, 'object');
      assert.equal(typeof Object, 'function');
      assert.equal(typeof Function, 'function');
      assert.equal(typeof Number, 'function');
      assert.equal(typeof String, 'function');
      assert.equal(typeof Symbol, 'function');
      assert.equal(typeof Boolean, 'function');
      assert.equal(typeof Array, 'function');
      assert.equal(typeof Date, 'function');
      assert.equal(typeof Math, 'object');
      assert.equal(typeof JSON, 'object');
      if ( typeof global !== 'undefined') {
        // node js
        assert.equal(typeof global, 'object');
      } else if ( typeof window !== 'undefined' ) {
        // browser
        assert.equal(typeof widnow, 'object');
      } else {
        assert.equal(true, false);
      }
    });


    it('js core literals', function() {
      assert.equal(typeof function() {}, 'function');
      assert.equal(typeof {}, 'object');
      assert.equal(typeof [], 'object');
      assert.equal(typeof 5, 'number');
      assert.equal(typeof true, 'boolean');
      assert.equal(typeof false, 'boolean');
      assert.equal(typeof 'test', 'string');
      assert.equal(typeof /i/g, 'object');
      assert.equal(typeof Symbol('s'), 'symbol');
      assert.equal(typeof Error('err'), 'object');
      assert.equal(typeof undefined, 'undefined');
      assert.equal(typeof Infinity, 'number');
      assert.equal(typeof NaN, 'number');
      assert.equal(typeof null, 'object');
    });

    it('js core constructors', function() {
      assert.equal(typeof Object, 'function');
      assert.equal(typeof Function, 'function');
      assert.equal(typeof Array, 'function');
      assert.equal(typeof Number, 'function');
      assert.equal(typeof Boolean, 'function');
      assert.equal(typeof String, 'function');
      assert.equal(typeof RegExp, 'function');
      assert.equal(typeof Symbol, 'function');
      assert.equal(typeof Error, 'function');
      assert.equal(typeof JSON, 'object');
      assert.equal(typeof Math, 'object');
      assert.equal(typeof Map, 'function');
      assert.equal(typeof Set, 'function');
      assert.equal(typeof WeakMap, 'function');
      assert.equal(typeof WeakSet, 'function');
      
      assert.equal(this.constructor.toString(), 'function Context() {}');
      assert.equal(Object.constructor.toString(), 'function Function() { [native code] }');
      assert.equal(Function.constructor.toString(), 'function Function() { [native code] }');
      assert.equal(Array.constructor.toString(), 'function Function() { [native code] }');
      assert.equal(Number.constructor.toString(), 'function Function() { [native code] }');
      assert.equal(Boolean.constructor.toString(), 'function Function() { [native code] }');
      assert.equal(String.constructor.toString(), 'function Function() { [native code] }');
      assert.equal(RegExp.constructor.toString(), 'function Function() { [native code] }');
      assert.equal(Symbol.constructor.toString(), 'function Function() { [native code] }');
      assert.equal(Error.constructor.toString(), 'function Function() { [native code] }');
      assert.equal(JSON.constructor.toString(), 'function Object() { [native code] }');
      assert.equal(Math.constructor.toString(), 'function Object() { [native code] }');
      assert.equal(Map.constructor.toString(), 'function Function() { [native code] }');
      assert.equal(Set.constructor.toString(), 'function Function() { [native code] }');
      assert.equal(WeakMap.constructor.toString(), 'function Function() { [native code] }');
      assert.equal(WeakSet.constructor.toString(), 'function Function() { [native code] }');

      assert.equal(function() {}.constructor.toString(), 'function Function() { [native code] }');
      assert.equal(function() {}.prototype.toString(), '[object Object]');
      assert.equal(function() {}.__proto__.toString(), 'function () { [native code] }');

      assert.equal(Object.prototype.toString(), '[object Object]');
      assert.equal(Function.prototype.toString(), 'function () { [native code] }');
      assert.equal(Array.prototype.toString(), '');
      assert.equal(Number.prototype.toString(), '0');
      assert.equal(Boolean.prototype.toString(), 'false');
      assert.equal(String.prototype.toString(), '');
      assert.equal(RegExp.prototype.toString(), '/(?:)/');
      assert.equal(Symbol('s').toString(), 'Symbol(s)');
      assert.equal(Error.prototype.toString(), 'Error');

      assert.equal(Object.__proto__.toString(), 'function () { [native code] }');
      assert.equal(Function.__proto__.toString(), 'function () { [native code] }');
      assert.equal(Array.__proto__.toString(), 'function () { [native code] }');
      assert.equal(Number.__proto__.toString(), 'function () { [native code] }');
      assert.equal(Boolean.__proto__.toString(), 'function () { [native code] }');
      assert.equal(String.__proto__.toString(), 'function () { [native code] }');
      assert.equal(RegExp.__proto__.toString(), 'function () { [native code] }');
      assert.equal(Symbol.__proto__.toString(), 'function () { [native code] }');
      assert.equal(Error.__proto__.toString(), 'function () { [native code] }');
      assert.equal(JSON.__proto__.toString(), '[object Object]');
      assert.equal(Math.__proto__.toString(), '[object Object]');
    });
  });
} else {
  log('!!! no mocha running !!!');
}
