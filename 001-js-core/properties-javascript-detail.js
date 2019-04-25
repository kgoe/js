;

var doc = {};

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

// End
if ( typeof global !== 'undefined' ) {
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
    module.exports = doc;
  }
};
