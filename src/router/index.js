import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      requireLogin: false,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to, from, next) => {
  if (to.matched.some((rec) => rec.meta.requireLogin)) {
    let user = localStorage.getItem("user");
    if (user) {
      next();
    } else {
      next({
        name: "Login",
      });
    }
  } else {
    next();
  }
});
export default router;
