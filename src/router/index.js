import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import cart from "../views/cartView";
import Admin from "../views/adminView.vue";
import Product from "../components/adminProduct.vue";
import overView from "../components/OverView.vue";
import proFile from "../components/profile.vue";
import login from "../components/login.vue";
import register from "../components/register";
import CheckOut from "../views/CheckOut.vue";
import NotFound from "../views/errorPage.vue";
import freefire from "../views/products/freeFire.vue";
import test from "../views/products/Fortnite.vue";
import order from "../components/orderView.vue";
import adminOrder from "../components/adminOrder.vue";
import adminUsers from "../components/adminUsers.vue";
import orderreq from "../components/orderAdmin.vue";
import orderpage from "../components/orderpage.vue";
import Productadmin from "../components/productAdmin.vue";
import Seccess from "../components/seccess.vue";
import activated from "../components/activePage.vue";
import forgotpassword from "../components/resetPassword.vue";
import changepassword from "../components/changePassword.vue";
import wallet from "../components/digitalWallet.vue";
import adminwallet from "../components/adminWallet.vue";
import admincard from "../components/admincard.vue";
import getcard from "../components/cardAdmin.vue";
import reorder from "../components/reorder";
import bankak from "../components/bankak.vue";
import addbalance from "../components/addbalance.vue";
import binance from "../components/binance.vue";
import payeer from "../components/payeer.vue";
import fawry from "..//components/fawry.vue";
const routes = [
  { path: "/:NotFgnd(.*)*", name: "NotFound", component: NotFound },

  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },
  {
    path: "/:id",
    component: freefire,
  },
  {
    path: "/admin",
    name: "admin",
    component: Admin,
    meta: { auth: true, isAdmin: true },
    children: [
      {
        path: "Product",
        name: "adminProduct",
        component: Product,
      },
      {
        path: "product/:id",
        component: Productadmin,
      },
      {
        path: "overview",
        name: "overview",
        component: overView,
      },
      {
        path: "proFile",
        name: "proFile",
        component: proFile,
      },
      {
        path: "adminOrder",
        name: "adminOrder",
        component: adminOrder,
      },
      {
        path: "adminOrder/:id",
        component: orderreq,
      },
      {
        path: "adminUsers",
        name: "adminUsers",
        component: adminUsers,
      },
      {
        path: "adminwllet",
        name: "adminwallet",
        component: adminwallet,
      },
      {
        path: "card",
        name: "card",
        component: admincard,
      },
      {
        path: "card/:id",
        component: getcard,
      },
      {
        path: "reorder",
        component: reorder,
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: login,
    meta: { auth: false },
  },
  {
    path: "/seccess",
    name: "seccess",
    component: Seccess,
  },
  {
    path: "/register",
    name: "registern",
    component: register,
    meta: { auth: false },
  },
  {
    path: "/activated/:accessToken",
    name: "activated",
    component: activated,
  },
  {
    path: "/forgotpassword",
    name: "forgotpassword",
    component: forgotpassword,
  },
  {
    path: "/changepassword/:accessToken",
    name: "changepassword",
    component: changepassword,
  },
  {
    path: "/order",
    name: "order",
    component: order,
    meta: { auth: false },
  },
  {
    path: "/order:id",
    component: orderpage,
  },
  {
    path: "/wallet",
    name: "wallet",
    component: wallet,
  },
  //products
  {
    path: "/cart",
    name: "cart",
    component: cart,
  },
  {
    path: "/Checkout",
    name: "CheckOut",
    component: CheckOut,
  },
  {
    path: "/bankak",
    name: "bankak",
    component: bankak,
  },
  {
    path: "/binance",
    name: "binance",
    component: binance,
  },
  {
    path: "/payeer",
    name: "payeer",
    component: payeer,
  },
  {
    path: "/fawry",
    name: "fawry",
    component: fawry,
  },
  {
    path: "/addbalance",
    name: "addbalance",
    component: addbalance,
  },
  {
    path: "/test",
    name: "test",
    component: test,
  },
  // { path: '/user-:afterUser(.*)', component: UserGeneric },
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
    return next("/login");
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
