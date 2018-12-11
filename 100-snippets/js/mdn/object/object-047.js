// Object.freeze()

// Examples : Freezing Objects

var obj = {
  prop: function() {},
  foo: 'bar',
};

// New properties may be added, existing properties may be
// changed or removed
obj.foo = 'baz';
obj.lumpy = 'woof';
delete obj.prop;

// Both the object being passed as well as the returned
// object will be frozen. It is unnecessary to save the
// returned object in order to freeze the original.
var o = Object.freeze(obj);

o === obj; // true
Object.isFrozen(obj); // === true

// Now any changes will fail
obj.foo = 'quux'; // silently does nothing
// silently doesn't add the property
obj.quaxxor = 'the friendly duck';

// In strict mode such attempts will throw TypeErrors
/**
 * fail
 */
function fail() {
  'use strict';
  obj.foo = 'sparky'; // throws a TypeError
  delete obj.foo; // throws a TypeError
  delete obj.quaxxor; // returns true since attribute 'quaxxor' was never added
  obj.sparky = 'arf'; // throws a TypeError
}

fail();

// Attempted changes through Object.defineProperty; 
// both statements below throw a TypeError.
Object.defineProperty(obj, 'ohai', { value: 17 });
Object.defineProperty(obj, 'foo', { value: 'eit' });

// It's also impossible to change the prototype
// both statements below will throw a TypeError.
Object.setPrototypeOf(obj, { x: 20 })
obj.__proto__ = { x: 20 }