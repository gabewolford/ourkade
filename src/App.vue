<script setup>
import AppNav from "@/components/AppNav.vue";
import AppFooter from "@/components/AppFooter.vue";
import AppHeader from "@/components/AppHeader.vue";
</script>

<template>
  <div class="px-4 lg:px-6 2xl:px-12">
    <AppHeader />
    <div
      class="flex flex-row gap-4 lg:gap-6 pb-[200px] 2xl:max-w-[80vw] 2xl:mx-auto"
    >
      <AppNav />
      <div class="flex flex-col w-full mb-4 lg:mb-6">
        <router-view />
      </div>
    </div>
  </div>
  <AppFooter />
</template>
