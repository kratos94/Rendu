document.onkeypress=function(){
	console.log(event.key);
	myDiv = document.getElementsByTagName('footer')[0].getElementsByTagName('div')[0];
	myDiv.innerHTML += event.key;
	if(myDiv.innerHTML.length > 42){
		myDiv.innerHTML=myDiv.innerHTML.substring(1, 42);
			}
}