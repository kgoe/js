// Object.getOwnPropertyDescriptors()

var output = Object.create(
    Object.getPrototypeOf(obj), 
    Object.getOwnPropertyDescriptors(obj) 
);

console.log(output);
