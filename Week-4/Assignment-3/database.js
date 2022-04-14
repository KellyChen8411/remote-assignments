const mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Kelly2542",
    database: "assignment"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("MySQL server connected!");
});

module.exports = con;