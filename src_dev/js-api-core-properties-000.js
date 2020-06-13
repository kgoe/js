/**
 * JavaScript API Core Properties
 */
var arrJsApiCoreProperties = [
  'Object',
  'Function',
  'Boolean',
  'Number',
  'String',
  'Symbol',
  'Error',
  'EvalError',
  'InternalError',   // undefined
  'RangeError',
  'ReferenceError',
  'SyntaxError',
  'TypeError',
  'URIError',
  'NativeError',     // undefined
  'Array',
  'JSON',
  'Math',
  'Date',
  'console',
];


/**
 * fn_processArrayTypes
 * @param {array} input
 */
function fn_processArrayTypes( input ) {
  var root = typeof window !== 'undefined' ? window : global;
  if ( Array.isArray(input) ) {
    var len = input.length;
    var idx = 0;
    for ( idx = 0; idx < len; idx ++ ) {
      var item = input[idx];
      var type = typeof root[item];
      if ( type == 'undefined' ) {
        console.log(item, type);
      }
    }
  }
}
fn_processArrayTypes(arrJsApiCoreProperties);