//Author: Nkem Ndidi
//Since 28 October 2021
//Lisence: Public Domain
//Summary: Anon Functions and Callbacks
//Description: We are using this lab to experiment with using anonymouse functions as callbacks.

function addTen(x) {
  return x + 10;
}

//test function
console.log("Add 10", addTen(1));
console.log("Add 10", addTen(2));

array = [3, 10, -4, 73, 202, -515, 8]
console.log("My Array", array);

var result = array.map(addTen)
//should return [13, 20, 6, 83, 212, -505, 18]
console.log("Add 10 to array:", result);

var result = array.map(function(x){
  return x + 10;
})
//should return [13, 20, 6, 83, 212, -505, 18]
console.log("Add ten to array", result);
