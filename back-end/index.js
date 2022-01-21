var express = require('express');
var app = express();
var router = require('./router.js');

var PORT = 3000;

app.use(express.json());

app.use('/api', router.router);

app.listen(PORT, () => {
  console.log(`I'm listening on port: ${PORT}`);
});