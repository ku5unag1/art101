// Summary: Lab 7: Functions
// Description: The purpose of this lab was to learn how to write functions and be able to manipulate strings.
// @author: Nkem Ndidi
// @since: 26 October 2021

// sortUserName - a function that takes user input and sorts the letters of their name
// of their name
function sortUserName() {
  var userName = window.prompt("What is your name?");
  console.log("Nkem =", userName);
  // Split string to array
  var nameArray = userName.toLowerCase().split('');
  console.log("Nkem =", nameArray);
  // Sort the array
  var nameArraySort = nameArray.sort();
  console.log("Nkem =", nameArraySort);
  //Join array back to String
  var nameSorted = nameArraySort.join('');
  console.log("Nkem =", nameSorted);
  return nameSorted;
};

//output
document.writeln("Nice to meet you: ", sortUserName(), "</br>");
