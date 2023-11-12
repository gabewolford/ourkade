<script setup>
import { ref, defineProps, defineEmits } from "vue";
import SubscreenLayout from "@/components/SubscreenLayout.vue";
import ChallengeTable4 from "@/components/ChallengeScreens/ChallengeTable4.vue";

// Define props and emits explicitly
const props = defineProps([]);
const emits = defineEmits();

const switchToScreen6 = () => {
  // Emit an event to the parent component
  emits("switch-to-screen", 6);
};
</script>

<template>
  <SubscreenLayout>
    <h2 class="hidden md:flex uppercase text-sm md:text-xl xl:text-2xl">
      Challenge Mode 5
    </h2>

    <div class="flex flex-row gap-1 lg:gap-2 w-full">
      <div class="w-full lg:w-2/3">
        <button
          @click="switchToScreen6()"
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
      <ChallengeTable4
        color="#608CFF"
        players="3"
        time="fin."
        winOrLoss="W"
        runOrFin="fin."
      />
    </div>

    <div class="leading-none flex flex-col lg:gap-2">
      <h2 class="uppercase text-sm md:text-xl xl:text-2xl pt-1 lg:pt-4">
        Players
      </h2>
      <div class="flex flex-col lg:gap-2 italic">
        <p><span class="text-[#E3BA24]">1st: </span>Stone Ice, 1912pts</p>
        <p><span class="text-[#A5A0A0]">2nd: </span>Doc, 1902pts</p>
        <p><span class="text-[#AA7918]">3rd: </span>Mike Mike, 1892pts</p>
      </div>
    </div>
  </SubscreenLayout>
</template>
