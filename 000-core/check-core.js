// js core properties checker
// checks if javascript core properties is supported

var assert = require('assert');

describe("core properties",function(){
	it("core literals",function(){
		assert.equal(typeof function(){},'function');
		assert.equal(typeof {},'object');
		assert.equal(typeof [],'object')
		;
		assert.equal(typeof 5,'number');
		assert.equal(typeof true,'boolean');
		assert.equal(typeof false,'boolean');
		assert.equal(typeof 'test','string');
		assert.equal(typeof /i/g,'object');
		assert.equal(typeof Symbol('s'),'symbol');
		assert.equal(typeof Error('err'),'object');
	});
	it("core constructors",function(){	
		assert.equal(typeof Object,'function');
		assert.equal(typeof Function,'function');
		assert.equal(typeof Array,'function');
	  assert.equal(typeof Number,'function');
		assert.equal(typeof Boolean,'function');
		assert.equal(typeof String,'function');
		assert.equal(typeof RegExp,'function');
		assert.equal(typeof Symbol,'function');
	  assert.equal(typeof Error,'function');
		assert.equal(typeof JSON,'object');
		assert.equal(typeof Math,'object');
		assert.equal(typeof Map,'function');
		assert.equal(typeof Set,'function');
		assert.equal(typeof WeakMap,'function');
		assert.equal(typeof WeakSet,'function');
	});

});