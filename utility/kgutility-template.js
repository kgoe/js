;doc={};

// general javascript

/**
 * testFunction
 * @param {*} input
 */
function testFunction( input ) {
  console.log(input);
}

/**
 * getGlobalRoot
 * @return {object}
 */
function getGlobalRoot() {
  var output = false;
  output = typeof global !== 'undefined' ?
    global : typeof window !== 'undefined' ?
    window : false;
  return output;
}

if ( typeof global !== 'undefined' ) {
  // node specific javascript

  // End
  if ( typeof module !== 'undefined'
    && typeof require !== 'undefined'
    && typeof require.main !== 'undefined'
    && typeof module.exports !== 'undefined'
    && require.main === module
  ) {
    console.log('LOADED : node', __filename);
    console.log('script running itself');
    testFunction('test function');
  } else {
    console.log('LOADED : node-module', __filename);
    module.exports = {
      testFunction: testFunction,
    };
  }
};
