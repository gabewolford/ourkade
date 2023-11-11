<script setup></script>

<template>
  <div
    class="flex background-image object-contain w-full h-full items-center rounded-[30px] px-4 md:px-12"
  >
    <div
      class="flex flex-col md:flex-row mx-auto gap-2 md:gap-12 xl:gap-20 md:w-full"
    >
      <div class="flex flex-col md:w-7/12 gap-2">
        <h2 class="uppercase text-xs md:text-xl xl:text-2xl">
          Endless Runner Game
        </h2>
        <img
          src="../assets/kaderunner-logo-green.png"
          alt="Kade Runner logo green"
          class="h-fit w-[160px] md:w-auto md:h-fit lg:w-auto"
        />
        <h3 class="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
          Hone your skills...
        </h3>
      </div>
      <div class="flex flex-col md:w-5/12 gap-2">
        <h2 class="hidden md:flex uppercase text-sm md:text-xl xl:text-2xl">
          Practice Mode
        </h2>
        <button
          class="flex flex-row items-center max-w-[250px] md:max-w-full md:w-full relative"
        >
          <div class="flex items-center w-full">
            <h1
              class="font-nano-pix text-3xl md:text-4xl lg:text-5xl text-black bg-[#46FFBC] hover:bg-[#4bd3a1] rounded-3xl py-2 pl-6 md:pl-6 xl:pl-12 2xl:pl-16 w-full relative text-left"
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
        <h2 class="uppercase text-sm md:text-xl xl:text-2xl pt-4">My Stats</h2>
        <p class="text-xs md:text-base lg:text-lg xl:text-xl text-[#46FFBC]">
          best: <span class="text-white">1800pts</span>
        </p>
        <p class="text-xs md:text-base lg:text-lg xl:text-xl text-[#46FFBC]">
          last: <span class="text-white">1231pts</span>
        </p>
        <p class="text-xs md:text-base lg:text-lg xl:text-xl text-[#46FFBC]">
          avg: <span class="text-white">1231pts</span>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.background-image {
  background-image: url("../assets/kaderunner-bg.png");
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>
