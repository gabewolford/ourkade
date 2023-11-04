<template>
  <header class="pt-4 pb-2 flex w-full">
    <!-- Mobile header -->
    <router-link
      to="/"
      class="flex flex-row justify-between items-center w-full lg:hidden"
    >
      <img src="../assets/menu-icon.svg" />
      <img src="../assets/mobile-logo.svg" />
      <h4 class="font-alfa-slab-one text-[#386D9D] text-xl">v1</h4>
    </router-link>

    <!-- Desktop header -->
    <div class="hidden lg:flex flex-row justify-between w-full">
      <div class="flex items-center flex-grow">
        <div class="flex-grow border-t-2 border-white"></div>

        <router-link to="/" class="flex flex-row items-center">
          <img src="../assets/desktop-logo.svg" alt="Ourkade logo" />
          <h4 class="font-retro-gaming text-[#386D9D] text-xl pr-2">v1</h4>
        </router-link>

        <div class="flex-grow border-t-2 border-white"></div>
      </div>
    </div>
  </header>
</template>
