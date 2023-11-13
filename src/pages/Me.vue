<script setup>
import useOurkadeApi from "@/composables/UseOurkadeApi";
import { setup, onMounted, ref, onBeforeMount } from "vue";
import { useAuthStore } from "@/stores/auth";
const authStore = useAuthStore();

const { axiosClient, getProfile } = useOurkadeApi();

const profile = ref(null);

onBeforeMount(async () => {
  profile.value = await getProfile();
});
</script>

<template>
  <div class="flex flex-col w-full mb-4 lg:mb-6">
    <div v-if="profile" class="font-retro-gaming">
      <div v-if="authStore.isLoggedIn()" class="flex flex-col gap-5">
        <div class="flex flex-row gap-2">
          <p class="bg-purple-400 px-4 py-2 w-fit rounded-xl">Username</p>
          <button class="bg-gray-800/70 px-4 py-2 w-fit rounded-xl">
            Edit
          </button>
        </div>
        <div class="bg-red-400 px-4 py-2 w-fit rounded-xl">
          <router-link :to="{ name: 'Logout' }">Logout</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
