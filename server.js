// Required modules
var express = require("express");

// Set up Express app
var app = express();
var PORT = process.env.PORT || 8080;

// Set up static content from the "public" directory in the application directory
app.use(express.static("public"));

// Set up Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
require("./app/routes/api-routes.js")(app);
require("./app/routes/html-routes.js")(app);

// Start server to begin listening
app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});