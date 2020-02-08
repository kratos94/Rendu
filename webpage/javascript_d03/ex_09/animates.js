function classDisappear(){
	$("#menu-box li:first").hide();
	$(":button").on("click",function(){
	if($("#menu-box li:first").is(":visible")){
		$("#menu-box li:first").hide();
		console.log("hide calling");
	}else{
		$("#menu-box li:first").show();
		console.log("show calling");
		}
});
}

classDisappear();
