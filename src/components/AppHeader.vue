<script setup>
import { ref, watchEffect } from "vue";

const mobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

// Watch for changes in mobileMenuOpen and update body class accordingly
watchEffect(() => {
  if (mobileMenuOpen.value) {
    document.body.classList.add("mobile-menu-open");
  } else {
    document.body.classList.remove("mobile-menu-open");
  }
});
</script>

<template>
  <header class="py-4 flex">
    <!-- Mobile header -->
    <router-link
      to="/"
      class="flex flex-row justify-between items-center w-full lg:hidden relative"
      @click="toggleMobileMenu"
    >
      <img src="../assets/menu-icon.svg" class="menu" />
      <div class="flex flex-row gap-0.5 items-center">
        <img src="../assets/logo.png" class="h-[25px]" />
        <h4 class="text-shadow text-[#3e8ad2] pt-1.5 text-xl leading-none">
          v1
        </h4>
      </div>
    </router-link>

    <div
      v-if="mobileMenuOpen"
      class="fixed top-0 left-0 w-full h-screen bg-[#112e48] bg-opacity-90 flex flex-col items-center justify-center z-50"
    >
      <button
        class="absolute top-4 left-4 text-white font-holtwood-one-sc text-xl"
        @click="toggleMobileMenu"
      >
        X
      </button>
      <!-- Your mobile menu content goes here -->
      <!-- Close button or links to close the mobile menu -->
    </div>

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
</style>
