from flask import request
from flask import render_template
from ex_05.models.AuthModel import authmodel
from ex_05.helpers.Utility import sendResponse

class HomeController():

    def __init__(self):
        pass

    def index(self):
        return render_template('index.html', title='Homeless')

homecontroller=HomeController()

