;

/**
 * checkUndefined
 * @return {*}
 */
function checkUndefined() {
  var output = [];

  try {
    var objectName = 'Object';
    output.push(typeof thisIsUndefined);
    output.push(typeof thisIsUndefined !== 'undefined');
    output.push('thisIsUndefined' in global);
    output.push('Array' in global);
    // output.push(objectName in global);
    // output.push(thisIsUndefined === undefined);
    output.push(false == true);
    console.log(0 == true);
    console.log('' == true);
    console.log(NaN == true);
    console.log(null == true);
    console.log(undefined == true);
  } catch ( err ) {
    console.log('error', err);
  } finally {
    return output;
  }
}

console.log(checkUndefined());
