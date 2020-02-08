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
};