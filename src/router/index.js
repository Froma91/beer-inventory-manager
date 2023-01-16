import { createRouter, createWebHistory } from "vue-router";
import PostsView from "../views/PostsView.vue";

const routes = [
  {
    path: "/",
    name: "posts",
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
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
