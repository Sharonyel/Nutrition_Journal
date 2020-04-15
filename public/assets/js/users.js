$(document).ready(function() {
  
 
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
    $.get("/api/user_data").then(function(data) {
      $(".user-name").text(data.first_name.charAt(0).toUpperCase()+ data.first_name.substring(1))
      $(".user-name").data('name',data.id);
      console.log($(".user-name").data('name'))
      $("#height").text(`Height: ${(parseInt(data.height)/12).toFixed(1)} feet`);
      $("#weight").text(`Weight: ${data.weight} lbs`);
      $("#full-name").text(`Name: ${data.first_name.charAt(0).toUpperCase()+ data.first_name.substring(1)} ${data.last_name.charAt(0).toUpperCase()+ data.last_name.substring(1)}`);
      $("#age").text(`Age: ${data.age}`);
      $("#gender").data(`Gender: ${data.gender}`);

      // ********* BMI 

      let bmiWeight = data.weight/2.20462262;
      console.log(bmiWeight);

      let meterHeight = data.height/39.3700797;
      let bmiHeight = meterHeight * meterHeight;
      console.log(bmiHeight)
      // let userBMI = bmiWeight/bmiHeight;

      let userBMI = bmiWeight/bmiHeight;
      console.log(userBMI)

      // ****** calories to burn

      let c2bHeight = data.height * 2.54;


      // console.log(data.gender)

      let userBMR = 10*bmiWeight + c2bHeight*6.25 - 5*data.age + 5;
      console.log(userBMR)

      let userBMRf = 10*bmiWeight + c2bHeight*6.25 - 5*data.age -161;





      $("#bmi").text(`BMI: ${userBMI.toFixed(0)}`)

      $("#dcn").text(`Daily Calorie Needs: ${userBMR.toFixed(0)}`)

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
    // $.get("/api/foods").then(function(data) {
    //   // console.log(data);
    //   for(i=0; i< data.length; i++){      
       
    //     $("#foods").append(`<li>${data[i].date}  ${data[i].food_name} Servings: ${data[i].servings}, ${data[i].calories} Calories </li>`);
    //   }

    // })
    // $.get("/api/exercises").then(function(data) {
    //   console.log(data);
    //   for(i=0; i< data.length; i++){      
       
    //     $("#exercises").append(`<li>${data[i].date}  ${data[i].exercise_name}: ${data[i].duration} Minutes, ${data[i].calories_burned} Calories Burned </li>`);
    //   }
    // })
  });
  
      $("#gender").text(`Gender: ${data.gender}`);
    
     // ********* BMI 

     let bmiWeight = data.weight/2.20462262;
     console.log(bmiWeight);

     let meterHeight = data.height/39.3700797;
     let bmiHeight = meterHeight * meterHeight;
     console.log(bmiHeight)
     // let userBMI = bmiWeight/bmiHeight;

     let userBMI = bmiWeight/bmiHeight;
     console.log(userBMI)

     // ****** calories to burn

     let c2bHeight = data.height * 2.54;


     // console.log(data.gender)

     if (data.gender === 'male') {
      let userMale = 10*bmiWeight + c2bHeight*6.25 - 5*data.age + 5;
        userBMR = userMale
      }
      else
      {
      let userFemale = 10*bmiWeight + c2bHeight*6.25 - 5*data.age -161;
       userBMR = userFemale
      }



     $("#bmi").text(`BMI: ${userBMI.toFixed(0)}`)

     $("#dcn").text(`Daily Calorie Needs: ${userBMR.toFixed(0)}`)




