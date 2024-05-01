//導入express框架
const express = require("express");
//創建express實例
const app = express();
//導入body-parser
var bodyParser = require("body-parser");
//創建port
const port = 3000;

//導入cors
const cors = require("cors");
//全局掛載
app.use(cors());

//urlencoded是一個URL格式
//當extended為false時 值為數組或者字符串,當為true時值可以為任意類型
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  //status = 0 為成功 1為失敗 默認為1方便處理失敗情況
  res.cc = (err, status = 1) => {
    res.send({
      status,
      message: err instanceof Error ? err.message : err,
    });
  };
  next();
});
const jwtconfig = require("./jwt/index");
const { expressjwt: jwt } = require("express-jwt");
app.use(
  jwt({
    secret: jwtconfig.jwtSecretKey,
    algorithms: ["HS256"],
  }).unless({
    path: [/^\/api\//], //登入之後生成
  })
);
const loginRouter = require("./router/login");
const { error } = require("console");
app.use("/api", loginRouter);

app.use((req, res, next) => {
  if (err instanceof Joi.ValidationError) return res.cc(err);
});

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
