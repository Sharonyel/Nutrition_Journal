var path = require("path");

module.exports = function(app){

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/landing.html"));
      });

      app.get("/welcome", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/welcome.html"));
      });

      app.get("/signup", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/signup.html"));
      });

      app.get("/login", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/login.html"));
      });


};