/**
 * getPropType
 * @param {*} val
 * @return {object}
 */
function getPropType( val ) {
  var prop = Object.getOwnPropertyNames( val );
  var ll = prop.length;
  var output = {};
  for ( cc = 0; cc < ll; cc++ ) {
    try {
      output[prop[cc]] = typeof val[prop[cc]];
    } catch ( err ) {
      console.log( 'error: ', err, prop[cc] );
      output[prop[cc]] = false;
    }
  }
  return output;
};
