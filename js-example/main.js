// remap jQuery to $
(function($){

  "use strict";

    $.ajax({
        type: "GET",
        url: '../beings.json',
        dataType: 'json',
    }).success( function(response){
        $.each(response.being, function(){
            var arr = this.projects;
            var index = arr.indexOf("red");

            // only return beings who have worked on the project
            if (index >= 0) {
            
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

            }
        });
    });

})(window.jQuery);