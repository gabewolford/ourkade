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
    <div class="hidden lg:flex flex-row w-full">
      <div class="flex items-center m-0 flex-row justify-between">
        <div class="lg:w-5/12">
          <img src="../assets/left-line.png" alt="left line" />
        </div>
        <router-link to="/" class="flex items-center lg:max-w-2/12 lg:gap-1">
          <img src="../assets/logo.png" alt="Ourkade logo" class="min-w-fit" />
          <h4 class="text-shadow text-[#3e8ad2] text-[28px] pt-2">v1</h4>
        </router-link>
        <div class="lg:w-5/12">
          <img src="../assets/right-line.png" alt="right line" />
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.text-shadow {
  text-shadow: 0px 0px 5px rgba(255, 255, 255, 0.35);
}

.drop-shadow {
  drop-shadow: (0px 0px 5px rgba(255, 255, 255, 0.8));
}
</style>
