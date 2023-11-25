<script setup>
import { useAuthStore } from "@/stores/auth";
const authStore = useAuthStore();
const dummyData = [
  {
    date: "10.5.22",
    myScore: 1702,
    result: "1st",
    topScore: 1802,
    players: 12,
  },
  {
    date: "10.5.22",
    myScore: 1702,
    result: "2nd",
    topScore: 1802,
    players: 12,
  },
  {
    date: "10.5.22",
    myScore: 1702,
    result: "3rd",
    topScore: 1802,
    players: 12,
  },
  {
    date: "10.5.22",
    myScore: 1702,
    result: "4th",
    topScore: 1802,
    players: 12,
  },
  {
    date: "10.5.22",
    myScore: 1702,
    result: "5th",
    topScore: 1802,
    players: 12,
  },
  {
    date: "10.5.22",
    myScore: 1702,
    result: "6th",
    topScore: 1802,
    players: 12,
  },
  {
    date: "10.5.22",
    myScore: 1702,
    result: "7th",
    topScore: 1802,
    players: 12,
  },
  {
    date: "10.5.22",
    myScore: 1702,
    result: "8th",
    topScore: 1802,
    players: 12,
  },
  {
    date: "10.5.22",
    myScore: 1702,
    result: "9th",
    topScore: 1802,
    players: 12,
  },
  {
    date: "10.5.22",
    myScore: 1702,
    result: "10th",
    topScore: 1802,
    players: 12,
  },
  {
    date: "10.5.22",
    myScore: 1702,
    result: "11th",
    topScore: 1802,
    players: 12,
  },
  {
    date: "10.5.22",
    myScore: 1702,
    result: "12th",
    topScore: 1802,
    players: 12,
  },
  {
    date: "10.5.22",
    myScore: 1702,
    result: "13th",
    topScore: 1802,
    players: 12,
  },
];
</script>

<template>
  <div
    v-if="authStore.isLoggedIn()"
    class="hidden lg:flex flex-col gap-7 w-full lg:w-2/3 bg-[#0F0F0F]/60 p-4 rounded-[20px]"
  >
    <div class="flex flex-row gap-4 items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="38"
        height="48"
        viewBox="0 0 38 48"
        fill="none"
      >
        <g style="mix-blend-mode: overlay">
          <path
            d="M22.2161 15.3256V4.44938H27.2782V15.3256H29.8092V17.5503H32.059V15.3256H34.59V13.1009H29.8092V2.22469H27.2782V0H22.2161V2.22469H19.9663V13.1009H14.9043V15.3256H17.4353V17.5503H19.6851V15.3256H22.2161Z"
            fill="white"
          />
          <path
            d="M19.6855 17.2979H22.2166V19.5225H19.6855V17.2979Z"
            fill="white"
          />
          <path
            d="M22.2188 19.5283V21.753H27.2808V19.5283H22.2188Z"
            fill="white"
          />
          <path
            d="M14.908 28.4291H17.439V23.9797H14.908V15.3281H12.377V26.2044H14.908V28.4291Z"
            fill="white"
          />
          <path
            d="M17.4355 21.753V23.9777H19.9666V19.5283H17.4355V21.753Z"
            fill="white"
          />
          <path
            d="M34.5935 15.3281V23.9797H32.0625V28.4291H34.5935V26.2044H37.1245V15.3281H34.5935Z"
            fill="white"
          />
          <path
            d="M27.2812 17.2979H29.8123V19.5225H27.2812V17.2979Z"
            fill="white"
          />
          <path
            d="M27.2788 26.1597V45.732H22.2168V23.9795H19.967V39.3051H17.4359V37.0804H9.84287V34.8557H0V37.0804H2.53102V39.3051H7.59307V41.2826H12.3739V43.5073H17.1547V45.732H22.2168V47.9567H29.8098V23.9795H27.2788V26.1597Z"
            fill="white"
          />
          <path
            d="M29.8105 23.9777H32.3416V19.5283H29.8105V23.9777Z"
            fill="white"
          />
        </g>
      </svg>
      <div class="flex flex-col text-start">
        <h5 class="mix-blend-overlay text-lg font-nano-pix">kade runner</h5>
        <h4 class="text-[34px] xl:text-[40px] leading-8 font-nano-pix">
          Game&nbsp;Log
        </h4>
      </div>
      <div class="flex flex-row h-full items-end flex-1 pl-6">
        <button
          class="flex font-nano-pix text-lg xl:text-xl px-6 xl:px-10 py-1 justify-center rounded-l-lg border-t-2 border-l-2 border-b-2 border-r border-[#787777]/70 bg-[#787777]/70 text-white"
        >
          Contests
        </button>
        <button
          class="flex font-nano-pix text-lg xl:text-xl px-6 xl:px-10 py-1 justify-center rounded-r-lg border-t-2 border-l border-b-2 border-r-2 border-[#787777]/70"
        >
          Challenges
        </button>
      </div>
    </div>

    <div>
      <div
        class="table-container h-[355px] lg:h-[364px] xl:h-[401px] overflow-y-auto"
      >
        <table class="w-full">
          <thead class="text-sm xl:text-base">
            <tr>
              <th class="uppercase text-left sticky top-0 w-1/5">Date</th>
              <th class="uppercase text-left sticky top-0 w-1/5">My Score</th>
              <th class="uppercase text-left sticky top-0 w-1/5 lg:pl-4">
                Result
              </th>
              <th class="uppercase text-left sticky top-0 w-1/5">Top Score</th>
              <th class="uppercase text-left sticky top-0 w-1/5">Players</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(data, index) in dummyData"
              :key="index"
              class="text-sm xl:text-base"
            >
              <td class="text-left w-1/5 py-3">{{ data.date }}</td>
              <td class="text-left w-1/5 py-3">
                {{ `${data.myScore}pts` }}
              </td>
              <td class="text-left w-1/5 py-3 lg:pl-4">
                <span
                  :class="{
                    'text-[#E3BA24]': index === 0,
                    'text-[#C0BCBC]': index === 1,
                    'text-[#B98A2C]': index === 2,
                  }"
                >
                  {{ data.result }}</span
                >
              </td>
              <td class="text-left w-1/5 py-3">
                {{ `${data.topScore}pts` }}
              </td>
              <td class="text-left w-1/5 py-3">
                {{ `${data.players} players` }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped>
.table-container::-webkit-scrollbar {
  width: 10px;
}

.table-container::-webkit-scrollbar-track {
  background-color: none;
  mix-blend-mode: overlay;
}

.table-container::-webkit-scrollbar-thumb {
  background-color: #caa8a8;
  border-radius: 6px;
  mix-blend-mode: overlay;
}

.table-container::-webkit-scrollbar-thumb:hover {
  background-color: #d8b8b8;
  mix-blend-mode: overlay;
}
</style>
