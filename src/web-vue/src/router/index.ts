import { createRouter, createWebHistory } from "vue-router";
export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/", // 使用动态导入来实现懒加载
      children: [
        {
          path: "",
          component: () => import("@/pages/home.vue"),
        },
      ],
    },
  ],
});
