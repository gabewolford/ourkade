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
    router.push({ name: "Home" });
  } catch (error) {
    alert(error.message);
  }
};
</script>

<template>
  <section
    class="flex flex-col w-full bg-formDarkPurple/60 rounded-[20px] lg:h-[450px] p-4 lg:p-8 text-white gap-6"
  >
    <div
      class="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-12 font-nano-pix"
    >
      <div class="flex flex-row gap-2">
        <img src="../assets/icons/account-icon.svg" alt="account icon" />
        <h1 class="text-3xl">Account</h1>
      </div>

      <div class="flex flex-row text-xl">
        <router-link
          to="/register"
          class="border-2 border-lightPurple px-10 py-1 rounded-l-xl text-[#757575]"
        >
          Sign Up
        </router-link>
        <p class="bg-lightPurple px-10 py-1 rounded-r-xl">Log In</p>
      </div>
    </div>

    <form
      @submit.prevent="handleLogin()"
      class="flex flex-col m-auto w-full lg:w-1/2 gap-4"
    >
      <div class="flex flex-col">
        <label for="email" class="pl-2">Email</label>
        <input
          v-model="form.email"
          type="email"
          id="email"
          class="!bg-lightPurple px-6 py-4 lg:py-5 lg:text-lg rounded-2xl text-[#603961]"
        />
      </div>

      <div class="flex flex-col">
        <label for="password" class="pl-2">Password</label>
        <input
          v-model="form.password"
          type="password"
          id="password"
          class="!bg-lightPurple px-6 py-4 lg:py-5 lg:text-lg rounded-2xl text-[#603961]"
        />
      </div>

      <div class="flex flex-row items-center justify-between mt-2">
        <button
          class="rainbow hover:shadow-customWhite transition duration-300 font-nano-pix text-black w-fit px-8 py-2 text-xl rounded-xl"
        >
          Log In
        </button>
        <router-link
          to="/forgotPassword"
          class="text-xs lg:text-sm hover:underline underline-offset-6"
          >Forgot Password?</router-link
        >
      </div>
    </form>
  </section>
</template>
