/**
 * Func1
 * class
 * @param {*} a
 * @param {*} b
 * @param {*} c
 */
function Func1(a, b, c) {
  this.sum = a + b + c;
}

const args = [1, 2, 3];
const object1 = new Func1(...args);
const object2 = Reflect.construct(Func1, args);

console.log(object2.sum);
// expected output: 6

console.log(object1.sum);
// expected output: 6
