function classDisappear(){
	$("p").on("mouseenter",function(){
	$(this).css("background-color","grey");
	});
	$("p").on("mouseleave",function(){
	$(this).css("background-color","white");});
	
	$("p").on("click",function(){
	$(this).hide();});

}

classDisappear();
