var sha1 = require('sha1')
const User = require('../model/user')
module.exports = {
	login_view: function(req,res){
		res.render('login')
	},
	register_view: function(req,res){
		res.render('register')
	},
	login: function(req,res){
		console.log(req.body)
		if (!req.body.email){
			return res.send({ status: "KO", data: "Missing data"});
		} else if(!req.body.password) {
			return res.send({ status: "KO", data: "Missing password"})
		}

		User.find({
			email: req.body.email,
			password: req.body.password

		}, function(err, users) {
			if (err) return response.send(err);
			if(users.length == 0){
				return res.send({status: "KO", data: "ERROR"})
			} else {
				console.log(" wololo ")
				console.log(users);
				return res.send({status: "OK", data: users})
			}
		});
	},

	register: function(req,res){
		console.log(req.body);
		// check req.body.password_confirmation
		// check ifreq.body.password == req.body_password_comfir,matim
		if(!req.body.password) {
			return res.send({ status: "KO", data: "U need to fill password" })
		} if(!req.body.password_confirm) {
			return res.send({ status: "KO", data: "U need to fill password_confirmation" })
		} if(req.body.password_confirm !== req.body.password) {
			return res.send({ status: "KO", data: "The password doesn't match" })
		} if (err) {
			console.log(err);
			return res.send({ status: "KO", data:"Something unexpected happened" });	
		} if(users.length == 0) {
			return res.send({status: "KO", data: "ERROR" })
		} else {
		User.create({
			email: req.body.email,
			password: req.body.password,
			//password_confirm: req.body.password_confirm
			}, function(err, users) {
				console.log(" wololo ")
				console.log(users);
				return res.send({status: "OK", data: users})
			})
		
		}
/*
		var email = req.body.email
		var password = req.body.password
		var password_confirm = req.body.password_confirm
		if (password != password)
			return res.send({status: "KO", data: "password confirmation not good"})
		else {
			var user = {
				email: email,
				password: sha1(password)
			}
			db.get_db().collection('students').insertOne(user, function(err, student){
				if (err) return res.send({status: "KO", data: "shit happens bro"})
				return res.send({status: "KO", data: "student added"})
			}) 
		}

	}
*/
	}
}	

