from flask import request
from flask import render_template
from flask import jsonify
from app.models.AuthModel import authmodel
from app.helpers.Utility import sendResponse, query_db, insert_db

class AuthController():

    def __init__(self):
        pass

    def index(self):
        user = {'nickname': 'Sheetal'}
        return render_template('index.html', title='Home', user=user)

    def register_request(self):
        email = request.form.get('email')
        username = request.form.get('username')
        password = request.form.get('password')
        password_confirmation = request.form.get('password_confirmation')
        # Check on db if username does not exists
        result = query_db("SELECT * from contacts WHERE email = ?", [ email ])
        print result
        if result:
            return "email already exists"
        # Check password
        if password != password_confirmation:
            return "password not match"
        # Crypt the password
        # Insert the data on the db
        insert_db("INSERT INTO contacts (username, password, email) VALUES (?,?,?)", [username,password, email])
        return "OK"

    def login_request(self):
        password = request.form.get('password')
        email = request.form.get('email')
        result = query_db("SELECT * FROM contacts WHERE email = ? AND password = ?", [email, password])
        if result:
            resp = jsonify({'status':'OK'})
            resp.status_code = 200
            return resp
        else:
            resp = jsonify({'status':'KO'})
            resp.status_code = 200
            return resp

authcontroller=AuthController()

