;doc={};
const log=console.log;
const pring=console.log;
const assert=require('assert');

// js core properties checker
// checks if javascript core properties is supported

var fn_testES6Let = function fn_testES6Let(){
  try {
    let val = 'test';
    if ( val == 'test' ) {
      return true;
    }
  } catch(err) {
    return false;
  }
}

var fn_testES6Const = function fn_testES6Const(){
  try {
    const val = 'test';
    if ( val == 'test' ) {
      return true;
    } else {
      return false;
    }
    
  } catch(err) {
    return false
  }
}

var fn_testES6ArrowFunction = function fn_testES6ArrowFunction(){
  try {
    let fn_arrowFunction = ( input ) => { return input == true; }
    return fn_arrowFunction(true);
  } catch(err) {
    return false;
  }
}

var fn_testES6DefaultParamFunction = function fn_testES6DefaultParamFunction(){
  try {
    let fn_defaultValue = ( input1 = false, input2 = true ) => { return input2; }
    return fn_defaultValue(false);
  } catch(err) {
    return false;
  }
}

var fn_testES6Class = function fn_testES6Class(){
  try {
    class TestClass {
      output = false;
      method = function(){ return true; };
    }
    let instance = new TestClass();
    return instance.method();
  } catch(err) {
    return false;
  }
}

var fn_testES6Module = function fn_testES6Module(){
    try {
    let testModule = typeof module !== 'undefined' && typeof module.exports !== 'undefined';
    
    // export var output = testModule; // not fully supported ?
    
    return testModule;
  } catch(err) {
    return false;
  }
}

var fn_testES6Exponentiation = function fn_testES6Exponentiation(){
  try {
    return 5 ** 2 == 25;
  } catch(err) {
    return false;
  }
}

var fn_testES6StringTemplateLiterals = function fn_testES6StringTemplateLiterals(){
  try {
    let str = "test";
    let output = `hello, ${str}`;
    return output == 'hello, test';
  } catch(err) {
    return false;
  }
}

var fn_testES6StringMultiLine = function fn_testES6StringMultiLine(){
  try {
    let output = 
    `
    this
    is
    a
    multi 
    string
    `;
    
    return output.split('\n').length > 1;
  } catch(err) {
    return false;
  }
}

var fn_testES6DestructuringObj = function fn_testES6DestructuringObj(){
  try {
    let thisObject = {
      property1: 'property1',
      property2: 'property2',
      property3: 'property3'
    };
    
    let { property2, property3 } = thisObject;
    return property3 == 'property3';
  } catch(err) {
    return false;
  }
}

var fn_testES6DestructuringArr = function fn_testES6DestructuringArr(){
  try {
    let thisArr = [1,2,3,4,5];
    let [line1,,,,line5] = thisArr;
    return line5 == 5;
  } catch(err) {
    return false;
  }
}

var fn_testES6EnhancedObjectLiterals = function fn_testES6EnhancedObjectLiterals(){
  try {
    var objTemplate = {
      port: 3000,
      url: 'http://www.google.com',
    };
    var objCopy = Object.create(objTemplate);
    objTemplate.port = 4000;
    return objCopy.port == 4000;
  } catch(err) {
    return false;
  }
}

var fn_testES6Promises = function fn_testES6Promises(){
  try {
    var wait100 = new Promise((res,rej) => { setTimeout(res,100) }).then(()=>{ console.log('after promise'); });
    return true;
  } catch(err) {
    return false;
  }
}

if ( typeof describe == 'function') {
  var root = typeof global !== 'undefined' ? global : window;
  describe('ES6', function() {
    it('ES6 New', function() {
      assert.equal(true, fn_testES6Let());
      assert.equal(true, fn_testES6Const());
      assert.equal(true, fn_testES6ArrowFunction());
      assert.equal(true, fn_testES6DefaultParamFunction());
      assert.equal(true, fn_testES6Class());
      assert.equal(true, fn_testES6Exponentiation());
      assert.equal(true, fn_testES6Module());
      assert.equal(true, fn_testES6StringTemplateLiterals());
      assert.equal(true, fn_testES6StringMultiLine());
      assert.equal(true, fn_testES6DestructuringObj());
      assert.equal(true, fn_testES6DestructuringArr());
      assert.equal(true, fn_testES6EnhancedObjectLiterals());
      assert.equal(true, fn_testES6Promises());
      assert.equal('function', typeof [].find);
      assert.equal('function', typeof Array.prototype.find);
      assert.equal('function', typeof [].findIndex);
      assert.equal('function', typeof Array.prototype.findIndex);
      assert.equal('function', typeof Object.create);
      assert.equal('number', typeof Number.EPSILON);
      assert.equal('number', typeof Number.MIN_SAFE_INTEGER);
      assert.equal('number', typeof Number.MAX_SAFE_INTEGER);
      assert.equal('function', typeof Number.isInteger);
      assert.equal('function', typeof Number.isSafeInteger);
      assert.equal('function', typeof isFinite);
      assert.equal('function', typeof isNaN);
      
    });
  });
} else {
  log('!!! no mocha running !!!');
}

