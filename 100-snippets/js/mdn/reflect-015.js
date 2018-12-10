Reflect.getOwnPropertyDescriptor('foo', 0);
// TypeError: "foo" is not non-null object

Object.getOwnPropertyDescriptor('foo', 0);
// { value: "f", writable: false, enumerable: true, configurable: false }
