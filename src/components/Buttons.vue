<script setup>
import { useRoute } from "vue-router";

const $route = useRoute();
</script>

<template>
  <div
    class="grid grid-cols-2 lg:grid-cols-4 justify-between gap-2 lg:gap-6 text-lg lg:text-xl xl:text-3xl 2xl:text-4xl"
    :class="{}"
  >
    <router-link :to="{ name: 'Home' }">
      <button
        class="flex flew-row flex-1 gap-2 items-center rounded-full 2xl:rounded-[50px] bg-[#783B28] hover:bg-[#794332] w-full min-w-fit p-2 lg:p-4 h-fit lg:h-[75px] xl:h-[100px] 2xl:h-[125px] font-nano-pix shadow-custom2"
        :class="{
          'shadow-custom2': $route.name !== 'Home',
          'shadow-custom4': $route.name === 'Home',
        }"
      >
        <img src="../assets/button-icons/menu-icon.svg" alt="menu icon" />
        <h3>Home</h3>
      </button>
    </router-link>

    <router-link :to="{ name: 'Compete1' }">
      <button
        class="flex flew-row flex-1 gap-2 items-center rounded-full 2xl:rounded-[50px] bg-[#3d4D7C] hover:bg-[#425A9F] w-full min-w-fit p-2 lg:p-4 h-fit lg:h-[75px] xl:h-[100px] 2xl:h-[125px] font-nano-pix"
        :class="{
          'shadow-custom2': $route.name !== 'Compete1',
          'shadow-custom4': $route.name === 'Compete1',
        }"
      >
        <img src="../assets/button-icons/compete-icon.svg" alt="compete icon" />
        <h3>Compete</h3>
      </button>
    </router-link>

    <router-link :to="{ name: 'Challenge1' }">
      <button
        class="flex flew-row flex-1 gap-2 items-center rounded-full 2xl:rounded-[40px] bg-[#386D9D] hover:bg-[#3275B2] w-full min-w-fit p-2 lg:p-4 h-fit lg:h-[75px] xl:h-[100px] 2xl:h-[125px] font-nano-pix"
        :class="{
          'shadow-custom2': $route.name !== 'Challenge1',
          'shadow-custom4': $route.name === 'Challenge1',
        }"
      >
        <img
          src="../assets/button-icons/challenge-icon.svg"
          alt="challenge icon"
        />
        <h3>Challenge</h3>
      </button>
    </router-link>

    <router-link :to="{ name: 'Practice' }">
      <button
        class="flex flew-row flex-1 gap-2 items-center rounded-full 2xl:rounded-[50px] bg-[#067A5E] hover:bg-[#086] w-full min-w-fit p-2 lg:p-4 h-fit lg:h-[75px] xl:h-[100px] 2xl:h-[125px] font-nano-pix"
        :class="{
          'shadow-custom2': $route.name !== 'Practice',
          'shadow-custom4': $route.name === 'Practice',
        }"
      >
        <img
          src="../assets/button-icons/practice-icon.svg"
          alt="practice icon"
        />
        <h3>Practice</h3>
      </button>
    </router-link>
  </div>
</template>
