;

var output = [];

function testUndefined() {
	 // undefined.prototype.type = 'undefined';
  output.push( typeof notdefined );
  // output.push( undefined != notdefined ); // blocking
  // output.push( notdefined && true ); // blocking
  // output.push( notdefined.property && true ); // blocking
}
testUndefined();

console.log(output);
