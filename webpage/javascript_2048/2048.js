(function($){
	$.fn.game2048 = function(){		
		function generateMap(){
			console.log("generateMap Called");
			let table = $('<table></table>');
			for(let y = 0;y < 4; y++){
				let line = $('<tr></tr>');
				for(let x = 0; x < 4; x++){
					let cell = $('<td> 0 </td>').attr('x',x).attr('y', y).attr('nbr', 0);
					line.append(cell);
				}
				table.append(line);
			}
			return table;
		}
		function generateCell(){
			for(let i=0; i < 2; i++){
				let elem;
				let isGood = false;
				while(!isGood){
					let x = Math.round(Math.random() * 4);
					let y = Math.round(Math.random() * 4);
					elem = $('[x="'+x+'"][y="'+y+'"][nbr=0]');
					if(elem.length)
						isGood=true;
				}
				elem.attr('nbr', 2);
				elem.text("2");
			}
		}
		moveLeft = function(line){			
			let elems = $('[y =' + line + ']');
			console.log(elems);
			for(let i = 0; i < elems.length; i++){
				let val = $(elems[i]).attr('nbr');
				console.log("value = " + val);
				if(val == 0){
					for(let p = i + 1; p < elems.length; p++){
						if($(elems[p]).attr('nbr') != 0){
							console.log("wololo");
							temp = $(elems[i]).html();
							$(elems[i]).html($(elems[p]).html());
							$(elems[p]).html(temp);
							$(elems[i]).attr('nbr',$(elems[i]).html());
							$(elems[p]).attr('nbr', $(elems[p]).html());
							checkMerge(elems[i], elems[p]);
						}
					}
				}
			}			
		}
		moveRight = function(line){			
			let elems = $('[y =' + line + ']');
			console.log(elems);
			for(let i = elems.length; i > 0; i--){
				let val = $(elems[i]).attr('nbr');
				console.log("value = " + val);
				if(val == 0){
					for(let p = i - 1; p >=	 0; p--){
						if($(elems[p]).attr('nbr') != 0){
							console.log("wololo");
							temp = $(elems[i]).html();
							$(elems[i]).html($(elems[p]).html());
							$(elems[p]).html(temp);
							$(elems[i]).attr('nbr',$(elems[i]).html());
							$(elems[p]).attr('nbr', $(elems[p]).html());
							checkMerge(elems[i], elems[p]);
						}
					}
				}
			}
		}				
		moveUp = function(column){			
			let elems = $('[x =' + column + ']');
			console.log(elems);
			for(let i = 0; i < elems.length; i++){
				let val = $(elems[i]).attr('nbr');
				console.log("value = " + val);
				if(val == 0){
					for(let p = i + 1; p < elems.length; p++){
						if($(elems[p]).attr('nbr') != 0){
							console.log("wololo");
							temp = $(elems[i]).html();
							$(elems[i]).html($(elems[p]).html());
							$(elems[p]).html(temp);
							$(elems[i]).attr('nbr',$(elems[i]).html());
							$(elems[p]).attr('nbr', $(elems[p]).html());
							checkMerge(elems[i], elems[p]);
						}
					}
				}
			}
		}
		moveDown = function(column){			
			let elems = $('[x =' + column + ']');
			console.log(elems);
			for(let i = elems.length; i > 0; i--){
				let val = $(elems[i]).attr('nbr');
				console.log("value = " + val);
				if(val == 0){
					for(let p = i - 1; p >=	 0; p--){
						if($(elems[p]).attr('nbr') != 0){
							console.log("wololo");
							temp = $(elems[i]).html();
							$(elems[i]).html($(elems[p]).html());
							$(elems[p]).html(temp);
							$(elems[i]).attr('nbr',$(elems[i]).html());
							$(elems[p]).attr('nbr', $(elems[p]).html());
							checkMerge(elems[i], elems[p]);
						}
					}
				}
			}			
		}
		checkMerge = function(elem1, elem2){
			let value = $(elem1).attr('nbr');
			let value2 = $(elem2).attr('nbr');
				if(value == value2){
					$(elem1).attr('nbr', (value + value2));
					$(elem2).html(value + value2);
			}
		}
		$('html').keydown(function(event){
			switch(event['key']){
				case 'ArrowLeft':
					for(let i=0; i < 4; i++){
						console.log(i);
						moveLeft(i);
						checkMerge(i);
						moveLeft(i);

					}
					console.log("left");
					break;
				case 'ArrowRight':
					for(let i=0; i < 4; i++){
						console.log(i);
						moveRight(i);
						checkMerge(i);
						moveRight(i);
					}
					console.log("Right");
					break;
				case 'ArrowUp':
					for(let i=0; i < 4; i++){
						console.log(i);
						moveUp(i);
						checkMerge(i);
						moveUp(i);
					}
					console.log("Up");
					break;
				case 'ArrowDown':
					for(let i=0; i < 4; i++){
						console.log(i);
						moveDown(i);
						checkMerge(i);
						moveDown(i);
					}					
					console.log("Down");
					break;
			}
		});						
		$(this).append(generateMap());
		generateCell();
		console.log("pluguin 2048 called");
	}
})(jQuery);
