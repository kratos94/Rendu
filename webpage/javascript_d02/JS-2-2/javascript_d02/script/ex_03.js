var footer = document.getElementsByTagName('footer')[0];
mydiv = footer.getElementsByTagName('div')[0];
mydiv.onclick = function(){
	isConfirm = false;
	while(!isConfirm){
		name="";
		while(name != 'null' && name == ""){
			name = prompt("What's you'r name?");
		}
		console.log(name);
		if (name != 'null'){
			// alert("Hello " + name +" !");
			if (confirm("Are you sure that "+ name + " is correct?")){
				alert("Hello " + name +" !");
				mydiv.innerHTML="Hello" + name +"!";
				isConfirm = true;
			}else{
				mydiv.innerHTML="";
			}
		}

		//	} else {
		//		mydiv.innerHTML = "";
		//	}
	}
}

