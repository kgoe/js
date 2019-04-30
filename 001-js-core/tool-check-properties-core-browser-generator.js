;doc={};


doc.template=
[
`
`
];


const fs = require('fs');

var helper = fs.readFileSync('tool-core-helper.js');

var properties = fs.readFileSync('properties-javascript-core.js');

var tool = fs.readFileSync('tool-check-properties-core.js');

var concatenate =
`
;

${helper}

var root = getGlobalRoot();

;

${properties}

;

${tool}

;
`;

fs.writeFileSync('tool-check-properties-core-browser.js',concatenate);
