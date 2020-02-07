var express = require('express');
var session = require('express-session');
var passport = require('./config/passport');
var exphbs = require('express-handlebars');


var app = express();
var PORT = process.env.PORT || 8080;
var db = require('./models');
// Set Handlebars.

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// app.use(require('cookie-parser')());
// app.use(require('body-parser').urlencoded({ extended: false }));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./public'));

app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Routes
// =============================================================
require('./routes/html-routes.js')(app);
require('./routes/user-api-routes.js')(app);
require('./routes/food-api-routes.js')(app);
require('./routes/exercise-api-routes.js')(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log('App listening on PORT ' + PORT);
  });
});
