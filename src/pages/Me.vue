<script setup>
import useOurkadeApi from "@/composables/UseOurkadeApi";
import { setup, onMounted, ref, onBeforeMount } from "vue";
import { useAuthStore } from "@/stores/auth";
const authStore = useAuthStore();

const { axiosClient, getProfile } = useOurkadeApi();

const profile = ref(null);

onBeforeMount(async () => {
  profile.value = await getProfile();
  console.log(profile.value);
});
</script>

<template>
  <div v-if="profile" class="font-retro-gaming">
    <table style="border: 1px solid black">
      <thead>
        <tr style="border: 1px solid black">
          <td style="border: 1px solid black">Field</td>
          <td style="border: 1px solid black">Value</td>
        </tr>
      </thead>
      <tr
        v-for="(field, index) in authStore.user"
        :key="index"
        style="border: 1px solid black"
      >
        <td style="border: 1px solid black">{{ index }}</td>
        <td style="border: 1px solid black">{{ field }}</td>
      </tr>
    </table>
  </div>
</template>
