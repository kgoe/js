// Freezing Arrays

let a = [0];
Object.freeze(a); // The array cannot be modified now.

a[0]=1; // fails silently
a.push(2); // fails silently

// In strict mode such attempts will throw TypeErrors
/**
 * fail
 */
function fail() {
  'use strict';
  a[0] = 1;
  a.push(2);
}

fail();