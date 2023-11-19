<script setup>
import useOurkadeApi from "@/composables/UseOurkadeApi";
import { ref, onBeforeMount } from "vue";
import { useAuthStore } from "@/stores/auth";
const authStore = useAuthStore();

const { getGlobalHighScores } = useOurkadeApi();

const highScoreData = ref([]);

onBeforeMount(async () => {
  try {
    highScoreData.value = await getGlobalHighScores(1);
    console.log(highScoreData.value);
  } catch (error) {
    console.error("Error fetching high scores:", error);
  }
});
</script>

<template>
  <div
    class="flex flex-col gap-6 w-full lg:w-1/3 bg-[#0F0F0F]/60 px-4 py-4 lg:py-6 rounded-[20px] max-h-fit"
  >
    <div class="flex flex-row gap-4 items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="33"
        height="45"
        viewBox="0 0 33 45"
        fill="none"
      >
        <g style="mix-blend-mode: overlay">
          <path
            d="M21.3524 5.9873V8.98092H24.9112V17.9618H21.3524V20.9554H10.676V17.9618H7.11719V8.98092H10.676V5.9873H21.3524Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.11762 0V2.99362H3.55881V5.98724H0V20.9553H3.55881V23.949H7.11762V26.9426H3.55881V44.9043H7.11762V41.9107H10.6764V38.9171H13.3455V35.9234H16.9044V38.9171H20.4632V41.9107H24.022V44.9043H27.5808V26.9426H24.9117V23.949H28.4705V20.9553H32.0293V5.98724H28.4705V2.99362H24.9117V0H7.11762ZM20.4632 38.9171V35.9234H16.9044V32.9298H13.3455V35.9234H9.78673V38.9171H7.11762V26.9426H24.022V38.9171H20.4632ZM21.3529 2.99362H10.6764V5.98724H7.11762V8.98086H3.55881V17.9617H7.11762V20.9553H10.6764V23.949H21.3529V20.9553H24.9117V17.9617H28.4705V8.98086H24.9117V5.98724H21.3529V2.99362Z"
            fill="white"
          />
        </g>
      </svg>
      <div class="flex flex-col text-start">
        <h5 class="mix-blend-overlay text-lg font-nano-pix">kade runner</h5>
        <h4 class="text-[34px] xl:text-[40px] leading-8 font-nano-pix">
          High&nbsp;Score
        </h4>
      </div>
    </div>

    <div>
      <div v-if="highScoreData">
        <table class="w-full h-fit">
          <tbody>
            <tr
              v-for="(data, index) in highScoreData"
              :key="data.id"
              class="py-2 text-sm xl:text-base"
            >
              <td>{{ `#${index + 1}` }}</td>
              <td class="pl-2 py-2">{{ data.playerId }}</td>
              <td class="text-right py-2">{{ `${data.score}pts` }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-else>
        <p>Loading...</p>
        <!-- You can replace this with a loader or any other loading indicator -->
      </div>
    </div>
  </div>
</template>
