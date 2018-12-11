// Object.fromEntries()
// converting a Map to an Object

const map = new Map([ ['foo', 'bar'], ['baz', 42] ]);
const obj = Object.fromEntries(map);
console.log(obj); 
// { foo: "bar", baz: 42 }
