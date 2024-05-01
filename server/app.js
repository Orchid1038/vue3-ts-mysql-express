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

const loginRouter = require("./router/login");
app.use("/api", loginRouter);

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
