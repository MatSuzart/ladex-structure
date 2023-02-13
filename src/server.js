const express = require("express");
/*const getConnection = require("./database/dbconnection")*/
const app = express();
const route = require("./routes/index")

const PORT = 8000;

app.use(require('./routes'));

app.listen(PORT, ()=> console.log(`SERVER IS RUNNING ON PORT ${PORT}`));




/*
async function run() {
    let connection;
    try {
      connection = await getConnection();
  
      const sql = `SELECT * FROM TGFPRO`;
      const options = { outFormat: oracledb.OBJECT };
      const result = await connection.execute(sql, [], options);
      console.log('Records:');
      console.log(result.rows);
    } catch (err) {
      console.error(err);
    } finally {
      if (connection) {
        try {
          await connection.close();
        } catch (err) {
          console.error(err);
        }
      }
    }
  }
  
  
  run();
  */