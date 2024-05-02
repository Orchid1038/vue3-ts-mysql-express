import {
  //創建Router
  createRouter,
  //創建Router的歷史模式
  createWebHashHistory,
} from "vue-router";

const routes = [{}];
const router = createRouter({
  history: createWebHashHistory(),
  routes, // 在這裡定義你的路由
});

export default router;
