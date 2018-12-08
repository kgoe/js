var obj = { x: 1, y: 2 };

for (var name of Reflect.enumerate(obj)) {
  console.log(name);
}
// logs "x" and "y"