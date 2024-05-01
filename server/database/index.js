//導入mysql資料庫
const mysql = require("mysql2");
//創建資料庫連接
const db = mysql.createPool({
  host: "localhost",
  user: "newuser",
  password: "P@ssw0rd",
  database: "backend_system",
});
//資料庫模組化
module.exports = db;
