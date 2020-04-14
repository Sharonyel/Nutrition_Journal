var db = require('../models');
var passport = require('../config/passport');

module.exports = function (app) {
  app.get('/api/users', function (req, res) {

    db.User.findAll({
      include: [db.Exercise]
    }).then(function (dbUser) {
      res.json(dbUser);
    });

  });

  app.get('/api/users/:id', function (req, res) {
    db.User.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Exercise]
    }).then(function (dbUser) {
      res.json(dbUser);
    });
  });

  
  app.put('/api/users', function (req, res,) {
    db.User.update({
      weight: req.body.weight},{
      where: {
        id: req.body.id
      }
    }).then(function (dbUser) {
      res.json(dbUser);
    });
    console.log(req.body.weight)
  });

  app.post('/api/users', function (req, res) {
    // console.log("api/users", req.body)
    db.User.create(req.body)
      .then(function() {
        res.redirect(307, '/api/login');
      })
      .catch(function(err) {
        console.log(err); 
        res.status(401).json(err);
            
      });
    
  });

  app.delete('/api/users/:id', function (req, res) {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbUser) {
      res.json(dbUser);
    });
  });
  // Sharon added this to test passport error messages for incorrect info
  app.get('/api/login', function(req, res, next) {
    passport.authenticate('local', function(err, dbUser) {
      if (err) {
        console.log('is this an err ' + err, dbUser);
        return next(err);
            
      }
      if (!dbUser) {
        return res.status(401).send({'ok': false});
      }
      req.logIn(dbUser, function(err) {
        if (err) {
          return next(err);
        }
        return res.send({'ok': true});
      });
    })(req, res, next);
  });

  app.post('/api/login', passport.authenticate('local'), function(req, res) {
    // console.log(req.user);
    res.json(req.user);

  });
    
  // Route for getting some data about our user to be used client side
  app.get('/api/user_data', function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        user_name: req.user.user_name,
        id: req.user.id,
        height: req.user.height,
        weight: req.user.weight,
        gender: req.user.gender,
        age: req.user.age,
        first_name: req.user.first_name,
        last_name: req.user.last_name
      });
      
    }
  });



};