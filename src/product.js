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
        WHERE REGEXP_LIKE(compldesc, '^8[1-9].*$')`
      );
    }

    if (potencia) {
      params.potencia = await connection.execute(
        `SELECT SUBSTR(descrprod, INSTR(descrprod, '.')+1, 3)
        FROM tgfpro
        WHERE REGEXP_LIKE(descrprod, '^\\d{3}\\.\\w+\\.\\w+\\.\\w+\\.\\w+\\.\\w+\\.\\w+$')`
      );
    }

    if (conjuntoOtico) {
      params.conjuntoOtico = await connection.execute(
        `SELECT SUBSTR(descrprod, INSTR(descrprod, '.', 1, 2)+1, 1)
        FROM tgfpro
        WHERE REGEXP_LIKE(descrprod, '^\\w+\\.\\w+\\.\\w+\\.\\w+\\.\\w+\\.\\w+\\.\\w+$')`
      );
    }

    if (temperaturadeCor) {
      params.temperaturadeCor = await connection.execute(
        `SELECT SUBSTR(descrprod, INSTR(descrprod, '.', 1, 3)+1, 3)
        FROM tgfpro
        WHERE REGEXP_LIKE(descrprod, '^\\w+\\.\\w+\\.\\w+\\.\\w+\\.\\w+\\.\\w+\\.\\w+$')`
      );
    }

    if (cordePintura) {
      params.cordePintura = await connection.execute(
        `SELECT SUBSTR(descrprod, INSTR(descrprod, '.', 1, 4)+1, 2)
        FROM tgfpro
        WHERE REGEXP_LIKE(descrprod, '^\\w+\\.\\w+\\.\\w+\\.\\w+\\.\\w+\\.\\w+\\.\\w+$')`
      );
    }

    if (Fixacao) {
      params.Fixacao = await connection.execute(
        `SELECT SUBSTR(descrprod, INSTR(descrprod, '.', 1, 5)+1, 2)
        FROM tgfpro
        WHERE REGEXP_LIKE(descrprod, '^\\w+\\.\\w+\\.\\w+\\.\\w+\\.\\w+\\.\\w+\\.\\w+$')`
      );
    }

    if (Adicionais) {
      params.Adicionais = await connection.execute(
        `SELECT SUBSTR(descrprod, INSTR(descrprod, '.', 1, 6)+1)
        FROM tgfpro
        WHERE REGEXP_LIKE(descrprod, '^\\w+\\.\\w+\\.\\w+\\.\\w+\\.\\w+\\.\\w+\\.\\w+$')`
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

