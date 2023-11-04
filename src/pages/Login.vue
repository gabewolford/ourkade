<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";
const authStore = useAuthStore();

// Use necessary composables
const router = useRouter();

// keep up with form data
const form = ref({
  email: "",
  password: "",
});

// call the proper login method from the AuthUser composable
// on the submit of the form
const handleLogin = async (provider) => {
  try {
    provider
      ? await authStore.loginWithSocialProvider(provider)
      : await authStore.login(form.value);
    router.push({ name: "Me" });
  } catch (error) {
    alert(error.message);
  }
};
</script>
<template>
  <section
    class="flex flex-col w-full bg-[#603961] rounded-[20px] lg:h-[350px] text-white"
  >
    <h1 class="text-3xl font-holtwood-one-sc">Login</h1>
    <div class="flex flex-row items-center">
      <img src="../assets/account-logo.svg" alt="account icon" />
      <h1 class="text-3xl font-holtwood-one-sc">Account</h1>
    </div>

    <div class="w-full m-auto">
      <form @submit.prevent="handleLogin()">
        <label
          >Email
          <input
            v-model="form.email"
            type="email"
            class="bg-[#C5AAFF] font-alfa-slab-one px-6 py-4 rounded-[20px]"
        /></label>
        <label
          >Password
          <input
            v-model="form.password"
            type="password"
            class="bg-[#C5AAFF] font-alfa-slab-one px-6 py-4 rounded-[20px]"
        /></label>
        <button class="border">Login</button>
        <router-link to="/forgotPassword">Forgot Password?</router-link>
      </form>
      <!-- <div class="mt-5">
        <a @click.prevent="handleLogin('github')">Github</a>
      </div> -->
    </div>
  </section>
</template>
