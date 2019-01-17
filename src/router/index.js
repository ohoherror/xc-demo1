/* eslint-disable */
import Vue from "vue";
import Router from "vue-router";
import Home from "@/pages/Home";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/Home"
    },
    {
      path: "/home",
      name: "home",
      component: Home
    }
  ]
});
