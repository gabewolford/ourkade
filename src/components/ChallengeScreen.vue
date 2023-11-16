<script setup>
import { ref, computed } from "vue";
import Challenge1 from "@/components/ChallengeScreens/Challenge1.vue";
import Challenge2 from "@/components/ChallengeScreens/Challenge2.vue";
import Challenge3 from "@/components/ChallengeScreens/Challenge3.vue";
import Challenge4 from "@/components/ChallengeScreens/Challenge4.vue";
import Challenge5 from "@/components/ChallengeScreens/Challenge5.vue";
import ScreenLayout from "@/components/ScreenLayout.vue";
import challengeLogo from "@/assets/kaderunner-logo-blue.png";

const activeScreen = ref(1);

const getActiveScreenComponent = computed(() => {
  switch (activeScreen.value) {
    case 1:
      return Challenge1;
    case 2:
      return Challenge2;
    case 3:
      return Challenge3;
    case 4:
      return Challenge4;
    case 5:
      return Challenge5;
    default:
      return Challenge1;
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
