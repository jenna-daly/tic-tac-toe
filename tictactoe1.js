
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
	 

	if(buttonclicked.innerHTML=="" ||buttonclicked.innerHTML==null){

		buttonclicked.innerHTML=player;

		check_win();
		changeplayer();
	} else{
		document.getElementById(idvalue).clicked == true
		alert("you cannot click on this button!")
	}
}

function check_win() {
		var player=document.getElementById("currentplayer").innerHTML;

	if(document.getElementById("b0").innerHTML ==  document.getElementById("b1").innerHTML && document.getElementById("b1").innerHTML ==  document.getElementById("b2").innerHTML &&document.getElementById("b1").innerHTML == player)
	{ 
    	alert("You win! The winner is "+ player);
  	}
	else{
		changeplayer(); 
	}
	if(document.getElementById("b3").innerHTML ==  document.getElementById("b4").innerHTML && document.getElementById("b4").innerHTML ==  document.getElementById("b5").innerHTML &&document.getElementById("b4").innerHTML == player)
	{ 
    	alert("You win! The winner is "+ player); 
  	}
	else{
		changeplayer(); 
	}
	if(document.getElementById("b6").innerHTML ==  document.getElementById("b7").innerHTML && document.getElementById("b7").innerHTML ==  document.getElementById("b8").innerHTML &&document.getElementById("b7").innerHTML == player)
	{ 
    	alert("You win! The winner is "+ player); 
    }	
	else{
		changeplayer();
	}	
	if(document.getElementById("b0").innerHTML ==  document.getElementById("b3").innerHTML && document.getElementById("b3").innerHTML ==  document.getElementById("b6").innerHTML &&document.getElementById("b3").innerHTML == player)
	{ 
    	alert("You win! The winner is "+ player); 
    }
	else{
		changeplayer();
	}
	if(document.getElementById("b1").innerHTML ==  document.getElementById("b4").innerHTML && document.getElementById("b4").innerHTML ==  document.getElementById("b7").innerHTML &&document.getElementById("b4").innerHTML == player)
	{ 
    	alert("You win! The winner is "+ player); 
    }
	else{
		changeplayer();
	}
	if(document.getElementById("b2").innerHTML ==  document.getElementById("b5").innerHTML && document.getElementById("b5").innerHTML ==  document.getElementById("b8").innerHTML &&document.getElementById("b5").innerHTML == player)
	{ 
    	alert("You win! The winner is "+ player); 
    }
	else{
		changeplayer();
	}
	if(document.getElementById("b0").innerHTML ==  document.getElementById("b4").innerHTML && document.getElementById("b4").innerHTML ==  document.getElementById("b8").innerHTML &&document.getElementById("b4").innerHTML == player)
	{ 
    	alert("You win! The winner is "+ player); 
    }
	else{
		changeplayer();
	}
	if(document.getElementById("b2").innerHTML ==  document.getElementById("b4").innerHTML && document.getElementById("b4").innerHTML ==  document.getElementById("b6").innerHTML &&document.getElementById("b4").innerHTML == player)
	{ 
    	alert("You win! The winner is "+ player); 
    }
	else{
		changeplayer(); 
	}
}



