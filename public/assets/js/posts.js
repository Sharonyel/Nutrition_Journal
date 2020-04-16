let foodCalorieCount= 0;
let exerciseCalorieCount =0;
let value1
let total = 0


$(document).ready(function () {

  $.get('/api/exercises').then(function (data) {

    // for (var i = 0; i < data.length; i++) {

    //     // $(".exercisePost").text(`Exercise: ${data[i].exercise_name} Duration: ${data[i].duration} `)
    //     // $(".exerciseCalorie").text(`${data[i].calories_burned}`)
    //   }
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;
    console.log(today);
    

    if (data.length !== 0) {

      for (var i = 0; i < data.length; i++) {
        
        if(data[i].date === today){
          exerciseCalorieCount = exerciseCalorieCount + data[i].calories_burned
          console.log(exerciseCalorieCount)
        var row = $("<div class='columns'>");


        row.append("<p class='column' style='text-indent: 10px;'>" + data[i].exercise_name+" ("+data[i].duration+"min)</p>" + "<span class='column' style='color:green';>" + data[i].calories_burned + "</p>");
      $(".exercisePost").prepend(row);
      
     
      }
    }
    
    
    }
    // $(".exerciseCalorie").text("-"+exerciseCalorieCount)
  });
  $.get('/api/foods').then(function (data) {

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;
    console.log(today);
    // for (var i = 0; i < data.length; i++) {

    //     $(".foodPost").text(`Food: ${data[i].food_name}  Servings: ${data[i].servings}`)
    //     $(".foodCalorie").text(`${data[i].calories}`)
    //   }
    if (data.length !== 0) {

      for (var i = 0; i < data.length; i++) {

        if(data[i].date === today){
          foodCalorieCount = foodCalorieCount + data[i].calories
          console.log(foodCalorieCount);
        var row = $("<div class='columns'>");
        // row.addClass("chirp");

        row.append("<p class='column' style='text-indent: 10px;'>" + data[i].food_name+" ("+data[i].servings+" servings)</p>" + "<p class='column' style='color:red';>" + data[i].calories + "</p>");
        // row.append("<p>" + data[i].body + "</p>");
        // row.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "</p>");

        $(".foodPost").prepend(row);

      }
    }
    }
    call()
    $("#caloriesremaining").text(total)
    
  });
});

function call() {
  value1 = $("#startcalorie").text();
  total = parseInt(value1) + exerciseCalorieCount - foodCalorieCount;
  
}
