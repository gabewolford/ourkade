<script setup>
import { ref, defineProps, defineEmits } from "vue";
import SubscreenLayout from "@/components/SubscreenLayout.vue";
import ChallengeTable2 from "@/components/ChallengeScreens/ChallengeTable2.vue";

// Define props and emits explicitly
const props = defineProps([]);
const emits = defineEmits();

const switchToScreen3 = () => {
  // Emit an event to the parent component
  emits("switch-to-screen", 3);
};

const switchToScreen4 = () => {
  // Emit an event to the parent component
  emits("switch-to-screen", 4);
};

const switchToScreen5 = () => {
  // Emit an event to the parent component
  emits("switch-to-screen", 5);
};
</script>

<template>
  <SubscreenLayout>
    <h2 class="hidden md:flex uppercase text-sm md:text-xl xl:text-2xl">
      Challenge Mode 2
    </h2>
    <div class="flex flex-row gap-1 lg:gap-2 w-full">
      <div class="w-3/5">
        <button
          @click="switchToScreen3()"
          class="flex flex-row items-center w-full max-w-[250px] md:max-w-full md:w-full relative"
        >
          <div class="flex items-center w-full">
            <h1
              class="font-nano-pix text-2xl lg:text-3xl text-black bg-[#7988AF] rounded-2xl py-1 lg:py-2 pl-5 lg:pl-4 2xl:pl-16 w-full relative text-left"
            >
              create
            </h1>
            <img
              src="../../assets/ticket-icon-black-1.png"
              alt="ticket"
              class="absolute right-[10%] lg:right-[8%] top-3 lg:top-3.5 h-[20px] lg:h-[25px] w-auto ml-2 z-50"
            />
          </div>
        </button>
      </div>

      <div class="w-1/5">
        <button
          @click="switchToScreen4()"
          class="flex flex-row items-center w-full max-w-[250px] md:max-w-full md:w-full relative"
        >
          <div class="flex items-center w-full">
            <h1
              class="font-nano-pix text-2xl lg:text-3xl text-black bg-[#7988AF] rounded-2xl py-1 lg:py-2 justify-center flex w-full text-left"
            >
              run!
            </h1>
          </div>
        </button>
      </div>

      <div class="w-1/5">
        <button
          @click="switchToScreen5()"
          class="flex flex-row items-center w-full max-w-[250px] md:max-w-full md:w-full relative disabled"
        >
          <div class="flex items-center w-full">
            <h1
              class="font-nano-pix text-2xl lg:text-3xl text-black bg-[#608CFF] rounded-2xl py-1 lg:py-2 justify-center flex w-full text-left"
            >
              info
            </h1>
          </div>
        </button>
      </div>
    </div>

    <h2 class="uppercase text-sm md:text-xl xl:text-2xl pt-1 lg:pt-4">
      Active Challenges
    </h2>
    <div class="flex flex-col gap-2">
      <ChallengeTable2
        color="#7988AF"
        players="2"
        time="19:02"
        prize="2"
        runOrFin="run!"
      />

      <ChallengeTable2
        color="#608CFF"
        players="3"
        time="11:02"
        prize="2"
        runOrFin="fin."
      />
    </div>

    <div class="mt-2.5 lg:mt-4 leading-none">
      <button
        @click="switchToNextScreen"
        class="text-left uppercase text-sm text-[#608CFF]"
      >
        <div class="flex flex-row gap-2 text-xs">
          <p>View Past Challenges</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="12"
            viewBox="0 0 25 16"
            fill="none"
          >
            <path
              d="M24.7071 8.70711C25.0976 8.31658 25.0976 7.68342 24.7071 7.29289L18.3431 0.928932C17.9526 0.538408 17.3195 0.538408 16.9289 0.928932C16.5384 1.31946 16.5384 1.95262 16.9289 2.34315L22.5858 8L16.9289 13.6569C16.5384 14.0474 16.5384 14.6805 16.9289 15.0711C17.3195 15.4616 17.9526 15.4616 18.3431 15.0711L24.7071 8.70711ZM0 9H24V7H0V9Z"
              fill="#608CFF"
            />
          </svg>
        </div>
      </button>
    </div>
  </SubscreenLayout>
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
</style>
