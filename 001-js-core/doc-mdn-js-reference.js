;

/**
 * checkTypeRoot
 * @param {string} value
 * @return {string}
 */
function checkTypeRoot( value ) {
  var root = typeof global !== 'undefined' ? global : window;
  value = value.split('|');
  return typeof root[value[0]];
}

/**
 * checkEachStringList
 * @param {*} input
 * @return {object}
 */
function checkEachStringList( input ) {
  var theArray = input.split('\n');
  var len = theArray.length;
  var set = [];
  var unset = [];

  for ( itemCnt = 0; itemCnt < len; itemCnt ++ ) {
    var theItem = theArray[itemCnt];
    if ( theItem == '' ) {
      // blank string
    } else {
      var item = theItem.split('|');
      if ( checkTypeRoot(theItem) !== 'undefined' ) {
        set.push(item[0]);
      } else {
        unset.push(item[0]);
      }
    }
  }

  return {
    set: set,
    unset: unset,
  };
}

var doc = {};

doc.valueProp =
`
Infinity
NaN
undefined
null
`;

doc.funcProp =
`
eval|function
uneval|undefined
isFinite|function
isNaN|function
parseFloat|function
parseInt|function
decodeURI|function
decodeURIComponent|function
encodeURI|function
encodeURIComponent|function
escape|function
unescape|function
`;

doc.fundamentalObjects =
`
Object|function
Function|function
Boolean|function
Symbol|function
Error|function
EvalError|function
InternalError|undefined
RangeError|function
ReferenceError|function
SyntaxError|function
TypeError|function
URIError|function
`;

doc.numbersDates =
`
Number|function
Math|object
Date|function
`;

doc.textProcessing =
`
String|function
RegExp|function
`;

doc.indexedCollections =
`
Array|function
Int8Array|function
Uint8Array|function
Uint8ClampedArray|function
Int16Array|function
Uint16Array|function
Int32Array|function
Uint32Array|function
Float32Array|function
Float64Array|function
`;

doc.keyedCollections =
`
Map|function
Set|function
WeakMap|function
WeakSet|function
`;

doc.controlAbstraction =
`
Promise|function
Generator|undefined
GeneratorFunction|undefined
AsyncFunction|undefined
`;

doc.reflection =
`
Reflect
Proxy
`;

// Intl

// WebAssembly

// arguments

console.log(checkEachStringList(doc.valueProp));

console.log(checkEachStringList(doc.funcProp));

console.log(checkEachStringList(doc.fundamentalObjects));

console.log(checkEachStringList(doc.numbersDates));

console.log(checkEachStringList(doc.textProcessing));

console.log(checkEachStringList(doc.indexedCollections));

console.log(checkEachStringList(doc.keyedCollections));

console.log(checkEachStringList(doc.controlAbstraction));

console.log(checkEachStringList(doc.reflection));
