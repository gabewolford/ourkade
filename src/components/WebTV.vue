<script setup>
import { ref } from "vue";

const selectedComponent = ref("Menu");

const showCompete = () => {
  selectedComponent.value = "Compete";
};

const showChallenge = () => {
  selectedComponent.value = "Challenge";
};

const showPractice = () => {
  selectedComponent.value = "Practice";
};

const showMenu = () => {
  selectedComponent.value = "Menu";
};
</script>

<template>
  <div class="flex w-full lg:min-h-[350px]">
    <div
      class="flex items-center justify-around border-t-[20px] border-x-[20px] border-b-[2px] border-[#222f37] w-full h-[618px] rounded-t-[50px] rounded-b-[30px] relative shadow-custom"
    >
      <keep-alive>
        <component :is="selectedComponent" />
      </keep-alive>

      <div
        class="absolute bottom-0 bg-[#222f37] h-[80px] w-full flex flex-row items-center justify-between"
      >
        <div class="flex flex-row gap-4">
          <img src="../assets/red-light.svg" alt="red light" />
          <button
            class="text-[#939393] bg-[#151E23] px-10 py-1.5 rounded-full text-lg button-shadow"
          >
            Power
          </button>
          <button
            class="text-[#939393] bg-[#151E23] px-10 py-1.5 rounded-full text-lg button-shadow"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-4 justify-between gap-6">
    <button
      @click="showCompete"
      class="flex flew-row flex-1 gap-2 items-center rounded-[50px] bg-[#3d4D7C] text-3xl 2xl:text-5xl min-w-fit p-4 h-[125px] shadow-custom4 font-nano-pix"
    >
      <img src="../assets/button-icons/compete-icon.svg" alt="compete icon" />
      <h3>Compete</h3>
    </button>

    <button
      @click="showChallenge"
      class="flex flew-row gap-2 items-center rounded-[50px] bg-[#386D9D] text-3xl 2xl:text-5xl min-w-fit p-4 h-[125px] shadow-custom4 font-nano-pix"
    >
      <img
        src="../assets/button-icons/challenge-icon.svg"
        alt="challenge icon"
      />
      <h3>Challenge</h3>
    </button>

    <button
      @click="showPractice"
      class="flex flew-row gap-2 items-center rounded-[50px] bg-[#067A5E] text-3xl 2xl:text-5xl min-w-fit p-4 h-[125px] shadow-custom4 font-nano-pix"
    >
      <img src="../assets/button-icons/practice-icon.svg" alt="practice icon" />
      <h3>Practice</h3>
    </button>

    <button
      @click="showMenu"
      class="flex flew-row gap-2 items-center rounded-[50px] bg-[#783B28] text-3xl 2xl:text-5xl min-w-fit p-4 h-[125px] shadow-custom4 font-nano-pix"
    >
      <img src="../assets/button-icons/menu-icon.svg" alt="menu icon" />
      <h3>Menu</h3>
    </button>
  </div>
</template>

<style scoped>
.button-shadow {
  box-shadow: 0px 0px 10px 1px #000 inset;
}
</style>
