assert = typeof global !== 'undefined' ? require('assert') : assert;

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

//*
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
//*/

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
  ['eval','eval','function'],
  //['uneval','uneval','function'], // err n10.13.0
  ['isFinite','isFinite','function'],
  ['isNaN','isNaN','function'],
  ['parseFloat','parseFloat','function'],
  ['parseInt','parseInt','function'],
  ['decodeURI','decodeURI','function'],
  ['encodeURI','encodeURI','function'],
  ['decodeURIComponent','decodeURIComponent','function'],
  ['encodeURIComponent','encodeURIComponent','function'],
  ['escape','escape','function'],
  ['unescape','unescape','function'],
];

var coreConstructors = [
  ['Object','Object','function'],
  ['Function','Function','function'],
  ['Boolean','Boolean','function'],
  //['Symnbol','Symnbol','function'], // err n10.13.0
  ['Number','Number','function'],
  ['Date','Date','function'],
  ['String','String','function'],
  ['RegExp','RegExp','function'],
  ['Promise','Promise','function'],
  ['Proxy','Proxy','function'],
  ['Error','Error','function'],
  ['EvalError','EvalError','function'],
  //['InternalError','InternalError','function'], // err n10.13.0
  ['RangeError','RangeError','function'],
  ['ReferenceError','ReferenceError','function'],
  ['SyntaxError','SyntaxError','function'],
  ['TypeError','TypeError','function'],
  ['URIError','URIError','function'],
];

var coreCollections = [
  ['Array','Array','function'],
  ['Int8Array','Int8Array','function'],
  ['Uint8Array','Uint8Array','function'],
  ['Uint8ClampedArray','Uint8ClampedArray','function'],
  ['Int16Array','Int16Array','function'],
  ['Uint16Array','Uint16Array','function'],
  ['Int32Array','Int32Array','function'],
  ['Uint32Array','Uint32Array','function'],
  ['Float32Array','Float32Array','function'],
  ['Float64Array','Float64Array','function'],
  ['Map','Map','function'],
  ['Set','Set','function'],
  ['WeakMap','WeakMap','function'],
  ['WeakSet','WeakSet','function'],
  ['ArrayBuffer','ArrayBuffer','function'],
  //['SharedArrayBuffer','SharedArrayBuffer','function'], // err n8.9
  ['DataView','DataView','function'],
  //['Generator','Generator','function'], // err n10.13.0
  //['GeneratorFunction','GeneratorFunction','function'], // err n10.13.0
  //['AsyncFunction','AsyncFunction','function'], // err n10.13.0
];

var coreObjects = [
  //['Atomics','Atomics','object'], // err n8.9
  ['console','console','object'],
  ['Math','Math','object'],
  ['JSON','JSON','object'],
  ['JSON','JSON','object'],
  ['Reflect','Reflect','object'],
  //['Intl','Intl','object'], // err n8.9
  //['Intl.Collator',Intl.Collator,'function'],
  //['Intl.DateTimeFormat',Intl.DateTimeFormat,'function'],
  //['Intl.Numberformat',Intl.NumberFormat,'function'],
  ['WebAssembly','WebAssembly','object'],
  ['WebAssembly.Module',WebAssembly.Module,'function'],
  ['WebAssembly.Instance',WebAssembly.Instance,'function'],
  ['WebAssembly.Memory',WebAssembly.Memory,'function'],
  ['WebAssembly.Table',WebAssembly.Table,'function'],
  ['WebAssembly.CompileError',WebAssembly.CompileError,'function'],
  ['WebAssembly.LinkError',WebAssembly.LinkError,'function'],
  ['WebAssembly.RuntimeError',WebAssembly.RuntimeError,'function'],
  //['arguments','arguments','object'], // err n10.13.0 special value inside functions
];

var theRoot = undefined;
if ( typeof global !== 'undefined' ) {
  theRoot = global;
}

if ( typeof window !== 'undefined' ) {
  theRoot = window;
}

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
        assert.equal(typeof theRoot[value[1]],value[2]);
      });
    });
  });
  describe('constructors', function() {
    coreConstructors.forEach(function(value){
      it(value[0],function(){
        assert.equal(typeof theRoot[value[1]],value[2]);
      });
    });
  });
  describe('objects', function() {
    coreObjects.forEach(function(value){
      it(value[0],function(){
        var check = undefined;
        if ( typeof value[1] == 'string' ) {
          check = theRoot[value[1]];
        } else if ( typeof value[1] !== 'undefined' ) {
          check = value[1];
        }
        assert.equal(typeof check,value[2]);
      });
    });
  });
  describe('collections', function() {
    coreCollections.forEach(function(value){
      it(value[0],function(){
        assert.equal(typeof theRoot[value[1]],value[2]);
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

describe('Statements',function(){

  describe('Control Flow',function(){
    it('block',function(){
      var theValue = 0;
        try {
          {
          var x = 1;
          var y = 1;
          }
        } catch ( e ) {
          theValue += 3;
        }
      assert.equal(theValue,0);
    });
    it('break',function(){
      var theValue = 0;
        try {
          for ( var counter = 0; counter < 5; counter ++ ) {
            theValue += counter;
            if ( counter == 2 ) {
              break;
            }
          }
        } catch ( e ) {
          theValue += 3;
        }
      assert.equal(theValue,3);
    });
    it('continue',function(){
      var theValue = 0;
        try {
          for ( var counter = 0; counter < 5; counter ++ ) {
            if ( counter == 2 ) {
              continue;
            }
            theValue += counter;
          }
        } catch ( e ) {
          theValue += 3;
        }
      assert.equal(theValue,8);
    });
  
    it('Empty',function(){
      var theValue = 0;
        try {
          var array1 = [1, 2, 3];
          // Assign all array values to 0
          for (i = 0; i < array1.length; array1[i++] = 0) /* empty statement */ ;
          theValue = 1;
        } catch ( e ) {
          theValue += 3;
        }
      assert.equal(theValue,1);
    });
  
    it('if...else',function(){
      var theValue = 0;
        try {
          if ( false ) {
            theValue = 1;
          } else if ( false ) {
            thValue = 3;
          } else {
            theValue = 2;
          }
        } catch ( e ) {
          theValue += 3;
        }
      assert.equal(theValue,2);
    });
  
    it('switch',function(){
      var theValue = 0;
        try {
          var item = 'b';
          switch( item ) {
            case 'a' :
              theValue = 1;
            case 'z' :
              theValule += 10;
              break;
            case 'd' :
            case 'e' :
            case 'b' :
            case 'y' :
              theValue += 2;
            case 'x' :
              theValue += 3;
              break;
            default:
              theValue = 111;
              break;
          }
        } catch ( e ) {
          theValue += 3;
        }
      assert.equal(theValue,5);
    });
  
    it('try-throw-catch-finally',function(){
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

  describe('Declarations',function(){
    it('var',function(){
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
    it('let',function(){
      let theValue = 0;
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
    it('const',function(){
        var output = false;
        try {
          const theValue = 2;
          output = theValue;
        } catch ( e ) {
          const theValue = 3;
          output = theValue;
        } finally {
          output += 4;
        }
        assert.equal(output,6);
    });
  });

  describe('Functions and Classes',function(){

    it('function return',function(){
      var theValue = 0;
        try {
          function test(){
            return 1;
          }
          theValue += test();
        } catch ( e ) {
          theValue += 3;
        } finally {
          theValue += 4;
        }
      assert.equal(theValue,5);
    });

    it('function* generator',function(){
      var theValue = 0;
        try {
          function* test(i){
            yield i;
            yield i + 5;
          }
          var gen = test(theValue)
          theValue += gen.next().value;
        } catch ( e ) {
          theValue += 5;
        } finally {
          theValue += 4;
        }
      assert.equal(theValue,4);
    });

    it('async function',function(done){
      var theValue = 0;
        try {
          function resolveAfter2seconds(){
            return new Promise(resolve => {
              setTimeout(() => {
                resolve('resolved');
              }, 500);
            });
          }
          async function asyncCall(){
            //console.log('calling');
            var result = await resolveAfter2seconds();
            //console.log(result);
            // expected output: 'resolved'
            return 1;
          }
          asyncCall().then(function( value ){
            //console.log(value);
            done();
          });
          theValue += 1;
        } catch ( e ) {
          theValue += 3;
        } finally {
          theValue += 4;
        }
      assert.equal(theValue,5);
    });

    it('class',function(){
      var theValue = 0;
        try {
          class Polygon {
            constructor(height, width) {
              this.area = height * width;
            }
          }         
          //console.log(new Polygon(4,3).area);
          function test(){
            return 1;
          }
          theValue += test();
          theValue += new Polygon(4,3).area;
        } catch ( e ) {
          theValue += 5;
        } finally {
          theValue += 4;
        }
      assert.equal(theValue,17);
    });

  });

  describe('Iterations',function(){

    it('do ... while',function(){
      var theValue = 0;
      try {

        var result = "";
        var i = 0;
        
        do {
          i = i + 1;
          result = result + i;
        } while (i < 5);
        
        //console.log(result);

        theValue += 1;
      } catch ( e ) {
        theValue += 3;
      } finally {
        theValue += 4;
      }
      assert.equal(theValue,5);
    });

    it('for',function(){
      var theValue = 0;
      try {
        var str = "";
        for (var i = 0; i < 9; i++) {
          str = str + i;
        }
        //console.log(str);

        theValue += 1;
      } catch ( e ) {
        theValue += 3;
      } finally {
        theValue += 4;
      }
      assert.equal(theValue,5);
    });

    it.skip('x for each...in deprecated',function(){
      var theValue = 0;
      try {
        // deprecated
        theValue += 1;
      } catch ( e ) {
        theValue += 3;
      } finally {
        theValue += 4;
      }
      assert.equal(theValue,5);
    });

    it('for ... in',function(){
      var theValue = 0;
      try {
        var string1 = "";
        var object1 = {a: 1, b: 2, c: 3};
        for (var property1 in object1) {
          string1 += object1[property1];
        }
        //console.log(string1);

        theValue += 1;
      } catch ( e ) {
        theValue += 3;
      } finally {
        theValue += 4;
      }
      assert.equal(theValue,5);
    });

    it('for ... of',function(){
      var theValue = 0;
      try {
        function* foo(){
          yield 1;
          yield 2;
        }
        
        for (let o of foo()) {
          //console.log(o);
          // expected output: 1
          break; // closes iterator, triggers return
        }

        theValue += 1;
      } catch ( e ) {
        theValue += 3;
      } finally {
        theValue += 4;
      }
      assert.equal(theValue,5);
    });

    it.skip('x for await ... of',function(){
      var theValue = 0;
      try {
        //debugger;
        theValue += 1;
      } catch ( e ) {
        theValue += 3;
      } finally {
        theValue += 4;
      }
      assert.equal(theValue,5);
    });

    it('while',function(){
      var theValue = 0;
      try {
        var n = 0;
        while (n < 3) {
          n++;
        }
        //console.log(n);
        theValue += 1;
      } catch ( e ) {
        theValue += 3;
      } finally {
        theValue += 4;
      }
      assert.equal(theValue,5);
    });

  });

  describe('Others',function(){

    it('strict',function(){
      var theValue = 0;
      try {
        "use strict";
        theValue += 1;
      } catch ( e ) {
        theValue += 3;
      } finally {
        theValue += 4;
      }
      assert.equal(theValue,5);
    });

    it('debugger',function(){
      var theValue = 0;
      try {
        debugger;
        theValue += 1;
      } catch ( e ) {
        theValue += 3;
      } finally {
        theValue += 4;
      }
      assert.equal(theValue,5);
    });

    it('x export',function(){
      var theValue = 0;
      try {
        //export {};
        //exports {};
        theValue += 1;
      } catch ( e ) {
        theValue += 3;
      } finally {
        theValue += 4;
      }
      assert.equal(theValue,5);
    });

    it('x import',function(){
      var theValue = 0;
      try {
        //import {};
        //import {};
        theValue += 1;
      } catch ( e ) {
        theValue += 3;
      } finally {
        theValue += 4;
      }
      assert.equal(theValue,5);
    });

    it('x future proof',function(){
      var theValue = 0;
      try {
        //implements
        //interface
        //let
        //package
        //private
        //protected
        //public
        //static
        //yield
        theValue += 1;
      } catch ( e ) {
        theValue += 3;
      } finally {
        theValue += 4;
      }
      assert.equal(theValue,5);
    });

    it('x import.meta',function(){
      var theValue = 0;
      try {
        //console.log(import.meta);
        theValue += 1;
      } catch ( e ) {
        theValue += 3;
      } finally {
        theValue += 4;
      }
      assert.equal(theValue,5);
    });

    it('label',function(){
      var theValue = 0;
      try {
        var str = "";

        loop1:
        for (var i = 0; i < 5; i++) {
          if (i === 1) {
            continue loop1;
          }
          str = str + i;
        }
        
        //console.log(str);
        theValue += 1;
      } catch ( e ) {
        theValue += 3;
      } finally {
        theValue += 4;
      }
      assert.equal(theValue,5);
    });

    it('with',function(){
      var theValue = 0;
      try {
        with(theValue);
        theValue += 1;
      } catch ( e ) {
        theValue += 3;
      } finally {
        theValue += 4;
      }
      assert.equal(theValue,5);
    });

  });

});

describe('Expressions and Operators',function(){

  describe('Primary Expressions',function(){
    it('this',function(){
      assert.equal(typeof this,'object');
    });
    it('function',function(){
      assert.equal(typeof function test(){},'function');
    });
    it('class',function(){
      assert.equal(typeof class test{},'function');
    });
    it('function*',function(){
      assert.equal(typeof function* test(){},'function');
    });
    it('function*',function(){
      assert.equal(typeof function* test(i){yield i;},'function');
    });
    it('async yield',function(){
      assert.equal(typeof function* test(i){yield* i;},'function');
    });
    it('async function',function(){
      assert.equal(typeof async function test(){},'function');
    });
    it('async await',function(){
      assert.equal(typeof async function test(){await {};},'function');
    });
    it('[]',function(){
      assert.equal(typeof [],'object');
    });
    it('{}',function(){      
      assert.equal(typeof {},'object');
    });
    it('regexp',function(){
      assert.equal(typeof /ab+c/i,'object');
    });
    it.skip('()',function(){
      //assert.equal(typeof (),'object');
    });
  });

  describe('Left Hand Side Expressions',function(){
    
    it('property accessor',function(){
      assert.equal(typeof JSON.parse,'function');
    });

    it('property accessor',function(){
      assert.equal(typeof JSON['parse'],'function');
    });
    
    it('new',function(){
      assert.equal(typeof new Object(),'object');
    });
    
    it('new.target',function(){
      function Foo() {
        if (!new.target) throw 'Foo() must be called with new';
      }
      
      try {
        Foo();
        //var foo = new Foo();
      } catch( err ) {
        console.log(err);
      }
      assert.equal(typeof Foo,'function');
    });

    it.skip('super',function(){
      //assert.equal(super.name,'function');
    });

    it('... spread',function(){
      var theValue = 0;
      try {
        function sum(x, y, z) {
          return x + y + z;
        }
        const numbers = [1, 2, 3];
        //console.log(sum(...numbers));
        // expected output: 6
        //console.log(sum.apply(null, numbers));

        theValue += sum(...numbers);
      } catch ( e ) {
        theValue += 3;
      } finally {
        theValue += 4;
      }
      assert.equal(theValue,10);
    });

  });

  describe('Increment and Decrement',function(){
    var ii = 1;
    
    // post increment
    it('A++',function(){
      assert.equal(ii++,1);
    });

    // post decrement
    it('A--',function(){
      assert.equal(ii--,2);
    });

    // pre increment
    it('++A',function(){
      assert.equal(++ii,2);
    });

    // pre decrement
    it('--A',function(){
      assert.equal(--ii,1);
    });
  });

  describe('Unary Operators',function(){

    it('delete',function(){
      var theValue = 0;
      try {
        var obj = {};
        obj.test = 'test';
        delete obj.test;
        var Employee = {
          firstname: "Mohammed",
          lastname: "Haddad"
        }
        delete Employee.firstname;       
        theValue += 1;
      } catch ( e ) {
        theValue += 3;
      } finally {
        theValue += 4;
      }
      assert.equal(theValue,5);
    });

    it('void operator',function(){
      var theValue = 0;
      try {
        void function test() {
          //console.log('boo!');
          // expected output: "boo!"
        }();
        
        try {
          test();
        }
        catch(e) {
          //console.log(e);
          // expected output: ReferenceError: test is not defined
        }
        theValue += 1;
      } catch ( e ) {
        theValue += 3;
      } finally {
        theValue += 4;
      }
      assert.equal(theValue,5);
    });

    it('typeof',function(){
      assert.equal(typeof {},'object');
    });

  });

  describe('Arithmetic Operators',function(){
    var ii = 0;

    it('+',function(){
      assert.equal(ii+1,1);
    });
    
    it('-',function(){
      assert.equal(ii-1,-1);
    });

    it('/',function(){
      ii = ii+10;
      assert.equal(ii/2,5);
    });

    it('/',function(){
      ii = 1 * 10
      assert.equal(ii*5,50);
    });

    it('%',function(){
      ii = 1 * 10
      assert.equal(ii%2,0);
    });

    it('**',function(){
      ii = 1 * 10
      assert.equal(ii**3,1000);
    });

  });

  describe('Relational Operators',function(){

    it('in',function(){
      var car = {make: 'Honda', model: 'Accord', year: 1998};
      //console.log('make' in car);
      // expected output: true
      delete car.make;
      if ('make' in car === false) {
        car.make = 'Suzuki';
      }
      //console.log(car.make);
      assert.equal(car.make,'Suzuki');
    });

    it('instanceof',function(){
      function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
      }
      var auto = new Car('Honda', 'Accord', 1998);
      //console.log(auto instanceof Car);
      // expected output: true
      //console.log(auto instanceof Object);
      // expected output: true
      //console.log(car.make);
      assert.equal(auto instanceof Car,true);
    });

    it('comparisons',function(){
      assert.equal(1 == 1,true);
      assert.equal("1" == 1,true);
      assert.equal(1 === 1,true);
      assert.equal("1" === 1,false);
      //assert.equal(5 < 6,true);
      //assert.equal(5 > 4,true);
      //assert.equal(5 <= 5,true);
      //assert.equal(5 >= 2,true);
    });

  });

  describe('Equality Operators',function(){
    it('comparisons',function(){
      //assert.equal(1 == 1,true);
      //assert.equal("1" == 1,true);
      //assert.equal(1 === 1,true);
      //assert.equal("1" === 1,false);
      assert.equal(5 < 6,true);
      assert.equal(5 > 4,true);
      assert.equal(5 <= 5,true);
      assert.equal(5 >= 2,true);
    });
  });

  describe('Birwise Shift Operators',function(){
    it('bitwise operators',function(){
      assert.equal(5 & 13,5);
      assert.equal(parseInt("0101",2) & parseInt("1101",2),5);
      assert.equal(5 & 13 & 3,1);
      assert.equal(5 | 13,13);
    });
    it('bninary bitwise operators',function(){
      assert.equal(5 ^ 2,7);
      assert.equal(1 << 5,32);
      assert.equal(5 >> 5,-0);
      assert.equal(11 >>> 1,5);
    });
    it('bninary logical operators',function(){
      var a = 3;
      var b = -2;
      assert.equal(a > 0 && b > 0,false);
      assert.equal(a > 0 || b > 0,true);
      assert.equal(!(a > 0 || b > 0),false);
    });
  });

  describe('Conditional Ternary Operator',function(){
    it('ternary operators',function(){
      function getFee(isMember) {
        return (isMember ? "$2.00" : "$10.00");
      }
      
      //console.log(getFee(true));
      // expected output: "$2.00"
      assert.equal(getFee(true),"$2.00");
      
      //console.log(getFee(false));
      // expected output: "$10.00"
      assert.equal(getFee(false),"$10.00");
      
      //console.log(getFee(1));
      assert.equal(getFee(1),"$2.00");
    });
  });
  
  describe('Assignment Operators',function(){

  });

  describe('Comma Operators',function(){

  });

  describe('Non Standard Features',function(){

  });

});

describe('Functions',function(){

  describe('arguments',function(){
    it('arguments',function(){
      function checkArguments(){
        return typeof arguments;
      }

      assert.equal(checkArguments(),'object');
    });
  });

  describe('arguments2',function(){
    it('arguments2',function(){
      function func1(a, b, c) {
        //console.log(arguments[0]);
        // expected output: 1
      
        //console.log(arguments[1]);
        // expected output: 2
      
        //console.log(arguments[2]);
        // expected output: 3
        return JSON.stringify(arguments);
      }
      
      func1(1, 2, 3);
      assert.equal(func1(1, 2, 3),'{"0":1,"1":2,"2":3}');

      
    });
  });

  describe('Arrow Functions',function(){
    it('()=>{}',function(){
      var value = (()=>{return 365;})()
      assert.equal(value,365);
    });
  });

  describe('Default Parameters',function(){
    it('Default Parameters',function(){
      function multiply(a, b = 1) {
        return a * b;
      }
      
      //console.log(multiply(5, 2));
      assert.equal(multiply(5, 2),10);
      // expected output: 10
      
      //console.log(multiply(5));
      assert.equal(multiply(5),5);
      // expected output: 5
    });
  });

  describe('Rest Parameters',function(){
    it('Rest Parameters',function(){
      function sum(...theArgs) {
        return theArgs.reduce((previous, current) => {
          return previous + current;
        });
      }
      
      //console.log(sum(1, 2, 3));
      assert.equal(sum(1, 2, 3),6);
      // expected output: 6
      
      //console.log(sum(1, 2, 3, 4));
      assert.equal(sum(1, 2, 3, 4),10);
      // expected output: 10
    });
  });

  describe('setter',function(){
    it('set',function(){
      var language = {
        set current(name) {
          this.log.push(name);
        },
        log: []
      }
      
      language.current = 'EN';
      language.current = 'FA';
      
      //console.log(language.log);
      assert.equal(language.log.toString(),'EN,FA');

    });
  });

  describe('getter',function(){
    it('get',function(){
      var obj = {
        log: ['a', 'b', 'c'],
        get latest() {
          if (this.log.length == 0) {
            return undefined;
          }
          return this.log[this.log.length - 1];
        }
      }
      
      // console.log(obj.latest);
      // expected output: "c"
      assert.equal(obj.latest,'c');

    });
  });


});

describe('Additional References',function(){

  describe('Lexical Grammars',function(){
  });

  describe('Data Types and Data Structures',function(){
    it('boolean',function(){
      assert.equal(typeof true,'boolean');
      assert.equal(typeof false,'boolean');
    });
    it('null',function(){
      assert.equal(typeof null,'object');
    });
    it('undefined',function(){
      assert.equal(typeof undefined,'undefined');
    });
    it('number',function(){
      assert.equal(typeof 12345,'number');
    }); 
    it('string',function(){
      assert.equal(typeof 'hello','string');
    });
    it('symbol',function(){
      assert.equal(typeof Symbol(),'symbol');
    });  
    it('object',function(){
      assert.equal(typeof {},'object');
    });  
    it('array',function(){
      assert.equal(typeof [],'object');
    }); 
    it('JSON',function(){
      assert.equal(typeof JSON,'object');
    });   
  });

  describe('Strict Mode',function(){

  });

  describe('Template Literals',function(){
    describe('template literals',function(){
      it('template literals',function(){
        var literals = `string text ${1 + 2} string text`;
        assert.equal(literals,'string text 3 string text');
      });
    });
  });

  describe('Deprecated Features',function(){

  });

});
