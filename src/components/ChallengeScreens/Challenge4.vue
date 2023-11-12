<script setup>
import { ref, defineProps, defineEmits } from "vue";
import SubscreenLayout from "@/components/SubscreenLayout.vue";
import ChallengeTable4 from "@/components/ChallengeScreens/ChallengeTable4.vue";

// Define props and emits explicitly
const props = defineProps([]);
const emits = defineEmits();

const switchToScreen5 = () => {
  // Emit an event to the parent component
  emits("switch-to-screen", 5);
};

const switchToScreen3 = () => {
  // Emit an event to the parent component
  emits("switch-to-screen", 3);
};
</script>

<template>
  <SubscreenLayout>
    <h2 class="hidden md:flex uppercase text-sm md:text-xl xl:text-2xl">
      Challenge Mode 4
    </h2>

    <div class="flex flex-row gap-1 lg:gap-2 w-full">
      <div class="w-2/3">
        <button
          @click="switchToScreen5()"
          class="flex flex-row items-center w-full max-w-[250px] md:max-w-full md:w-full relative"
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

      <div class="w-1/3">
        <button
          @click="switchToScreen3()"
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
      Past Challenges
    </h2>
    <div class="flex flex-col gap-2">
      <ChallengeTable4
        color="#608CFF"
        players="3"
        time="fin."
        winOrLoss="W"
        runOrFin="fin."
      />

      <ChallengeTable4
        color="#7988AF"
        players="3"
        time="fin."
        winOrLoss="L"
        runOrFin="fin."
      />
    </div>
  </SubscreenLayout>
</template>
