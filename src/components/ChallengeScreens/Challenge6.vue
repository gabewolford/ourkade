<script setup>
import { ref, defineProps, defineEmits } from "vue";
import SubscreenLayout from "@/components/SubscreenLayout.vue";
import ChallengeTable6 from "@/components/ChallengeScreens/ChallengeTable6.vue";

// Define props and emits explicitly
const props = defineProps([]);
const emits = defineEmits();

const switchToScreen7 = () => {
  // Emit an event to the parent component
  emits("switch-to-screen", 7);
};
</script>

<template>
  <SubscreenLayout>
    <h2 class="hidden md:flex uppercase text-sm md:text-xl xl:text-2xl">
      Challenge Mode 6
    </h2>

    <div class="w-3/5">
      <button
        @click="switchToScreen7()"
        class="flex flex-row items-center w-full max-w-[250px] md:max-w-full md:w-full relative"
      >
        <div class="flex items-center w-full">
          <h1
            class="font-nano-pix text-2xl lg:text-3xl text-black bg-[#608CFF] rounded-2xl py-1 lg:py-2 pl-5 lg:pl-4 2xl:pl-16 w-full relative text-left"
          >
            accept
          </h1>
          <img
            src="../../assets/ticket-icon-black-1-blue.png"
            alt="ticket"
            class="absolute right-[10%] lg:right-[8%] top-3 lg:top-3.5 h-[20px] lg:h-[25px] w-auto ml-2 z-50"
          />
        </div>
      </button>
    </div>

    <h2 class="uppercase text-sm md:text-xl xl:text-2xl pt-1 lg:pt-4">
      You've Been Challenged
    </h2>
    <div class="flex flex-col gap-2">
      <ChallengeTable6
        color="#608CFF"
        tix="1"
        players="2"
        time="20:02"
        prize="2"
        runOrFin="TBD"
      />
    </div>

    <div class="leading-none flex flex-col lg:gap-2">
      <h2 class="uppercase text-sm md:text-xl xl:text-2xl pt-1 lg:pt-4">
        Players
      </h2>
      <div class="flex flex-col lg:gap-2 italic">
        <p>Doc, Finished</p>
        <p>Mike Mike, Start</p>
        <p>Player 3, Pending</p>
      </div>
    </div>
  </SubscreenLayout>
</template>
