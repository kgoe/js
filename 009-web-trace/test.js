
if ( typeof global !== 'undefined' ) {
  var props = JSON.stringify(Object.getOwnPropertyNames(global));
  console.log(props);
} else {
  var props = JSON.stringify(Object.getOwnPropertyNames(window));
  console.log(props);
}
document.body.innerHTML = props;