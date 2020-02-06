var path = require("path");
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app){

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/landing.html"));
      });

      app.get("/welcome", isAuthenticated, function(req, res) {
        res.sendFile(path.join(__dirname, "../public/welcome.html"));
      });

      app.get("/signup", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/signup.html"));
      });

      app.get("/login", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/login.html"));
      });


};
