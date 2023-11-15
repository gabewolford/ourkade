<style scoped>
.background-image {
  background-image: url("../assets/kaderunner-bg.png");
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>

<script setup>
import { ref, computed } from "vue";
import Practice1 from "@/components/PracticeScreens/Practice1.vue";
import ScreenLayout from "@/components/ScreenLayout.vue";
import competeLogo from "@/assets/kaderunner-logo-green.png";

const activeScreen = ref(1);

const getActiveScreenComponent = computed(() => {
  switch (activeScreen.value) {
    case 1:
      return Practice1;
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
    desktopSubtitle="Avoid obstacles and keep running!"
  >
    <component
      :is="getActiveScreenComponent"
      @switch-to-screen="switchToScreen"
    />
  </ScreenLayout>
</template>
