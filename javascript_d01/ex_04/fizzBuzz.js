function fizzBuzz(){
	var str = 1;
	for (var i=2; i<=45; i++){
		str+=", ";
		if (i % 3 != 0 && i % 5 != 0) {
			str += i.toString();
		}
		else {
			if (i % 3){
				str += "Fizz";
			}
			if (i % 5){
				str += "Buzz";
			}
		}
	}
	console.log(str);
}