// Object.create()

// some non solutions
ocn = Object.create( null );
// create "null" object (same as before)

ocn.toString = Object.toString;
// since new object lacks method
// then try assigning it directly from standard-object

ocn.toString;
// shows "toString() { [native code] }" -- missing method seems to be there now

ocn.toString == Object.toString;
// shows "true" -- method seems to be same as the standard object-method

ocn.toString();
// error: Function.prototype.toString
// requires that 'this' be a Function
