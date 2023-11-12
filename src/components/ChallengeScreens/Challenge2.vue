<script setup>
import { ref, defineProps, defineEmits } from "vue";
import SubscreenLayout from "@/components/SubscreenLayout.vue";
import ChallengeTable2 from "@/components/ChallengeScreens/ChallengeTable2.vue";

// Define props and emits explicitly
const props = defineProps([]);
const emits = defineEmits();

const switchToNextScreen = () => {
  // Emit an event to the parent component
  emits("switch-screen", 3);
};
</script>

<template>
  <SubscreenLayout>
    <h2 class="hidden md:flex uppercase text-sm md:text-xl xl:text-2xl">
      Challenge Mode 2
    </h2>
    <div class="flex flex-row gap-1 w-full">
      <div class="w-3/5">
        <button
          @click="switchToNextScreen"
          class="flex flex-row items-center max-w-[250px] md:max-w-full md:w-full relative"
        >
          <div class="flex items-center w-full">
            <h1
              class="font-nano-pix text-3xl text-black bg-[#7988AF] rounded-2xl py-2 lg:pl-4 2xl:pl-16 w-full relative text-left"
            >
              create
            </h1>
            <img
              src="../../assets/ticket-icon-black-1.png"
              alt="ticket"
              class="absolute right-[8%] top-3.5 lg:top-3.5 h-[25px] w-auto ml-2 z-50"
            />
          </div>
        </button>
      </div>

      <div class="w-1/5">
        <button
          @click="switchToNextScreen"
          class="flex flex-row items-center max-w-[250px] md:max-w-full md:w-full relative"
        >
          <div class="flex items-center w-full">
            <h1
              class="font-nano-pix text-3xl text-black bg-[#7988AF] rounded-2xl py-2 justify-center flex w-full text-left"
            >
              run!
            </h1>
          </div>
        </button>
      </div>

      <div class="w-1/5">
        <button
          @click="switchToNextScreen"
          class="flex flex-row items-center max-w-[250px] md:max-w-full md:w-full relative"
        >
          <div class="flex items-center w-full">
            <h1
              class="font-nano-pix text-3xl text-black bg-[#608CFF] rounded-2xl py-2 justify-center flex w-full text-left"
            >
              info
            </h1>
          </div>
        </button>
      </div>
    </div>

    <h2 class="uppercase text-sm md:text-xl xl:text-2xl pt-4">
      Active Challenges
    </h2>
    <div class="flex flex-col gap-2">
      <ChallengeTable2
        color="#7988AF"
        players="2"
        time="19:02"
        tix="2"
        runOrFin="run!"
      />

      <ChallengeTable2
        color="#608CFF"
        players="3"
        time="11:02"
        tix="2"
        runOrFin="fin."
      />
    </div>

    <div class="mt-4">
      <button
        @click="switchToNextScreen"
        class="text-left uppercase text-sm text-[#608CFF]"
      >
        <div class="flex flex-row gap-2">View Past Challenges</div>
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
