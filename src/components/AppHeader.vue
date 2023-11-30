<script setup>
import { ref, watchEffect } from "vue";
import { useAuthStore } from "@/stores/auth";
import { useRoute } from "vue-router";

const authStore = useAuthStore();
const $route = useRoute();

const mobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
};

// Watch for changes in mobileMenuOpen and update body class accordingly
watchEffect(() => {
  if (mobileMenuOpen.value) {
    document.body.classList.add("mobile-menu-open");
  } else {
    document.body.classList.remove("mobile-menu-open");
  }
});
</script>

<template>
  <header class="py-4 flex">
    <div
      class="flex flex-row w-full items-center justify-between lg:hidden relative"
    >
      <div class="flex flex-row gap-4">
        <button class="" @click="toggleMobileMenu">
          <img src="../assets/icons/menu-icon.svg" class="menu" />
        </button>

        <div v-if="authStore.isLoggedIn()"></div>

        <div v-else class="relative">
          <router-link
            :to="{ name: 'Register' }"
            class="flex flex-row gap-0.5 items-center rainbow-underline text-lg"
            >Sign Up</router-link
          >
        </div>
      </div>

      <router-link
        :to="{ name: 'Home' }"
        class="flex flex-row gap-0.5 items-center"
      >
        <img src="../assets/logos/logo.png" class="h-[25px]" />
        <h4 class="text-shadow text-[#3e8ad2] pt-1.5 text-xl leading-none">
          v1
        </h4>
      </router-link>
    </div>

    <div
      v-if="mobileMenuOpen"
      class="fixed top-0 left-0 w-full h-screen bg-[#112e48] bg-opacity-90 flex flex-col items-center justify-center z-[9999]"
    >
      <button
        class="absolute top-4 left-4 text-white font-holtwood-one-sc text-xl"
        @click="toggleMobileMenu"
      >
        X
      </button>

      <div v-if="authStore.isLoggedIn()" class="flex flex-col gap-4">
        <h3 class="text-[32px] w-full flex justify-center font-nano-pix">
          Hey Gabe!
        </h3>

        <div class="flex flex-row gap-4 w-full mb-8">
          <div class="flex flex-col w-1/2 mx-auto items-end">
            <div class="h-[55px] text-2xl flex items-center pt-1.5">13</div>
            <div class="h-[55px] text-2xl flex items-center pt-1.5">14.25</div>
            <div class="h-[55px] text-2xl flex items-center pt-1.5">2</div>
          </div>

          <div class="flex flex-col w-1/2 mx-auto items-start">
            <div class="h-[55px] w-[72px] items-center flex relative">
              <img src="../assets/icons/ticket-icon.svg" alt="ticket icon" />
              <div class="absolute top-0 right-0" title="Tix">
                <img src="../assets/icons/info.svg" alt="info icon" />
              </div>
            </div>
            <div class="h-[55px] items-center flex">
              <img src="../assets/icons/kade-icon.svg" alt="fox icon" />
            </div>
            <div class="h-[55px] w-[65px] items-center flex relative">
              <img src="../assets/icons/swords-icon.svg" alt="swords icon" />
              <div class="absolute top-0 right-0" title="Tooltip goes here">
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

        <div class="flex flex-row gap-4 w-full mb-8">
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

      <ul
        v-if="authStore.isLoggedIn()"
        class="flex flex-col gap-4 font-nano-pix"
      >
        <li
          :class="{ 'active-link': $route.name === 'Home' }"
          class="underline-on-hover w-fit mx-auto"
        >
          <router-link
            :to="{ name: 'Home' }"
            class="text-[26px]"
            @click="closeMobileMenu"
          >
            Play
          </router-link>
        </li>

        <li
          :class="{ 'active-link': $route.name === 'Me' }"
          class="underline-on-hover w-fit mx-auto"
        >
          <router-link
            :to="{ name: 'Me' }"
            class="text-[26px]"
            @click="closeMobileMenu"
          >
            Account
          </router-link>
        </li>
        <li class="underline-on-hover w-fit mx-auto">
          <a href="https://ourkade.io" class="text-[26px]" target="_blank">
            Learn More
          </a>
        </li>
        <li
          v-if="authStore.isLoggedIn()"
          class="underline-on-hover w-fit mx-auto"
        >
          <router-link
            :to="{ name: 'Logout' }"
            class="text-[26px]"
            @click="closeMobileMenu"
            >Logout</router-link
          >
        </li>
      </ul>

      <ul v-else class="flex flex-col gap-4 px-5 font-nano-pix">
        <li
          :class="{ 'active-link': $route.name === 'Login' }"
          class="underline-on-hover w-fit mx-auto"
        >
          <router-link
            :to="{ name: 'Login' }"
            class="text-[26px]"
            @click="closeMobileMenu"
          >
            Login
          </router-link>
        </li>
        <li
          :class="{ 'active-link': $route.name === 'Register' }"
          class="underline-on-hover w-fit mx-auto"
        >
          <router-link
            :to="{ name: 'Register' }"
            class="text-[26px]"
            @click="closeMobileMenu"
          >
            Register
          </router-link>
        </li>
      </ul>
    </div>

    <div class="hidden lg:flex flex-row w-full">
      <div class="flex items-center m-0 flex-row justify-between">
        <div class="lg:w-5/12">
          <img src="../assets/icons/lines/left-line.png" alt="left line" />
        </div>
        <router-link to="/" class="flex items-center lg:max-w-2/12 lg:gap-1">
          <img
            src="../assets/logos/logo.png"
            alt="Ourkade logo"
            class="min-w-fit"
          />
          <h4 class="text-shadow text-[#3e8ad2] text-[28px] pt-2">v1</h4>
        </router-link>
        <div class="lg:w-5/12">
          <img src="../assets/icons/lines/right-line.png" alt="right line" />
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
/* Logo shadow */
.text-shadow {
  text-shadow: 0px 0px 5px rgba(255, 255, 255, 0.35);
}
</style>
