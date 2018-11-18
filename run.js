var uu = {};
var log = console.log;
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
uu.reflectProperties = uu.refP

log(uu.refP( Object ));
