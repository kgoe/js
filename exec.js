;

const fs = require('fs');
const emmet = require('emmet');
const kutility = require('./utility/utility.js');
const kcheck = require('./999-project/tool-project-checker.js');

var html1 = emmet.expandAbbreviation('html>(head>(title))+(body>(header{test}+main{test}+footer{test}))');

// console.log(html1.replace(/\$\{0\}/g,''));
// puppeteer : android : platform not supported
// const m1 = require('./009-frontend/tool-emmet-puppeteer-001.js');
// console.log(kutility);
