<script setup>
import AppNav from "@/components/AppNav.vue";
import AppFooter from "@/components/AppFooter.vue";
import AppHeader from "@/components/AppHeader.vue";
</script>

<template>
  <AppHeader />
  <div class="flex flex-row pb-[100px] lg:pb-[200px]">
    <AppNav />
    <div class="flex h-full min-h-[500px] w-full">
      <router-view />
    </div>
  </div>
  <AppFooter />
</template>
