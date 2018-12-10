/**
 * MyClass
 * class
 */
function MyClass() {
}

Object.defineProperty(MyClass.prototype, 'x', {
  get() {
    return this.stored_x;
  },
  set(x) {
    this.stored_x = x;
  },
});

var a = new MyClass();
var b = new MyClass();
a.x = 1;
console.log(b.x); // undefined
