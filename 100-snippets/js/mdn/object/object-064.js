// Object.getOwnPropertyDescriptors()

// creating a subclass
/**
 * superclass
 */
function superclass() {}
superclass.prototype = {
  // Define your methods and properties here
};

/**
 * subclass
 */
function subclass() {}
subclass.prototype = Object.create(
    superclass.prototype,
    {
      // Define your methods and properties here
    }
);
