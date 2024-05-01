//登入功能寫入Router
const express = require("express");
//導入express框架
const router = express.Router();
const loginHandler = require("../router_handle/login");
module.exports = router;

router.post("/register", loginHandler.register);
router.post("/login", loginHandler.login);
