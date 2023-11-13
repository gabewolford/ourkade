<script setup>
import { ref, defineProps, defineEmits } from "vue";
import SubscreenLayout from "@/components/SubscreenLayout.vue";
import CompeteTable4 from "@/components/CompeteScreens/CompeteTable4.vue";

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
      Competition Mode 4
    </h2>
    <div class="flex flex-row gap-1 lg:gap-2 w-full">
      <div class="w-2/3">
        <button
          @click="switchToScreen5()"
          class="flex flex-row items-center w-full max-w-[250px] md:max-w-full md:w-full relative"
        >
          <div class="flex items-center w-full">
            <h1
              class="font-nano-pix text-2xl lg:text-3xl text-black bg-[#C5AAFF] rounded-2xl py-1 lg:py-2 w-full text-center"
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
              class="font-nano-pix text-2xl lg:text-3xl text-black bg-[#C5AAFF] rounded-2xl py-1 lg:py-2 justify-center flex w-full text-left"
            >
              back
            </h1>
          </div>
        </button>
      </div>
    </div>

    <h2 class="uppercase text-sm md:text-xl xl:text-2xl pt-1 lg:pt-4">
      Past Contests
    </h2>
    <div class="flex flex-col gap-2">
      <CompeteTable4
        color="#C5AAFF"
        players="54"
        time="fin."
        place="1st"
        runOrFin="fin. "
      />

      <CompeteTable4
        color="#8578A0"
        players="31"
        time="fin."
        place="12th"
        runOrFin="fin. "
      />
    </div>
  </SubscreenLayout>
</template>
