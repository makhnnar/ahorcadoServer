var express = require('express');
var app = express();

app.post('/', function (req, res) {
  res.send('{name:Gustavo,lastname:Bustamante}');
});

app.listen(5000, function () {
  console.log('Example app listening on port 3000!');
});