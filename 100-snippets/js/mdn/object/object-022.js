// Object.create()

// some ok solutions

ocn = Object.create( null );
// create 'null' object (same as before)

ocn.toString = toString;
// since new object lacks method
// then assign it directly from generic version

ocn.toString();
// shows '[object Object]'

console.log('ocn is: ' + ocn);
// shows 'ocn is: [object Object]'

ob={}; ob.pn=ocn; ob.po=oco;
// create a compound object (same as before)

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

showProperties(ob);
// display top-level properties

/*
- po: [object Object]
- pn: [object Object]
*/
