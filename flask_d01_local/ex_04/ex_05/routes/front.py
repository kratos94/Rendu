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

@front.route('/user', methods = ['GET'])
def view_all_users():
	return authcontroller.view_users()

@front.route('/user/<id>', methods = ['GET'])
def view_by_id(id):
	return authcontroller.view_user_by_id(id)

@front.route('/user/<id>', methods = ['PUT', 'POST']) 
def update_users(id):
	return authcontroller.update_users(id)

@front.route('/user/<id>', methods = ['DELETE'])
def delete_users(id):
	return authcontroller.delete_users(id)
