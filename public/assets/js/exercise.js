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
  
    function handleUserSignUp(event) {
      // console.log("clicked")
      event.preventDefault();
      
      // 
  
      enterUser({
        user_name: username.val().trim(),
        first_name: firstname.val().trim(),
        last_name: lastname.val().trim(),
        password: password.val().trim(),
        age: age.val().trim(),
        weight: weight.val().trim(),
        height: height.val().trim(),
        gender: gender.val()
  
  
      });
    }
  
    // A function for creating an author. Calls getAuthors upon completion
    function enterUser(userData) {
      // console.log(userData)
      $.post("/api/users", userData)
  
    }
  
  })
  
  
  