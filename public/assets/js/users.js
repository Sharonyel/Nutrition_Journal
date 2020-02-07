$(document).ready(function() {
  
 
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
    $.get("/api/user_data").then(function(data) {
      $(".user-name").text(data.first_name)
      $(".user-name").data('name',data.id);
      // console.log($(".user-name").data('name'))
      $("#height").text(`Height: ${(parseInt(data.height)/12).toFixed(1)} feet`);
      $("#weight").text(`Weight: ${data.weight} lbs`);
      $("#full-name").text(`Name: ${data.first_name} ${data.last_name}`);
      $("#age").text(`Age: ${data.age}`);
    });


    // $.get("/api/exercises").then(function(data) {
    //   console.log(data);
    //   for(i=0; i< data.length; i++){      
       
    //     $("#exercises").append(`
    //     <td>${data[i].date}</td>
    //     <td>${data[i].exercise_name}</td>
    //     <td>${data[i].duration}, mins</td>
    //     <td>${data[i].calories_burned}</td>`);
    //   }
    // })
    $.get("/api/foods").then(function(data) {
      // console.log(data);
      for(i=0; i< data.length; i++){      
       
        $("#foods").append(`<li>${data[i].date}  ${data[i].food_name} Servings: ${data[i].servings}, ${data[i].calories} Calories </li>`);
      }

    })
    // $.get("/api/exercises").then(function(data) {
    //   console.log(data);
    //   for(i=0; i< data.length; i++){      
       
    //     $("#exercises").append(`<li>${data[i].date}  ${data[i].exercise_name}: ${data[i].duration} Minutes, ${data[i].calories_burned} Calories Burned </li>`);
    //   }
    // })
  });
  