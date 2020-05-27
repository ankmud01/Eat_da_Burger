const mysql = require("dotenv/config");

const connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: `${process.env.password}`,
    database: "officeDb"
});

connection.connect(function(err){
    if(err){
        console.error(`error connecting: ${err.stack}`);
        return;
    }
    console.lof(`connected as id ${connection.threadId}`)
});

module.exports = connection;