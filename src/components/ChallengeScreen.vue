<script setup>
import { ref, computed } from "vue";
import Challenge1 from "@/components/ChallengeScreens/Challenge1.vue";
import Challenge2 from "@/components/ChallengeScreens/Challenge2.vue";
import Challenge3 from "@/components/ChallengeScreens/Challenge3.vue";
import Challenge4 from "@/components/ChallengeScreens/Challenge4.vue";
import Challenge5 from "@/components/ChallengeScreens/Challenge5.vue";
import Challenge6 from "@/components/ChallengeScreens/Challenge6.vue";
import Challenge7 from "@/components/ChallengeScreens/Challenge7.vue";
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
    case 6:
      return Challenge6;
    case 7:
      return Challenge7;
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
    secondaryText="Avoid obstacles and keep running!"
    mainText="Challenge up to 3 friends to win tix."
  >
    <component :is="getActiveScreenComponent" @switch-screen="switchToScreen" />
  </ScreenLayout>
</template>
