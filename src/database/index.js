const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: ""
  });

  connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected to the MySQL database.");
  });

  
/*
  connection.query(
    `SELECT * FROM TGFPRO`,
    function(err, results) {
      if (err) {
        console.error(err);
      } else {
        console.log(results);
      }
    }
  );

  */