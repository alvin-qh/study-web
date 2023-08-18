import Home from "@/views/Home.vue";
import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import { LoadingBar } from "view-design";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// eslint-disable-next-line
router.beforeEach((to, from, next) => {
  LoadingBar.start();
  next();
});

// eslint-disable-next-line
router.afterEach(route => {
  LoadingBar.finish();
});

export default router;
