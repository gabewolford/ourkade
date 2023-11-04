<script setup>
import useOurkadeApi from "@/composables/UseOurkadeApi";
import { setup, onMounted, ref, onBeforeMount } from "vue";
import { useAuthStore } from "@/stores/auth";

const authStore = useAuthStore();

const { axiosClient, getProfile } = useOurkadeApi();
</script>

<template>
  <div class="w-full h-full">
    <iframe
      src="https://ourkade-preview-kaderunner.netlify.app/"
      class="h-[550px] w-full border-none"
    ></iframe>
  </div>
</template>
