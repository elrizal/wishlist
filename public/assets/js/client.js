// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function(){
  $('.collapsible').collapsible();
  $('.modal').modal();

});

$(function() {
    $(".change-sleep").on("click", function(event) {
      const id = $(this).data("id");
      const newStatus = $(this).data("newstatus");

      const updatedState = {
        bought: newStatus
      };
  
      // Send the PUT request.
      $.ajax("/api/wishlist/" + id, {
        type: "PUT",
        data: updatedState
      }).then(
        function() {
          console.log("changed stat to", newStatus);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
      const newThing = {
        name: $("#ca").val().trim(),
        bought: $("[name=bought]:checked").val().trim()
      };

      console.log(`add this ${newThing}`)

      // Send the POST request.
      $.ajax("/api/wishlist", {
        type: "POST",
        data: newThing
      }).then(
        function() {
          console.log("created new");
          location.reload();
        }
      );
        $('#update').text('updated')

    });
  });
  console.log('client js \n')