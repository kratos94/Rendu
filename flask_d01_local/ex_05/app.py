from flask import Flask,request
from ex_05.config import config

app = Flask(__name__, template_folder="views")