<script setup>
import useOurkadeApi from "@/composables/UseOurkadeApi";
import { setup, onMounted, ref, onBeforeMount } from "vue";
import { useAuthStore } from "@/stores/auth";

const authStore = useAuthStore();

const { axiosClient, getProfile } = useOurkadeApi();
</script>

<template>
  <div class="w-full">
    <iframe
      src="https://ourkade-preview-kaderunner.netlify.app/"
      style="height: 600px; width: 100%; border: none"
    ></iframe>
  </div>
</template>
