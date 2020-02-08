#!/usr/bin/python
# -*- coding: utf-8 -*-
import sqlite3
from flask import make_response, jsonify, g

DATABASE = 'database.db'

def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        print "COnnexion OK"
        db = g._database = sqlite3.connect(DATABASE)
    return db

def insert_db(query, args=()):
    con = get_db()
    con.execute(query, args)
    con.commit()

def query_db(query, args=(), one=False):
    cur = get_db().execute(query, args)
    rv = cur.fetchall()
    cur.close()
    return (rv[0] if rv else None) if one else rv

def sendResponse(result):
    resp = make_response(jsonify(result))
    resp.mimetype = 'application/json'
    return resp