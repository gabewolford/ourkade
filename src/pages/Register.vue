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
    class="flex flex-col w-full bg-[#603961] rounded-[20px] lg:h-[350px] text-white"
  >
    <h1 class="text-3xl font-holtwood-one-sc">Register</h1>
    <div class="flex flex-row items-center">
      <img src="../assets/account-logo.svg" alt="account icon" />
      <h1 class="text-3xl font-holtwood-one-sc">Account</h1>
    </div>
    <div class="w-full m-auto">
      <form class="m-auto" @submit.prevent="handleSubmit">
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
        <label
          >Referral Code
          <input
            v-model="form.referral"
            type="text"
            class="bg-[#C5AAFF] font-alfa-slab-one px-6 py-4 rounded-[20px]"
        /></label>
        <button class="border">Register</button>
      </form>
    </div>
  </section>
</template>
