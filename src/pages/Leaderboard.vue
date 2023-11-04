<script setup>
import useOurkadeApi from "@/composables/UseOurkadeApi";
import CreateCompetitionDto from "@/dtos/createCompetion.dto";
import { setup, onMounted, ref, onBeforeMount } from "vue";
import { useAuthStore } from "@/stores/auth";

const authStore = useAuthStore();

const { axiosClient, getProfile, getPlayableCompetitions, createCompetition } =
  useOurkadeApi();

const competitionsLoaded = ref(false);
const competitions = ref([]);

const createForm = ref(null);
createForm.value = {
  gameId: 1,
  entryFee: 1,
  prizes: [1, 2, 3],
  startTime: Date.now(),
  endTime: Date.now() + 20 * 60 * 1000,
};

(async () => {
  competitions.value = await getPlayableCompetitions();
  competitionsLoaded.value = true;
})();
</script>

<template>
  <div class="flex flex-col w-full mb-4 lg:mb-6">
    <div class="font-retro-gaming">
      <h1>Active Competitions</h1>
      <div v-if="competitionsLoaded == false">Loading...</div>
      <div v-if="competitions.length == 0">
        No active competitions. Check back later!
      </div>
      <div v-else>
        <table style="border: 1px solid black">
          <thead>
            <tr style="border: 1px solid black">
              <td style="border: 1px solid black">Id</td>
              <td style="border: 1px solid black">Game</td>
              <td style="border: 1px solid black">Entry Fee</td>
              <td style="border: 1px solid black">Prizes</td>
              <td style="border: 1px solid black">Start Time</td>
              <td style="border: 1px solid black">End Time</td>
            </tr>
          </thead>
          <tr
            v-for="(competition, index) in competitions"
            :key="index"
            style="border: 1px solid black"
          >
            <td style="border: 1px solid black">{{ competition.id }}</td>
            <td style="border: 1px solid black">Kade Runner</td>
            <td style="border: 1px solid black">{{ competition.entryFee }}</td>
            <td style="border: 1px solid black">{{ competition.prizes }}</td>
            <td style="border: 1px solid black">{{ competition.startTime }}</td>
            <td style="border: 1px solid black">{{ competition.endTime }}</td>
          </tr>
        </table>
      </div>
      <br />
      <div v-if="authStore.isAdmin()">
        <form @submit.prevent="createCompetition(createForm)">
          <h1>Create Competition</h1>
          <label
            >Entry Fee <input v-model="createForm.entryFee" type="number"
          /></label>
          <label
            >Prizes <input v-model="createForm.prizes" type="text"
          /></label>
          <label
            >Start Time <input v-model="createForm.startTime" type="number"
          /></label>
          <label
            >End Time <input v-model="createForm.endTime" type="number"
          /></label>
          <button>Create</button>
        </form>
      </div>
    </div>
  </div>
</template>
