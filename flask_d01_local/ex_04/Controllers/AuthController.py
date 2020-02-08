

@app.route('/register', methods=['POST'])
def register():
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
    insert_db("INSERT INTO users (username, password, email) VALUES (?,?,?)", [ username, password, email ])
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