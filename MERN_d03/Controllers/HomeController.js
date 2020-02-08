db = require('../Config/connect').get_db()

module.exports = {
	home: function (req, res){
		return res.render('home')
    //app.get('/', 'homeController.home')
	}

}
