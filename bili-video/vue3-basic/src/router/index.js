import { createRouter, createWebHistory } from "vue-router";
import DayPage from "@/views/Day.vue";

const routes = [
  {
    path: "/",
    name: "day",
    component: DayPage,
  },
  {
    path: "/month",
    name: "month",
    component: () => import("@/views/month.vue"),
  },
  {
    path: "/year",
    name: "year",
    component: () => import("@/views/year.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
