var items = '';


items = items.trim().split('\n');


/**
 * fn_checkArrayProperties
 * @param {array} items 
 */
function fn_checkArrayProperties( items ) {
  if ( Array.isArray(items) ) {
    items.forEach( item => {
      try {
        var root = typeof window !== 'undefined' ? window : global;
        var type = typeof root[item];
        if ( type == 'undefined' ) {
          console.log( item, type );
        }
      } catch ( error ) {
        console.log( 'ERROR ', error);
      }
    } );
  }
}


/**
 * fn_processArrayTypes
 * @param {array} input
 */
function fn_processArrayTypes( input ) {
  var root = typeof window !== 'undefined' ? window : global;
  if ( Array.isArray(input) ) {
    var len = input.length;
    var idx = 0;
    for ( idx = 0; idx < len; idx ++ ) {
      var item = input[idx];
      var type = typeof root[item];
      if ( type == 'undefined' ) {
        console.log(item, type);
      }
    }
  }
}
