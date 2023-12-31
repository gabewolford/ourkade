<script setup>
import { defineEmits, ref } from "vue";
import { useAuthStore } from "@/stores/auth";
const authStore = useAuthStore();
import SmallTicket from "@/components/TableIcons/SmallTicket.vue";
import Players from "@/components/TableIcons/Players.vue";
import Time from "@/components/TableIcons/Time.vue";
import Trophy from "@/components/TableIcons/Trophy.vue";
import Ribbon from "@/components/TableIcons/Ribbon.vue";

defineProps({
  color: {
    type: String,
    required: true,
  },
  color2: {
    type: String,
    required: true,
  },
  clickable: {
    type: Boolean,
    required: true,
  },
  tix: {
    type: String,
    required: true,
  },
  players: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  topButtonText: {
    type: String,
  },
  bottomButtonText: {
    type: String,
  },
  ribbons: {
    type: String,
    required: true,
  },
  winOrLoss: {
    type: String,
    required: true,
  },
  challengeId: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <table
    :class="`table-auto pr-2 h-fit w-[245px] lg:w[400px] text-sm lg:text-base`"
  >
    <tr>
      <td
        :style="{
          borderColor: color,
        }"
      >
        <div class="center-this">
          <SmallTicket :color="`${color}`" />
        </div>
      </td>

      <td :style="{ borderColor: color }">
        <div class="center-this mt-1">
          {{ tix }}
        </div>
      </td>

      <td :style="{ borderColor: color }">
        <div class="center-this">
          <Players :color="`${color}`" />
        </div>
      </td>

      <td :style="{ borderColor: color }">
        <div class="center-this mt-1">
          {{ players }}
        </div>
      </td>

      <td :style="{ borderColor: color }">
        <div class="center-this">
          <Time :color="`${color}`" />
        </div>
      </td>

      <td
        class="min-w-[55px] max-w-[55px] lg:min-w-[70px] lg:max-w-[70px]"
        :style="{ borderColor: color }"
      >
        <div class="center-this mt-1">
          {{ time }}
        </div>
      </td>

      <td
        v-if="authStore.isLoggedIn() && topButtonText"
        :style="{ backgroundColor: color2, borderColor: color2 }"
        class="text-black min-w-[55px] max-w-[55px] lg:min-w-[70px] lg:max-w-[70px]"
      >
        <div class="center-this mx-2">
          <router-link
            :to="{
              name: 'PastChallengeDetails4',
              params: { challengeId: challengeId },
            }"
          >
            {{ topButtonText }}
          </router-link>
        </div>
      </td>
    </tr>

    <tr>
      <td :style="{ borderColor: color }">
        <div class="center-this">
          <Trophy :color="`${color}`" />
        </div>
      </td>

      <td :style="{ borderColor: color }" colspan="3">
        <div class="flex flex-row px-4 space-x-1 justify-center">
          <div class="flex flex-row px-4 space-x-1 justify-center">
            <div v-if="winOrLoss === 'win'" class="">
              <div class="center-this">
                <p class="text-successGreen leading-none mt-1">W</p>
              </div>
            </div>

            <div v-else-if="winOrLoss === 'loss'" class="">
              <div class="center-this">
                <p class="text-errorRed leading-none mt-1">L</p>
              </div>
            </div>
          </div>
        </div>
      </td>

      <td :style="{ borderColor: color }">
        <div class="center-this">
          <Ribbon :color="`${color}`" />
        </div>
      </td>

      <td
        class="min-w-[55px] max-w-[55px] lg:min-w-[70px] lg:max-w-[70px]"
        :style="{ borderColor: color }"
      >
        <div class="center-this mt-1">
          {{ ribbons }}
        </div>
      </td>

      <td
        v-if="authStore.isLoggedIn() && bottomButtonText"
        :style="{ borderColor: color, backgroundColor: color }"
        class="text-black min-w-[55px] max-w-[55px] lg:min-w-[70px] lg:max-w-[70px]"
      >
        <div class="center-this mx-2">
          <router-link
            :to="{ name: 'Play', query: { challengeId: challengeId } }"
          >
            {{ bottomButtonText }}
          </router-link>
        </div>
      </td>
    </tr>
  </table>
</template>

<style scoped>
div.center-this {
  display: flex;
  padding: 1px 2px;
  justify-content: center;
  align-items: center;
  line-height: none;
}

td {
  height: 100%;
  border-width: 1px;
}
</style>
