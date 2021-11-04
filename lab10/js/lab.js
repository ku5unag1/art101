//Author: Nkem Ndidi with refrences from Wes's HTML and JS files
//Since 4 November 2021
//Lisence: Public Domain
//Summary: JavaScript Events and Forms
//Description: The purpose of this lab is to experiment with JavaScript Events

//Borrow the nameSort() function or anagram() funciton from Lab 7
function sortUserName(userName) {
  //Split string to array
  var nameArray = userName.toLowerCase().split('');
  console.log("Nkem =", nameArray);
  //Sort the array
  var nameArraySort = nameArray.sort();
  console.log("Nkem =", nameArraySort);
  //Joing array back to string
  var nameSorted = nameArraySort.join();
  console.log("Nkem =", nameSorted);
  return nameSorted
}

//find the button element
buttonEl = document.getElementById("button");
//find the form element
inputEl = document.getElementById("userName");
//find output element
outputEl = document.getElementById("output");
//add event listner to button
buttonEl.addEventListener("click", function() {
  //get the value from the name element
  var userName = inputEl.value;
  //modify value using sort
  var newName = sortUserName(userName);
  //put the value in the output element
  outputEl.innerHTML = "<p id=name-results>" + newName + "</p>"
});
