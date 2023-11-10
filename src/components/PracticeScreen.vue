<script setup></script>

<template>
  <div
    class="flex background-image object-contain w-full h-full items-center rounded-[30px] px-4 lg:px-8 xl:px-12"
  >
    <div class="flex flex-col lg:flex-row mx-auto gap-2 lg:gap-8 xl:gap-20">
      <div class="flex flex-col lg:w-7/12 gap-2">
        <h2 class="uppercase text-xs lg:text-xl xl:text-2xl">
          Endless Runner Game
        </h2>
        <img
          src="../assets/kaderunner-logo-green.png"
          alt="Kade Runner logo green"
          class="h-fit w-40 lg:h-fit lg:w-auto"
        />
        <h3 class="text-sm lg:text-lg xl:text-xl">
          Avoid obstacles and keep running!
        </h3>
        <h3 class="hidden lg:flex text-base lg:text-lg xl:text-xl -mt-2">
          Hone your skills, young kadawan.
        </h3>
      </div>
      <div class="flex flex-col lg:w-5/12 gap-2">
        <h2 class="hidden lg:flex uppercase text-sm lg:text-xl xl:text-2xl">
          Practice Mode
        </h2>
        <button class="flex flex-row items-center w-full relative">
          <div class="flex items-center w-full">
            <h1
              class="font-nano-pix text-3xl lg:text-5xl text-black bg-[#46FFBC] hover:bg-[#4bd3a1] rounded-3xl py-2 pl-6 lg:pl-6 xl:pl-12 2xl:pl-16 w-full relative text-left"
            >
              Play!
            </h1>
            <img
              src="../assets/ticket-icon-black.png"
              alt="ticket"
              class="absolute right-[8%] top-3.5 lg:top-3 h-[32px] lg:h-[50px] w-auto ml-2"
            />
          </div>
        </button>
        <h2 class="uppercase text-sm lg:text-xl xl:text-2xl pt-4">My Stats</h2>
        <p class="text-xs lg:text-lg xl:text-xl text-[#46FFBC]">
          best: <span class="text-white">1800pts</span>
        </p>
        <p class="text-xs lg:text-lg xl:text-xl text-[#46FFBC]">
          last: <span class="text-white">1231pts</span>
        </p>
        <p class="text-xs lg:text-lg xl:text-xl text-[#46FFBC]">
          avg: <span class="text-white">1231pts</span>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.background-image {
  background-image: url("../assets/kaderunner-bg.png");
}
</style>
