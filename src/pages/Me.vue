<script setup>
import useOurkadeApi from "@/composables/UseOurkadeApi";
import { ref, onBeforeMount } from "vue";
import { useAuthStore } from "@/stores/auth";
const authStore = useAuthStore();

const { getProfile } = useOurkadeApi();

const profileLoaded = ref(false);
const profile = ref(null);

onBeforeMount(async () => {
  profile.value = await getProfile();
  profileLoaded.value = true;
});
</script>

<template>
  <div>Profile</div>
  <div v-if="profileLoaded === false">Loading profile...</div>
  <div v-if="profile && profileLoaded">
    <table style="border: 1px solid black">
      <thead>
        <tr style="border: 1px solid black">
          <td style="border: 1px solid black">Field</td>
          <td style="border: 1px solid black">Value</td>
        </tr>
      </thead>
      <tr
        v-for="(field, index) in profile"
        :key="index"
        style="border: 1px solid black"
      >
        <td style="border: 1px solid black">{{ index }}</td>
        <td style="border: 1px solid black">{{ field }}</td>
      </tr>
    </table>
    <div class="bg-red-400 px-4 py-2 w-fit rounded-xl">
      <router-link :to="{ name: 'Logout' }">Logout</router-link>
    </div>
  </div>
</template>
