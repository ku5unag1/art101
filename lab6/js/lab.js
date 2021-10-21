// Summary: Lab 6: Arrays and Objects
// Description: The purpose of this lab was to learn how to declare and output arrays and objects using JavaScript.
// @author: Nkem Ndidi
// @since: 21 October 2021

//Declairing Arrays and objects
var myTransport = ["car", "bus", "bike", "walk"];
var myMainRide = { make: "Honda",
                   model: "Civic",
                   color: "Space Gray",
                   year: 2021,
                   age: 5 };

//output
document.writeln("Getting Around: " + myTransport + "<br>");
document.writeln("My Main Ride: <pre>",
JSON.stringify(myMainRide, null, '\t'),
"</pre>");
