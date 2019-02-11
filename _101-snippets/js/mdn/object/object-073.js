// MDN
// Object.getPrototypeOf()

var proto = {};
var obj = Object.create(proto);
Object.getPrototypeOf(obj) === proto;
// true
