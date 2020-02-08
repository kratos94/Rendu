const mongoose = require ('mongoose')

var UserSchema = new mongoose.Schema({
email:  {
  	type: String,
  	unique: true,
  	index: true
  },
password: String,
 
});

var User = mongoose.model('User', UserSchema);

module.exports= User;
