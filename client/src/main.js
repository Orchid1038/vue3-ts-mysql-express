import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
//導入路由
import router from "./router";
//導入ElementPlus
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import zhTw from "element-plus/es/locale/lang/zh-tw";

//導入ElementPlus Icon
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

//創建實例
const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(ElementPlus, {
  locale: zhTw,
});
app.use(router).mount("#app");
