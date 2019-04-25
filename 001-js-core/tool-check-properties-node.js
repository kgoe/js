;

var doc = require('./properties-javascript-node.js');

var helper = require('./tool-core-helper.js');

var getGlobalRoot = helper.getGlobalRoot;
var splitTemplateVariables = helper.splitTemplateVariables;

if ( typeof global !== 'undefined' ) {
  main();
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
