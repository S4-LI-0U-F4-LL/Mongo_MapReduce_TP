var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:8081/";
var Result;



MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("masid_mongodb");
  
  dbo.collection("ZIPS").find({}, { projection: { _id: 1, city: 1, loc: 1 ,pop: 1  } }).toArray(function(err, result) {
    if (err) throw err;

  function code_postaux() {
  	    var _code_postaux = result.map(result => result._id);
		return _code_postaux;

	}
  
  function population() {
        var _population = result.map( function(result){
        if(result.pop > 100000){
            return result.pop ;
        }
    });

    return _population;
  }

   console.log(code_postaux());
   console.log(population());
  
  db.close();

  });
  
/*

   dbo.collection("ZIPS").find({}, { projection: { _id: 1} }).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
  });

   var query = {"pop":{$gte:100000}};
   dbo.collection("ZIPS").find(query,{ projection: { _id: 0 ,pop: 1} }).toArray(function(err, result) {
    if (err) throw err;

    console.log(result);

    db.close();
  });
*/

});


MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("masid_mongodb");
 dbo.collection("ZIPS").find({}, { projection: { _id: 1} }).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);



     db.close();

  });

});


MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("masid_mongodb");
  var query = {"pop":{$gte:100000}};
   dbo.collection("ZIPS").find(query,{ projection: { _id: 0 ,pop: 1} }).toArray(function(err, result) {
    if (err) throw err;

    console.log(result);

    db.close();
  });

});

//Sum population
var map = function() {emit(this._id,this.pop > 100000 ?);};
var reduce = function(_id,pop) {
  return _id;};
db.ZIPS.mapReduce(map,reduce,{ out: "totals" } );
db.totals.find({})





// Question 1

var map = function() {emit(this._id);};

var reduce = function(_id) {return _id;};

db.ZIPS.mapReduce(map,reduce,{ out: "totals" } );
db.totals.find({})


// Question 2
var map = function() {emit(this._id,this.pop);};
var query = { pop:{'$gt':100000} }
db.ZIPS.mapReduce(map,reduce,query,{ out: "totals" } );
db.totals.find({})


// Question 3

var map = function() {emit(this.state,this.pop);};
var reduce = function(state,pop) {return Array.sum(pop);};

db.ZIPS.mapReduce(map,reduce,{ out: "totals" } );
db.totals.find({})

// Question 4
query = {"pop":{$gte:100000}}