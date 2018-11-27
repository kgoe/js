assert = typeof global !== 'undefined' ? require('assert') : assert;

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
            console.log('calling');
            var result = await resolveAfter2seconds();
            console.log(result);
            // expected output: 'resolved'
            return 1;
          }
          asyncCall().then(function( value ){
            console.log(value);
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

  });

  describe('Iterations',function(){

  });

  describe('Others',function(){

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
    
  });

});

describe('Expressions and Operators',function(){
  describe('Primary Expressions',function(){

  });
  describe('Left Hand Side Expressions',function(){

  });
  describe('Increment and Decrement',function(){

  });
  describe('Unary Operators',function(){

  });
  describe('Arithmetic Operators',function(){

  });
  describe('Relational Operators',function(){

  });
  describe('Equality Operators',function(){

  });
  describe('Birwise Shift Operators',function(){

  });
  describe('Binary Bitwise Operators',function(){

  });
  describe('Binary Logical Operators',function(){

  });
  describe('Conditional Ternary Operator',function(){

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

  });
  describe('Arrow Functions',function(){

  });
  describe('Default Parameters',function(){

  });
  describe('Rest Parameters',function(){

  });
});

describe('Additional References',function(){
  describe('Lexical Grammars',function(){}
  );
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
  describe('Deprecated Features',function(){

  });
});

/*
describe('others',function(){
  it('try-catch-finally',function(){
    var theValue = 0;
      try {
        var x = 1;
        var y = 1;
        [ for( x of y ) x ];
        ( for( x of y ) y );
        theValue += 0;
      } catch ( e ) {
        theValue += 3;
      }
    assert.equal(theValue,9);
  });
});
*/