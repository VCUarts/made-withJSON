// remap jQuery to $
(function($){

  "use strict";

  // Get a reference to our data
  var allRef = new Firebase("https://amber-heat-9541.firebaseio.com/");
  var beingsRef = new Firebase("https://amber-heat-9541.firebaseio.com/beings");

  beingsRef.on('child_added', function (snapshot) {
    var being = snapshot.val();

    $('#main').append(
        $("<div class='being'>")
        .append(
            $("<img src="+ being.photo +">")
        )
        .append(
            $("<h4>" + being.firstName + ' ' + being.lastName + "</h4>")
        )
        .append(
            $("<h4>" + being.title + "</h4>")
        )
        .append(
            $("<p>" + being.bio + "</p>")
        )
    );
  }, function (errorObject) {
    console.log('The read failed: ' + errorObject.code);
  });

})(window.jQuery);