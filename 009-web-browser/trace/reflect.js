;

var log = console.log;

// log(JSON.stringify(getPropertyAndType(Reflect.__proto__)));

/**
 * getPropertyTree
 * @param {*} thatParent
 */
function getPropertyTree(thatParent) {

  /**
   * getPropertyAndType
   * @param {*} theParent
   * @return {*}
   */
  function getPropertyAndType(theParent) {
    var output = [];
    var properties = Object.getOwnPropertyNames(theParent);
    properties.forEach((theValue, theIndex, theArray) => {
      try {
        var type = typeof theParent[theValue];
        var signature = type == 'function' ? theParent[theValue].toString().split('{')[0] : '';
        output.push([theValue, type, signature]);
      } catch (err) {
        var type = '';
        var signature = '';
        output.push([theValue, type, signature]);
      }

    });
    return output;
  }

  var output = {};

  var instance = false;
  var name = thatParent.name;
  if ( typeof thatParent == 'function' ) {
    try {
      instance = new thatParent();
    } catch (err) {
      // verify err is the expected error and then
      instance = false;
    }
    if ( typeof name == 'undefined' ) {
      name = instance.constructor.name;
    }
  }

  if ( typeof name == 'undefined' ) {
    name = thatParent;
  }
  
  output[name] = getPropertyAndType(thatParent);

  if ( typeof thatParent.prototype !== 'undefined' ) {
    output.ptype = getPropertyAndType(thatParent.prototype);
  }

  if ( typeof thatParent.constructor !== 'undefined' ) {
    output.cntrc = getPropertyAndType(thatParent.constructor);
  }

  if ( typeof thatParent.__proto__ !== 'undefined' ) {
    output.proto = getPropertyAndType(thatParent.__proto__);
  }

  log(JSON.stringify(output));
}

// getPropertyTree(Object);
// getPropertyTree(Function);
// getPropertyTree(Number);
// getPropertyTree(Boolean);
// getPropertyTree(String);
// getPropertyTree(Array);
// getPropertyTree(RegExp);
getPropertyTree(Symbol);

// getPropertyTree(Reflect);

log(Function.prototype.__proto__ === Object.prototype);
log(Object.constructor.prototype === Function.prototype);
log(Function.constructor.prototype === Function.prototype);
log(Boolean.constructor.prototype === Function.prototype);
log(Number.constructor.prototype === Function.prototype);
log(String.constructor.prototype === Function.prototype);
log(RegExp.constructor.prototype === Function.prototype);
log(Symbol.constructor.prototype === Function.prototype);
log(Array.constructor.prototype === Function.prototype);
