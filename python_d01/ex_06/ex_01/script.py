#!/usr/bin/python3
import sys

def count_letters(argv):
	count = 0
	for strings in range(1, len(argv)):
		for letters in argv[strings]:
			if letters.isalnum():
				count = count + 1  
	

	print(count)	 
count_letters(sys.argv)

