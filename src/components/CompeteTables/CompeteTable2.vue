<script setup>
import { useAuthStore } from "@/stores/auth";
const authStore = useAuthStore();
import SmallTicket from "@/components/TableIcons/SmallTicket.vue";
import Players from "@/components/TableIcons/Players.vue";
import Time from "@/components/TableIcons/Time.vue";
import Trophy from "@/components/TableIcons/Trophy.vue";
import Ribbon from "@/components/TableIcons/Ribbon.vue";
import GoldKade from "@/components/TableIcons/GoldKade.vue";
import SilverKade from "@/components/TableIcons/SilverKade.vue";
import BronzeKade from "@/components/TableIcons/BronzeKade.vue";
import WhiteKade from "@/components/TableIcons/WhiteKade.vue";

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
  rank: {
    type: String,
    required: true,
  },
  competitionId: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <table
    class="table-auto pr-2 h-fit w-[245px] lg:w[400px] text-sm lg:text-base"
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
              name: 'PastCompetitionDetails4',
              params: { competitionId: competitionId },
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
          <div v-if="rank === '1'" class="flex flex-row gap-6">
            <div class="center-this">
              <p class="text-[#E3BA24] leading-none mt-1">1st</p>
            </div>

            <div class="flex flex-row">
              <div class="center-this">
                <p class="text-[#E3BA24] leading-none mt-1">2</p>
              </div>

              <div class="center-this">
                <GoldKade />
              </div>
            </div>
          </div>

          <div v-else-if="rank === '2'" class="flex flex-row gap-6">
            <div class="center-this">
              <p class="text-[#A5A0A0] leading-none mt-1">2nd</p>
            </div>

            <div class="flex flex-row">
              <div class="center-this">
                <p class="text-[#A5A0A0] leading-none mt-1">1</p>
              </div>

              <div class="center-this">
                <SilverKade />
              </div>
            </div>
          </div>

          <div v-else-if="rank === '3'" class="flex flex-row gap-3.5">
            <div class="center-this">
              <p class="text-[#AA7918] leading-none mt-1">3rd</p>
            </div>

            <div class="flex flex-row">
              <div class="center-this">
                <p class="text-[#AA7918] leading-none mt-1">.5</p>
              </div>

              <div class="center-this">
                <BronzeKade />
              </div>
            </div>
          </div>

          <div v-else class="flex flex-row gap-4">
            <div class="center-this">
              <p class="leading-none mt-1">{{ rank }}</p>
            </div>

            <div class="flex flex-row">
              <div class="center-this">
                <p class="leading-none mt-1">0</p>
              </div>

              <div class="center-this">
                <WhiteKade />
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
