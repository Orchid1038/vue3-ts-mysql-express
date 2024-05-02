import { createApp } from "vue";

import App from "./App.vue";
//導入router
import router from "./router";
//導入element-Plus
import ElememtPlus from "element-plus";
import "element-plus/dist/index.css";

//導入elementPlusIcon
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
//導入element 繁體
import zhTw from "element-plus/dist/locale/zh-tw.mjs";

//創建實例
const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(ElememtPlus, {
  locale: zhTw,
});

app.use(router).mount("#app");
