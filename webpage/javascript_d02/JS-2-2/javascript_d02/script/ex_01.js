var change = function()
{
	var footer = document.getElementsByTagName('footer')[0];
	mydiv = footer.getElementsByTagName('div')[0];
	mydiv.innerHTML = "Hello World !";
}
change();