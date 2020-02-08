#!/usr/bin/python
# -*- coding: utf-8 -*-

from flask import Blueprint,request,json
from flask import render_template
from app.controllers.HomeController import homecontroller
from app.controllers.AuthController import authcontroller

front = Blueprint("front", __name__)

@front.route('/', methods=['GET'])
def home():
    return homecontroller.index()

@front.route('/register', methods = ['POST'])
def register():
    return authcontroller.register_request()

@front.route('/login', methods = ['POST'])
def login():
    return authcontroller.login_request()