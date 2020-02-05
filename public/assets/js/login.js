$(document).ready(function() {
    var userLogin = $("#userLogin")
    var userName = $(".userName");
    var passWord = $(".passWord");
    var errMess = $(".errMess")
    var errmess;


    userLogin.on("click", function(event) {
        event.preventDefault();
        // console.log("clicked")
        var loginData = {
            user_name: userName.val().trim(),
            password: passWord.val().trim()
        };
// console.log(loginData)
        if (!loginData.user_name || !loginData.password) {
            return;
        }

        loginUser(loginData.user_name, loginData.password);
        userName.val("");
        passWord.val("");
    });

  

    function loginUser(user_name, password) {
        $.post("/api/login", {
            user_name: user_name,
          password: password
        })
          .then(function() {
            window.location.replace("/welcome");
            // If there's an error, log the error
          })
          .catch(function(err) {
          errmess = err.responseText;
            console.log(errmess);
            getError();
            
          });
      }

      function getError() {
      $.get("/login").then(function(data) {
        $(".errMess").text(`message is : Invalid username & password`)
        // $("#showModal").click(function() {
          // $(".modal").addClass("is-active");  
       alert("User name and/or password is incorrect, Please try again")
        
        // $(".modal-close").click(function() {
        //    $(".modal").removeClass("is-active");
        // });

      });
  
    }




});