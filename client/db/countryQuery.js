var MongoClient = require('mongodb').MongoClient;

var BucketQuery = function(){
  this.url = "mongodb://localhost:27017/bucket_list"
};


BucketQuery.prototype = {
  all: function(callback){
    MongoClient.connect(this.url, function(err, db){
      var collection = db.collection('countries');
      collection.find().toArray(function(err, result){
        callback(result);
      });
    });
  },
  add: function(countryToAdd, callback){
    MongoClient.connect(this.url, function(err, db){
      if(db){
        var collection = db.collection('countries');
        collection.insert(countryToAdd);
        collection.find().toArray(function(err, results){
          callback(results);
        })
      }
    })
  }
}

module.exports = BucketQuery;