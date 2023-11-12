<script setup>
defineProps({
  gameTitle: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  mainText: {
    type: String,
    required: true,
  },
  secondaryText: {
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
      class="flex flex-col md:flex-row mx-auto gap-2 md:gap-8 lg:gap-10 xl:gap-20 md:w-full"
    >
      <div class="flex flex-col md:w-6/12 gap-2">
        <h2 class="uppercase text-sm md:text-lg lg:text-xl xl:text-2xl">
          {{ gameTitle }} Game
        </h2>
        <img
          :src="image"
          alt="Kade Runner logo"
          class="h-fit w-[160px] md:w-auto md:h-fit lg:w-auto"
        />
        <h3
          class="hidden md:block text-sm lg:text-base xl:text-xl 2xl:text-2xl"
        >
          {{ secondaryText }}
        </h3>
        <h3 class="text-sm lg:text-base xl:text-xl 2xl:text-2xl md:-mt-2 mt-0">
          {{ mainText }}
        </h3>
      </div>
      <slot></slot>
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
