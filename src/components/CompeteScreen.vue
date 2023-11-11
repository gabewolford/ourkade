<script setup>
import { ref, computed } from "vue";
import Compete1 from "@/components/CompeteScreens/Compete1.vue";
import Compete2 from "@/components/CompeteScreens/Compete2.vue";
import Compete3 from "@/components/CompeteScreens/Compete3.vue";
import Compete4 from "@/components/CompeteScreens/Compete4.vue";
import Compete5 from "@/components/CompeteScreens/Compete5.vue";
import ScreenLayout from "@/components/ScreenLayout.vue";
import competeLogo from "@/assets/kaderunner-logo-purple.png";

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
    case 5:
      return Compete5;
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
    :image="competeLogo"
    secondaryText="Avoid obstacles and keep running!"
    mainText="Compete in contests for kade."
  >
    <component :is="getActiveScreenComponent" @switch-screen="switchToScreen" />
  </ScreenLayout>
</template>
