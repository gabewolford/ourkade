<script setup>
const changeDisplay = () => {
  // Implement logic to change what displays in the screen
  // You can use ref or reactive to manage state
  console.log("Changing display!");
};
</script>

<template>
  <div class="flex w-full lg:min-h-[350px] lg:mr-12">
    <div
      class="flex items-center justify-around tv-screen border-t-[20px] border-x-[20px] border-b-[2px] border-[#222f37] w-full h-[500px] rounded-t-[50px] rounded-b-[30px] relative shadow-custom"
    >
      <button
        @click="changeDisplay"
        class="text-white border mix-blend-overlay px-5 py-2 rounded-full text-4xl flex items-center h-[50px] w-[50px] justify-center absolute top-48 left-16 font-nano-pix font-semibold"
      >
        &lt;
      </button>

      <img
        src="../assets/classic-games-logo.png"
        alt="Compete In Classic Games"
        class="px-48 pb-20"
      />

      <button
        @click="changeDisplay"
        class="text-white border mix-blend-overlay px-5 py-2 rounded-full text-4xl flex items-center h-[50px] w-[50px] justify-center absolute top-48 right-16 font-nano-pix font-semibold"
      >
        >
      </button>

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

        <div class="cartridge-shadow w-fit"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tv-screen {
  background: linear-gradient(90deg, #a33d15 2.38%, #9c8533 99.98%);
}

.button-shadow {
  box-shadow: 0px 0px 10px 1px #000 inset;
}
</style>
