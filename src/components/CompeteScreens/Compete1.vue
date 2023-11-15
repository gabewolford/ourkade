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
    <h3 class="uppercase text-sm lg:text-lg pt-1 md:pt-0">
      Compete in contests for kade
    </h3>
  </button>
  <div v-if="authStore.isLoggedIn()"></div>

  <div v-else>
    <router-link
      :to="{ name: 'Register' }"
      class="w-[250px] font-nano-pix text-2xl text-black rainbow-gradient py-2 justify-center flex leading-none mb-4"
    >
      Sign up to compete
    </router-link>
  </div>

  <div class="container w-full flex flex-col gap-4 mb-4 overflow-y-scroll">
    <CompeteTable
      :color="authStore.isLoggedIn() ? '#C5AAFF' : '#8578A0'"
      :color2="authStore.isLoggedIn() ? '#8578A0' : '#79718A'"
      :clickable="authStore.isLoggedIn()"
      tix="2"
      players="23"
      time="5:02"
      ribbons="-"
      topButtonText=""
      bottomButtonText="run!"
      @switch-to-screen="switchToScreen"
    />
    <CompeteTable
      v-if="authStore.isLoggedIn()"
      :color="authStore.isLoggedIn() ? '#C5AAFF' : '#8578A0'"
      :color2="authStore.isLoggedIn() ? '#8578A0' : '#79718A'"
      :clickable="authStore.isLoggedIn()"
      tix="2"
      players="31"
      time="10:02"
      ribbons="23021"
      topButtonText="rank"
      bottomButtonText="rerun!"
      @switch-to-screen="switchToScreen"
    />
    <CompeteTable
      v-if="authStore.isLoggedIn()"
      :color="authStore.isLoggedIn() ? '#C5AAFF' : '#8578A0'"
      :color2="authStore.isLoggedIn() ? '#8578A0' : '#79718A'"
      :clickable="authStore.isLoggedIn()"
      tix="2"
      players="12"
      time="1:02"
      ribbons="1302"
      topButtonText="rank"
      bottomButtonText="rerun!"
      @switch-to-screen="switchToScreen"
    />
  </div>
  <button
    v-if="authStore.isLoggedIn()"
    class="uppercase text-xs text-[#C5AAFF] hover:text-[#8578A0] w-fit"
    @click="() => switchToScreen(3)"
  >
    View Past Contests ➜
  </button>
</template>

<style scoped>
.rainbow-gradient {
  background: linear-gradient(
    90deg,
    #ff7246 -0.08%,
    #ffd646 13.9%,
    #46ffbc 30.03%,
    #467aff 48.23%,
    #9e71ff 67.99%,
    #fc54ff 83.6%
  );
}

.container::-webkit-scrollbar {
  width: 5px;
}

.container::-webkit-scrollbar-track {
  background-color: #1e2844;
  border-radius: 5px;
}

.container::-webkit-scrollbar-thumb {
  background-color: #414890;
  border-radius: 5px;
}

.container::-webkit-scrollbar-thumb:hover {
  background-color: #5058b0;
}
</style>
