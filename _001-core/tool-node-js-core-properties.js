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

console.log(checkEachStringList(doc.node_global));

doc.Array =
`
length
name
prototype
isArray
from
of
`;

doc.Array_Prototype =
`
length
constructor
concat
pop
push
shift
unshift
slice
splice
includes
indexOf
keys
entries
forEach
filter
map
every
some
reduce
reduceRight
toString
toLocaleString
join
reverse
sort
lastIndexOf
copyWithin
find
findIndex
fill
`;

doc.Function =
`
length
name
prototype
`;

doc.Function_Prototype =
`
length
name
arguments
caller
constructor
apply
bind
call
toString
`;

doc.Number =
`
length
name
prototype
isFinite
isInteger
isNaN
isSafeInteger
parseFloat
parseInt
MAX_VALUE
MIN_VALUE
NaN
NEGATIVE_INFINITY
POSITIVE_INFINITY
MAX_SAFE_INTEGER
MIN_SAFE_INTEGER
EPSILON
`;

doc.Number_Prototype =
`
constructor
toExponential
toFixed
toPrecision
toString
valueOf
toLocaleString
`;

doc.number__proto__ =
`
length',
name',
arguments',
caller',
constructor',
apply',
bind',
call',
toString',
`;

doc.Object =
`
length
name
prototype
assign
getOwnPropertyDescriptor
getOwnPropertyDescriptors
getOwnPropertyNames
getOwnPropertySymbols
is
preventExtensions
seal
create
defineProperties
defineProperty
freeze
getPrototypeOf
setPrototypeOf
isExtensible
isFrozen
isSealed
keys
entries
values
`;

doc.object_properties =
`
constructor
__defineGetter__
__defineSetter__
hasOwnProperty
__lookupGetter__
__lookupSetter__
isPrototypeOf
propertyIsEnumerable
toString
valueOf
__proto__
toLocaleString
`;

doc.object__proto__ =
`
length
name
arguments
caller
constructor
apply
bind
call
toString
`;

