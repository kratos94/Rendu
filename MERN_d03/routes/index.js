HomeController = require('../Controllers/HomeController')
AuthController = require('../Controllers/AuthController')

module.exports = function (app){
    app.get('/', HomeController.home)
    app.get('/login', AuthController.login_view)
    app.get('/home', HomeController.home)
    app.get('/register', AuthController.register_view)
    app.post('/login', AuthController.login)
    app.post('/register', AuthController.register)    
}