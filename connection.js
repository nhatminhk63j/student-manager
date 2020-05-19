const mysql = require('mysql');

const con = mysql.createConnection({
    host: process.env.SQL_HOST,
    user: process.env.SQL_USER,
    password: process.env.SQL_PASS,
    database: process.env.SQL_DATABASE
  });

con.connect((err) => {
    // if (err) throw err;
    console.log("Connected!");
});

module.exports = con;