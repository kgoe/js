// js 0000

try {
   var output = [];
   
   // dd js value properties
   output.push(Infinity);
   output.push(NaN);
   output.push(undefined);
   output.push(null);
   
   // dd js function properties
   output.push(eval);
   // output.push(uneval); // expt
   output.push(isFinite);
   output.push(isNaN);
   output.push(parseFloat);
   output.push(parseInt);
   output.push(decodeURI);
   output.push(decodeURIComponent);
   output.push(encodeURI);
   output.push(decodeURIComponent);
   output.push(escape);
   output.push(unescape);
   
   // dd js fundamental objects
   output.push(Object);
   output.push(Function);
   output.push(Boolean);
   output.push(Symbol);
   output.push(Error);
   output.push(EvalError);
   // output.push(InternalError); // expt
   output.push(RangeError);
   output.push(ReferenceError);
   output.push(SyntaxError);
   output.push(TypeError);
   output.push(URIError);
   
   // dd js numbers and dates
   output.push(Number);
   output.push(Math);
   output.push(Date);
   
   console.log (output);
   
} catch( error ) {
   var output = {};
   output.err = 'error';
   output.msg = error
   console.log( output );
}
