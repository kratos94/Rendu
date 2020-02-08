const express = require ('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('./Config/config');
const mongoose = require('mongoose');
const db = mongoose.connection;

mongoose.connect(config.URL_MONGO, {useNewUrlParser: true});

app.use(function(req,res,next){
	res.header("Access-Control-Allow-Origin", "*")
	res.header("Access-Control-Allow-Headers", "Origin, X-requested, Content-type, Accept, Authorization")
	res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS")
	next();
});


app.use(express.static(__dirname + '/views'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
require('./routes')(app)


app.listen(config.PORT, function() {
	console.log('Example app listening on port 3000')
})