;

const fs = require('fs');

doc = {};

doc.generate = function generate( obj ) {
  fs.writeFileSync(obj.name, obj.text.toString());
};

doc.gitignore = {
  name: '.gitignore',
  text:
`
node_modules
vendor
.credentials
`
};

doc.generate(doc.gitignore);