<script setup>
import { defineEmits, ref } from "vue";
import { useAuthStore } from "@/stores/auth";
const authStore = useAuthStore();
import SmallTicket from "@/components/TableIcons/SmallTicket.vue";
import LargeTicket from "@/components/TableIcons/LargeTicket.vue";
import Players from "@/components/TableIcons/Players.vue";
import Time from "@/components/TableIcons/Time.vue";
import Trophy from "@/components/TableIcons/Trophy.vue";
import Ribbon from "@/components/TableIcons/Ribbon.vue";
import ShareIcon from "@/components/TableIcons/ShareIcon.vue";

defineProps({
  color: {
    type: String,
    required: true,
  },
  color2: {
    type: String,
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
  ribbons: {
    type: String,
    required: true,
  },
  topButtonText: {
    type: String,
  },
  bottomButtonText: {
    type: String,
  },
  shareable: {
    type: Boolean,
  },
  challengeId: {
    type: Number,
  },
});
</script>

<template>
  <table
    :class="`table-auto h-fit w-[245px] lg:w[400px] text-sm lg:text-base mr-2 md:mr-0`"
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
              name: 'ChallengeDetails2',
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
        <div class="flex flex-row gap-0.5 px-4 space-x-1 justify-center">
          <div class="flex flex-row">
            <div class="center-this">
              <p class="text-[#E3BA24] leading-none mt-1">3</p>
            </div>

            <div class="center-this">
              <LargeTicket />
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
        :style="{ backgroundColor: color2, borderColor: color2 }"
        class="text-black min-w-[55px] max-w-[55px] lg:min-w-[70px] lg:max-w-[70px]"
      >
        <div class="center-this mx-2 cursor-default">
          {{ bottomButtonText }}
        </div>
      </td>

      <td v-if="authStore.isLoggedIn()" class="pl-2 border-none">
        <ShareIcon :color="shareable ? '#608CFF' : 'transparent'" />
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
