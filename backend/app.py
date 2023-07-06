import json
from flask import Flask, render_template, url_for, redirect, request
from flask_sqlalchemy import SQLAlchemy
from flask import Response
 
app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_BINDS'] = {'form': 'sqlite:///form.db'}
db = SQLAlchemy(app)
db.init_app(app)

class Users(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), nullable=False)
    password = db.Column(db.String(20), nullable=False)
    firstName = db.Column(db.String(20), nullable=False)
    lastName = db.Column(db.String(20), nullable=False)
    email = db.Column(db.String(20), nullable=False)
    college = db.Column(db.String(40), nullable=False)
    age = db.Column(db.Integer, nullable=False)
    yearsInSayYes = db.Column(db.Integer, nullable=False)
    phoneNumber = db.Column(db.String, nullable=False)
    
    def __repr__(self):
        return '' % self.username
    
class Forms(db.Model):
    __bind_key__ = 'form'
    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, nullable = False)
    employerName = db.Column(db.String(30), nullable=False)
    gotInterview = db.Column(db.Boolean, nullable=False)
    gotOffered = db.Column(db.Boolean, nullable=False)
    howFound = db.Column(db.String(50), nullable=False)
 
    def __repr__(self):
        return '<form %r>' % self.id

@app.route('/saveUser', methods = ['POST'])
def register():
    if request.method == 'POST':
        input = request.json
        user_name = input["username"]
        user_firstname = input["firstname"]
        user_lastname = input["lastname"]
        user_email = input["email"]
        user_pass = input["password"]
        user_college = input["college"]
        user_age = input["age"]
        user_yearsInSayYes = input["years"]
        user_phoneNum = input["phonenumber"]

        user = Users(firstName = user_firstname, lastName = user_lastname, phoneNumber = user_phoneNum, username = user_name, email = user_email, password = user_pass, college = user_college, age = user_age, yearsInSayYes = user_yearsInSayYes)
        print("adding User")
        db.session.add(user)
        db.session.commit()
        return Response(status=200, mimetype='application/json')

    return Response(status=400, mimetype='application/json')

@app.route('/login', methods = ['GET'])
def login():
    if request.method == 'GET':
        input = request.json
        uName = input["username"]
        pWord = input["password"]
        
        users = Users.query.order_by(Users.username)
        for user in users:
            if user.username == uName:
                if user.password == pWord:
                    response = {
                        "user_id" : user.id
                    }
                    return Response(json.dumps(response),status=200, mimetype='application/json')
                else:
                    return Response(status=400, mimetype='application/json')
        return Response(status=400, mimetype='application/json')
    
@app.route('/submitForm', methods = ['POST'])
def submitForm():
    if request.method == 'POST':
        input = request.json

        form = Forms(userId = input["user_id"], employerName = input["employer_name"], gotInterview = input["got_interview"], gotOffered = input["got_offer"], howFound = input["social_media"])
        db.session.add(form)
        db.session.commit()

        return Response(status=200, mimetype='application/json')
    return Response(status=400, mimetype='application/json')

@app.route('/getforms')
def getForms():
    input = request.json
    id = input["user_id"]

    forms = []
    allForms = Forms.query.order_by(Forms.userId)
    
    for form in allForms:
        if form.userId == id:
            forms.append(form)
    
    formlist = []
    for form in forms:
        elem = {
            "employerName" : form.employerName,
            "howFound" : form.howFound,
            "gotOffer" : form.gotOffered,
            "gotInterview" : form.gotInterview
        }
        formlist.append(json.dumps(elem))
    
    ret = {
        "formList" : formlist
    }
    return Response(json.dumps(ret), status=200, mimetype='application/json')


@app.route('/user', methods = ['GET'])
def getUser():
    input = request.json
    id = input["user_id"]

    user = Users.query.get(id)

    response = {
        "id" : user.id,
        "username" : user.username,
        "firstname" : user.firstName,
        "lastname" : user.lastName,
        "email" : user.email,
        "college" : user.college,
        "age" : user.age,
        "yearsWithProgram" : user.yearsInSayYes,
        "phoneNumber" : user.phoneNumber
    }
    return Response(json.dumps(response), status=200, mimetype='application/json')

@app.route('/fake', methods = ['POST'])
def createFakeUser():
    if request.method == 'POST':
        uName = "owen1"
        user = Users(firstName = "owen", lastName = "wurst", phoneNumber = "1234", username = uName, email = "owen@icloud.com", password = "owen", college = "pitt", age = 21, yearsInSayYes = 2)

        print("adding User")
        db.session.add(user)
        db.session.commit()

        users = Users.query.order_by(Users.username)

        for user in users:
            if user.username == uName:
                return "success"
    
    return "fail"

@app.route("/")
def baseEndpoint():
    start()
    return "hello world"

def start():
    print("creating database")
    db.drop_all()
    db.create_all()



if __name__ == "__main__":
    app.run(debug=True)
