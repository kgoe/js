// js core properties checker
// checks if javascript core properties is supported

var assert = require('assert');
var log = console.log;

if ( typeof describe == 'function') {

var root = typeof global !== 'undefined' ? global : window;

describe("ES3",function(){

	it("basic",function(){
		assert.equal(typeof Object,'function');
		assert.equal(typeof Function,'function');
		assert.equal(typeof Number,'function');
		assert.equal(typeof String,'function');
		assert.equal(typeof Symbol,'function');
		assert.equal(typeof Boolean,'function');
		assert.equal(typeof Array,'function');
		assert.equal(typeof Date,'function');
		assert.equal(typeof Math,'object');
		assert.equal(typeof JSON,'object');
		if ( typeof global !== 'undefined') {
			// node js
			assert.equal(typeof global,'object');
		} else if ( typeof window !== 'undefined' ) {
			// browser
			assert.equal(typeof widnow,'object');
		} else {
			assert.equal(true,false);
		}
  });
  
  it("ES3 7.x Literals",function(){
		assert.equal(typeof null,'object');
		assert.equal(typeof true,'boolean');
		assert.equal(typeof false,'boolean');
		assert.equal(typeof 365,'number');
		assert.equal(typeof 'hello','string');
		assert.equal(typeof /ab+c/g,'object');
		assert.equal(typeof {a:1,b:2},'object');
		assert.equal(typeof ['a','b'],'object');
		assert.equal(typeof this,'object');
		assert.equal(typeof new Object(),'object');
	});
	
	it("ES3 15.x Native Objects",function(){
		var root = typeof global !== 'undefined' ? global : window;
		assert.equal(typeof root,'object');
		assert.equal(typeof NaN, 'number');
		assert.equal(typeof Infinity, 'number');
		assert.equal(typeof undefined, 'undefined');
		assert.equal(typeof eval, 'function');
		assert.equal(typeof parseInt, 'function');
		assert.equal(typeof parseFloat, 'function');
		assert.equal(typeof isNaN, 'function');
		assert.equal(typeof isFinite, 'function');
		assert.equal(typeof decodeURI, 'function');
		assert.equal(typeof decodeURIComponent, 'function');
		assert.equal(typeof encodeURI, 'function');
		assert.equal(typeof encodeURIComponent, 'function');

		assert.equal(typeof Object, 'function');
		assert.equal(typeof Function, 'function');
		assert.equal(typeof Array, 'function');
		assert.equal(typeof String, 'function');
		assert.equal(typeof Boolean, 'function');
		assert.equal(typeof Number, 'function');
		assert.equal(typeof Date, 'function');
		assert.equal(typeof RegExp, 'function');

		assert.equal(typeof Error, 'function');
		assert.equal(typeof EvalError, 'function');
		assert.equal(typeof RangeError, 'function');
		assert.equal(typeof ReferenceError, 'function');
		assert.equal(typeof SyntaxError, 'function');
		assert.equal(typeof TypeError, 'function');
		assert.equal(typeof URIError, 'function');

		assert.equal(typeof Math, 'object');

		assert.equal(typeof root['Object'], 'function');
		assert.equal(typeof root['Object']['prototype'], 'object');
		assert.equal(typeof root['Object']['prototype']['constructor'], 'function');
		assert.equal(typeof root['Object']['prototype']['toString'], 'function');
		assert.equal(typeof root['Object']['prototype']['toLocaleString'], 'function');
		assert.equal(typeof root['Object']['prototype']['valueOf'], 'function');
		assert.equal(typeof root['Object']['prototype']['hasOwnProperty'], 'function');
		assert.equal(typeof root['Object']['prototype']['isPrototypeOf'], 'function');
		assert.equal(typeof root['Object']['prototype']['propertyIsEnumerable'], 'function');
	});

});

} else {
	log('!!! no mocha running !!!');
}

