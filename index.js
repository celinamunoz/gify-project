// JavaScript File
/*global location $*/
var searchTerm;
$("#submit").click(function() {
    console.log("hello");
    searchTerm= $("#input").val();
    $.getJSON(
        "https://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=dc6zaTOxFJmzC",
        
        function(response) {
            console.log(response);
            $("#gif").html("<img src=" + response.data[Math.floor(Math.random()*response.data.length)].images.fixed_width_downsampled.url + ">");
        }
    );
    
        
});

$("#reset").click(function() { 
    location.reload();
    
});



