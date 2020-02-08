import os
import sqlite3
from flask import request
from flask import Flask, request, session, g, redirect, url_for, abort,render_template, flash
from validate_email import validate_email
from werkzeug.security import generate_password_hash
#import click
#from flask import current_app,
#from flask.cli import with_appcontext

app = Flask(__name__)

app.config.from_object(__name__) # load config from this file app . py
# Load default config and override config from an environment variable
app.config.update(dict(
DATABASE = os.path.join(app.root_path, 'schema.db') ,
SECRET_KEY = 'development key',
USERNAME =  'admin',
PASSWORD = 'default'
))
app.config.from_envvar('FLASKR_SETTINGS' , silent = True)


def get_db():
    if 'db' not in g:
        g.db = sqlite3.connect('schema.db',
        detect_types=sqlite3.PARSE_DECLTYPES
        )
        g.db.row_factory = sqlite3.Row
    return g.db

@app.teardown_appcontext
def close_db(e=None):
    db = g.pop('db', None)
    if db is not None:
        db.close()

def query_db(query, args=(), one=False):
    cur = get_db().execute(query, args)
    rv = cur.fetchall()
    cur.close()
    return (rv[0] if rv else None) if one else rv

def insert_db(query, args=(), one=False):
    con = get_db()
    con.execute(query, args)
    con.commit()

def init_db():
    with app.app_context():
        db = get_db()
        with app.open_resource('schema.sql', mode='r') as f:
            db.cursor().executescript(f.read())
        db.commit() 	


@app.cli.command('initdb')
def init_db_command():
    """Clear the existing data and create new tables."""
    init_db()
    print('Initialized the database.')

#id = request.form.get("id")

@app.route('/user', methods=['POST'])            #Create
def create_user():
    username = request.form.get("username")
    check_username_stored = query_db("SELECT * from users WHERE username = ?", [ username ])
    if check_username_stored:
        return "the username already exsists"
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

#@app.route('/user', method=['GET'])             #Rread All

#@app.route('/user/<id>', method=['GET'])             #Read one

#@app.route('/user/<id>', method=['PUT'])             #Update

#@app.route('/user/<id>', method=['DELETE'])          #Delete



@app.route('/register', methods=['POST'])
def register():
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

@app.route('/login', methods=['POST'])
def login():
    username = request.form.get("username")
    password = generate_password_hash(request.form.get("password"))
    check_credentials = query_db("SELECT * from users WHERE username = ? AND password = ?", [ username, password ])

    if check_credentials:                                           #compare with db data
        return "corrected logged in"
    return "the email or password isn't correct"                   #say something i giving out for you
    #validate credentials