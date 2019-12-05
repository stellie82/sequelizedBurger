var express = require("express");
var router = express.Router();

// Import model to use its database functions
var burger = require("../models/burger.js");

// Create all routes
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var obj = {
            burgers: data
        };
        console.log(obj);
        res.render("index", obj);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.insertOne("burger_name", req.body.burger_name, function (result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne(
        {
            devoured: req.body.devoured
        },
        condition,
        function (result) {
            if (result.changedRows === 0) {
                return res.status(404).end();
            }
            res.status(200).end();
        }
    );
});

// Export routes for server.js
module.exports = router;