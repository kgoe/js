fetch(URL)
.then(response => response.json())
.then(result => console.log(result));

fetch(URL)
.then(response => response.text())
.then(result => console.log(result));