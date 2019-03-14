var theOutput = (function iifeEnvDetect() {
  var output = false;
  if ( typeof global !== 'undefined'
       && typeof module !== 'undefined'
       && typeof require !== 'undefined' ) {
    if ( require.main === module ) {
      output = 'node';
    } else {
      output = 'node-module';
    }
  }

  if ( typeof window !== 'undefined' && typeof document !== 'undefined' ) {
    output = 'browser';
    if ( typeof require === 'undefined' ) {
      /*
      require = function( value ) {
        console.log("%c TO REQUIRE : " + value,"color: ##FF0000;");
      }
      */
      require = function( value ) {
        console.log('TO REQUIRE : ' + value);
      };
    }
  }
  return output;
})();

console.log(theOutput, __filename);

var uu = {};
uu.refP = (function exec() {
  /**
   * reflectProperties
   * @param {*} input
   * @return {*}
   */
  function reflectProperties( input ) {
    var types = [
      'object',
      'function',
    ];
    types.toString();
    return Object.getOwnPropertyNames( input );
  };
  return reflectProperties;
})();
uu.reflectProperties = uu.refP;

if ( theOutput === 'node-module' ) {
  module.exports = uu;
} else {
// log(uu.refP( console ));
// log(fs.readdirSync('/etc'));
// log(fs.readdirSync('/sdcard'));
// //log(fs.readdirSync('/sdcard-ext'));
}
