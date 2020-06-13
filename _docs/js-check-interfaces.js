var items = '';


items = items.trim().split('\n');


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