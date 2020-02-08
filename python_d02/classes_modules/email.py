#!/usr/bin/python3
import datetime

class email:
	def __init__(self, body, subject, from1, to, created_at, updated_at, sent__at):
		current_date = datetime.datetime.now()
		self.body = body
		self.subject = subject
		self.from1 = from1
		self. to = to
		self.created_at = current_date
		self.updated_at = current_date
		self.sent__at = None 

my_email = email("pollo", "patatas", "nepe", "hoho") 
