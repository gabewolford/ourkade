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
  },
  {
    name: "Compete",
    path: "/compete",
    component: () => import("@/pages/Compete.vue"),
  },
  {
    name: "Challenge",
    path: "/challenge",
    component: () => import("@/pages/Challenge.vue"),
  },
  {
    name: "Practice",
    path: "/practice",
    component: () => import("@/pages/Practice.vue"),
  },
  {
    name: "WhatsKade",
    path: "/whatskade",
    component: () => import("@/pages/WhatsKade.vue"),
  },
  {
    name: "Compete",
    path: "/compete",
    component: () => import("@/pages/Compete.vue"),
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

router.beforeEach((to) => {
  const authStore = useAuthStore();
  if (
    !authStore.isLoggedIn() &&
    to.meta.requiresAuth &&
    !Object.keys(to.query).includes("fromEmail")
  ) {
    return { name: "Login" };
  }
});

export default router;
