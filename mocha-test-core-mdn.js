assert = assert || require('assert');

// https://devdocs.io/javascript/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference

// JavaScriptd

// Global Objects
//// Value Properties
//// Function Properties
//// Fundamental Objects
//// Numbers and Dates
//// Text Processing
//// Indexed Collections
//// Keyed Collections
//// Structured Data
//// Control Abstraction Objects
//// Reflection
//// Internationalization
//// WebAssembly
//// Other

// Statements
//// Control Flow
//// Declarations
//// Functions and Classes
//// Iterations
//// Others

// Exressions and Operators
//// Primary Expressions
//// Left Hand Side Expressions
//// Increment and Decrement
//// Unary Operators
//// Arithmetic Operators
//// Relational Operators
//// Equality Operators
//// Bitwise Shift Operators
//// Binary Bitwise Operators
//// Binary Logical Operators
//// Conditional Ternary Operators
//// Assignment Operators
//// Comma Operators
//// Non Standard Features // Obsolete

// Functions
//// JavaScript functions
//// arguments object
//// Arrow functions
//// Default parameters
//// Rest parameters

// Additional Reference Pages
//// Lexical grammar
//// Data types and Data structures
//// Struct mode
//// Deprecated features

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
  ['String',String,'function'],
  ['RegExp',RegExp,'function'],
  ['Promise',Promise,'function'],
  ['Proxy',Proxy,'function'],
  ['Error',Error,'function'],
  ['EvalError',EvalError,'function'],
  //['InternalError',InternalError,'function'],
  ['RangeError',RangeError,'function'],
  ['ReferenceError',ReferenceError,'function'],
  ['SyntaxError',SyntaxError,'function'],
  ['TypeError',TypeError,'function'],
  ['URIError',URIError,'function'],
];

var coreCollections = [
  ['Array',Array,'function'],
  ['Int8Array',Int8Array,'function'],
  ['Uint8Array',Uint8Array,'function'],
  ['Uint8ClampedArray',Uint8ClampedArray,'function'],
  ['Int16Array',Int16Array,'function'],
  ['Uint16Array',Uint16Array,'function'],
  ['Int32Array',Int32Array,'function'],
  ['Uint32Array',Uint32Array,'function'],
  ['Float32Array',Float32Array,'function'],
  ['Float64Array',Float64Array,'function'],
  ['Map',Map,'function'],
  ['Set',Set,'function'],
  ['WeakMap',WeakMap,'function'],
  ['WeakSet',WeakSet,'function'],
  ['ArrayBuffer',ArrayBuffer,'function'],
  ['SharedArrayBuffer',SharedArrayBuffer,'function'],
  ['DataView',DataView,'function'],
  //['Generator',Generator,'function'],
  //['GeneratorFunction',GeneratorFunction,'function'],
  //['AsyncFunction',AsyncFunction,'function'],
];

var coreObjects = [
  ['Atomics',Atomics,'object'],
  ['console',console,'object'],
  ['Math',Math,'object'],
  ['JSON',JSON,'object'],
  ['JSON',JSON,'object'],
  ['Reflect',Reflect,'object'],
  ['Intl',Intl,'object'],
  ['Intl.Collator',Intl.Collator,'function'],
  ['Intl.DateTimeFormat',Intl.DateTimeFormat,'function'],
  ['Intl.Numberformat',Intl.NumberFormat,'function'],
  ['WebAssembly',WebAssembly,'object'],
  ['WebAssembly.Module',WebAssembly.Module,'function'],
  ['WebAssembly.Instance',WebAssembly.Instance,'function'],
  ['WebAssembly.Memory',WebAssembly.Memory,'function'],
  ['WebAssembly.Table',WebAssembly.Table,'function'],
  ['WebAssembly.CompileError',WebAssembly.CompileError,'function'],
  ['WebAssembly.LinkError',WebAssembly.LinkError,'function'],
  ['WebAssembly.RuntimeError',WebAssembly.RuntimeError,'function'],
  // ['arguments',arguments,'object'], // speciall value inside functions
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
  describe('objects', function() {
    coreObjects.forEach(function(value){
      it(value[0],function(){
        assert.equal(typeof value[1],value[2]);
      });
    });
  });
  describe('collections', function() {
    coreCollections.forEach(function(value){
      it(value[0],function(){
        assert.equal(typeof value[1],value[2]);
      });
    });
  });
  describe('try-catch-finally',function(){
    it('try-catch-finally',function(){
      var theValue = 0;
      try {
        theValue += 2;
        throw("force error");
      } catch ( e ) {
        theValue += 3;
      } finally {
        theValue += 4;
      }
  
      assert.equal(theValue,9);
    });
  });
});