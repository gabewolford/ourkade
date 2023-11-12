<script setup>
import { ref, defineProps, defineEmits } from "vue";
import SubscreenLayout from "@/components/SubscreenLayout.vue";
import ChallengeTable2 from "@/components/ChallengeScreens/ChallengeTable2.vue";

// Define props and emits explicitly
const props = defineProps([]);
const emits = defineEmits();

const switchToScreen2 = () => {
  // Emit an event to the parent component
  emits("switch-to-screen", 2);
};

const switchToScreen4 = () => {
  // Emit an event to the parent component
  emits("switch-to-screen", 4);
};
</script>

<template>
  <SubscreenLayout>
    <h2 class="hidden md:flex uppercase text-sm md:text-xl xl:text-2xl">
      Challenge Mode 3
    </h2>

    <div class="flex flex-row gap-1 lg:gap-2 w-full">
      <div class="w-2/3">
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

      <div class="w-1/3">
        <button
          @click="switchToScreen2()"
          class="flex flex-row items-center w-full max-w-[250px] md:max-w-full md:w-full relative"
        >
          <div class="flex items-center w-full">
            <h1
              class="font-nano-pix text-2xl lg:text-3xl text-black bg-[#608CFF] rounded-2xl py-1 lg:py-2 justify-center flex w-full text-left"
            >
              back
            </h1>
          </div>
        </button>
      </div>
    </div>

    <h2 class="uppercase text-sm md:text-xl xl:text-2xl pt-1 lg:pt-4">
      Selected Challenge
    </h2>
    <div class="flex flex-col gap-2">
      <ChallengeTable2
        color="#608CFF"
        players="3"
        time="11:02"
        prize="2"
        runOrFin="fin."
      />
    </div>

    <div class="leading-none flex flex-col lg:gap-2">
      <h2 class="uppercase text-sm md:text-xl xl:text-2xl pt-1 lg:pt-4">
        Players
      </h2>
      <div class="flex flex-col lg:gap-2 italic">
        <p>Doc, Finished</p>
        <p>Stone Ice, Finished</p>
        <p>Mike Mike, Start</p>
      </div>
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
