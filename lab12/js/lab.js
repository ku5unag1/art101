//Author: Nkem Ndidi with refrences from Wes's HTML and JS files and also from https://www.theodysseyonline.com/multiple-types-pokemon-personalities
//Since 16 November 2021
//Lisence: Public Domain
//Summary: Libraries and jOuery
//Description: The purpose of this lab was to experiment functions that use conditionals.

typesObj = {
  "Water!":" These people are the go-with-the-flow types. They are very flexible in their time management and have a carefree personality, one that will be open to whatever activity comes their way. They, like water, go wherever the tide takes them.",
  "Fire!":" These people are very passionate in what they think/do. They stay dedicated and get the job done. They are go-getters, and will keep chugging throughout the day. They, like fire, will keep trying to spark until their energy eventually runs out.",
  "Grass!":" These people are very introverted in their thinking and usually like to be with themselves. They are very in touch with their environment and rely on their surroundings in life. They are dependable in one-on-one relationships. They, like grass, remain grounded and can always bloom when the time is right.",
  "Electric!":" These people are very extroverted and give off a lot of energy. They are spontaneous and outgoing. They usually are the center of the attention in any social gathering. They love being their own mascot. They, like electricity, can light up the room, as long as there is an outlet for them."
}

creditHTML = '<div class="credits">Pokemon personality types courtesy of <a href="https://www.theodysseyonline.com/multiple-types-pokemon-personalities">Kyle OKane</a></div>';

//Return Pokemon types
//Depending on length mod 18
function pokemonSortLength(str) {
  len = str.length;
  mod = len % 4;
  if (mod == 0) {
    return "Water!"
  }
  else if (mod == 1) {
    return "Fire!"
  }
  else if (mod == 2) {
    return "Grass!"
  }
  else if (mod == 3)  {
    return "Electric!"
  }
}

var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
  var name = document.getElementById("input").value;
  var type = pokemonSortLength(name);
  newText = "<p>This is your type:" + type + typesObj[type] + "</p>" + creditHTML;
  var outputArea = document.getElementById("output");
  document.getElementById("output").innerHTML = newText;
})
