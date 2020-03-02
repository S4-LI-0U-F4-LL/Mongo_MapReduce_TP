
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

var map = function() {emit(this.city);};
var reduce = function(state) {return 1;};
db.ZIPS.mapReduce(map,reduce,{ out: "totals" } );
db.totals.find({}).limit(20)

// Question 5

var map = function() {emit(this.city);};
var reduce = function(state) {return 1;};
db.ZIPS.mapReduce(map,reduce,{ out: "totals" } );
db.totals.find({}).limit(20)
