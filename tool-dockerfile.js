;

// docker

// docker build -t <image name> -f <docker file> .

// docker create <image name> <container name>

var sourcecode = [];

// # comment

// FROM <image>
// FROM <image> [AS <name>]
// FROM <image>[:<tag>] [AS <name>]
// FROM <image>[@<digest>] [AS <name>]0
// COPY <src> <dst>
// RUN <command>
// ADD
// ENV
// CMD
// WORKDIR
// EXPOSE
// LABEL
// STOPSIGNAL
// USER
// VOLUME
// WORKDIR
// ONBUILD


function sourceFrom() {
  var theImage = 'node:11.8-alpine';
  var line = `FROM ${theImage}`;
  return line;
}

console.log(sourceFrom());