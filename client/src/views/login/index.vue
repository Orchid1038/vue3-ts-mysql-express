<template>
  <div class="common-layout">
    <el-container>
      <el-header class="header-wrapped">
        <div class="header-content">
          <h3>賴暄妮打嗝管理系統</h3>
          <span class="welcome">一天到底要打幾次嗝</span>
        </div>
      </el-header>
      <el-main>
        <div class="login-wrapped">
          <el-card class="box-card">
            <el-tabs v-model="activeName" class="demo-tabs" :stretch="true">
              <el-tab-pane label="登入" name="first">
                <el-form label-width="120px">
                  <el-form-item label="帳號">
                    <el-input
                      v-model="loginData.account"
                      placeholder="Please Input"
                    />
                  </el-form-item>
                  <el-form-item label="密碼">
                    <el-input v-model="loginData.password" />
                  </el-form-item>
                  <div class="main-footer-wrapped">
                    <div class="forget-password">
                      <span class="forget-passsword-button">忘記密碼</span>
                    </div>
                    <div class="footer-botton">
                      <el-button type="primary">登入</el-button>
                    </div>
                    <div class="footer-go-register">
                      還沒有帳號？
                      <span class="go-register">馬上註冊</span>
                    </div>
                  </div>
                </el-form>
              </el-tab-pane>
              <el-tab-pane label="註冊" name="second">註冊</el-tab-pane>
            </el-tabs>
          </el-card>
        </div>
      </el-main>
      <el-footer class="footer-wrapped">
        <div class="footer-content">
          <div class="title">
            <span>一些連結</span> | <span>一些連結</span> |
            <span>一些連結</span>
          </div>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import type { TabsPaneContext } from "element-plus";

const activeName = ref("first");

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
};
interface formData {
  account: string;
  password: string;
}
const loginData: formData = reactive({
  account: "",
  password: "",
});
</script>

<style lang="scss">
.header-wrapped {
  .header-content {
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .welcome {
      font-size: 13px;
      position: absolute; /* 使用絕對定位 */
      left: 80%; /* 將.welcome元素水平置中 */
      transform: translateX(-50%); /* 使用transform來水平居中 */
    }
  }
}

.el-main {
  background-image: url("@/assets/pubBackend.jpg");
  background-size: cover; /* 將背景圖像大小設置為覆蓋整個容器 */
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  opacity: 0.9; /* 添加透明度，值介於 0 到 1 之間 */
  position: relative; /* 設置相對定位以便給子元素絕對定位的參考 */

  .login-wrapped {
    margin: 0 auto;
    padding: 0 8px;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    .box-card {
      width: 90%;
      max-width: 375px;
      float: none;
      margin: 10% auto 0;
      position: static;
      background: linear-gradient(
        to bottom,
        rgba(101, 67, 33, 1),
        rgba(255, 192, 110, 1)
      );

      .main-footer-wrapped {
        display: flex;
        flex-direction: column;

        .forget-password {
          display: flex;
          justify-content: flex-end;
          margin-top: 10px 0;

          .forget-passsword-button {
            font-size: 12px;
            color: #409eff;
            cursor: pointer;
          }
          .footer-go-register {
            display: flex;
            margin-top: 100px;
          }
        }
      }
    }
  }
}

.footer-wrapped {
  margin-top: 8px;
  .footer-content {
    width: 100%;
    max-width: 100%; /* 調整最大寬度 */
    margin: 0 auto;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    .title {
      color: #f12345;
      display: flex;
    }
    span {
      color: #f12345;
      font-size: 12px;
    }
  }
}

// 媒體查詢
@media screen and (max-width: 768px) {
  .header-content {
    flex-direction: column;
    text-align: center;
  }
  .footer-content {
    flex-direction: column;
    text-align: center;
  }
}

.el-tabs__item {
  font-weight: bold; /* 粗體 */
  font-size: 18px; /* 字體大小增加 */
}
.el-form-item__label {
  align-items: flex-start;
  box-sizing: border-box;
  color: white;
  display: inline-flex;
  flex: 0 0 auto;
  font-size: var(--el-form-label-font-size);
  height: 32px;
  line-height: 32px;
  padding: 0 12px 0 0;
  justify-content: center;
  font-weight: bold; /* 粗體 */
  font-size: 18px; /* 字體大小增加 */
  el-color-primary: #ffcd02;
}
.el-tabs__item:hover {
  color: #a0522d; /* 較亮的咖啡色 */
  cursor: pointer;
}
.el-tabs__item.is-active {
  color: #e1e197;
}
.footer-botton {
  display: flex;
  justify-content: center;
  margin-top: 10px;
  .el-button {
    width: 80%;
    height: 5%;
    display: flex;
  }
}
</style>
