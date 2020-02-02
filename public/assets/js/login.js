$(document).ready(function() {
    var userLogin = $("#userLogin")
    var userName = $(".userName");
    var passWord = $(".passWord");


    userLogin.on("click", function(event) {
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
        .then(function(login) {
           console.log(login);

        })
        .catch(function(err) {
            console.log(err);
        });
    }
});