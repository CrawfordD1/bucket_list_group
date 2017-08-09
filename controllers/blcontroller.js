var express = require('express');
var app = express();
var bucketRouter = express.Router();


var BucketQuery = require('../client/db/countryQuery.js');
var query = new BucketQuery();

bucketRouter.get('/', function(req, res) {
  query.all(function(results){
    res.json(results);
  });
});

module.exports = bucketRouter;