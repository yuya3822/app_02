import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Detail from "../views/Detail.vue";
import Registration from "../views/Registration.vue";
import Login from "../views/Login.vue";
import Thanks from "../views/Thanks.vue";
import Mypage from "../views/Mypage.vue";
import Reservation from "../views/Reservation.vue";
import store from "../store/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Detail/:shop_id",
    name: "Detail",
    component: Detail,
    props: true,
  },
  {
    path: "/Registration",
    name: "Registration",
    component: Registration,
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
  },
  {
    path: "/Thanks",
    name: "Thanks",
    component: Thanks,
  },
  {
    path: "/Mypage",
    name: "Mypage",
    component: Mypage,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/Reservation",
    name: "Reservation",
    component: Reservation,
    meta: {
      requiresAuth: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (
    to.matched.some((record) => record.meta.requiresAuth) &&
    !store.state.auth
  ) {
    next({
      path: "/",
      query: {
        redirect: to.fullPath,
      },
    });
  } else {
    next();
  }
});

export default router;
