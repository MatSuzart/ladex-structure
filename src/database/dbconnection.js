const oracledb = require('oracledb');

async function getConnection() {
    let connection;
    try {
        connection = await oracledb.getConnection({
            user: "LEDAXTST",
            password: "qj2ydo1r",
            connectString: "200.251.88.59:1521/TST"
        });
        console.log("Conexão realizada com sucesso");
    } catch (error) {
        console.error(error);
        return;
    }
    return connection;
}

module.exports = { getConnection }