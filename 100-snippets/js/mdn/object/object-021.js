ocn = Object.create( null );
// create "null" object (same as before)

Object.setPrototypeOf(ocn, Object);
// set new object's prototype to the standard-object

ocn.toString();
// error: Function.prototype.toString
// requires that 'this' be a Function
