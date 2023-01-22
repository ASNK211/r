import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import account from "../views/accountView";
import register from "../views/registerView.vue";
import activated from "../components/activePage.vue";
import Admin from "../views/adminView.vue";
import news from "../views/news.vue";
import orders from "../views/orders.vue";
import withdraw from "../views/withdraw";
import seeorder from "../views/inwithdraw.vue";
import withdrawhistory from "../views/withdrawhistory.vue";
import Dashboard from "../views/DashBoard.vue";
import deposit from "../views/deposit.vue";
import depositId from "../views/depositId.vue";
import depositIdhistory from "../views/depositHistory.vue";
import depositIdhistoryId from "../views/depositHistoryId.vue";
import withdrawhistoryId from "../views/withdrawhistoryId.vue";
import notactive from "../views/notActive.vue";
import notactiveId from "../views/notactiveId.vue";
import Dashboardusers from "../views/Dashboardusers.vue";
const routes = [
  // { path: "/:NotFgnd(.*)*", name: "NotFound", component: NotFound },

  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/account",
    name: "account",
    component: account,
    meta: { auth: true },
  },
  {
    path: "/register",
    name: "register",
    component: register,
    meta: { auth: false },
  },
  {
    path: "/admin",
    name: "admin",
    component: Admin,
    meta: { auth: true, isAdmin: true },
    children: [
      {
        path: "news",
        name: "news",
        component: news,
      },
      {
        path: "orders",
        name: "orders",
        component: orders,
      },
      {
        path: "withdraw",
        name: "withdraw",
        component: withdraw,
      },
      {
        path: "withdraw/:id",
        component: seeorder,
      },
      {
        path: "withdrawhistory",
        component: withdrawhistory,
      },
      {
        path: "withdrawhistory/:id",
        component: withdrawhistoryId,
      },
      {
        path: "Dashboard",
        component: Dashboard,
      },
      {
        path: "Dashboardusers/:id",
        component: Dashboardusers,
      },
      {
        path: "deposit",
        component: deposit,
      },
      {
        path: "deposit/:id",
        component: depositId,
      },
      {
        path: "depositHistory",
        component: depositIdhistory,
      },
      {
        path: "depositHistory/:id",
        component: depositIdhistoryId,
      },
      {
        path: "notactive",
        component: notactive,
      },
      {
        path: "notactive/:id",
        component: notactiveId,
      },
    ],
  },
  {
    path: "/activated/:accessToken",
    name: "activated",
    component: activated,
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  // const publicPages = ["/login", "/register"];
  const authRequired = to.meta.auth;
  const isAdmin = to.meta.isAdmin;
  const loggedIn = localStorage.getItem("token");
  const isaAdmin = localStorage.getItem("isAdmin");

  if (authRequired && !loggedIn) {
    return next("/");
  }
  if (isAdmin && isaAdmin == "false") {
    return next("/");
  }
  // if (!to.matched.length) {
  //   next('/notFound');
  // } else {
  //   next();
  // }
  // isAdmin:"true"
  // else if (authRequired && !loggedIn) {
  //   return next("/login");
  // }

  next();
});

export default router;
