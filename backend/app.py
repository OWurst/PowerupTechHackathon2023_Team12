import json
from flask import Flask, render_template, url_for, redirect, request
from flask_sqlalchemy import SQLAlchemy
 
app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
db = SQLAlchemy(app)

if __name__ == "__main__":
    app.run(debug=True)
