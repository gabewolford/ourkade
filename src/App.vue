<script setup>
import AppNav from "@/components/AppNav.vue";
import AppFooter from "@/components/AppFooter.vue";
import AppHeader from "@/components/AppHeader.vue";
</script>

<template>
  <AppHeader />
  <div class="flex flex-row pb-[100px] lg:pb-[200px]">
    <AppNav />
    <div class="flex flex-col w-full lg:mr-6">
      <router-view />
    </div>
  </div>
  <AppFooter />
</template>
