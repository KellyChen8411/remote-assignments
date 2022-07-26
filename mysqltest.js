const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "mysqlservice",
  user: "root",
  password: "12345678",
  database: "nice_stay_test",
});

async function testmysql(){
    const house = await pool.query("SELECT * from house");
    console.log(house);
}

testmysql();
