// Set up Sequelize connection
var Sequelize = require("sequelize");

// Set up MySQL connection using Sequelize
var sequelize = new Sequelize("burgers", "root", "password", {
    host: "localhost",
    port: 3306,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  });

// Set up JawsDB provisioning or fallback on local database
// if (process.env.JAWSDB_URL) {
//     connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
//     connection = mysql.createConnection({
//         host: "localhost",
//         user: "root",
//         password: "password",
//         database: "burgers_db"
//     });
// };

// Export connection for files
module.exports = sequelize;