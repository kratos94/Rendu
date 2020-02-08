from flask import Flask,request
from config import config

app = Flask(__name__, template_folder="views")