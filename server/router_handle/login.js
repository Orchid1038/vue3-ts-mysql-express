const db = require("../database/index");

exports.register = (req, res) => {
  res.send("註冊");
  //req 前端傳的數據 res 傳回前端的數據result
  const reginfo = req.body;
  if (!reginfo.account || !reginfo.password) {
    return res.send({
      statusL: 1,
      message: "帳號密碼不得為空",
    });
  }
  //有沒有人註冊過
  const sql = "select * from backend_system.main_userdata where account = ?";
  db.query(sql, reginfo.account, (err, results) => {
    if (results.length > 0) {
      return res.send({
        statusL: 1,
        message: "此帳號已被註冊過",
      });
    }
    reginfo.password = bcrypt.hashSync(reginfo.password, 10);
    const sqlInsert = "insert into backend_system.main_userdata set ?";
    const identity = "使用者";
    const create_time = new Date();
    db.query(
      sqlInsert,
      {
        account: reginfo.account,
        password: reginfo.password,
        identity,
        create_time,
        status: 0,
      },
      (err, results) => {
        if (results.affenctedRows !== 1) {
          return res.send({
            statusL: 1,
            message: "帳號註冊失敗",
          });
        } else {
          return res.send({
            statusL: 1,
            message: "註冊成功",
          });
        }
      }
    );
  });
};

exports.login = (req, res) => {
  res.send("登入");
};
