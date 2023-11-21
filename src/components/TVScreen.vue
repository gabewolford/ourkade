<script setup></script>

<template>
  <div class="flex w-full lg:min-h-[350px]">
    <div
      class="flex items-start justify-around border-t-[10px] lg:border-t-[20px] border-x-[10px] lg:border-x-[20px] border-b-[2px] border-[#222f37] bg-[#222f37] w-full h-[400px] md:h-[500px] lg:h-[525px] xl:h-[570px] rounded-t-[20px] rounded-b-[20px] relative shadow-custom"
    >
      <div class="flex w-full h-[338px] md:h-[439px] lg:h-[424px] xl:h-[468px]">
        <slot></slot>
      </div>
      <div
        class="absolute bottom-0 bg-[#222f37] h-[50px] lg:h-[80px] w-full flex flex-row items-center lg:items-end lg:pb-3 justify-between rounded-b-2xl lg:rounded-b-none"
      >
        <div class="flex flex-row gap-2 lg:gap-4">
          <img src="../assets/red-light.svg" alt="red light" />
          <router-link
            :to="{ name: 'Home' }"
            class="text-[#939393] bg-[#151E23] px-4 lg:px-10 py-1.5 rounded-full lg:text-lg font-nano-pix"
            :class="{
              'button-shadow': $route.name !== 'KadeGenie',
            }"
          >
            Power
          </router-link>
          <router-link
            :to="{ name: 'KadeGenie' }"
            class="text-[#939393] bg-[#151E23] px-4 lg:px-10 py-1.5 rounded-full lg:text-lg font-nano-pix"
            :class="{
              'button-shadow': $route.name === 'KadeGenie',
            }"
          >
            Reset
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.button-shadow {
  box-shadow: 0px 0px 10px 1px #000 inset;
}
</style>
