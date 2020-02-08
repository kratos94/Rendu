module.exports = {
	get_db: function() {
		return _db;
	},
	get_connection: function(){
		MongoClient.connect(configuration.URL_MONGO, function(err,db){
				if(err) throw err;
				_db = db.db(configuration.MONGODB)
				console.log("Database created")
		});
	}
}