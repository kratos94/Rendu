from flask import request
from flask import render_template
from flask import jsonify
from ex_05.models.AuthModel import authmodel
from ex_05.helpers.Utility import sendResponse, query_db, insert_db
from werkzeug.security import generate_password_hash

class AuthController():

    def __init__(self):
        pass

    def index(self):
        user = {'nickname': 'Sheetal'}
        return render_template('index.html', title='Home', user=user)

    def register_request(self):
        username = request.form.get("username")
        check_username_stored = query_db("SELECT * from users WHERE username = ?", [ username ])
        if check_username_stored:
            return "the username already exists"
        password = request.form.get("password")
        password_confirmation = request.form.get("password_confirmation")
        email = request.form.get("email")
        email_validation = validate_email(email)                             #checking email format
        if email_validation == False:
            return "the email isn't correct"
        check_email_stored = query_db("SELECT * from users WHERE email = ?", [ email ])
        if check_email_stored:
            return "email already exists"
        if password != password_confirmation:                               #check pass confirmation
            return "the password doesn't match"
        crypted_pass = generate_password_hash(password)        #hash the password 
        insert_db("INSERT INTO users (username, password, email) VALUES (?,?,?)", [ username, crypted_pass, email ])
        return "OK"
    # insert the user into the db


    def login_request(self):
        username = request.form.get("username")
        password = generate_password_hash(request.form.get("password"))
        check_credentials = query_db("SELECT * from users WHERE username = ? AND password = ?", [ username, password ])
    
        if check_credentials:                                           #compare with db data
            return "corrected logged in"
        return "the email or password isn't correct"                   #say something i giving out for you
        #validate credentials

    def view_users():
        users = query_db("SELECT rowid, email, username from users")
        return render_template('user.html', users=users)

    def view_user_by_id(id):
        users = query_db("SELECT rowid, email, username from users WHERE rowid = ?", [id], True)
    #    id = request.form.get("id")
    #    users = query_db("SELECT * from users WHERE id = ?", [ id ])
        return render_template('user_edit.html', user=users)


    def update_users(id):
        username_edit = request.form.get("username")
        email_edit = request.form.get("email")
        if username_edit != " ":
            insert_db("UPDATE users SET username= ? WHERE rowid = ?", [username_edit, id])      
        if email_edit != " ":
            insert_db("UPDATE users SET username= ? WHERE rowid = ?", [email_edit, id])
        
        return "changes has applied"


    def delete_users(id):
        User.query.filter_by(id=id).delete()


authcontroller=AuthController()
