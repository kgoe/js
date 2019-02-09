;

var log = console.log;

// log(Object.prototype);   //{}
// log(Object.constructor); //[Function: Function]
// log(Object.__proto__);   //[Function]
// log(Object.constructor.prototype === Object.__proto__); 
// Object.constructor.prototype === Object.__proto__

// log({}.prototype);   // undefined
// log({}.constructor); // [Function: Object]
// log({}.__proto__);   // {}
// log({}.constructor.prototype); // {}

// log(function(){}.prototype);   // {}
// log(function(){}.constructor); // [Function: Function]
// log(function(){}.__proto__);   // [Function]

// log([].prototype);   // undefined
// log([].constructor); // [Function: Array]
// log([].__proto__);   // []

/**
 * theFunction
 * @param {*} a
 * @param {*} b
 * @param {*} c
 * @param {*} d
 * @param {*} e
 * @return {*}
 */
function theFunction(a, b, c, d, e) {
  var test = true;
  return a + b + c + d + e + test;
}

/**
 * thatFunction
 * @param {*} a
 * @param {*} b
 * @param {*} c
 * @param {*} d
 * @param {*} e
 * @param {*} f
 * @return {*}
 */
function thatFunction(
    a,
    b,
    c,
    d,
    e,
    f,
) {
  var helloWorld = 'hello world';
  return a + b + c + d + e + f + helloWorld;
}

theFunction(1, 2, 3, 4, 5);
thatFunction(1, 2, 3, 4, 5, 6);

// log(theFunction.toString().split('{')[0]);
// log(theFunction.a);
// log(thatFunction.toString().split('{')[0]);
