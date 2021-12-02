//Author: Nkem Ndidi and Ashley Lu
//Since 02 December 2021
//Lisence: Public Domain
//Summary: JSON and API
//Description: The purpose of this lab was to experiment with processing JSON using APIs.

//Declare api URL

function comicObj() {
  $.ajax({
    // the url for the request
    url: "https://xkcd.com/info.0.json",
    //whether it is a POST or GET
    type: "GET",
    dataType: "JSON",
    //when the api is successful
    success: function(data) {
      console.log("success: ", data);
      var titleTxt = data.title;
      $("#title").html(titleTxt);
      var imgUrl = data.img;
      $("#image").html("<img src=" + https:sxkcd.com/info.0.json + ">");
    },
    //when the api is unsuccessful
    error: function(jqXHR, textStatus, errorThrown) {
      console.log("Error:", textStatus, errorThrown)
    }
    //what do we do when the api call is successful
    //everything goes in here
  })
}
$("#button").click(comicObj);
