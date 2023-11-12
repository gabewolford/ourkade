<script setup>
import SmallTicket from "@/components/TableIcons/SmallTicket.vue";
import Players from "@/components/TableIcons/Players.vue";
import Time from "@/components/TableIcons/Time.vue";
import Trophy from "@/components/TableIcons/Trophy.vue";
import LargeTicket from "@/components/TableIcons/LargeTicket.vue";
import Checkmark from "@/components/TableIcons/Checkmark.vue";

defineProps({
  color: {
    type: String,
    required: true,
  },
  players: {
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
  winOrLoss: {
    type: String,
    required: true,
  },
  runOrFin: {
    type: String,
    required: true,
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
        <div
          class="center-this mt-1"
          :class="{
            'text-[#46FFBC]': winOrLoss === 'W',
            'text-[#FF7246]': winOrLoss === 'L',
          }"
        >
          {{ winOrLoss }}
        </div>
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
