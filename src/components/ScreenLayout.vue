<script setup>
defineProps({
  gameTitle: {
    type: String,
    required: true,
  },
  desktopSubtitle: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div
    class="flex background-image object-contain w-full h-full items-center rounded-[30px] px-4 md:px-8"
  >
    <div
      class="h-[300px] w-fit md:w-full flex flex-col md:flex-row md:justify-between md:gap-8 mx-auto"
    >
      <div class="flex flex-col md:w-6/12 gap-1 lg:gap-2">
        <h2 class="uppercase text-sm md:text-lg lg:text-xl xl:text-2xl">
          {{ gameTitle }} Game
        </h2>
        <img
          :src="image"
          alt="Kade Runner logo"
          class="h-fit w-[160px] md:w-auto md:h-fit lg:w-auto"
        />
        <h2 class="hidden md:block lg:text-lg xl:text-xl">
          {{ desktopSubtitle }}
        </h2>
      </div>
      <div
        class="flex flex-col md:w-6/12 overflow-y-auto overflow-x-hidden w-full"
      >
        <slot></slot>
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
