//Author: Nkem Ndidi with refrences from Wes's HTML and JS files
//Since 4 November 2021
//Lisence: Public Domain
//Summary: Libraries and jOuery
//Description: The purpose of this lab was to experiment with jQuery

//Use jQuery to create buttons for the challenge, problems and results section of your document.
//Find the section you want to add the button to
//Create the button
$("#challenge").append("<button id='c-button'>Challenge Button</button>");
$("#problem").append("<button id='p-button'>Problem Button</button>");
$("#results").append("<button id='r-button'>Results Button</button>");

//Add a click event for each button
$("#c-button").click(function(){
  alert("You have passed the challenge!");
  $(this).parent().toggleClass("special");
});

$("#p-button").click(function(){
    $(this).parent().css("background-color", "#169c39");
    $(this).parent().toggleClass("special");
});

$(document).ready(function(){
  $("#r-button").dblclick(function(){
    $("#results > p").hide();
    $(this).parent().toggleClass("special");
  });
});
