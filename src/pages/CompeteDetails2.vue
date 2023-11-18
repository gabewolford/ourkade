<script setup>
import { useAuthStore } from "@/stores/auth";
const authStore = useAuthStore();
import PrimaryLayout from "@/components/PrimaryLayout";
import ScreenLayout from "@/components/ScreenLayout";
import competeLogo from "@/assets/kaderunner-logo-purple.png";
import CompeteTable1 from "@/components/CompeteTables/CompeteTable1.vue";
</script>

<template>
  <PrimaryLayout>
    <ScreenLayout
      gameTitle="Endless Runner"
      :image="competeLogo"
      desktopSubtitle="Avoid obstacles and keep running!"
    >
      <router-link
        :to="{ name: 'Compete1' }"
        class="flex flex-row items-center gap-1 my-1.5 md:mt-0"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="11"
          height="11"
          viewBox="0 0 11 11"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.14286 9.42859H1.57143V7.85717H3.14286V9.42859ZM6.28571 11H4.71429V9.42859H6.28571V11ZM7.85714 11H6.28571V9.42859H7.85714V11ZM9.42857 9.42859H7.85714V7.85717H9.42857V9.42859ZM11 7.85717H9.42857V6.28575H11V7.85717ZM4.71429 11H3.14276L3.14286 9.42859H4.71429V11ZM11 6.28575H9.42857V4.71425H11V6.28575ZM11 4.71425H9.42857V3.14283H11V4.71425ZM9.42857 3.14283H7.85714V1.57142H9.42857V3.14283ZM7.85714 1.57142H6.28571V0H7.85714V1.57142ZM6.28571 1.57142H4.71429V0H6.28571V1.57142ZM4.71429 1.57142H3.14286V0H4.71429V1.57142ZM3.14286 3.14283H1.57143V1.57142H3.14286V3.14283ZM1.57143 4.71425H0V3.14283H1.57143V4.71425ZM3.14286 4.71425H1.57143V3.14283H3.14286V4.71425ZM1.57143 3.14283H0V1.57142H1.57143V3.14283ZM4.71429 4.71425H3.14286V3.14283H4.71429V4.71425ZM1.57143 1.57142H0V0H1.57143V1.57142Z"
            fill="white"
          />
        </svg>
        <h3 class="uppercase text-sm lg:text-lg pt-1 md:pt-0">
          Selected Contest
        </h3>
      </router-link>

      <div class="container w-full flex flex-col gap-4 mb-4 overflow-y-auto">
        <CompeteTable1
          :color="authStore.isLoggedIn() ? '#C5AAFF' : '#8578A0'"
          :color2="authStore.isLoggedIn() ? '#8578A0' : '#79718A'"
          tix="2"
          players="31"
          time="10:02"
          ribbons="23021"
          topButtonText=""
          bottomButtonText="rerun!"
          :competitionId="1"
        />
      </div>

      <div class="w-full flex flex-row gap-10">
        <div class="flex flex-col gap-2">
          <h3 class="uppercase text-sm lg:text-lg">Standings</h3>
          <ul class="">
            <li>
              <span class="text-[#E3BA24] text-sm lg:text-lg">1st:&nbsp;</span
              >25002pts
            </li>
            <li>
              <span class="text-[#A5A0A0] text-sm lg:text-lg">2nd:&nbsp;</span
              >24992pts
            </li>
            <li>
              <span class="text-[#AA7918] text-sm lg:text-lg">3rd:&nbsp;</span
              >24221pts
            </li>
          </ul>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="uppercase text-sm lg:text-lg">Your&nbsp;Best</h3>
          <ul>
            <li><span class="lg:text-lg">5th: </span>23021pts</li>
          </ul>
        </div>
      </div>
    </ScreenLayout>
  </PrimaryLayout>
</template>

<style scoped>
.rainbow-gradient {
  background: linear-gradient(
    90deg,
    #ff7246 -0.08%,
    #ffd646 13.9%,
    #46ffbc 30.03%,
    #467aff 48.23%,
    #9e71ff 67.99%,
    #fc54ff 83.6%
  );
}

.container::-webkit-scrollbar {
  width: 5px;
}

.container::-webkit-scrollbar-track {
  background-color: #1e2844;
  border-radius: 5px;
}

.container::-webkit-scrollbar-thumb {
  background-color: #414890;
  border-radius: 5px;
}

.container::-webkit-scrollbar-thumb:hover {
  background-color: #5058b0;
}
</style>
