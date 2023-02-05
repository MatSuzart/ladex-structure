const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "database"
  });

  connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected to the MySQL database.");
  });