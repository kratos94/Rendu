$(".platypus").on("mouseenter", function(){
	var position = $(this).position();
	position.top = Math.random() * document.body.clientHeight;
	position.left = Math.random() * document.body.clientWidth;
	$(this).css({top:position.top, left:position.left, position:'absolute'})
});

