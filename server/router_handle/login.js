const db = require("../database/index");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jwtconfig = require("../jwt/index");

exports.register = (req, res) => {
  // 檢查前端傳遞的數據是否完整
  const reginfo = req.body;
  if (!reginfo.account || !reginfo.password) {
    return res.send({
      status: 1,
      message: "帳號密碼不得為空",
    });
  }

  // 檢查是否有人已經註冊過該帳號
  const sqlCheck = "SELECT * FROM main_userdata WHERE account = ?";
  db.query(sqlCheck, reginfo.account, (err, results) => {
    if (err) {
      console.error("Error checking if account exists:", err);
      return res.status(500).send({
        status: 1,
        message: "內部錯誤，無法檢查帳號是否已被註冊",
      });
    }

    if (results.length > 0) {
      return res.send({
        status: 1,
        message: "此帳號已被註冊過",
      });
    }

    // 對密碼進行加密
    const hashedPassword = bcrypt.hashSync(reginfo.password, 10);
    const sqlInsert = "INSERT INTO backend_system.main_userdata SET ?";
    const identity = "使用者";
    const create_time = new Date();

    // 插入新用戶數據
    db.query(
      sqlInsert,
      {
        account: reginfo.account,
        password: hashedPassword,
        identity,
        create_time,
        status: 0,
      },
      (err, results) => {
        if (err) {
          console.error("Error inserting new user:", err);
          return res.status(500).send({
            status: 1,
            message: "內部錯誤，無法註冊新帳號",
          });
        }

        if (results.affectedRows !== 1) {
          return res.send({
            status: 1,
            message: "帳號註冊失敗",
          });
        } else {
          return res.send({
            status: 0,
            message: "註冊成功",
          });
        }
      }
    );
  });
};

exports.login = (req, res) => {
  const loginfo = req.body;
  const sql = "select * from backend_system.main_userdata where account = ?";
  db.query(sql, loginfo.account, (err, results) => {
    //SQL失敗的情況
    if (err) return res.cc(err);
    if (results.length !== 1) return res.cc("登入失敗");
    //對前端傳過來的密碼行解密
    const compareResult = bcrypt.compareSync(
      loginfo.password,
      results[0].password
    );
    if (!compareResult) {
      return res.cc("登入失敗");
    }
    if (results[0].status == 1) {
      return res.cc("帳號封鎖中");
    }
    const user = {
      ...results[0],
      password: "",
      imageUrl: "",
      create_time: "",
      update_time: "",
    };
    //設置token的有效時間
    const tokenStr = jwt.sign(user, jwtconfig, jwtconfig.jwtSecretKey, {
      expiresIn: "7h",
    });
    res.send({
      results: results[0],
      status: 0,
      message: "登入成功",
      token: "Bearer" + tokenStr,
    });
  });
};
