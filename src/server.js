var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080;
var db = require('../models');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('../public'));

// Routes
// =============================================================
require('../routes/html-routes.js')(app);
require('../routes/user-api-routes.js')(app);
// require('../routes/food-api-routes.js')(app);
// require('../routes/exercise-api-routes.js')(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log('App listening on PORT ' + PORT);
  });
});
