$("#press").on("click", function(){
	console.log('before take value');
	param = $("#listItem").val();
	console.log('after take value')
	$("i").append(param + "<br></br>");
});