function dwarfRollCall(dwarves) {
  const rollCall = [];
  for (let i = 0; i < dwarves.length; i++) {
    rollCall.push(`${i + 1}. ${dwarves[i]} `);
  }
  return rollCall.join("");
}

function summonCaptainPlanet(planeteerCalls) {
  return planeteerCalls.map(x => x.toUpperCase() + "!");
}

function longPlaneteerCalls(words) {
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 4) {
      return true;
    }
  }
  return false;
}

function findTheCheese(foods) {
  const cheese = ["cheddar", "gouda", "camembert"];
  for (let i = 0; i < foods.length; i++) {
   
      if (cheese.includes(foods[i])) {
        return foods[i];
      }
    }
  
  return "no cheese!";
}
