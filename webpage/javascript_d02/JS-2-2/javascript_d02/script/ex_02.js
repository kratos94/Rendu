var footer = document.getElementsByTagName('footer')[0];
mydiv = footer.getElementsByTagName('div')[0];
var click=0;
mydiv.onclick = function() {
	click ++;
	console.log("click intercepted n" + click);
	mydiv.innerHTML = click;
}
