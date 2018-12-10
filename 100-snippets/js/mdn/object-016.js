// custom and null objects

oco = Object.create( {} );
// create a normal object

ocn = Object.create( null );
// create a "null" object

console.log(oco);
// {} -- Seems normal

console.log(ocn);
// {} -- Seems normal here too, so far

oco.p = 1;
// create a simple property on normal obj

ocn.p = 0;
// create a simple property on "null" obj

console.log(oco);
// {p: 1} -- Still seems normal

console.log(ocn);
// {p: 0} -- Still seems normal here too. BUT WAIT...

console.log("oco is: " + oco);
// shows "ocn is: [object Object]"

console.log("ocn is: " + ocn);
// throws error: Cannot convert object to primitive value

alert(oco);
// shows [object Object]

alert(ocn);
// throws error: Cannot convert object to primitive value

oco.toString();
// shows [object Object]

ocn.toString();
// throws error: ocn.toString is not a function

oco.valueOf();
// shows {}

ocn.valueOf();
// throws error: ocn.valueOf is not a function

oco.hasOwnProperty("p");
// shows "true"

ocn.hasOwnProperty("p");
// throws error: ocn.hasOwnProperty is not a function

oco.constructor;
// shows "Object() { [native code] }"

ocn.constructor;
// shows "undefined"