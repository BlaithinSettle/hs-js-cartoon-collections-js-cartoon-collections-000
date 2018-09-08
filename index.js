function dwarfRollCall(dwarves) {
var rollCall=[];
    for (var i=0; i<dwarves.length; i++){
        rollCall.push(`${i+1}. ${dwarves[i]} `);
    }
    return rollCall.join('')
}

function summonCaptainPlanet(planeteerCalls){
var edit=planeteerCalls.map(x => x.toUpperCase() + '!');
return edit;
}

function longPlaneteerCalls(words) {
    for (var i=0; i<words.length; i++){
        if (words[i].length>4){
            return true;
        } 
    } return false;
}

function findTheCheese (foods) {
  var cheese=['cheddar', 'gouda', 'camembert'];
  for (var i=0; i<foods.length; i++){
    for (var j=0; j<cheese.length; j++){
      if (foods[i].includes(cheese[j])){
        return cheese[j];
      }
    }
  } return "no cheese!";
}
