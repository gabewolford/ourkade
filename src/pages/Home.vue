<script setup>
import WebTV from "@/components/WebTV.vue";
import HighScores from "@/components/HighScores.vue";
import GameLog from "@/components/GameLog.vue";
</script>

<template>
  <div class="flex flex-col gap-4 lg:gap-6">
    <WebTV />
    <div class="flex flex-col lg:flex-row gap-4 lg:gap-6">
      <HighScores />
      <GameLog />
    </div>
  </div>
</template>
