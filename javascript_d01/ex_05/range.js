function range(start, end, step=1){
	var myArray = [];
	if (start < end && step > 0){
		for (var i = start; i <= end; i+=step) {
			myArray.push(i);
		}
	}
	if(start > end && step < 0){
		for (var i = start; i >=end; i+=step){
			myArray.push(i);
		}
	}
	return myArray;
}