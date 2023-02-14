const oracledb = require('oracledb');

async function getConnection() {
    let connection;
    try {
        connection = await oracledb.getConnection({
            user: "",
            password: "",
            connectString: ""
        });
        console.log("Conexão realizada com sucesso");
    } catch (error) {
        console.error(error);
        return;
    }
    return connection;
}

module.exports = { getConnection }