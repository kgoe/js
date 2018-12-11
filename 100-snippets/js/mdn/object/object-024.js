// Object.create()

// event better

ocn = Object.create( null );
// create 'null' object (same as before)

Object.setPrototypeOf(ocn, Object.prototype);
// set new object's prototype to the 'generic' object
// (NOT standard-object)

ocn.valueOf();
// shows {}

ocn.hasOwnProperty('x');
// shows 'false'

ocn.constructor;
// shows 'Object() { [native code] }'

// ...and all the rest of the properties and methods of Object.prototype.
