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

ob={}; ob.pn=ocn; ob.po=oco;
// create same compound object again, 
// but create same properties in different order

showProperties( ob );
// display top-level properties
/*
- Error: Cannot convert object to primitive value
Note that neither property gets shown.
*/
