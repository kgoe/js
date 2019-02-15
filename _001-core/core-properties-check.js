;

var doc = require('./20190215-core.js');

if ( typeof global !== 'undefined' ) {
  main();
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

/**
 * splitTemplateVariables
 * @param {string} text
 * @return {array}
 */
function splitTemplateVariables( text ) {
  return text.split('\n').filter((item)=>{
    return item.length > 0;
  });
}

/**
 * main
 */
function main() {
  var root = getGlobalRoot();
  /**
   * forEachLine
   * @param {*} line
   */
  function forEachLine(line) {
    line = line.split('|');
    var theProperty = line[0];
    var theType = typeof line[1] == 'string' ? line[1] : false;
    var typeCheck = (theType) ?
      typeof root[theProperty] == theType :
        typeof root[theProperty] !== 'undefined';

    if ( theProperty == 'null' ) {
      typeCheck = typeof null == theType;
    } else if ( theProperty == 'arguments' ) {
      typeCheck = typeof arguments == theType;
    } else if ( theProperty.indexOf('.') === -1 ) {
      // check without namespace
    } else {
      // todo : check with namespace
    }

    // output
    if ( ! typeCheck ) {
      console.log(theProperty, theType, typeCheck);
    }
  }

  /**
   * forEachCategory
   * @param {*} cat
   */
  function forEachCategory(cat) {
    console.log('>>> Item :', cat);
    var lines = splitTemplateVariables(doc[cat]);
    lines.forEach(forEachLine);
  }

  Object.getOwnPropertyNames(doc).forEach(forEachCategory);
}
