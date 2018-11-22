var theOutput = (function iifeEnvDetect(){
  var output = false;
  if ( typeof global !== 'undefined' && typeof module !== 'undefined' && typeof require !== 'undefined' ) {
    if ( require.main === module ) {
      output = 'node';      
    } else {
      output = 'node-module';
    }
  }

  if ( typeof window !== 'undefined' && typeof document !== 'undefined' ) {
    output = 'browser';
    if ( typeof require === 'undefined' ) {
      //require = function( value ) { console.log("%c TO REQUIRE : " + value,"color: ##FF0000;"); }
      require = function( value ) { console.log("TO REQUIRE : " + value); }
    }
  }
  return output;
})();

var filename = typeof __filename !== 'undefined' ? __filename : 'browser';

console.log(theOutput, filename);

var log = console.log;

var rdom = require('./reflect-properties.js');
rdom.prop = Object.getOwnPropertyNames;

//log(rdom.prop(String.prototype));

function getPropType( val ) {
  var prop = Object.getOwnPropertyNames( val );
  var ll = prop.length;
  var output = {};
  for ( cc = 0; cc < ll; cc++ ) {
    try {
      output[prop[cc]] = typeof val[prop[cc]];
    } catch( err ) {
    	 console.log( err , prop[cc]);
    	 output[prop[cc]] = false;
    }
  }
  return output;
}

log(Object.__proto__ == Array.__proto__);




