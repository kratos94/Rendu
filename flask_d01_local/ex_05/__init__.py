from ex_05.routes.front import front
#from routes.back import back
from ex_05.app import app

app.register_blueprint(front)
#app.register_blueprint(back)