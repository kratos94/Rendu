#!/usr/bin/python3
from email import Email
from Sendable import Sendable

class Sms(Sendable):
	"""docstring for Sms"""
	def __init__(self, body, from1, to):
		super(Sms, self).__init__()
		self.body = body
		self.from1 = from1
		self.to = to

		

		
