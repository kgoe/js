Reflect.has({x: 0}, 'x'); // true
Reflect.has({x: 0}, 'y'); // false

// returns true for properties in the prototype chain
Reflect.has({x: 0}, 'toString');

// Proxy with .has() handler method
obj = new Proxy({}, {
  has(t, k) {
    return k.startsWith('door');
  },
});
Reflect.has(obj, 'doorbell'); // true
Reflect.has(obj, 'dormitory'); // false
