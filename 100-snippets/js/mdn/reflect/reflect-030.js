// Object
var obj = {};
Reflect.set(obj, 'prop', 'value'); // true
obj.prop; // "value"

// Array
var arr = ['duck', 'duck', 'duck'];
Reflect.set(arr, 2, 'goose'); // true
arr[2]; // "goose"

// It can truncate an array.
Reflect.set(arr, 'length', 1); // true
arr; // ["duck"];

// With just one argument, propertyKey and value are "undefined".
var obj = {};
Reflect.set(obj); // true
Reflect.getOwnPropertyDescriptor(obj, 'undefined');
// { value: undefined, writable: true, enumerable: true, configurable: true }
