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

  //Question 1
	console.log(exo1q1red());

  //Question 2
	console.log(exo1q2red());

  //Question 3
	console.log(exo1q3red());


    db.close();
  });
  
});