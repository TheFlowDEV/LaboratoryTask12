import { createRouter, createWebHistory } from "vue-router";
import homeView from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: homeView,
    },
    {
      path: "/increment",
      name: "increment",
      component: () => import("../views/incrementView.vue"),
    },
    {
      path: "/decrement",
      name: "decrement",
      component: () => import("@/views/decrementView.vue"),
    },
  ],
});

export default router;
