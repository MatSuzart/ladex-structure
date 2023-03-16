const express = ('express');
const oracledb = require('oracledb');
const dbconnection = require('./database/dbconnection');


async function getProducts(linha, potencia, conjuntoOtico, temperaturadeCor, cordePintura, Fixacao, Adicionais) {
  let connection;
  try {
    connection = await dbconnection.getConnection();

    const params = {};

    if (linha) {
      params.linha = await connection.execute(
        `SELECT SUBSTR(descrprod, 1, INSTR(descrprod, '.')-1) || '.' || SUBSTR(descrprod, INSTR(descrprod, '.')+1, 3)
        FROM tgfpro
        WHERE REGEXP_LIKE(compldesc, '^8[1-9].*$');`
      );
    }

    if (potencia) {
      params.potencia = await connection.execute(
        `SELECT descrprod FROM tgfpro WHERE LENGTH(descrprod) = 3 AND REGEXP_LIKE(descrprod, '^[0-9]{3}$')`
      );
    }

    if (conjuntoOtico) {
      params.conjuntoOtico = await connection.execute(
        `SELECT descrprod FROM tgfpro WHERE LENGTH(descrprod) = 4 AND REGEXP_LIKE(descrprod, '^[0-9]{3}[A-Za-z]$')`
      );
    }

    if (temperaturadeCor) {
      params.temperaturadeCor = await connection.execute(
        `SELECT descrprod FROM tgfpro WHERE LENGTH(descrprod) = 3 AND REGEXP_LIKE(descrprod, '^K[0-9]{2}$')`
      );
    }

    if (cordePintura) {
      params.cordePintura = await connection.execute(
        `SELECT descrprod FROM tgfpro WHERE LENGTH(descrprod) = 2 AND REGEXP_LIKE(descrprod, '^[A-Za-z]{2}$')`
      );
    }

    if (Fixacao) {
      params.Fixacao = await connection.execute(
        `SELECT descrprod FROM tgfpro WHERE LENGTH(descrprod) = 2`
      );
    }

    if (Adicionais) {
      params.Adicionais = await connection.execute(
        `SELECT descrprod FROM tgfpro WHERE LENGTH(descrprod) = 3 AND NOT (LENGTH(descrprod) = 3 AND REGEXP_LIKE(descrprod, '^[0-9]{3}$')) AND NOT (LENGTH(descrprod) = 4 AND REGEXP_LIKE(descrprod, '^[0-9]{3}[A-Za-z]$')) AND NOT (LENGTH(descrprod) = 3 AND REGEXP_LIKE(descrprod, '^K[0-9]{2}$')) AND NOT (LENGTH(descrprod) = 2 AND REGEXP_LIKE(descrprod, '^[A-Za-z]{2}$')) AND NOT (LENGTH(descrprod) = 2)`
      );
    }

    return params;
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

module.exports = { getProducts }

