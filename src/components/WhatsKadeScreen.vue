<script setup></script>

<template>
  <div
    class="flex flex-col gradient1 my-auto w-full h-full rounded-[30px] carousel-slide px-4 lg:px-8 xl:px-12"
  >
    <div class="flex flex-col min-w-1/2 my-8">
      <div class="flex-flex-col">
        <div class="flex flex-row gap-4 items-center">
          <img src="../assets/small-kade-logo.svg" alt="Kade logo" />
          <h4
            class="font-nano-pix text-3xl lg:text-[86px] xl:text-[96px] 2xl:text-[112px] leading-none"
          >
            What's&nbsp;Kade<span class="font-retro-gaming">?</span>
          </h4>
        </div>
      </div>
    </div>

    <div class="flex flex-col md:flex-row gap-4 lg:gap-10">
      <div
        class="flex flex-col font-rowdies text-sm lg:text-3xl xl:text-[32px] 2xl:text-5xl w-full md:w-1/2"
      >
        <p>
          Get XP, called Kade, when you compete in cash-prize contests and
          redeem it on battle passes, skins, swords, and other goodies,
          <span class="underline underline-offset-2">or trade it.</span>
        </p>
      </div>

      <div
        class="flex flex-col font-rowdies text-sm lg:text-3xl xl:text-[32px] 2xl:text-5xl w-full md:w-1/2"
      >
        <p>
          Our goal is to give players true ownership over Kade and the freedom
          to do whatever they want with it.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.gradient1 {
  background-image: url("../assets/whats-kade-bg-image.png");
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  filter: brightness(90%);
}
</style>
