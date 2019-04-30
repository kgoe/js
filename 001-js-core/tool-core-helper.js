;doc={};


doc.template=
[
`
`
];


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

if ( typeof global !== 'undefined' ) {
  // End
  if ( typeof module !== 'undefined'
    && typeof require !== 'undefined'
    && typeof require.main !== 'undefined'
    && typeof module.exports !== 'undefined'
    && require.main === module
  ) {
    console.log('LOADED : node', __filename);
    console.log('script running itself');
  } else {
    console.log('LOADED : node-module', __filename);
    module.exports = {
      checkEachStringList: checkEachStringList,
      checkTypeRoot: checkTypeRoot,
      getGlobalRoot: getGlobalRoot,
      splitTemplateVariables: splitTemplateVariables,
    };
  }
}
