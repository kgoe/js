// Object.getOwnPropertyDescriptor()

Object.getOwnPropertyDescriptor('foo', 0);
// TypeError: "foo" is not an object  // ES5 code

Object.getOwnPropertyDescriptor('foo', 0);
// Object returned by ES2015 code: {
//   configurable: false,
//   enumerable: true,
//   value: "f",
//   writable: false
// }