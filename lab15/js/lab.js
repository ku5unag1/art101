//Author: Nkem Ndidi and Ashley
//Since 30 November 2021
//Lisence: Public Domain
//Summary: AJAX
//Description: The purpose of this lab was to experiment with jQuery and AJAX.

//Declare api URL
function quoteGen() {
  $.ajax({
    // the url for the request
    url: "https://api.quotable.io/random",
    //whether it is a POST or GET
    type: "GET",
    dataType: "JSON",
    //what do we do when the api call is successful
    //everything goes in here
  })
  .done(function(data) {
    console.log("success: ", data);
    var author = data.author;
    console.log(author);
    var quote = data.content;
    $("#activate").html("<h4>"+quote+"</h4><br>- "+author);
  })
  //what do we do if the api call fails
  .fail(function(request, error) {
    console.log(request, error);
  })
}

$("#activate").click(quoteGen)
