
function changeplayer() { 
	
	
	var player=document.getElementById("currentplayer").innerHTML;

	
	if(player=="X")
	{
	 
	document.getElementById("currentplayer").innerHTML="O";


	}
	else
	{
	
	document.getElementById("currentplayer").innerHTML="X";

	}
	
}

function set(idvalue) { 


	var buttonclicked=document.getElementById(idvalue);
	var player=document.getElementById("currentplayer").innerHTML;
	 

	if(buttonclicked.innerHTML==="" ||buttonclicked.innerHTML===null){

		buttonclicked.innerHTML=player;

		check_win();
		changeplayer();
	} else{
		document.getElementById(idvalue).clicked === true
		alert("you cannot click on this button!")
	}
}

function check_win() {
		var player=document.getElementById("currentplayer").innerHTML;

	if(document.getElementById("b0").innerHTML ==  document.getElementById("b1").innerHTML && document.getElementById("b1").innerHTML ==  document.getElementById("b2").innerHTML &&document.getElementById("b1").innerHTML == player)
	{ 
    	alert("You win! The winner is " + player);
    	window.open('https://media.tenor.co/images/4c7ba262346ec378df8ced172405ff7c/raw')

  	}
	else{
		changeplayer(); 
	}
	if(document.getElementById("b3").innerHTML ==  document.getElementById("b4").innerHTML && document.getElementById("b4").innerHTML ==  document.getElementById("b5").innerHTML &&document.getElementById("b4").innerHTML == player)
	{ 
    	alert("You win! The winner is " + player); 
		window.open("https://media.tenor.co/images/4c7ba262346ec378df8ced172405ff7c/raw");
  	}
	else{
		changeplayer(); 
	}
	if(document.getElementById("b6").innerHTML ==  document.getElementById("b7").innerHTML && document.getElementById("b7").innerHTML ==  document.getElementById("b8").innerHTML &&document.getElementById("b7").innerHTML == player)
	{ 
    	alert("You win! The winner is " + player); 
    	window.open("https://media.tenor.co/images/4c7ba262346ec378df8ced172405ff7c/raw");
    }	
	else{
		changeplayer();
	}	
	if(document.getElementById("b0").innerHTML ==  document.getElementById("b3").innerHTML && document.getElementById("b3").innerHTML ==  document.getElementById("b6").innerHTML &&document.getElementById("b3").innerHTML == player)
	{ 
    	alert("You win! The winner is "+ player); 
    	window.open("https://31.media.tumblr.com/44ae26ad7426188116e5c074ca72aa54/tumblr_inline_n3h730aMNJ1s5jo86.gif");
    }
	else{
		changeplayer();
	}
	if(document.getElementById("b1").innerHTML ==  document.getElementById("b4").innerHTML && document.getElementById("b4").innerHTML ==  document.getElementById("b7").innerHTML &&document.getElementById("b4").innerHTML == player)
	{ 
    	alert("You win! The winner is "+ player); 
    	window.open("https://31.media.tumblr.com/44ae26ad7426188116e5c074ca72aa54/tumblr_inline_n3h730aMNJ1s5jo86.gif");

    }
	else{
		changeplayer();
	}
	if(document.getElementById("b2").innerHTML ==  document.getElementById("b5").innerHTML && document.getElementById("b5").innerHTML ==  document.getElementById("b8").innerHTML &&document.getElementById("b5").innerHTML == player)
	{ 
    	alert("You win! The winner is "+ player);
    	window.open("https://31.media.tumblr.com/44ae26ad7426188116e5c074ca72aa54/tumblr_inline_n3h730aMNJ1s5jo86.gif");
 
    }
	else{
		changeplayer();
	}
	if(document.getElementById("b0").innerHTML ==  document.getElementById("b4").innerHTML && document.getElementById("b4").innerHTML ==  document.getElementById("b8").innerHTML &&document.getElementById("b4").innerHTML == player)
	{ 
    	alert("You win! The winner is "+ player); 
    	window.open("http://i.imgur.com/s9bPVaK.gif");

    }
	else{
		changeplayer();
	}
	if(document.getElementById("b2").innerHTML ==  document.getElementById("b4").innerHTML && document.getElementById("b4").innerHTML ==  document.getElementById("b6").innerHTML &&document.getElementById("b4").innerHTML == player)
	{ 
    	alert("You win! The winner is "+ player); 
    	window.open("http://i.imgur.com/s9bPVaK.gif");
  	
    }
	else{
		changeplayer(); 
	}
}

function reset() { 

	var buttons = ["b0","b1","b2","b3","b4","b5","b6","b7","b8"];
	document.getElementById("currentplayer").innerHTML = 'X';

	for(var i = 0; i < buttons.length; i++) {
		
		var currentbutton = document.getElementById(buttons[i]);
		currentbutton.innerHTML="";
	}
}



