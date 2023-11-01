import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { useAuthStore } from "@/stores/auth";

const routes: Array<any> = [
  {
    name: "EmailConfirmation",
    path: "/email-confirmation",
    component: () => import("@/pages/EmailConfirmation.vue"),
  },
  {
    name: "Home",
    path: "/",
    component: () => import("@/pages/Home.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: "Me",
    path: "/me",
    meta: {
      requiresAuth: true,
    },
    component: () => import("@/pages/Me.vue"),
  },
  {
    name: "Play",
    path: "/play",
    meta: {
      requiresAuth: false,
    },
    component: () => import("@/pages/Play.vue"),
  },
  {
    name: "Leaderboard",
    path: "/leaderboard",
    meta: {
      requiresAuth: true,
    },
    component: () => import("@/pages/Leaderboard.vue"),
  },
  {
    name: "Login",
    path: "/login",
    component: () => import("@/pages/Login.vue"),
  },
  {
    name: "ForgotPassword",
    path: "/forgotPassword",
    component: () => import("@/pages/ForgotPassword.vue"),
  },
  {
    name: "Logout",
    path: "/logout",
    beforeEnter: async (to: any, from: any, next: any) => {
      const authStore = useAuthStore();
      await authStore.logout();
      next("Home");
    },
  },
  {
    name: "Register",
    path: "/register",
    component: () => import("@/pages/Register.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();

  if (
    !authStore.isLoggedIn() &&
    to.meta.requiresAuth &&
    !Object.keys(to.query).includes("fromEmail")
  ) {
    // Use next to navigate to the Login route
    next({ name: "Login" });
  } else {
    // Continue to the route
    next();
  }
});

export default router;
