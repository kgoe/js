var obj = {x: 1, y: 2};
Reflect.deleteProperty(obj, 'x'); // true
obj; // { y: 2 }

var arr = [1, 2, 3, 4, 5];
Reflect.deleteProperty(arr, '3'); // true
arr; // [1, 2, 3, , 5]

// Returns true if no such property exists
Reflect.deleteProperty({}, 'foo'); // true

// Returns false if a property is unconfigurable
Reflect.deleteProperty(Object.freeze({foo: 1}), 'foo'); // false
