;
// MDN
// Object.assign()

// properties will be wrpped to objects
var v1 = 'abc';
var v2 = true;
var v3 = 10;
var v4 = Symbol('foo');

// https://stackoverflow.com/questions/42091600/how-to-merge-object-in-ie-11
var obj = Object.assign({}, v1, null, v2, undefined, v3, v4);
// Primitives will be wrapped, null and undefined will be ignored.
// Note, only string wrappers can have own enumerable properties.
console.log(obj); // { "0": "a", "1": "b", "2": "c" }
