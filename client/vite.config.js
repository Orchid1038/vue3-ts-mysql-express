import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { tr } from "element-plus/es/locale/index.mjs";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  pluginsOptions: {
    preProcessor: "scss",
    patterns: [],
  },
  server: {
    port: 8080, //通訊Port號
    open: true, //自動默認開啟瀏覽器
    cors: true, //自動默認跨域
  },
});
