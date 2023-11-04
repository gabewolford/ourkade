<script setup>
import TVScreen from "@/components/TVScreen";
import HighScores from "@/components/HighScores";
import GameLog from "@/components/GameLog";
import Buttons from "@/components/Buttons";
</script>

<template>
  <div class="flex flex-col w-full">
    <div class="flex flex-col gap-4 lg:gap-6">
      <TVScreen>
        <slot></slot>
      </TVScreen>
      <Buttons />
      <div class="flex flex-col lg:flex-row gap-4 lg:gap-6">
        <HighScores />
        <GameLog />
      </div>
    </div>
  </div>
</template>
