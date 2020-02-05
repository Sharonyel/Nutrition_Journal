$(document).ready(function() {
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
    $.get("/api/user_data").then(function(data) {
      // console.log("getting user data")
      // console.log(data)
      $(".user-name").text(data.user_name)
      $(".user-name").data('name',data.id);
      console.log($(".user-name").data('name'))
      $("#height").text(`Height: ${(parseInt(data.height)/12).toFixed(1)} feet`);
      $("#weight").text(`Weight: ${data.weight}lbs`);
      $("#full-name").text(`Name: ${data.first_name} ${data.last_name}`);
      $("#age").text(`Age: ${data.age}`);
    });




  });
  