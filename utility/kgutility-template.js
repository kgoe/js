;

if ( typeof global !== 'undefined' ) {
  /**
   * testFunction
   * @param {*} input
   */
  function testFunction( input ) {
    console.log(input);
  }

  // End
  if ( typeof module !== 'undefined'
    && typeof require !== 'undefined'
    && typeof require.main !== 'undefined'
    && typeof module.exports !== 'undefined'
    && require.main === module
  ) {
    console.log('LOADED : node', __filename);
    testFunction('script running itself');
  } else {
    console.log('LOADED : node-module', __filename);
    module.exports = {
      testFunction: testFunction,
    };
  }
};
