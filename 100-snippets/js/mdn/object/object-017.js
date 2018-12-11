;
// MDN
// Object.create()

// debug function
// display top-level property name:value pairs of given object

oco = Object.create( {} );
// create a normal object

ocn = Object.create( null );
// create a "null" object

/**
 * showProperties
 * @param {*} b
 */
function showProperties( b ) {
  if ( typeof b !== 'undefined' ) {
    for ( var i in b ) {
      if ( typeof i !== 'undefined' ) {
        console.log( i + ': ' + b[i] + '\n' );
      }
    }
  }
}

ob={}; ob.po=oco; ob.pn=ocn;
// create a compound object using the test objects from above as property values

showProperties( ob );
// display top-level properties
/*
- po: [object Object]
- Error: Cannot convert object to primitive value
- Note that only first property gets shown.
*/
