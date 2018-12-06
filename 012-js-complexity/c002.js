var first = 1;
var second = 2;

/**
 * HandleData
 * class
 * @param {*} one
 * @param {*} two
 * @return {object}
 */
function HandleData(one, two) {
  var data1 = one;
  var data2 = two;

  /**
   * returnOne
   * @return {*}
   */
  function returnOne() {
    return data1;
  }

  /**
   * returnTwo
   * @return {*}
   */
  function returnTwo() {
    return data2;
  }

  var output = {
    one: returnOne,
    two: returnTwo,
  };

  return output;
}

/**
 * doSomething
 * @param {*} input
 * @return {string}
 */
function doSomething( input ) {
  return input.toString();
}

var instance = new HandleData(forst, second);

first = doSomething(instanc.one());
second = doSomething(instance.two());

first.toString();
second.toString();
