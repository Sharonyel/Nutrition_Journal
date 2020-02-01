$(document).ready(function () {

  var username = $(".cuserName")
  var firstname = $(".cfirstName")
  var lastname = $(".clastName")
  var password = $(".cpassWord")
  var age = $(".cAge")
  var weight = $(".cWeight")
  var height = $(".cHeight")
  var gender = $(".genderOption")

  $(document).on("click", "#user-signup", handleUserSignUp);
  // $(document).on("click", "#user-signin", handleUserSignIn);




  function handleUserSignUp(event) {
    console.log("clicked")
    event.preventDefault();
    // Don't do anything if the name fields hasn't been filled out
    
    // 

    enterUser({
      user_name: username.val().trim(),
      first_name: firstname.val().trim(),
      last_name: lastname.val().trim(),
      password: password.val().trim(),
      age: age.val().trim(),
      weight: weight.val().trim(),
      height: height.val().trim(),
      gender: gender.attr("data-name")

    });
  }

  // A function for creating an author. Calls getAuthors upon completion
  function enterUser(userData) {
    console.log(userData)
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
