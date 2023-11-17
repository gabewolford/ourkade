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
    class="flex background-image object-contain w-full h-full items-center rounded-[30px]"
  >
    <div
      class="flex w-full h-[338px] md:h-[437px] lg:h-[422px] xl:h-[468px] md:items-center md:justify-center"
    >
      <div
        class="flex flex-col md:flex-row m-4 md:mx-10 md:gap-8 md:h-[272px] lg:h-[332px] w-full"
      >
        <div
          class="flex flex-col w-full h-fit md:min-w-6/12 md:max-w-6/12 justify-start gap-1 lg:gap-2 0 mx-auto"
        >
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
          class="flex flex-col w-full h-fit md:min-w-6/12 md:max-w-6/12 justify-start overflow-y-auto overflow-x-clip mx-auto"
        >
          <slot></slot>
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
</style>
