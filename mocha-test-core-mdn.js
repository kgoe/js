const assert = require('assert');

/*
describe('js core', function() {
  describe('literals', function() {
    it('number', function() {
      assert.equal(typeof 1, 'number');
    });
    it('string', function() {
      assert.equal(typeof 'test', 'string');
    });
    it('boolean', function() {
      assert.equal(typeof true, 'boolean');
    });
    it('object', function() {
      assert.equal(typeof {}, 'object');
    });
    it('function', function() {
      assert.equal(typeof function(){}, 'function');
    });
    it('undefined', function() {
      assert.equal(typeof undefined, 'undefined');
    });
    it('NaN', function() {
      assert.equal(typeof NaN, 'number');
    });
    it('Infinity', function() {
      assert.equal(typeof Infinity, 'number');
    });
    it('null', function() {
      assert.equal(typeof null, 'object');
    });
  });
});
*/

var coreLiterals = [
  ['number',1,'number'],
  ['string','test','string'],
  ['boolean',true,'boolean'],
  ['boolean',false,'boolean'],
  ['object',{},'object'],
  ['array',[],'object'],
  ['function',function(){},'function'],
  ['undefined',undefined,'undefined'],
  ['infinity',Infinity,'number'],
  ['NaN',NaN,'number'],
  ['null',null,'object'],
];

var coreMethods = [
  ['eval',eval,'function'],
  //['uneval',uneval,'function'],
  ['isFinite',isFinite,'function'],
  ['isNaN',isNaN,'function'],
  ['parseFloat',parseFloat,'function'],
  ['parseInt',parseInt,'function'],
  ['decodeURI',decodeURI,'function'],
  ['encodeURI',encodeURI,'function'],
  ['decodeURIComponent',decodeURIComponent,'function'],
  ['encodeURIComponent',encodeURIComponent,'function'],
  ['escape',escape,'function'],
  ['unescape',unescape,'function'],
];

var coreConstructors = [
  ['Object',Object,'function'],
  ['Function',Function,'function'],
  ['Boolean',Boolean,'function'],
  //['Symnbol',Symnbol,'function'],
  ['Number',Number,'function'],
  ['Date',Date,'function'],
  ['Error',Error,'function'],
  ['EvalError',EvalError,'function'],
  //['InternalError',InternalError,'function'],
  ['RangeError',RangeError,'function'],
  ['ReferenceError',ReferenceError,'function'],
  ['SyntaxError',SyntaxError,'function'],
  ['TypeError',TypeError,'function'],
  ['URIError',URIError,'function'],
];

describe('js core', function() {
  describe('literals', function() {
    coreLiterals.forEach(function(value){
      it(value[0],function(){
        assert.equal(typeof value[1],value[2]);
      });
    });
  });
  describe('methods', function() {
    coreMethods.forEach(function(value){
      it(value[0],function(){
        assert.equal(typeof value[1],value[2]);
      });
    });
  });
  describe('constructors', function() {
    coreConstructors.forEach(function(value){
      it(value[0],function(){
        assert.equal(typeof value[1],value[2]);
      });
    });
  });
});