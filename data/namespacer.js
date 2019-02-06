;

/**
 * nsCreator
 * @param {string} path
 * @param {*} value
 * @param {*} parent
 * @return {*}
 */
function nsCreator( path, value, parent ) {
  var theParent = typeof parent !== 'undefined' ? parent : typeof global !== 'undefined' ? global : window;
  var thePath = path.split('.');
  var theReference = [];
  var pathContext = false;

  for ( var nsLvl = 0; nsLvl < thePath.length; nsLvl ++ ) {
    if ( nsLvl > 3 ) {
      console.log('info : level > 3');
    }
    pathContext = thePath[nsLvl];

    if ( nsLvl == 0 ) {
      if ( typeof theParent[pathContext] == 'undefined' ) {
        if ( nsLvl == thePath.length - 1 ) {
          theParent[pathContext] = value;
        } else {
          theParent[pathContext] = {};
        }
        theReference[nsLvl] = theParent[pathContext];
      } else {
        theReference[nsLvl] = theParent[pathContext];
      }
    } else {
      if ( typeof theReference[nsLvl - 1][pathContext] == 'undefined' ) {
        if ( nsLvl == thePath.length - 1 ) {
          theReference[nsLvl - 1][pathContext] = value;
        } else {
          theReference[nsLvl - 1][pathContext] = {};
        }
        theReference[nsLvl] = theReference[nsLvl - 1][pathContext];
      } else {
        theReference[nsLvl] = theReference[nsLvl - 1][pathContext];
      }
    }
  }

  return theReference[theReference.length - 1];
}

/**
 * nsChecker
 * @param {string} path
 * @param {*} parent
 * @return {*}
 */
function nsChecker( path, parent ) {
  var theParent = typeof parent !== 'undefined'
    ? parent : typeof global !== 'undefined'
    ? global : window;
  var thePath = path.split('.');
  var theReference = [];
  var pathContext = false;

  for ( var nsLvl = 0; nsLvl < thePath.length; nsLvl ++ ) {
    if ( nsLvl > 3 ) {
      console.log('info : level > 3');
    }
    pathContext = thePath[nsLvl];
    if ( nsLvl == 0 ) {
      theReference[nsLvl] = theParent[pathContext];
    } else {
      theReference[nsLvl] = theReference[nsLvl - 1][pathContext];
    }
    // console.log(pathContext);
    if ( typeof theReference[nsLvl] == 'undefined' ) {
      console.log(pathContext);
      return false;
    } else if ( nsLvl == thePath.length - 1 ) {
      return theReference[nsLvl];
    }
  }
}

// nsCreator('abc.def.ghi', 'testing');

// console.log(abc);

/*
aa = {
  bb: {
    cc: {
      dd: {
        ee: {
          ff: 'test',
        }
      }
    }
  }
};
*/

// console.log(nsChecker('aa.bb.cc.dd.ee.ff'));
