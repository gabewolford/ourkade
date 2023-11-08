<script setup>
import WhatsKadeButton from "@/components/WhatsKadeButton";
import KadeRunnerStats from "@/components/KadeRunnerStats";
import { useAuthStore } from "@/stores/auth";
const authStore = useAuthStore();
</script>

<template>
  <nav
    class="hidden lg:flex flex-col gap-6 lg:w-1/5 w-fit min-h-full text-center pb-6"
  >
    <div v-if="authStore.isLoggedIn()">
      <h3 class="text-[32px] w-full flex justify-center font-nano-pix">
        Hey Gabe!
      </h3>

      <div class="flex flex-row gap-4 w-full">
        <div class="flex flex-col w-1/2 mx-auto items-end">
          <div class="h-[55px] text-2xl flex items-center pt-1.5">13</div>
          <div class="h-[55px] text-2xl flex items-center pt-1.5">14.25</div>
          <div class="h-[55px] text-2xl flex items-center pt-1.5">2</div>
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
            <img src="../assets/ticket-icon.svg" alt="ticket icon" />
          </div>
          <div class="h-[55px] items-center flex">
            <img src="../assets/fox-icon.svg" alt="fox icon" />
          </div>
          <div class="h-[55px] w-[65px] items-center flex relative">
            <img src="../assets/swords-icon.svg" alt="swords icon" />
          </div>
        </div>
      </div>
    </div>

    <ul
      v-if="authStore.isLoggedIn()"
      class="flex flex-col gap-4 px-5 font-nano-pix"
    >
      <li class="underline-on-hover w-fit mx-auto">
        <router-link :to="{ name: 'Home' }" class="text-[26px]">
          Play
        </router-link>
      </li>
      <li class="underline-on-hover w-fit mx-auto">
        <router-link :to="{ name: 'Leaderboard' }" class="text-[26px]">
          Leaderboard
        </router-link>
      </li>
      <li class="underline-on-hover w-fit mx-auto">
        <router-link :to="{ name: 'Me' }" class="text-[26px]">
          Account
        </router-link>
      </li>
      <li class="underline-on-hover w-fit mx-auto">
        <router-link :to="{ name: 'Me' }" class="text-[26px]">
          Learn More
        </router-link>
      </li>
    </ul>

    <ul v-else class="flex flex-col gap-5 text-[26px] p-5">
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
