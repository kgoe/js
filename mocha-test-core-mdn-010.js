const assert = require('assert');

describe('Statements',function(){
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