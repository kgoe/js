// Object.fromEntries() NS
// converting an Array to an Object

const arr = [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ];
const obj = Object.fromEntries(arr);
console.log(obj); 
// { 0: "a", 1: "b", 2: "c" }
