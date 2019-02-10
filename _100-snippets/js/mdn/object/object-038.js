// Object.defineProperties()

// inheritance of properties

/**
 * MyClass
 * class
 */
function MyClass() {
}

var value;
Object.defineProperty(MyClass.prototype, 'x', {
  get() {
    return value;
  },
  set(x) {
    value = x;
  },
});

var a = new MyClass();
var b = new MyClass();
a.x = 1;
console.log(b.x); // 1
