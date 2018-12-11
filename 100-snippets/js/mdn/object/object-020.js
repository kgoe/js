ocn = Object.create( null );
// create "null" object (same as before)

ocn.prototype.toString = Object.toString;
// Error: Cannot set property 'toString' of undefined

ocn.prototype = {};
// try to create a prototype

ocn.prototype.toString = Object.toString;
// since new object lacks method
// then try assigning it from standard-object

ocn.toString();
// error: ocn.toString is not a function
