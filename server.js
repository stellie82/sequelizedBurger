// Required modules
var express = require("express");

// Set up Express app
var app = express();
var PORT = process.env.PORT || 8080;

// Set up Heroku prod database access
var JAWSDB_URL = process.env.JAWSDB_URL;

// Require models for syncing
var db = require("./models");

// Set up static content from the "public" directory in the application directory
app.use(express.static("public"));

// Set up Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
require("./routes/api-routes.js")(app);

// Sync sequelize models and then start Express app
db.sequelize.sync({ force: true }).then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
});