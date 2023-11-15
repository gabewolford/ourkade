<script setup>
import { ref, computed } from "vue";
import Compete1 from "@/components/CompeteScreens/Compete1.vue";
import Compete2 from "@/components/CompeteScreens/Compete2.vue";
import Compete3 from "@/components/CompeteScreens/Compete3.vue";
import Compete4 from "@/components/CompeteScreens/Compete4.vue";
import ScreenLayout from "@/components/ScreenLayout.vue";
import challengeLogo from "@/assets/kaderunner-logo-blue.png";

const activeScreen = ref(1);

const getActiveScreenComponent = computed(() => {
  switch (activeScreen.value) {
    case 1:
      return Compete1;
    case 2:
      return Compete2;
    case 3:
      return Compete3;
    case 4:
      return Compete4;
    default:
      return Compete1;
  }
});

const switchToScreen = (screenNumber) => {
  activeScreen.value = screenNumber;
};
</script>

<template>
  <ScreenLayout
    gameTitle="Endless Runner"
    :image="challengeLogo"
    desktopSubtitle="Avoid obstacles and keep running!"
  >
    <component
      :is="getActiveScreenComponent"
      @switch-to-screen="switchToScreen"
    />
  </ScreenLayout>
</template>
