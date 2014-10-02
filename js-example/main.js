// remap jQuery to $
(function($){

  "use strict";

    $.ajax({
        type: "GET",
        url: '../beings.json',
        dataType: 'json',
    }).success( function(response){
        console.log(response.being);
        $.each(response.being, function(){
          $('#main').append(
                $("<div class='being'>")
                .append(
                    $("<img src="+ this.photo +">")
                )
                .append(
                    $("<h4>" + this.firstName + ' ' + this.lastName + "</h4>")
                )
                .append(
                    $("<h4>" + this.title + "</h4>")
                )
                .append(
                    $("<p>" + this.bio + "</p>")
                )
            );
        });
    });

})(window.jQuery);