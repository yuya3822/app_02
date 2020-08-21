import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Detail from "../views/Detail.vue";
import Registration from "../views/Registration.vue";
import Login from "../views/Login.vue";
import Thanks from "../views/Thanks.vue";
import Mypage from "../views/Mypage.vue";
import Reservation from "../views/Reservation.vue";

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
  },
  {
    path: "/Reservation",
    name: "Reservation",
    component: Reservation,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
