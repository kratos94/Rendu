var MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://localhost:27042/mern-pool.db", function(err, db) {
  	if (!err){
 	 	console.log("Connection succesful");
 	 }  else {
		console.log("Connection failed.");
 	 }
  	db.close();
});