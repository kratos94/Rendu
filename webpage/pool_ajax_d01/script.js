$(document).ready(function(){
	console.log("ready!");
	$("#btn_add").click(function(){
		let content = $("#input_content").val();
		let selected = $("#selected_content").val();
		if(content != "" && selected != "empty"){
			let informations = {
				"task": content;
				"type": selected;
			}
		$.ajax({
			url: "add_task.php",
			method: "POST",
			data: informations,
			dataType: "json",
			success: function(data){
				console.log(data);
				$("#result").html(data.result);
				$("#todolist").append("<li class="+selected+">"+content+"</li>");
				$("#input_content").val("");
			},
			error:function(msg){
				alert("Error !: " + msg);
			}
			});
		}
	});	
	$("#input_search").keyup(function(){
		let content = $("#input_search").val();
		console.log(content);
		$("#todolist li").each(function(){
			if ($(this).attr('class').includes(content)){
				$(this).show();
			} else if(!$(this).html().indexOf(content) == -1) {
				$(this).show();
			} else {
				$(this).hide();
			}
		});	
	});
});
