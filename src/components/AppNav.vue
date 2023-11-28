<script setup>
import WhatsKadeButton from "@/components/WhatsKadeButton";
import KadeRunnerStats from "@/components/KadeRunnerStats";
import { useRoute } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import useOurkadeApi from "@/composables/UseOurkadeApi";
import { ref, onBeforeMount } from "vue";

const authStore = useAuthStore();

const $route = useRoute();

const ourkadeApi = useOurkadeApi();

const profileLoaded = ref(false);
const profile = ref({});
const tix = ref(null);
const kade = ref(null);

onBeforeMount(async () => {
  try {
    if (authStore.isAuthenticated) {
      profile.value = await ourkadeApi.getProfile();
    }
    profileLoaded.value = true;
    tix.value = profile.value.tickets;
    kade.value = profile.value.kade;
  } catch (error) {
    console.error("Error fetching profile:", error);
  }
});
</script>

<template>
  <nav
    class="hidden lg:flex flex-col gap-6 lg:w-1/5 w-fit min-h-full text-center pb-6"
  >
    <div v-if="authStore.isLoggedIn() && profileLoaded">
      <h3 class="text-[32px] w-full flex justify-center font-nano-pix">
        Greetings!
      </h3>

      <div class="flex flex-row gap-4 w-full">
        <div class="flex flex-col w-1/2 mx-auto items-end">
          <div class="h-[55px] text-2xl flex items-center pt-1.5">13</div>

          <div class="h-[55px] text-2xl flex items-center pt-1.5">14.25</div>

          <div class="h-[55px] text-2xl flex items-center pt-1.5">2</div>
        </div>

        <div class="flex flex-col w-1/2 mx-auto items-start">
          <div class="h-[55px] w-[72px] items-center flex relative">
            <img src="../assets/icons/ticket-icon.svg" alt="ticket icon" />
            <div class="absolute top-0 right-0" title="Total Tix">
              <img src="../assets/icons/info.svg" alt="info icon" />
            </div>
          </div>
          <div class="h-[55px] items-center flex">
            <img src="../assets/icons/kade-icon.svg" alt="fox icon" />
          </div>
          <div class="h-[55px] w-[65px] items-center flex relative">
            <img src="../assets/icons/swords-icon.svg" alt="swords icon" />
            <div class="absolute top-0 right-0" title="Active Challenges">
              <img src="../assets/icons/info.svg" alt="info icon" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-else>
      <router-link
        :to="{ name: 'Home' }"
        class="text-[32px] w-full flex justify-center text-center font-nano-pix"
        >Welcome</router-link
      >

      <div class="flex flex-row gap-4 w-full">
        <div class="flex flex-col w-1/2 mx-auto items-end">
          <div class="h-[55px] text-2xl flex items-center pt-1.5">0</div>
          <div class="h-[55px] text-2xl flex items-center pt-1.5">0</div>
          <div class="h-[55px] text-2xl flex items-center pt-1.5">0</div>
        </div>

        <div class="flex flex-col w-1/2 mx-auto items-start">
          <div class="h-[55px] w-[72px] items-center flex relative">
            <img src="../assets/icons/ticket-icon.svg" alt="ticket icon" />
          </div>
          <div class="h-[55px] items-center flex">
            <img src="../assets/icons/kade-icon.svg" alt="fox icon" />
          </div>
          <div class="h-[55px] w-[65px] items-center flex relative">
            <img src="../assets/icons/swords-icon.svg" alt="swords icon" />
          </div>
        </div>
      </div>
    </div>

    <ul v-if="authStore.isLoggedIn()" class="flex flex-col gap-4 font-nano-pix">
      <li
        :class="{
          'active-link':
            $route.name === 'Home' ||
            $route.name === 'Compete1' ||
            $route.name === 'CompeteDetails2' ||
            $route.name === 'PastCompetitions3' ||
            $route.name === 'PastCompetitionDetails4' ||
            $route.name === 'Challenge1' ||
            $route.name === 'ChallengeDetails2' ||
            $route.name === 'PastChallenges3' ||
            $route.name === 'PastChallengeDetails4' ||
            $route.name === 'Practice',
        }"
        class="underline-on-hover w-fit mx-auto"
      >
        <router-link :to="{ name: 'Home' }" class="text-[26px]">
          Play
        </router-link>
      </li>
      <li
        :class="{
          'active-link': $route.name === 'Me',
        }"
        class="underline-on-hover w-fit mx-auto"
      >
        <router-link :to="{ name: 'Me' }" class="text-[26px]">
          Account
        </router-link>
      </li>
      <li class="underline-on-hover w-fit mx-auto">
        <a href="https://ourkade.io" target="_blank" class="text-[26px]">
          Learn More
        </a>
      </li>
    </ul>

    <ul v-else class="flex flex-col gap-4 px-5 font-nano-pix">
      <li
        :class="{ 'active-link': $route.name === 'Login' }"
        class="underline-on-hover w-fit mx-auto"
      >
        <router-link :to="{ name: 'Login' }" class="text-[26px]">
          Login
        </router-link>
      </li>
      <li
        :class="{ 'active-link': $route.name === 'Register' }"
        class="underline-on-hover w-fit mx-auto"
      >
        <router-link :to="{ name: 'Register' }" class="text-[26px]">
          Register
        </router-link>
      </li>
    </ul>

    <WhatsKadeButton />

    <KadeRunnerStats />
  </nav>
</template>

<style scoped>
.active-link::before {
  content: "";
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background-image: linear-gradient(
    to right,
    #ff7246,
    #ffd646,
    #46ffbc,
    #467aff,
    #9e71ff,
    #fc54ff
  );
  border-radius: 5px;
}
.active-link::after {
  content: "";
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background-image: linear-gradient(
    to right,
    #ff7246,
    #ffd646,
    #46ffbc,
    #467aff,
    #9e71ff,
    #fc54ff
  );
  border-radius: 5px;
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
  height: 3px;
  background-color: transparent; /* Set the initial color to transparent */
  transition: 0.35s ease;
  border-radius: 5px;
}

.underline-on-hover:hover::after {
  width: 100%;
  background-color: white;
}
</style>
