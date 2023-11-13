<script setup>
import { ref, defineProps, defineEmits } from "vue";
import CompeteTable1 from "@/components/CompeteScreens/CompeteTable1.vue";
import SubscreenLayout from "@/components/SubscreenLayout.vue";

// Define props and emits explicitly
const props = defineProps([]);
const emits = defineEmits();

const switchToScreen2 = () => {
  // Emit an event to the parent component
  emits("switch-to-screen", 2);
};
</script>

<template>
  <SubscreenLayout>
    <h2
      class="hidden md:flex uppercase text-sm md:text-lg lg:text-xl xl:text-2xl"
    >
      Competition Mode
    </h2>
    <button
      @click="switchToScreen2()"
      class="flex flex-row items-center max-w-[250px] md:max-w-full md:w-full relative"
    >
      <div class="flex items-center w-full">
        <h1
          class="font-nano-pix text-3xl md:text-4xl lg:text-5xl text-black rainbow-gradient rounded-2xl py-2 justify-center flex w-full text-left"
        >
          Sign up!
        </h1>
      </div>
    </button>
    <h2 class="uppercase text-sm md:text-lg lg:text-xl xl:text-2xl pt-4">
      Active Contests
    </h2>
    <CompeteTable1
      color="#8578A0"
      tix="2"
      players="23"
      time="5:02"
      goldKade="2"
      silverKade="1"
      bronzeKade=".5"
    />
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
