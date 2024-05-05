const joi = require("joi");
//string 只能為字串 alphanum 值為a-z A-Z 0-9
//required是必填
//pattern是正則
const account = joi
  .string()
  .pattern(/^(?![0-9]+$)[a-z0-9]{1,50}$/)
  .min(6)
  .max(12)
  .required();

const password = joi
  .string()
  .pattern(/^(?![0-9]+$)[a-z0-9]{1,50}$/)
  .min(6)
  .max(12)
  .required();

exports.login_limit = {
  //表示對req.body裡面的資料作驗證
  body: {
    account,
    password,
  },
};
