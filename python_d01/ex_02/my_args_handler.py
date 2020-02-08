#!/usr/bin/python3

def my_args_handler(*args):
	final=""
	for strings in range(0, len(args) - 1):
		final += args[strings] + ", "
	final +=args[len(args)-1]
	print(final)		