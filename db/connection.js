var mysql = require("mysql");

var connection;


var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3000
  port: 3000,

  // Your username
  user: "root",

  // Your password
  password: "process.env.DB_PASS",
  database: "WhoDat_DB"
});