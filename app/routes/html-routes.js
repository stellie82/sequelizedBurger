var path = require("path");

// ROUTES
module.exports = function (app) {
    // Index route loads view.html
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/view.html"));
    });

    // Add route loads add.html page
    app.get("/add", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/add.html"));
    });

    // All route loads the all.html page
    app.get("/all", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/all.html"));
    });
};
