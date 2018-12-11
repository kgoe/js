// Objects are extensible by default.
var empty = {};
Reflect.isExtensible(empty); // === true

// ...but that can be changed.
Reflect.preventExtensions(empty);
Reflect.isExtensible(empty); // === false
