<script setup></script>

<template>
  <div
    class="flex lg:hidden flex-col gradient1 my-auto w-full h-full rounded-[30px] p-4"
    ref="whats-kade"
  >
    <div class="flex flex-col w-full mb-4">
      <div class="flex-flex-col">
        <div class="flex flex-row gap-6 lg:gap-4 items-center">
          <img src="../assets/small-kade-logo.svg" alt="Kade logo" />
          <h4
            class="font-nano-pix text-5xl md:text-7xl leading-none rainbow-gradient"
          >
            What's Kade<span class="font-retro-gaming">?</span>
          </h4>
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-4">
      <div class="flex flex-col font-rowdies font-light gap-5">
        <p class="font-bold text-xl">
          <span class="underline underline-offset-2">Kade is XP</span>
          that you get for competing in Ourkade. You can also win it in contest
          only in Alpha.
        </p>
        <p class="font-bold">
          Kade is yours to
          <span class="font-underline">do what you want.</span> Use it to redeem
          monthly Battle Passes, outfits, swords, and other goodies on Ourkade -
          or trade it.
        </p>
      </div>
      <div class="flex flex-col gap-4 min-w-1/2 font-rowdies font-light">
        <p>
          <span class="font-bold">Battle Passes</span> grant you discounted Tix,
          lower entry fees and / or higher payouts in cash prize contests, and
          free limited edition skins.
        </p>
        <p>
          Kade can be converted into an ERC-20 Token when Ourkade launches Beta.
        </p>
      </div>
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
