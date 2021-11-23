//Author: Nkem Ndidi with refrences from Wes's HTML and JS files
//Since 23 November 2021
//Lisence: Public Domain
//Summary: Loops
//Description: The purpose of this lab was to experiment with loops.

outputEl = document.getElementById("output");

// Create a "FizzBuzz" function similar to how we did in class.
// Loop through numbers 1 to 200, listing them as you go
// If the number is a multiple of 3, if should print "Doh!"
// If the number is a multiple of 5, it should print "Re!"
// If the number is a multiple of 7, it should print "Me!"
function dohre() {
  var result = "";
  for (let i = 1; i <= 200; i++) {
    var str = "";
    if (i % 3 == 0) {
      str += "Doh";
    }
    if (i % 5 == 0) {
      str += "Re";
    }
    if (i % 7 == 0) {
      str += "Me";
    }
    if (str == "" ) {
      str += i+"<br>";
    }
    else {
      str += "!<br>"
    }
    result += str;
  }
  return result
}

$(outputEl).html(dohre())
