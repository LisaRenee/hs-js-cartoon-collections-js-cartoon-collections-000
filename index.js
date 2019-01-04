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
	for (i = 0; i < words.length; i += 1){
   		if (words[i].length > 4){
	 		return true;
	 	}
	 }
	return false;
  

function findTheCheese (foods) {
}
