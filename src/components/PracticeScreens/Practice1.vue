<script setup>
import { ref, defineProps, defineEmits } from "vue";
import CompeteTable from "@/components/CompeteScreens/CompeteTable.vue";
import { useAuthStore } from "@/stores/auth";
const authStore = useAuthStore();

const emits = defineEmits(["switch-to-screen"]);

const switchToScreen = (screenNumber) => {
  console.log(`Switching to screen ${screenNumber}`);
  emits("switch-to-screen", screenNumber);
};
</script>

<template>
  <button class="flex flex-row items-center gap-1 my-1.5 md:mt-0" disabled>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="11"
      height="11"
      viewBox="0 0 11 11"
      fill="none"
      class="hidden"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.14286 9.42859H1.57143V7.85717H3.14286V9.42859ZM6.28571 11H4.71429V9.42859H6.28571V11ZM7.85714 11H6.28571V9.42859H7.85714V11ZM9.42857 9.42859H7.85714V7.85717H9.42857V9.42859ZM11 7.85717H9.42857V6.28575H11V7.85717ZM4.71429 11H3.14276L3.14286 9.42859H4.71429V11ZM11 6.28575H9.42857V4.71425H11V6.28575ZM11 4.71425H9.42857V3.14283H11V4.71425ZM9.42857 3.14283H7.85714V1.57142H9.42857V3.14283ZM7.85714 1.57142H6.28571V0H7.85714V1.57142ZM6.28571 1.57142H4.71429V0H6.28571V1.57142ZM4.71429 1.57142H3.14286V0H4.71429V1.57142ZM3.14286 3.14283H1.57143V1.57142H3.14286V3.14283ZM1.57143 4.71425H0V3.14283H1.57143V4.71425ZM3.14286 4.71425H1.57143V3.14283H3.14286V4.71425ZM1.57143 3.14283H0V1.57142H1.57143V3.14283ZM4.71429 4.71425H3.14286V3.14283H4.71429V4.71425ZM1.57143 1.57142H0V0H1.57143V1.57142Z"
        fill="white"
      />
    </svg>
    <h3 class="uppercase text-sm lg:text-lg pt-1 md:pt-0">Hone Your Skills</h3>
  </button>

  <div>
    <router-link
      :to="{ name: 'Play' }"
      class="w-[250px] font-nano-pix text-2xl text-black bg-[#46FFBC] hover:bg-[#009C64] py-2 justify-center flex leading-none mb-4"
    >
      practice
    </router-link>
  </div>

  <div class="w-[277px] lg:w[400px] flex flex-col gap-2">
    <h3 class="uppercase text-sm md:text-lg lg:text-xl xl:text-2xl">
      My Stats
    </h3>
    <ul>
      <li><span class="text-[#46FFBC] lg:text-lg">best: </span>1800pts</li>
      <li><span class="text-[#46FFBC] lg:text-lg">last: </span>1231pts</li>
      <li><span class="text-[#46FFBC] lg:text-lg">avg: </span>1231pts</li>
    </ul>
  </div>
</template>

<style scoped></style>
