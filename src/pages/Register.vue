<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useAuthStore } from "@/stores/auth";

const authStore = useAuthStore();

// Use necessary composables
const router = useRouter();
const route = useRoute();

let referralCode = "";

if (route.query.referral) {
  referralCode = route.query.referral;
}

// Form reactive ref to keep up with the form data
const form = ref({
  email: "",
  password: "",
  referral: referralCode,
});

// function to hand the form submit
const handleSubmit = async () => {
  try {
    // use the register method from the AuthUser composable
    await authStore.register(form.value.email, form.value.password);

    // and redirect to a EmailConfirmation page the will instruct
    // the user to confirm they're email address
    router.push({
      name: "EmailConfirmation",
      query: { email: form.value.email },
    });
  } catch (error) {
    alert(error.message);
  }
};
</script>

<template>
  <section
    class="flex flex-col w-full bg-[#603961] rounded-[20px] lg:h-[450px] p-4 lg:p-8 text-white gap-6"
  >
    <div
      class="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-12 font-nano-pix"
    >
      <div class="flex flex-row gap-2">
        <img src="../assets/account-logo.svg" alt="account icon" />
        <h1 class="text-3xl">Account</h1>
      </div>

      <div class="flex flex-row gap-4 text-xl">
        <p class="bg-[#C5AAFF]/70 shadow-custom5 px-10 py-0.5 rounded-full">
          Sign Up
        </p>
        <router-link
          to="/login"
          class="bg-[#C5AAFF]/20 shadow-custom5 px-10 py-0.5 rounded-full"
        >
          Log In
        </router-link>
      </div>
    </div>

    <form
      @submit.prevent="handleSubmit"
      class="flex flex-col m-auto w-full lg:w-1/2 gap-4"
    >
      <div class="flex flex-col">
        <label for="email">Email</label>
        <input
          v-model="form.email"
          type="email"
          id="email"
          class="!bg-[#C5AAFF] px-6 py-4 rounded-2xl text-[#603961]"
        />
      </div>

      <div class="flex flex-col">
        <label for="password">Password</label>
        <input
          v-model="form.password"
          type="password"
          id="password"
          class="!bg-[#C5AAFF] px-6 py-4 rounded-2xl text-[#603961]"
        />
      </div>

      <!-- <div class="flex flex-col">
        <label for="password">Referral Code</label>
        <input
          v-model="form.referral"
          type="text"
          class="!bg-[#C5AAFF] px-6 py-4 rounded-2xl text-[#603961]"
        />
      </div> -->

      <div class="flex flex-row items-center justify-between mt-2">
        <button
          class="rainbow hover:shadow-customWhite transition duration-300 font-nano-pix text-black w-fit px-8 py-2 text-xl rounded-xl"
        >
          Sign Up
        </button>
        <router-link
          to="/login"
          class="text-xs lg:text-sm hover:underline underline-offset-6"
          >Already have an account?</router-link
        >
      </div>
    </form>
  </section>
</template>

<style scoped>
.rainbow {
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
</style>
