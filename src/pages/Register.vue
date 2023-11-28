<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useAuthStore } from "@/stores/auth";

const authStore = useAuthStore();
const router = useRouter();
const route = useRoute();

let referralCode = "";

if (route.query.referral) {
  referralCode = route.query.referral;
}

const form = ref({
  email: "",
  username: "",
  password: "",
  passwordConfirmation: "",
  referral: referralCode,
});

const errorMessage = ref("");

const handleSubmit = async () => {
  try {
    if (form.value.password !== form.value.passwordConfirmation) {
      errorMessage.value = "Password and Confirm Password do not match.";
      console.log(errorMessage.value);
      return;
    }

    errorMessage.value = "";

    await authStore.register(
      form.value.email,
      form.value.password,
      form.value.passwordConfirmation,
      form.value.username
    );

    router.push({
      name: "EmailConfirmation",
      query: { email: form.value.email },
    });
  } catch (error) {
    errorMessage.value = error.message;
  }
};
</script>

<template>
  <section
    class="flex flex-col w-full bg-[#603961]/60 rounded-[20px] lg:min-h-fit p-4 lg:p-8 text-white gap-6"
  >
    <div
      class="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-12 font-nano-pix"
    >
      <div class="flex flex-row gap-2">
        <img src="../assets/icons/account-icon.svg" alt="account icon" />
        <h1 class="text-3xl">Account</h1>
      </div>

      <div class="flex flex-row text-xl">
        <p
          class="bg-[#bda1f9] px-10 py-1 border-2 border-[#bda1f9] rounded-l-xl"
        >
          Sign Up
        </p>
        <router-link
          to="/login"
          class="px-10 py-1 border-2 border-[#bda1f9] rounded-r-xl text-[#757575]"
        >
          Log In
        </router-link>
      </div>
    </div>

    <form
      @submit.prevent="handleSubmit"
      class="flex flex-col lg:flex-row m-auto w-full lg:justify-between gap-4 lg:gap-16"
    >
      <div class="flex flex-col gap-4 lg:w-6/12">
        <div class="flex flex-col">
          <label for="email" class="pl-2">Email</label>
          <input
            v-model="form.email"
            type="email"
            id="email"
            class="!bg-[#C5AAFF] px-6 py-4 lg:py-5 lg:text-lg rounded-2xl text-[#603961]"
            required
          />
        </div>

        <div class="flex flex-col">
          <label for="email" class="pl-2">Username</label>
          <input
            v-model="form.username"
            type="string"
            id="username"
            class="!bg-[#C5AAFF] px-6 py-4 lg:py-5 lg:text-lg rounded-2xl text-[#603961]"
            required
          />
        </div>

        <div class="flex-col gap-2 hidden lg:flex mt-2">
          <div class="flex flex-row gap-4 items-center">
            <h4>
              I accept the
              <span class="text-[#5FC0C0]">Terms & Conditions</span>
            </h4>
            <div>
              <input type="checkbox" name="checkbox" class="w-4 h-4" required />
            </div>
          </div>
          <h5 class="text-sm">Key things in here include:</h5>
          <ul class="text-sm list-disc pl-4">
            <li>You must be over eighteen years of age</li>
            <li>You will have to KYC to access any Kade you have collected</li>
            <li>
              You understand that Ourkade may adjust any and all aspects of the
              platform as we see fit for the project
            </li>
          </ul>
        </div>
      </div>

      <div class="flex flex-col gap-4 lg:w-6/12">
        <div class="flex flex-col">
          <label for="password" class="pl-2">Password</label>
          <input
            v-model="form.password"
            type="password"
            id="password"
            class="!bg-[#C5AAFF] px-6 py-4 lg:py-5 lg:text-lg rounded-2xl text-[#603961]"
            required
          />
        </div>
        <div class="flex flex-col">
          <label for="password" class="pl-2">Confirm Password</label>
          <input
            v-model="form.passwordConfirmation"
            type="password"
            id="passwordConfirmation"
            class="!bg-[#C5AAFF] px-6 py-4 lg:py-5 lg:text-lg rounded-2xl text-[#603961]"
            required
          />
        </div>

        <div class="flex-col gap-2 flex lg:hidden">
          <div class="flex flex-row gap-4 items-center">
            <h4>
              I accept the
              <span class="text-[#5FC0C0]">Terms & Conditions</span>
            </h4>
            <input type="checkbox" required />
          </div>
          <h5>Key things in here include:</h5>
          <ul class="text-sm list-disc pl-4">
            <li>You must be over eighteen years of age.</li>
            <li>You will have to KYC to access any Kade you have collected.</li>
            <li>
              You understand that me may adjust any and all aspects of Ourkade
              in order to ensure its long term success.
            </li>
          </ul>
        </div>

        <div class="flex flex-row items-center justify-between mt-2">
          <button
            @click="handleSubmit"
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
        <div v-if="errorMessage.value" class="text-red-500 mt-2">
          {{ errorMessage.value }}
        </div>
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
