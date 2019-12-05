var Burger = require("../models/burger.js");

// ROUTES
module.exports = function (app) {
    // Search for specific burger then provide JSON output
    app.get("/api/:burgers?", function (req, res) {
        if (req.params.burgers) {
            Burger.findOne({
                where: {
                    routeName: req.params.burgers
                }
            }).then(function (result) {
                return res.json(result);
            });
        } else {
            Burger.findAll().then(function (result) {
                return res.json(result);
            });
        }
    });

    // To add a new burger
    app.post("/api/new", function (req, res) {
        var burger = req.body;

        // Create a routeName
        var routeName = burger.name.replace(/\s+/g, "").toLowerCase();

        // Add burger to the DB using sequelize
        Burger.create({
            routeName: routeName,
            burger_name: Burger.burger_name,
            devoured: Burger.devoured
        });
        res.status(204).end();
    });
};

