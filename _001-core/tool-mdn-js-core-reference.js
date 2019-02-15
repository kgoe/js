;

var doc = require('./20190215-core.js');

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
      var type = checkTypeRoot(theItem);
      if ( typeof item[1] !== 'undefined' && type !== 'undefined' && type == item[1] ) {
        set.push(item[0]);
      } else if ( type !== 'undefined' ) {
        set.push(item[0] + ' *');
      } else if ( type == 'undefined' ) {
        unset.push(item[0]);
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



console.log(checkEachStringList(doc.valueProp));

console.log(checkEachStringList(doc.funcProp));

console.log(checkEachStringList(doc.fundamentalObjects));

console.log(checkEachStringList(doc.numbersDates));

console.log(checkEachStringList(doc.textProcessing));

console.log(checkEachStringList(doc.indexedCollections));

console.log(checkEachStringList(doc.keyedCollections));

console.log(checkEachStringList(doc.controlAbstraction));

console.log(checkEachStringList(doc.reflection));

console.log(checkEachStringList(doc.intl));

console.log(checkEachStringList(doc.webassembly));

console.log(checkEachStringList(doc.arguments));
