$(document).ready(function() {
    // var userLogin = $("#userLogin")
    var login = $(".loginBtn");
    var signup = $(".signupBtn");

 
    Login.on("click", function(event) {
        event.preventDefault();
        console.log("clicked")
        var loginData = {
            user_name: userName.val().trim(),
            password: passWord.val().trim()
        };
console.log(loginData)
        if (!loginData.user_name || !loginData.password) {
            return;
        }

        loginUser(loginData.user_name, loginData.password);
        userName.val("");
        passWord.val("");
    });

    function loginUser(user_name, password) {
        console.log(user_name)
        $.post("/api/login", {
            user_name: user_name,
            password: password
        })
        .then(function() {
            window.location.replace("/welcome")

        })
        // .catch(function(err) {
        //     console.log(err)
        // });
        
    }
});