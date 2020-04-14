$(document).ready(function() {
  
 
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
    $.get("/api/user_data").then(function(data) {
      $(".user-name").text(data.first_name.charAt(0).toUpperCase()+ data.first_name.substring(1))
      $(".user-name").data('name',data.id);
      // console.log($(".user-name").data('name'))
      $("#height").text(`Height: ${(parseInt(data.height)/12).toFixed(1)} feet`);
      $("#weight").text(`Weight: ${data.weight} lbs`);
      $("#full-name").text(`Name: ${data.first_name.charAt(0).toUpperCase()+ data.first_name.substring(1)} ${data.last_name.charAt(0).toUpperCase()+ data.last_name.substring(1)}`);
      $("#age").text(`Age: ${data.age}`);
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

   });

 });