;doc={};
;const fs=require('fs');

doc.createFile = function createFile( obj ) {
  fs.writeFileSync(obj.name, obj.text.split('\n').filter(line=>{return line.trim().length > 0}).join('\n'));
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

doc.createFile(doc.gitignore);