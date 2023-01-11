import { createRouter, createWebHistory } from "vue-router";
import PostsView from "../views/PostsView.vue";

const routes = [
  {
    path: "/",
    name: "posts",
    component: PostsView,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/BeerFilterView",
    name: "BeerFilterView",
    component: () => import("../views/StockBieres.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
