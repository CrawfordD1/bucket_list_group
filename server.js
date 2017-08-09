var express = require('express');
var parser = require('body-parser');
var app = express();
var path = require("path");

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(express.static('client/build'));

app.use(require('./controllers/index'));

app.use(express.static('client/build'));

app.listen(3000, function () {
  console.log('App running on port '+this.address().port);
});
