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
        <h3
          class="hidden md:flex text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl"
        >
          Avoid obstacles and keep running!
        </h3>
        <h3
          class="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl md:-mt-2 mt-0"
        >
          Challenge up to 3 friends to win Tix.
        </h3>
      </div>
      <div class="flex flex-col md:w-5/12 gap-2">
        <h2 class="hidden md:flex uppercase text-sm md:text-xl xl:text-2xl">
          Challenge Mode
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
        <h2 class="uppercase text-sm md:text-xl xl:text-2xl pt-4">
          Sample Challenge
        </h2>
        <div class="flex flex-col gap2">
          <table class="flex items-center border border-[#7988AF] w-fit">
            <td class="border-r border-[#7988AF] px-2.5">
              <img src="../assets/table-icons/gray/tix.svg" alt="tix" />
            </td>
            <td class="border-r border-[#7988AF] px-2.5 pt-1.5">1</td>
            <td class="border-r border-[#7988AF] px-2.5">
              <img
                src="../assets/table-icons/gray/players.svg"
                alt="players"
                class="py-1"
              />
            </td>
            <td class="border-r border-[#7988AF] px-2.5 pt-1.5">3</td>
            <td class="border-r border-[#7988AF] px-2.5">
              <img src="../assets/table-icons/gray/time.svg" alt="time" />
            </td>
            <td class="border-r border-[#7988AF] px-2.5 pt-1.5">24:00</td>
            <td class="border-r border-[#7988AF] px-2.5">
              <img src="../assets/table-icons/gray/trophy.svg" alt="trophy" />
            </td>
            <td class="px-2.5 pt-0.5 flex flex-row items-center h-full gap-2">
              <p class="text-[#E3BA24] pt-1">2</p>
              <img
                src="../assets/table-icons/gray/gold-ticket.svg"
                alt="tix"
                class="pr-2.5"
              />
            </td>
          </table>
        </div>
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
