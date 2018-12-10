// Object.create Polyfill for version < ES5

if (typeof Object.create !== 'function') {

  /**
   * Object.create
   * @param {*} proto
   * @param {*} propertiesObject
   * @return {functtion}
   */
  Object.create = function(proto, propertiesObject) {
    if (typeof proto !== 'object' && typeof proto !== 'function') {
      throw new TypeError('Object prototype may only be an Object: ' + proto);
    } else if (proto === null) {
      var errorText = 'This browser\'s implementation of Object.create '+
      'is a shim and doesn\'t support \'null\' as the first argument.';
      throw new Error(errorText);
    }

    if (typeof propertiesObject != 'undefined') {
      var errorText = 'This browser\'s implementation of Object.create '+
      'is a shim and doesn\'t support a second argument.';
      throw new Error(errorText);
    }

    /**
     * F
     */
    function F() {}
    F.prototype = proto;

    return new F();
  };
}
