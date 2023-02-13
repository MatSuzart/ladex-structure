const oracledb = require('oracledb');
const database = process.env.NODE_ORACLEDB_DATABASE || "LEDAXTST";
const user = process.env.NODE_ORACLEDB_USER || "LEDAXTST";
const password = process.env.NODE_ORACLEDB_PASSWORD || "qj2ydo1r";
const connectString = process.env.NODE_ORACLEDB_CONNECTIONSTRING || "200.251.88.59:1521/TST";

async function getConnection() {
    let connection;
    try {
      connection = await oracledb.getConnection({
        user,
        password,
        connectString
      });
      console.log('Connection was successful!');
      return connection;
    } catch (err) {
      console.error(err);
    }
  }
  

  module.exports = { getConnection };


