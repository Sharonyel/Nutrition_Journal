$(document).ready(function() {
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
    $.get("/api/user_data").then(function(data) {
      // console.log("getting user data")
      // console.log(data)
      $(".user-name").text(data.user_name);
      $("#height").text(`Height: ${data.height}`);
      $("#weight").text(`Weight: ${data.weight}`);
      $("#full-name").text(`Full Name: ${data.first_name} ${data.last_name}`);
      $("#age").text(`Age: ${data.age}`);
    });
    



  });
  