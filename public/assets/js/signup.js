$(document).ready(function () {

  var username = $(".cuserName").val().trim();
  var firstname = $(".cfirstName").val().trim();
  var lastname = $(".clastName").val().trim();
  var password = $(".cpassWord").val().trim();
  var age = $(".cAge").val().trim();
  var weight = $(".cWeight").val().trim();
  var height = $(".cHeight").val().trim();
  var gender = $(".cGender").attr("data-name");

  $(document).on("click", "#user-signup", handleUserSignUp);
  $(document).on("click", "#user-signin", handleUserSignIn);
      
  function handleUserSignUp(event) {
    event.preventDefault();
    // Don't do anything if the name fields hasn't been filled out
    if (!username) {
      return;
    }
    // 

enterUser({
  user_name: username,
  first_name: firstname,
  last_name: lastname,
  password: password,
  age: age,
  weight: weight,
  height: height,
  gender: gender
  
});
}

// A function for creating an author. Calls getAuthors upon completion
function enterUser(userData) {
$.post("/api/users", userData)

}

})



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
