$(function() {
    $("#form-signin").on("click", function(event) {
        event.preventDefault();
        console.log("here")
        console.log("clicked")
        var userInput = $(".userName").val().trim();
        var passwordInput = $(".passWord").val().trim();
  console.log(userInput)
  console.log(passwordInput)
    });
 })
 $("#form-signup").on("click", function(event) {
     event.preventDefault();
     var newUser = {
         user_name: $(".cuserName").val().trim(),
         first_name: $(".cfirstName").val().trim(),
         last_name: $(".clastName").val().trim(),
         password: $(".cpassWord").val().trim(),
         age: $(".cAge").val().trim(),
         weight: $(".cWeight").val().trim(),
         height: $(".cHeight").val().trim(),
         gender: $(".cGender").val().trim(),
       };
       console.log(newUser)
     //   $.ajax("/api/", {
     //     type: "POST",
     //     data: newUser
     //   }).then(
     //     function() {
     //       console.log("created new user");
     //       // Reload the page to get the updated list
     //     //   location.reload();
     //     }
     //   );
   
 });
  
 // code for the calander is below
 // import bulmaCalendar from '~bulma-calendar/dist/js/bulma-calendar.min.js';
 // // Initialize all input of date type.
 // const calendars = bulmaCalendar.attach('[type="date"]', options);
 // // Loop on each calendar initialized
 // calendars.forEach(calendar => {
 //  // Add listener to date:selected event
 //  calendar.on('date:selected', date => {
 //      console.log(date);
 //  });
 // });
 // // To access to bulmaCalendar instance of an element
 // const element = document.querySelector('#my-element');
 // if (element) {
 //  // bulmaCalendar instance is available as element.bulmaCalendar
 //  element.bulmaCalendar.on('select', datepicker => {
 //      console.log(datepicker.data.value());
 //  });
 // }
 