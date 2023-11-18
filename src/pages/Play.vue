<script setup>
import { onMounted, onBeforeUnmount } from "vue";
import useOurkadeApi from "@/composables/UseOurkadeApi";
import { useAuthStore } from "@/stores/auth";

const authStore = useAuthStore();

const { axiosClient, getProfile } = useOurkadeApi();

const disableScrolling = () => {
  document.body.style.overflow = "hidden";
};

const enableScrolling = () => {
  document.body.style.overflow = "auto";
};

onMounted(disableScrolling);

onBeforeUnmount(enableScrolling);
</script>

<template>
  <div class="h-screen w-full absolute top-0 left-0 z-50">
    <iframe src="https://kaderunner.ourkade.io/" class="h-full w-full"></iframe>
  </div>
</template>
