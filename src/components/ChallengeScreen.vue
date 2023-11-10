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
          src="../assets/kaderunner-logo-blue.png"
          alt="Kade Runner logo green"
          class="h-fit w-[160px] md:w-auto md:h-fit lg:w-auto"
        />
        <h3 class="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
          Avoid obstacles and keep running!
        </h3>
        <h3
          class="hidden md:flex text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl -mt-2"
        >
          Challenge up to 3 friends to win Tix.
        </h3>
      </div>
      <div class="flex flex-col md:w-5/12 gap-2">
        <h2 class="hidden md:flex uppercase text-sm md:text-xl xl:text-2xl">
          Competition Mode
        </h2>
        <button
          class="flex flex-row items-center max-w-[250px] md:max-w-full md:w-full relative"
        >
          <div class="flex items-center w-full">
            <h1
              class="font-nano-pix text-3xl md:text-4xl lg:text-5xl text-black rainbow-gradient hover:bg-[#4bd3a1] rounded-3xl py-2 justify-center flex w-full text-left"
            >
              Sign up!
            </h1>
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
