#!/usr/bin/python3
from sms import Sms
from Sendable import Sendable
from time import time 

class Email(Sendable):
 	"""docstring for Email"""
 	def __init__(self, body, subject, from1, to):
 		super(Email, self).__init__()
 		self.body = body
		self.subject = subject
		self.from1 = from1
		self. to = to
		self.created_at = time()
		self.updated_at = time()
		self.sent_at = None 
 		 
