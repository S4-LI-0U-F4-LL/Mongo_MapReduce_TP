/*var http = require('http');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:8081/";

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080




MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("masid_mongodb");
 // dbo.collection("ZIPS").findOne({}, function(err, result) {    FIND FIRT ELEmENT
  dbo.collection("ZIPS").find({}).toArray(function(err, result) {

    if (err) throw err;
    console.log(result.city);
    db.close();
  });
});



var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:8081/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("masid_mongodb");
  dbo.collection("ZIPS").find({}, { projection: { _id: 0, city: 1, loc: 1 } }).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});*/

/*var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:8081/";
var Result;
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("masid_mongodb");
  dbo.collection("ZIPS").find({}, { projection: { _id: 1, city: 1, loc: 1  } }).toArray(function(err, result) {
    if (err) throw err;
    const officersIds = result.map(result => result._id);
   console.log(officersIds);

    db.close();
  });
});
*/

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:8081/";
var Result;



MongoClient.connect(url, function(err, db) {


  if (err) throw err;
  var dbo = db.db("masid_mongodb");
  var city;
  dbo.collection("ZIPS").find({}, { projection: { _id: 1, city: 1, loc: 1  } }).toArray(function(err, result) {
    if (err) throw err;

  function exo1q1map() {
  	    const city = result.map(result => result.city);

  	    var lengths = city.map(function(citys) {
  			return 1;
		});

		return (lengths);

  	    //return city.length;
	}
   
   Resul_map=exo1q1map();
   console.log(Resul_map);



   function exo1q1red() {
   		var exo1q1=0;
   		for (var i = Resul_map.length - 1; i >= 0; i--) {
   			exo1q1+= Resul_map[i]
   		}
		return exo1q1;
	}

   function exo1q2red() {
		const reducer = (accumulator, currentValue) => accumulator + currentValue;
		var exo1q2red =Resul_map.reduce(reducer);

		return exo1q2red;
	}

	 function exo1q3red() {
	 	exo1q3red=0;
		Resul_map.forEach((element) => { exo1q3red++
		})
		
		return exo1q3red;
	}
	console.log(exo1q1red());
	console.log(exo1q2red());
	console.log(exo1q3red());


    db.close();
  });
  
});


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


