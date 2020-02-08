#!/usr/bin/python3
from tkinter import *

operations = []
nums =  []
def digit(nb):
	global nums
	nums.append(nb)
	print(nums)
	
def operators(nb):
	global operations
	operations.append(nb)
	print(operations)



def suma():
	global nums
	print(sum(nums))
def resta():
	global nums
	nums = nums[0] - nums[1]

def multiplicar():
	global nums
	nums = nums[0]*nums[1]


	
def dividir():
	global nums
	nums = nums[0]*nums[1]

def equal():
	global operations
	if operations[0] == "+":
		suma()
	elif operations[0]=="-":
		resta()			
	elif operations[0]=="/":
		multiplicar()	
	elif operations[0]=="*":
		dividir()	
	operations.clear()
	nums.clear()			


window = Tk()
Button(window, text="PM", command=window.quit).grid(row=1, column=4)
Button(window, text="0", command=lambda: digit(0)).grid(row=4, column=3)
Button(window, text="1", command=lambda: digit(1)).grid(row=1, column=1)
Button(window, text="2", command=lambda: digit(2)).grid(row=1, column=2)
Button(window, text="3", command=lambda: digit(3)).grid(row=1, column=3)
Button(window, text="4", command=lambda: digit(4)).grid(row=2, column=1)
Button(window, text="5", command=lambda: digit(5)).grid(row=2, column=2)
Button(window, text="6", command=lambda: digit(6)).grid(row=2, column=3)
Button(window, text="7", command=lambda: digit(7)).grid(row=3, column=1)
Button(window, text="8", command=lambda: digit(8)).grid(row=3, column=2)
Button(window, text="9", command=lambda: digit(9)).grid(row=3, column=3)
Button(window, text="=", command=lambda: equal()).grid(row=4, column=3)
Button(window, text="+", command=lambda: operators("+")).grid(row=1, column=4)
Button(window, text="-", command=lambda: operators("-")).grid(row=2, column=4)
Button(window, text="*", command=lambda: operators("*")).grid(row=3, column=4)
Button(window, text="/", command=lambda: operators("/")).grid(row=4, column=4)

window.mainloop()