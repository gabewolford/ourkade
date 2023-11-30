<script setup>
import useOurkadeApi from "@/composables/UseOurkadeApi";
import { ref, onBeforeMount } from "vue";
import { useAuthStore } from "@/stores/auth";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const authStore = useAuthStore();

const ourkadeApi = useOurkadeApi();
const profileLoaded = ref(false);
const profile = ref(null);

onBeforeMount(async () => {
  profile.value = await ourkadeApi.getProfile();
  profileLoaded.value = true;
});

const form = ref({
  email: "",
  username: "",
  password: "",
  passwordConfirmation: "",
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
    class="flex flex-col w-full bg-[#603961]/60 rounded-[20px] min-h-fit lg:h-[450px] p-4 lg:p-8 text-white gap-6"
  >
    <div
      class="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-12 font-nano-pix"
    >
      <div class="flex flex-row gap-2">
        <img src="../assets/icons/account-icon.svg" alt="account icon" />
        <h1 class="text-3xl">Account</h1>
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

        <div class="flex flex-row items-center justify-between mt-2">
          <button
            @click="handleSubmit"
            class="rainbow hover:shadow-customWhite transition duration-300 font-nano-pix text-black w-fit px-8 py-2 text-xl rounded-xl"
          >
            Edit
          </button>
        </div>
        <div v-if="errorMessage.value" class="text-errorRed mt-2">
          {{ errorMessage.value }}
        </div>
        <div
          class="bg-errorRed hover:bg-red-400 px-5 py-2 text-xl font-nano-pix w-fit rounded-xl"
        >
          <router-link :to="{ name: 'Logout' }">Logout</router-link>
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
