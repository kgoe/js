var log = console.log;

var uu = {};
uu.refP = (function exec(){
  function reflectProperties( input ){
  	 var types = [
  	   "object",
  	   "function"
  	 ];
  	 return Object.getOwnPropertyNames( input );
  };
  return reflectProperties;
})();
uu.reflectProperties = uu.refP;

var fs = require('fs');

//log(uu.refP( console ));

//log(fs.readdirSync('/etc'));
//log(fs.readdirSync('/sdcard'));
////log(fs.readdirSync('/sdcard-ext'));

/*
// android file system
// http://www.stevesandroidguide.com/android-files/

/root
/etc
/sdcard
/sdcard-ext
/ext-sdcard
/storage
/storage/40F3-509C
/storage/self
/storage/emulated/0
*/
