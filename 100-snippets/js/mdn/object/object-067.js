;
// MDN
// Object.getOwnPropertyNames()

/**
 * ParentClass
 * class
 */
function ParentClass() {}
ParentClass.prototype.inheritedMethod = function() {};

/**
 * ChildClass
 * class
 */
function ChildClass() {
  this.prop = 5;
  this.method = function() {};
}
ChildClass.prototype = new ParentClass;
ChildClass.prototype.prototypeMethod = function() {};

console.log(
  Object.getOwnPropertyNames(
    new ChildClass() // ["prop", "method"]
  )
);