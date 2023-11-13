<script setup>
import { ref, defineProps, defineEmits } from "vue";
import SubscreenLayout from "@/components/SubscreenLayout.vue";
import CompeteTable2 from "@/components/CompeteScreens/CompeteTable2.vue";

// Define props and emits explicitly
const props = defineProps([]);
const emits = defineEmits();

const switchToScreen4 = () => {
  // Emit an event to the parent component
  emits("switch-to-screen", 4);
};

const switchToScreen2 = () => {
  // Emit an event to the parent component
  emits("switch-to-screen", 2);
};
</script>

<template>
  <SubscreenLayout>
    <h2 class="hidden md:flex uppercase text-sm md:text-xl xl:text-2xl">
      Competition Mode 3
    </h2>
    <div class="flex flex-row gap-1 lg:gap-2 w-full">
      <div class="w-2/3">
        <button
          @click="switchToScreen4()"
          class="flex flex-row items-center w-full max-w-[250px] md:max-w-full md:w-full relative"
        >
          <div class="flex items-center w-full">
            <h1
              class="font-nano-pix text-2xl lg:text-3xl text-black bg-[#C5AAFF] rounded-2xl py-1 lg:py-2 pl-5 lg:pl-4 2xl:pl-16 w-full relative text-left"
            >
              run again!
            </h1>
            <img
              src="../../assets/ticket-icon-black-2-light-purple.png"
              alt="ticket"
              class="absolute right-[10%] lg:right-[8%] top-3 lg:top-3.5 h-[20px] lg:h-[25px] w-auto ml-2 z-50"
            />
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
              class="font-nano-pix text-2xl lg:text-3xl text-black bg-[#8578A0] rounded-2xl py-1 lg:py-2 justify-center flex w-full text-left"
            >
              back
            </h1>
          </div>
        </button>
      </div>
    </div>

    <h2 class="uppercase text-sm md:text-xl xl:text-2xl pt-1 lg:pt-4">
      Selected Contests
    </h2>
    <div class="flex flex-col gap-2">
      <CompeteTable2
        color="#C5AAFF"
        players="31"
        time="10:02"
        goldKade="2"
        silverKade="1"
        bronzeKade=".5"
        runOrFin="fin. "
      />
    </div>

    <div class="flex flex-row gap-12 lg:gap-28">
      <div class="leading-none flex flex-col lg:gap-2">
        <h2 class="uppercase text-sm md:text-xl xl:text-2xl pt-1 lg:pt-4">
          Standings
        </h2>
        <div class="flex flex-col gap-0.5 lg:gap-2 italic">
          <p><span class="text-[#E3BA24]">1st: </span>1902pts</p>
          <p><span class="text-[#A5A0A0]">2nd: </span>1877pts</p>
          <p><span class="text-[#AA7918]">3rd: </span>1830pts</p>
        </div>
      </div>
      <div class="leading-none flex flex-col lg:gap-2">
        <h2 class="uppercase text-sm md:text-xl xl:text-2xl pt-1 lg:pt-4">
          YOU
        </h2>
        <div class="flex flex-col lg:gap-2 italic">
          <p><span>5th </span>1802pts</p>
        </div>
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
