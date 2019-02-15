;

/*
todo
list all standard files in the project
*/

var doc = {};

doc.files = {};

doc.files.directories =
`
.git
.cr
.es
build
src
res
test
node_modules
vendors
`;

doc.files.entry =
`
index.js
test.js
server.js
exec.js
index.php
index.html
`;

doc.files.config =
`
example.env
.eslintrc
.env
.gitignore
.dockerignore
package-lock.json
package.json
dockerfile
Dockerfile
docker-compose.yml
bitbucket-pipelines.yml
`;

doc.files.lib =
`
composer.phar
phpunit.phar
`;

doc.files.readme =
`
README.md
LICENSE
`;

if ( typeof module !== 'undefined' ) {
  module.exports = doc;
}
