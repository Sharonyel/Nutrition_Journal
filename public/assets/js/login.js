$(document).ready(function() {
    var userLogin = $("#userLogin")
    var userName = $(".userName");
    var passWord = $(".passWord");
    var errMess = $(".errMess")
    var errmess;


    userLogin.on("click",initlogin);
    document.addEventListener("keyup", function(event){
      if(event.keyCode === 13){
        userLogin.click();
      }
    });
    
    
    function initlogin(event) {
        event.preventDefault();
       
        var loginData = {
            user_name: userName.val().trim(),
            password: passWord.val().trim()
        };
 
        if (!loginData.user_name || !loginData.password) {
            return;
        }

        loginUser(loginData.user_name, loginData.password);
        userName.val("");
        passWord.val("");
    };

  

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
       alert("User name and/or password is incorrect, Please try again")
        

      });
  
    }




});