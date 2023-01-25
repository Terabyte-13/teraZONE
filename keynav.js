	open = false;
	document.onkeydown = function (el) {
		console.log(el.keyCode);
		
		/*if (el.keyCode == 77){
			Window.open('musicplayer.html', 'newWin', 'resize=0, width=424,height=175');
		}*/
		
		if (el.keyCode == 76){
			
			
			if (open == false){
				open = true;
			} else {
				open = false;
			};
			
			console.log(open)
			haMenu();
		}
		if (open == true){
		
			if (el.keyCode == 68){ 
			window.location = "devlogs.html";
			}
		
			if (el.keyCode == 65){
			window.location = "art.html";
			}
		
			if (el.keyCode == 67){
			window.location = "chatroom.html";
			}
			
			if (el.keyCode == 72){
			window.location = "index.html";
			}
			
			if (el.keyCode == 83){
			window.location = "coolsites.html";
			}	
		}
			
	};
