#!/usr/bin/python3
from time import time

called = False

class Sendable:
	def __init__(self, body, subject, from1, to): 
		self.body = body
		self.subject = subject
		self.from1 = from1
		self. to = to
		self.created_at = time()
		self.updated_at = time()
		self.sent_at = None 
		
	def send(self):
		global called
		if(called == True):
			raise Exception("DataAlreadySent")
		else:
			self.sent_at = time()
			called = True
