<script setup>
import { ref } from "vue";
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore();

// keep up with email
const email = ref("");

// function to call on submit of the form
// triggers sending the reset email to the user
const handlePasswordReset = async () => {
  await auth.sendPasswordResetEmail(email.value);
  alert(`Password reset email sent to: ${email.value}`);
};
</script>
<template>
  <form class="max-w-lg m-auto" @submit.prevent="auth.handlePasswordReset()">
    <h1 class="text-3xl mb-5">Forgot Password?</h1>
    <label>Email <input v-model="email" type="email" /></label>
    <button>Send Reset Email</button>
  </form>
</template>
