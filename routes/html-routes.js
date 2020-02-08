

var path = require('path');
var isAuthenticated = require('../config/middleware/isAuthenticated');
var db = require('../models');

module.exports = function(app){

  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/landing.html'));
  });

  app.get('/welcome', isAuthenticated, function(req, res) {
    var exercise;
    var query = {};
    if (req.user.id) {
      query.UserId = req.user.id;
    }

    db.Exercise.findAll({
      where: query,
           
    }).then(function (data) {
      exercise = data;
      

    });

   

    db.Food.findAll({
      where: query,
           
    }).then(function (data) {
      var hbdata = {
        food: data,
        exercise: exercise
      };
          
      res.render('welcome', hbdata);
    });

      

        
  });

  app.get('/signup', function(req, res) {
    res.render('signup');
    // res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get('/login', function(req, res) {
    res.render('login');
    // res.sendFile(path.join(__dirname, "../public/login.html"));
  });
  app.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });


};