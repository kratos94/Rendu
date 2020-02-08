const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
var _db;

app.get('/', function (req, res) {
	res.sendfile(__dirname + "/form.html")
});
app.post('/mern-pool', (req,res) => {
	db.collection('students').save(req.body, (err, result) => {
		if (err) console.log(err)
		console.log('saved to database')
	})
})
MongoClient.connect("mongodb://localhost:27042/mern-pool.db", function(err, client) {
 	var db = client.db("mern-pool")
  	if (!err){
 	 	console.log("Connection succesful");
 	 }  else {
		console.log("Connection failed.");
 	 }
});

app.listen(4242, function () {
  	console.log('Example app listening on port 4242!');
});