;

/*
 * index.js entry point
 * executor : node.js + express
 */

try {
  const express = require('express');
  const app = express();
  const port = 3000;

  app.get('/', (req, res) => res.send('Hello World!'));
  app.listen(port, () => console.log(`Example app listening on port ${port}!`));
} catch( err ) {
  console.log(err);
}
