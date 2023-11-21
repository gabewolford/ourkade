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

  // Compete Screen 1
  {
    name: "Compete1",
    path: "/compete",
    component: () => import("@/pages/Compete1.vue"),
  },

  // Compete Screen 2
  {
    name: "CompeteDetails2",
    path: "/compete/:competitionId",
    meta: {
      requiresAuth: true,
    },
    component: () => import("@/pages/CompeteDetails2.vue"),
  },

  // Compete Screen 3
  {
    name: "PastCompetitions3",
    path: "/past-competitions",
    meta: {
      requiresAuth: true,
    },
    component: () => import("@/pages/PastCompetitions3.vue"),
  },

  // Compete Screen 4
  {
    name: "PastCompetitionDetails4",
    path: "/past-competitions/:competitionId",
    meta: {
      requiresAuth: true,
    },
    component: () => import("@/pages/PastCompetitionDetails4.vue"),
  },

  // Challenge Screen 1
  {
    name: "Challenge1",
    path: "/challenge",
    component: () => import("@/pages/Challenge1.vue"),
  },

  // Challenge Screen 2
  {
    name: "ChallengeDetails2",
    path: "/challenge/:challengeId",
    meta: {
      requiresAuth: true,
    },
    component: () => import("@/pages/ChallengeDetails2.vue"),
  },

  // Challenge Screen 3
  {
    name: "PastChallenges3",
    path: "/past-challenges",
    meta: {
      requiresAuth: true,
    },
    component: () => import("@/pages/PastChallenges3.vue"),
  },

  // Challenge Screen 4
  {
    name: "PastChallengeDetails4",
    path: "/past-challenges/:challengeId",
    meta: {
      requiresAuth: true,
    },
    component: () => import("@/pages/PastChallengeDetails4.vue"),
  },

  // Join Challenge Screen
  {
    name: "JoinChallenge",
    path: "/join-challenge/:challengeId",
    // meta: {
    //   requiresAuth: true,
    // },
    component: () => import("@/pages/JoinChallenge.vue"),
  },

  {
    name: "Practice",
    path: "/practice",
    component: () => import("@/pages/Practice.vue"),
  },
  {
    name: "Play",
    path: "/play",
    component: () => import("@/pages/Play.vue"),
  },
  {
    name: "WhatsKade",
    path: "/whatskade",
    component: () => import("@/pages/WhatsKade.vue"),
  },
  {
    name: "KadeGenie",
    path: "/kade-genie",
    component: () => import("@/pages/KadeGenie.vue"),
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
      try {
        await authStore.logout();
        // Redirect to Home after successful logout
        next({ name: "Home" });
      } catch (error) {
        // Handle logout error if needed
        next({ name: "Home" });
      }
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

  if (authStore.isLoggedIn()) {
    if (to.name === "Register" || to.name === "Login") {
      // User is signed in and trying to access the register or login page
      // Redirect them to a different page, e.g., home or dashboard
      next({ name: "Home" });
    } else {
      // Continue with the regular navigation flow
      next();
    }
  } else if (
    !authStore.isLoggedIn() &&
    to.meta.requiresAuth &&
    !Object.keys(to.query).includes("fromEmail")
  ) {
    // User is not logged in and trying to access a page that requires authentication
    // Redirect them to the login page
    next({ name: "Login" });
  } else {
    // Continue with the regular navigation flow
    next();
  }
});

export default router;
