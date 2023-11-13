<script setup>
import { ref, defineProps, defineEmits } from "vue";
import SubscreenLayout from "@/components/SubscreenLayout.vue";
import CompeteTable4 from "@/components/CompeteScreens/CompeteTable4.vue";

// Define props and emits explicitly
const props = defineProps([]);
const emits = defineEmits();

const switchToScreen4 = () => {
  // Emit an event to the parent component
  emits("switch-to-screen", 4);
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
          @click="switchToScreen4()"
          class="flex flex-row items-center w-full max-w-[250px] md:max-w-full md:w-full relative"
        >
          <div class="flex items-center w-full">
            <h1
              class="font-nano-pix text-2xl lg:text-3xl text-black bg-[#C5AAFF] rounded-2xl py-1 lg:py-2 justify-center flex w-full text-left"
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
      <CompeteTable4
        color="#C5AAFF"
        players="54"
        time="fin."
        place="1st"
        runOrFin="fin. "
      />
    </div>

    <div class="flex flex-row gap-12 lg:gap-28">
      <div class="leading-none flex flex-col lg:gap-2">
        <h2 class="uppercase text-sm md:text-xl xl:text-2xl pt-1 lg:pt-4">
          Standings
        </h2>
        <div class="flex flex-col gap-0.5 lg:gap-2 italic">
          <p><span class="text-[#E3BA24]">1st: </span>1992pts</p>
          <p><span class="text-[#A5A0A0]">2nd: </span>1823pts</p>
          <p><span class="text-[#AA7918]">3rd: </span>1811pts</p>
        </div>
      </div>
      <div class="leading-none flex flex-col lg:gap-2">
        <h2 class="uppercase text-sm md:text-xl xl:text-2xl pt-1 lg:pt-4">
          YOU
        </h2>
        <div class="flex flex-col lg:gap-2 italic">
          <p><span class="text-[#E3BA24]">1st: </span>1902pts</p>
        </div>
      </div>
    </div>
  </SubscreenLayout>
</template>
