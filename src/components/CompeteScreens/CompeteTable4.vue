<script setup>
import SmallTicket from "@/components/TableIcons/SmallTicket.vue";
import Players from "@/components/TableIcons/Players.vue";
import Time from "@/components/TableIcons/Time.vue";
import Trophy from "@/components/TableIcons/Trophy.vue";
import Checkmark from "@/components/TableIcons/Checkmark.vue";
import GoldKade from "@/components/TableIcons/GoldKade.vue";
import SilverKade from "@/components/TableIcons/SilverKade.vue";
import BronzeKade from "@/components/TableIcons/BronzeKade.vue";
import WhiteKade from "@/components/TableIcons/WhiteKade.vue";

defineProps({
  color: {
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
  place: {
    type: String,
    required: true,
  },
  goldKade: {
    type: String,
    required: false,
  },
  silverKade: {
    type: String,
    required: false,
  },
  bronzeKade: {
    type: String,
    required: false,
  },
  whiteKade: {
    type: String,
    required: false,
  },
  runOrFin: {
    type: String,
    required: false,
  },
});
</script>

<template>
  <table
    :class="`table-auto h-fit w-full text-xs md:text-sm lg:text-base xl:text-lg`"
  >
    <tr>
      <td :style="{ borderColor: color }">
        <div class="center-this">
          <SmallTicket :color="`${color}`" />
        </div>
      </td>

      <td :style="{ borderColor: color }">
        <div class="center-this mt-1">
          <Checkmark :color="`${color}`" />
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

      <td :style="{ borderColor: color }">
        <div class="center-this mt-1">
          {{ time }}
        </div>
      </td>

      <td :style="{ borderColor: color }">
        <div class="center-this">
          <Trophy :color="`${color}`" />
        </div>
      </td>

      <td :style="{ borderColor: color }">
        <div v-if="place === '1st'">
          <div class="flex flex-row gap-2 center-this">
            <p class="text-[#E3BA24] leading-none mt-1">1st</p>
            <div class="flex flex-row gap-1 center-this">
              <p class="text-[#E3BA24] leading-none mt-1">2</p>
              <GoldKade />
            </div>
          </div>
        </div>

        <!-- <div v-else-if="place === '2nd'">
          <div class="flex flex-row gap-2 center-this">
            <p class="text-[#A5A0A0] leading-none mt-1">2nd</p>
            <div class="flex flex-row gap-1 center-this">
              <p class="text-[#A5A0A0] leading-none mt-1">1</p>
              <SilverKade />
            </div>
          </div>
        </div>

        <div v-else-if="place === '3rd'">
          <div class="flex flex-row gap-2 center-this">
            <p class="text-[#AA7918] leading-none mt-1">3rd</p>
            <div class="flex flex-row gap-1 center-this">
              <p class="text-[#AA7918] leading-none mt-1">.5</p>
              <BronzeKade />
            </div>
          </div>
        </div> -->

        <div v-else>
          <div class="flex flex-row gap-2 center-this">
            <p class="leading-none mt-1">{{ place }}</p>
            <div class="flex flex-row gap-1 center-this">
              <p class="leading-none mt-1">0</p>
              <WhiteKade />
            </div>
          </div>
        </div>

        <!-- <div class="center-this border" v-else>
          <div class="flex flex-row lg:gap-2">
            <p class="text-[#E3BA24] leading-none mt-1">
              {{ place }}
            </p>
          </div>
        </div> -->
      </td>

      <td :style="{ borderColor: color }">
        <div class="center-this mt-1" :style="{ color: color }">
          {{ runOrFin }}
        </div>
      </td>
    </tr>
  </table>
</template>

<style scoped>
td {
  height: 100%;
}

div.center-this {
  display: flex;
  padding: 2px 2px 2px 2px;
  justify-content: center;
  align-items: center;
  line-height: none;
}

td {
  border-width: 1px;
}
</style>
