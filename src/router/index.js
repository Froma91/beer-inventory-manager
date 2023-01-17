import { createRouter, createWebHashHistory } from "vue-router";
import PostsView from "../views/ListeFavoritsVue.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "ListeFavorits",
      component: PostsView,
    },
    {
      path: "/info",
      name: "info",
      component: () => import("../views/InfoAppView.vue"),
    },
    {
      path: "/StockBieres",
      name: "StockBieres",
      component: () => import("../views/StockBieresView.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },


  ],
});

export default router;
