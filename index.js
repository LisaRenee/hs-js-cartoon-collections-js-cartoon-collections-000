function dwarfRollCall(dwarves){
	var str = "";
  var i;
	for (i = 0; i < dwarves.length; i += 1){
		str += (i + 1) + ". " + dwarves[i] + " ";
		}
	return str;
}

function summonCaptainPlanet(planeteerCalls){
  var calls = [];
  var i;
  for (i = 0; i < planeteerCalls.length; i += 1){
    calls.push(planeteerCalls[i].toUpperCase() + "!");
  }
  return calls;
}


function longPlaneteerCalls(words){
<<<<<<< HEAD
  var i;
=======
>>>>>>> 369909160477655f19f94660467120f8a5983085
	for (i = 0; i < words.length; i += 1){
   		if (words[i].length > 4){
	 		return true;
	 	}
	 }
	return false;
<<<<<<< HEAD
}
=======
  
>>>>>>> 369909160477655f19f94660467120f8a5983085


function findTheCheese(foods) {

  var i;
  for (i = 0; i < foods.length; i += 1){
  	if (foods[i] === 'cheddar'|| foods[i] === 'gouda'|| foods[i] === 'camembert'){
    	return foods[i];
	   }
  }
  return 'no cheese!';
}
