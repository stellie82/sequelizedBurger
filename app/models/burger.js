// Require Sequelize (standard library)
var Sequelize = require("sequelize");

// Require sequelize (connection to the DB)
var sequelize = require("../config/connection.js");

// Create a burger model to match up with DB
var Burger = sequelize.define("burger", {
    routeName: Sequelize.STRING,
    burger_name: Sequelize.STRING,
    devoured: Sequelize.BOOLEAN
}, {
    // disable the modification of tablenames
    freezeTableName: true
});

// Sync with DB
Burger.sync();

// Export burger model for other files
module.exports = Burger;