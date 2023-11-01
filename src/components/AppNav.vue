<script setup>
import WhatsKadeButton from "@/components/WhatsKadeButton";
import KadeRunnerStats from "@/components/KadeRunnerStats";
import { useAuthStore } from "@/stores/auth";
const authStore = useAuthStore();
</script>

<template>
  <nav
    class="flex flex-col gap-10 lg:min-w-[275px] min-h-full text-center px-6 pb-10"
  >
    <div v-if="authStore.isLoggedIn()">
      <router-link
        :to="{ name: 'Home' }"
        class="text-[32px] w-full flex justify-center"
        >Hey Nick!</router-link
      >

      <div class="flex flex-row gap-4 w-full">
        <div class="flex flex-col w-1/2 mx-auto items-end">
          <div class="h-[55px] text-2xl font-retro-gaming flex items-center">
            13
          </div>
          <div class="h-[55px] text-2xl font-retro-gaming flex items-center">
            14.25
          </div>
          <div class="h-[55px] text-2xl font-retro-gaming flex items-center">
            2
          </div>
        </div>

        <div class="flex flex-col w-1/2 mx-auto items-start">
          <div class="h-[55px] w-[72px] items-center flex relative">
            <img src="../assets/ticket-icon.svg" alt="ticket icon" />
            <div class="absolute top-0 right-0" title="Tooltip goes here">
              <img src="../assets/info.svg" alt="info icon" />
            </div>
          </div>
          <div class="h-[55px] items-center flex">
            <img src="../assets/fox-icon.svg" alt="fox icon" />
          </div>
          <div class="h-[55px] w-[65px] items-center flex relative">
            <img src="../assets/swords-icon.svg" alt="swords icon" />
            <div class="absolute top-0 right-0" title="Tooltip goes here">
              <img src="../assets/info.svg" alt="info icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <router-link
        :to="{ name: 'Home' }"
        class="text-[32px] w-full flex justify-center"
        >Get Started</router-link
      >

      <div class="flex flex-row gap-4 w-full">
        <div class="flex flex-col w-1/2 mx-auto items-end">
          <div class="h-[55px] text-2xl font-retro-gaming flex items-center">
            0
          </div>
          <div class="h-[55px] text-2xl font-retro-gaming flex items-center">
            0
          </div>
          <div class="h-[55px] text-2xl font-retro-gaming flex items-center">
            0
          </div>
        </div>

        <div class="flex flex-col w-1/2 mx-auto items-start">
          <div class="h-[55px] w-[72px] items-center flex relative">
            <img src="../assets/ticket-icon.svg" alt="ticket icon" />
            <div class="absolute top-0 right-0" title="Tooltip goes here">
              <img src="../assets/info.svg" alt="info icon" />
            </div>
          </div>
          <div class="h-[55px] items-center flex">
            <img src="../assets/fox-icon.svg" alt="fox icon" />
          </div>
          <div class="h-[55px] w-[65px] items-center flex relative">
            <img src="../assets/swords-icon.svg" alt="swords icon" />
            <div class="absolute top-0 right-0" title="Tooltip goes here">
              <img src="../assets/info.svg" alt="info icon" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <ul v-if="authStore.isLoggedIn()" class="flex flex-col gap-5 p-5">
      <li class="underline-on-hover w-fit mx-auto">
        <router-link :to="{ name: 'Play' }" class="text-[30px]">
          Play
        </router-link>
      </li>
      <li class="underline-on-hover w-fit mx-auto">
        <router-link :to="{ name: 'Leaderboard' }" class="text-[30px]">
          Leaderboard
        </router-link>
      </li>
      <li class="underline-on-hover w-fit mx-auto">
        <router-link :to="{ name: 'Me' }" class="text-[30px]">
          Account
        </router-link>
      </li>
      <li class="underline-on-hover w-fit mx-auto">
        <router-link :to="{ name: 'Me' }" class="text-[30px]">
          Learn More
        </router-link>
      </li>
    </ul>

    <ul v-if="authStore.isLoggedIn()" class="flex flex-col gap-5 p-5">
      <!-- <li>{{ authStore.user.email }}</li>
      <li v-if="authStore.isAdmin()">
        <router-link :to="{ name: 'Me' }">Admin</router-link>
      </li> -->
      <li><router-link :to="{ name: 'Logout' }">Logout</router-link></li>
    </ul>

    <ul v-else class="flex flex-col gap-5 text-[30px] p-5">
      <li>
        <router-link :to="{ name: 'Login' }" class="underline-on-hover"
          >Login</router-link
        >
      </li>
      <li>
        <router-link :to="{ name: 'Register' }" class="underline-on-hover"
          >Register</router-link
        >
      </li>
    </ul>

    <WhatsKadeButton />

    <KadeRunnerStats />
  </nav>
</template>

<style scoped>
.rainbow {
  background: linear-gradient(
    113deg,
    #7d3a26 1.18%,
    #806b1f 19.48%,
    #1d835f 39.33%,
    #1f3c86 58.37%,
    #3b1885 74.84%,
    #870a82 90.28%
  );
}

.underline-on-hover {
  position: relative;
  overflow: hidden;
}

.underline-on-hover::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px; /* Adjust the thickness of the underline */
  background-color: #fff; /* Adjust the color of the underline */
  transition: width 0.3s ease; /* Adjust the transition duration and easing */
}

.underline-on-hover:hover::after {
  width: 100%;
}
</style>
