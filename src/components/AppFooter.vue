<template>
  <footer class="absolute bottom-0 h-[100px] w-full lg:h-[200px] bg-[#101212]">
    <div class="pt-4 px-4 lg:py-6 lg:px-6 flex flex-col h-full">
      <div class="flex-1 flex flex-row items-center justify-between w-full">
        <img
          src="../assets/footer-control-pad.svg"
          alt="control pad image"
          class="object-contain max-h-full max-w-full"
        />

        <div class="flex flex-col justify-between h-full">
          <div class="flex flex-col gap-1">
            <h3 class="font-alfa-slab-one text-4xl">Ourkadians Insider Mag</h3>

            <ul class="flex flex-row justify-between text-xl font-nano-pix">
              <li class="underline-on-hover">News</li>
              <span>-</span>
              <li class="underline-on-hover">Tips</li>
              <span>-</span>
              <li class="underline-on-hover">Tactics</li>
              <span>-</span>
              <li class="underline-on-hover">Treats</li>
              <span>-</span>
              <li class="underline-on-hover">Cheats</li>
            </ul>
          </div>

          <div class="flex flex-row gap-4 font-nano-pix">
            <div class="flex flex-row flex-1 relative">
              <div class="flex flex-row flex-1 bg-gradient-to-r">
                <input
                  type="text"
                  placeholder="email address"
                  class="bg-transparent text-gray-500 text-2xl flex-1"
                />
              </div>
            </div>
            <button
              class="rainbow text-black text-lg px-4 py-2 rounded-md backdrop-blur-lg min-w-[120px]"
            >
              Sign Up
            </button>
          </div>
        </div>

        <div
          class="bottom-right w-[200px] h-full flex flex-col justify-center items-center gap-2"
        >
          <div class="flex flex-row w-full justify-end gap-2 pr-4">
            <img
              src="../assets/kade-genie-key-icon.svg"
              alt="Kade Genie"
              class="w-fit h-fit"
            />
            <img src="../assets/get-in-touch-icon.svg" alt="Get In Touch" />
          </div>
          <div class="flex flex-row w-full justify-start gap-2 pl-8">
            <img src="../assets/privacy-policy-icon.svg" alt="Privacy Policy" />
            <img
              src="../assets/terms-of-service-icon.svg"
              alt="Terms Of Service"
            />
          </div>
        </div>
      </div>
    </div>
  </footer>
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

.bg-gradient-to-r::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px; /* Adjust this height as needed */
  background: linear-gradient(
    90deg,
    #7d3a26 1.18%,
    #806b1f 19.48%,
    #1d835f 39.33%,
    #1f3c86 58.37%,
    #3b1885 74.84%,
    #870a82 90.28%
  );
}

.underline-on-hover {
  position: relative;
  overflow: hidden;
}

.underline-on-hover::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px; /* Adjust the thickness of the underline */
  background-color: #fff; /* Adjust the color of the underline */
  transition: width 0.3s ease; /* Adjust the transition duration and easing */
}

.underline-on-hover:hover::after {
  width: 100%;
}

.bottom-right {
  border-radius: 125px 50px 50px 50px;
  background: #131313;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.5) inset;
}
</style>
