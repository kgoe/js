var first = 1;
var second = 2;

/**
 * doSomething
 * @param {*} input
 * @return {string}
 */
function doSomething( input ) {
  return input.toString();
}

first = doSomething(first.toString());
second = doSomething(second.toString());

first.toString();
second.toString();
