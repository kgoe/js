;

/*
TODO
directory checker
executable checker
version checker
npm package checker
standard file list and description
standard folder list and description
config file generator

### DOCUMENTATION
README.md
LICENSE

### CONFIGURATIONS
.dockerignore
.eslintrc
.gitignore
.env
bitbucket-pipelines.yml
docker-compose.debug.yml
docker-compose.yml
Dockerfile
package-lock.json
package.json

### ENTRY POINTS
index.js
index.html
test.js

### DIRECTORIES
build
data
public
res
src
utility
vendor
node_modules

### EXECUTABLE LIBRARIES
composer.phar
phpunit.phar
*/

var doc = {};

doc['project-filetree'] =
`
build/
data/
public/
res/
src/
utility/
vendor/
node_modules/

.dockerignore
.eslintrc
.gitignore
bitbucket-pipelines.yml
docker-compose.debug.yml
docker-compose.yml
Dockerfile
package.json
package-lock.json

README.md
LICENSE

index.js
test.js

composer.phar
phpunit.phar
`;

doc['laravel-filetree'] =
`
app/
bootstrap/
config/
database/
public/
resources/
routes/
storage/
tests/
vendor/
node_modules/
.editorconfig
.env
.env.development
.env.example
.gitattributes
.gitignore

composer.json
composer.lock
package.json
phpunit.xml


readme.md

server.php
webpack.mix.js

artisan
composer.phar
phpunit.phar
`;

doc['unix-filetree'] =
`
bin
boot
dev
etc
home
lib
lib64
lost+found
media
mnt
opt
proc
root
run
sbin
snap
srv
sys
tmp
usr
var

initrd.img
initrd.img.old
vmlinuz
vmlinuz.old
`;
