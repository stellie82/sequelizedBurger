// Require models
var db = require("../models");

// ROUTES
module.exports = function (app) {
    app.get("/api/burgers", function (req, res) {
        db.Burger.findAll({}).then(function (dbBurger) {
            res.json(dbBurger);
        });
    });

    app.post("/api/burgers", function (req, res) {
        db.Burger.create({
            burger_name: req.body.burger_name,
            devoured: req.body.devoured
        }).then(function (dbBurger) {
            res.json(dbBurger);
        })
            .catch(function (err) {
                res.json(err);
            });
    });

    app.put("/api/burgers", function (req, res) {
        db.Burger.update({
            burger_name: req.body.burger_name,
            devoured: req.body.devoured
        }, {
            where: {
                id: req.body.id
            }
        }).then(function (dbBurger) {
            res.json(dbBurger);
        })
            .catch(function (err) {
                res.json(err);
            });
    });
};