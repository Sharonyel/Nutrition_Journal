var db = require('../models');
module.exports = function (app) {

  app.get('/api/exercises', function (req, res) {
    var query = {};
    if (req.user.id) {
      query.UserId = req.user.id;
    }

    db.Exercise.findAll({
      where: query,
      include: [db.User]
    }).then(function (dbExercise) {
      res.json(dbExercise);
    });
  });

  app.post('/api/exercises', function (req, res) {
    db.Exercise.create(req.body).then(function (dbExercise) {
      res.json(dbExercise);
    });
  });

  app.delete('/api/exercises/:id', function (req, res) {
    db.Exercise.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbExercise) {
      res.json(dbExercise);
    });
  });


  app.put('/api/exercises', function (req, res) {
    db.Exercise.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function (dbExercise) {
      res.json(dbExercise);
    });
  });

  app.get('/api/exercise_data', function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        duration: req.exercise.duration,
        id: req.exercise.id,
        exercise_name: req.exercise.exercise_name,
        calories_burned: req.exercise.calories_burned,
        date: req.exercise.date
      });
      
    }
  });
};