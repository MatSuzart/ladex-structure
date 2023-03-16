const oracledb = require('oracledb');
require('dotenv').config();

async function getConnection() {
  let connection;
  try {
    await oracledb.initOracleClient({ libDir : process.env.LD_LIBRARY_PATH });
    connection = await oracledb.getConnection({
      user: process.env.USER,
      password: process.env.PASSWORD,
      connectString: process.env.CONNECT_STRING
    });    
    console.log("Conexão realizada com sucesso");
  } catch (error) {
    console.error(error);
    return;
  }
  return connection;
}

module.exports = { getConnection };


/*
const oracledb = require('oracledb');
const database = process.env.NODE_ORACLEDB_DATABASE || "";
const user = process.env.NODE_ORACLEDB_USER || "";
const password = process.env.NODE_ORACLEDB_PASSWORD || "";
const connectString = process.env.NODE_ORACLEDB_CONNECTIONSTRING || "";

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
      throw err;
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
  

module.exports = { getConnection };
*/