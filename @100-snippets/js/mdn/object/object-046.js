// Object.freeze
// Object.freeze(obj)

const object1 = {
  property1: 42,
};

const object2 = Object.freeze(object1);

object2.property1 = 33;
// Throws an error in strict mode

console.log(object2.property1);
// expected output: 42
