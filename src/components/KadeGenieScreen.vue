<script setup>
import { reactive } from "vue";

const data = reactive({
  userInput: ["", "", "", "", "", ""],
  successMessage: "",
  errorMessage: "",
});

const handleInput = (index, event) => {
  const value = event.target.value;

  if (value === "" && index > 0) {
    const prevInput = document.getElementById(`input-${index - 1}`);
    if (prevInput) {
      prevInput.focus();
    }
  } else if (index < 5) {
    const nextInput = document.getElementById(`input-${index + 1}`);
    if (nextInput) {
      nextInput.focus();
    }
  }

  // Update the userInput array
  data.userInput[index] = value;
};

const handleSubmit = () => {
  const userWord = data.userInput.join("");
  // Replace with actual cheat code
  const desiredWord = "ticket";

  if (userWord === desiredWord) {
    // Perform backend action for success
    data.successMessage = "Success! 5 Tix Added";
    data.errorMessage = ""; // Clear error message
  } else {
    // Show error message
    data.errorMessage = "No Dice";
    data.successMessage = ""; // Clear success message
  }

  // Reset the form after every submission
  resetForm();
};

const resetForm = () => {
  // Reset the form state
  data.userInput = ["", "", "", "", "", ""];
};
</script>

<template>
  <div class="flex bg-black w-full h-full items-center rounded-[30px] lg:px-12">
    <div
      class="flex flex-col md:flex-row mx-auto gap-2 md:gap-12 xl:gap-20 md:w-full p-4"
    >
      <div
        class="flex max-w-[225px] md:max-w-[300px] lg:max-w-[400px] xl:w-6/12"
      >
        <img
          src="../assets/logos/kade-genie-cheat-logo.png"
          alt="kade genie"
          class="w-fit h-fit"
        />
      </div>

      <div class="flex flex-col md:w-6/12 justify-around">
        <div class="flex flex-col gap-2 lg:pt-4">
          <h2 class="text-2xl lg:text-5xl font-nano-pix">Tix Enhancer</h2>
          <h2 class="lg:text-2xl">Input Code Below</h2>

          <form class="flex flex-row space-x-3 relative lg:pt-24">
            <!-- Update the v-model to bind to the userInput array -->
            <input
              v-for="(input, index) in data.userInput"
              :key="index"
              :id="'input-' + index"
              v-model="data.userInput[index]"
              type="text"
              class="w-7 h-7 lg:w-10 lg:h-10 border-0 border-b-2 border-white rounded-none px-2 text-white bg-black focus:outline-none text-center lg:text-xl"
              maxlength="1"
              @input="($event) => handleInput(index, $event)"
            />

            <button type="button" class="ml-2" @click="handleSubmit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="25"
                viewBox="0 0 57 38"
                fill="none"
              >
                <path
                  d="M55.7678 20.7678C56.7441 19.7915 56.7441 18.2085 55.7678 17.2322L39.8579 1.32233C38.8816 0.346023 37.2986 0.346023 36.3223 1.32233C35.346 2.29864 35.346 3.88156 36.3223 4.85787L50.4645 19L36.3223 33.1421C35.346 34.1184 35.346 35.7014 36.3223 36.6777C37.2986 37.654 38.8816 37.654 39.8579 36.6777L55.7678 20.7678ZM-2.18557e-07 21.5L54 21.5L54 16.5L2.18557e-07 16.5L-2.18557e-07 21.5Z"
                  fill="white"
                />
              </svg>
            </button>
          </form>

          <!-- Display success or error message -->
          <div v-if="data.successMessage" class="text-successGreen">
            {{ data.successMessage }}
          </div>
          <div v-else-if="data.errorMessage" class="text-errorRed">
            {{ data.errorMessage }}
          </div>
          <div v-else class="h-[24px]"></div>
        </div>
      </div>
    </div>
  </div>
</template>
