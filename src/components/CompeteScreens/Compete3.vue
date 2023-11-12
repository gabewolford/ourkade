<script setup>
import { ref, defineProps, defineEmits } from "vue";

// Define props and emits explicitly
const props = defineProps([]);
const emits = defineEmits();

const switchToNextScreen = () => {
  // Emit an event to the parent component
  emits("switch-screen", 4);
};
</script>

<template>
  <div class="flex flex-col md:w-5/12 gap-2">
    <h2 class="hidden md:flex uppercase text-sm md:text-xl xl:text-2xl">
      Competition Mode 3
    </h2>
    <button
      @click="switchToNextScreen"
      class="flex flex-row items-center max-w-[250px] md:max-w-full md:w-full relative"
    >
      <div class="flex items-center w-full">
        <h1
          class="font-nano-pix text-3xl md:text-4xl lg:text-5xl text-black rainbow-gradient hover:bg-[#4bd3a1] rounded-3xl py-2 justify-center flex w-full text-left"
        >
          Sign up!
        </h1>
      </div>
    </button>
    <h2 class="uppercase text-sm md:text-xl xl:text-2xl pt-4">
      Active Contests
    </h2>
    <!-- Table here -->
  </div>
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
