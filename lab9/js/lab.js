//Author: Nkem Ndidi
//Since 28 October 2021
//Lisence: Public Domain
//Summary: JavaScript for the Web
//Description: The purpose of this lab is to experiment with manipulating DOM elements

//Create a new element and assign to a Variable
var outputEl = document.getElementById("output");
console.log("outputEl: ", outputEl);
//Create a new element with document.createElement("p") and assign it to a a variable new1El
var new1El = document.createElement("p");
//Change the html attribute of new1El to say "Hello there :)"
new1El.innerHTML = "Hello there :)";
//Create a new element with document.createElement("p") and assign it to a variable new2El
var new2El = document.createElement("p");
//Change the html attribute of new2El to say "Goodbye!"
new2El.innerHTML = "Goodbye!"
//Append both new elements one at a time using appendChild()
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);
//Change the css attributes of at least two elements of your page
new1El.style.fontFamily = "Comic Sans MS"
new1El.style.color = "#91f3fa"
new1El.style.fontSize = "75px"
new2El.style.fontFamily = "Comic Sans MS"
new2El.style.color = "#91f3fa"
new2El.style.fontSize = "75px"
//put border around output
document.getElementById("output").style.border = "thick solid #ea91fa";
