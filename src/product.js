const express = ('express');
const oracledb = require('oracledb');
const getConnection = require('./database/dbconnection').getConnection;

async function run() {
  let connection;
  try {
    connection = await getConnection();

    const sql = `SELECT * FROM TGFPRO WHERE rownum <= 30`;
    const options = { outFormat: oracledb.OBJECT };
    const result = await connection.execute(sql, [], options);

    return result.rows;
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
  
 
module.exports = { run }
