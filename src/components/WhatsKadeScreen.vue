<script setup></script>

<template>
  <div
    class="hidden lg:flex flex-row gradient1 w-full h-full items-center rounded-[30px] carousel-slide lg:px-8 xl:px-12 lg:gap-8 xl:gap-16"
  >
    <div class="flex flex-col min-w-1/2 gap-5 p-4">
      <div class="flex-flex-col">
        <div class="flex flex-row gap-4 items-center justify-center">
          <img src="../assets/small-kade-logo.svg" alt="Kade logo" />
          <h2
            class="font-holtwood-one-sc lg:text-[50px] xl:text-[64px] 2xl:text-[76px] leading-none"
          >
            Kade&nbsp;is
          </h2>
        </div>
        <h4
          class="font-holtwood-one-sc lg:text-[30px] xl:text-[36px] 2xl:text-[40px] leading-none rainbow-gradient"
        >
          exchangeable&nbsp;XP
        </h4>
      </div>

      <div
        class="flex flex-col font-rowdies font-light gap-5 lg:text-xl xl:text-2xl 2xl:text-[26px]"
      >
        <p>
          <span class="font-bold">Win it</span> in Alpha-exclusive contests and
          <span class="font-bold">get rewarded with it</span> whenever you
          compete in Tix-entry games.
        </p>
        <p>
          <span class="font-bold">Redeem it</span> on stuff like monthly Battle
          Passes or <span class="font-bold">exchange it</span> for
          <span class="underline-offset-2">real money</span>.
        </p>
      </div>
    </div>
    <div
      class="flex flex-col gap-5 min-w-1/2 font-rowdies font-light lg:text-base 2xl:text-lg p-4"
    >
      <p>
        <span class="font-bold">Battle Passes</span> grant you discounted Tix,
        lower entry fees and / or higher payouts in cash prize contests, limited
        edition skins, and other goodies.
      </p>
      <p>
        Kade will become exchangeable after we launch
        <span class="font-bold">cash prize contests & wagering</span>. At this
        point, Kade will no longer be winnable in contests and Tix will no
        longer be free.
      </p>
    </div>
  </div>
</template>

<style scoped>
.gradient1 {
  background: linear-gradient(
    113deg,
    #462015 1.18%,
    #1c1807 19.48%,
    #0c3425 41.85%,
    #0c1630 63.11%,
    #1f0e42 83.06%,
    #420340 100%
  );
  .rainbow-gradient {
    background: var(
      --Ranbow-lines,
      linear-gradient(
        90deg,
        #ff7246 -0.08%,
        #ffd646 13.9%,
        #46ffbc 30.03%,
        #467aff 48.23%,
        #9e71ff 67.99%,
        #fc54ff 83.6%
      )
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
</style>
