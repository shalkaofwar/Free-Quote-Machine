
$(document).ready(function() { 
        var randomQuote = '' + "One Fitting Of That Name, A Name That is suitable." + '';
        
        $("#randomQuote").click(function() {      
              $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&jsonp=?&lang=en", function(responseText) { 
                
                $("#quoteText").html('"' + responseText.quoteText + '"');
                $("#author").html("- " + responseText.quoteAuthor);
                
                randomQuote = responseText.quoteText;
                
                var randomColor = function getRandomColor() {
                    var letters = '012345';
                    var color = '#';
                    for (var i = 0; i < 6; i++ ) {
                        color += letters[Math.floor(Math.random() * 6)];
                    }
                    return color;
                }
                
                $("body").css("color",randomColor); 
            });                    
        });
        
        
        
  $(".dropdown-menu").click(function() {
 
       $(".navbar-collapse").collapse("hide");
   
});

        
    });   

