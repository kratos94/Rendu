function countGs(str){
	var Gcount = (str.match(/G/g) || []).length;
	return Gcount;
}