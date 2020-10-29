import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/views/home";
import Classifier from "@/views/classifier";

Vue.use(VueRouter);

const routes = [
  {
    path: `/`,
    name: "home",
    component: Home
  },
  {
    path: `/classifier`,
    name: "classifier",
    component: Classifier
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
