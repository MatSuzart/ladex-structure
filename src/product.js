const express = ('express');
const oracledb = require('oracledb');
const getConnection = require('./database/dbconnection').getConnection;

async function getProducts() {
  const connection = await getConnection();
  if (connection) {
    try {
      const result = await connection.execute(
        `SELECT * FROM TGFPRO WHERE rownum <= 30`
      );
      console.log(result);
      return result;
    } catch (error) {
      console.error('Error while executing the query:', error);
      return false;
    } finally {
      if (connection) {
        try {
          await connection.close();
        } catch (error) {
          console.error('Error while closing the connection:', error);
        }
      }
    }
  }
}


 
module.exports = { getProducts }
