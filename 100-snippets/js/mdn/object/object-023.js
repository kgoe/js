;
// MDN
// Object.create()

// event better

ocn = Object.create( null );
// create "null" object (same as before)

Object.setPrototypeOf(ocn, Object.prototype);
// set new object's prototype to the "generic" object
// (NOT standard-object)
