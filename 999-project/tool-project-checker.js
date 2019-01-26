;

var fs = require('fs');

var files = fs.readdirSync('./../');


/**
 * checkInsideList
 * @param {*} list1
 * @param {*} list2
 * @return {*}
 */
function checkInsideList(list1, list2) {
  if ( Array.isArray(list1) && Array.isArray(list2) ) {
    var list1len = list1.length;
    var set = [];
    var unset =  [];
    for ( itemId = 0; itemId < list1len; itemId ++ ) {
      var theItem = list1[itemId];
      if ( theItem.trim() == '' ) {
        // blank string
      } else {
        if ( list2.indexOf( theItem ) >= 0 ) {
          set.push(theItem);
        } else {
          unset.push(theItem);
        }
      }
    }
    return {
      set: set,
      unset: unset,
    };
  } else {
    return false;
  }
}

var prj = {};

prj.file_config =
`
.dockerignore
.eslintrc
.gitignore
bitbucket-pipelines.yml
docker-compose.debug.yml
docker-compose.yml
Dockerfile
package-lock.json
package.json
`;

prj.file_exec =
`
composer.phar
phpunit.phar
`;

prj.file_entry =
`
index.html
index.php
index.js
test.js
`;

prj.file_readme =
`
README.md
LICENSE
`;

prj.file_dir =
`
.git
node_modules
vendor
public
res
build
src
data
utility
`;

console.log(checkInsideList(prj.file_config.split('\n'), files));

console.log(checkInsideList(prj.file_exec.split('\n'), files));

console.log(checkInsideList(prj.file_entry.split('\n'), files));

console.log(checkInsideList(prj.file_readme.split('\n'), files));

console.log(checkInsideList(prj.file_dir.split('\n'), files));

