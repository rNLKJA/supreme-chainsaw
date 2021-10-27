const dotenv = require("dotenv");
dotenv.config();

const mysql = require("mysql");

const Sql = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

console.log(
  `MySQL connection started on ${process.env.MYSQL_HOST}/${process.env.MYSQL_DATABASE}`,
);

module.exports = Sql;
