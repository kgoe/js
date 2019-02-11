// MDN
// Object.getOwnPropertyNames()
// Notes

Object.getOwnPropertyNames('foo');
// TypeError: "foo" is not an object (ES5 code)

Object.getOwnPropertyNames('foo');
// ["0", "1", "2", "length"]  (ES2015 code)
