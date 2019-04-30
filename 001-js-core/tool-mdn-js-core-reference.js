;doc={};


doc.template=
[
`
`
];


var doc = require('./properties-javascript-core.js');

var helper = require('./tool-core-helper.js');

var checkEachStringList = helper.checkEachStringList;

console.log(checkEachStringList(doc.valueProp));

console.log(checkEachStringList(doc.funcProp));

console.log(checkEachStringList(doc.fundamentalObjects));

console.log(checkEachStringList(doc.numbersDates));

console.log(checkEachStringList(doc.textProcessing));

console.log(checkEachStringList(doc.indexedCollections));

console.log(checkEachStringList(doc.keyedCollections));

console.log(checkEachStringList(doc.controlAbstraction));

console.log(checkEachStringList(doc.reflection));

console.log(checkEachStringList(doc.intl));

console.log(checkEachStringList(doc.webassembly));

console.log(checkEachStringList(doc.arguments));
