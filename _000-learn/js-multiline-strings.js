;

var doc = {};

// simple multiline string using template variables
doc.sample1 =
`
one
two
three
`;

/**
 * hereDocHelper
 * @param {*} f
 * @return {string}
 */
function hereDocHelper(f) {
  return f.toString().
      replace(/^[^\/]+\/\*!?/, '').
      replace(/\*\/[^\/]+$/, '');
}

doc.sample2 = hereDocHelper(function() {
/*
Theirs not to make reply,
Theirs not to reason why,
Theirs but to do and die
*/
});

doc.sample3 = function() {
/*
This is some
awesome multi-lined
string using a comment 
inside a function 
returned as a string.
Enjoy the jimmy rigged code.
*/
}.toString().slice(15, -4);

doc.sample4 =
  'my long string...\n' +
  'continue here\n' +
  'and here.';

doc.sample5 =
[
  'line 1',
  'line 2',
  'line 3',
  'line 4'
].join('\n');

console.log(doc.sample5);
