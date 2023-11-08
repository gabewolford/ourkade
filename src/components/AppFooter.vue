<template>
  <footer
    class="absolute bottom-0 h-[200px] w-full text-[#B0B0B0] bg-[#101212] py-4 lg:py-6"
  >
    <div class="px-4 lg:px-6 flex flex-col h-full">
      <div
        class="flex-1 flex flex-col md:flex-row items-center justify-between w-full"
      >
        <div
          class="flex flex-col-reverse lg:flex-row items-center justify-between w-full h-full lg:h-fit"
        >
          <div class="flex flex-col gap-1">
            <h3
              class="font-alfa-slab-one text-center lg:text-left xl:text-[30px]"
            >
              Ourkade Inc.
            </h3>

            <ul
              class="flex flex-row flex-wrap space-x-4 justify-center font-nano-pix text-xs lg:text-base"
            >
              <a class="underline-on-hover">Terms of Service</a>
              <a class="underline-on-hover">Privacy Policy</a>
              <a class="underline-on-hover">Get in Touch</a>
            </ul>
          </div>
          <div class="flex flex-col lg:flex-row gap-3 lg:gap-6">
            <div class="flex flex-col gap-1">
              <h3 class="font-alfa-slab-one text-center xl:text-[30px]">
                Ourkadians Insider Mag
              </h3>

              <ul
                class="flex flex-row space-x-2 justify-center font-nano-pix text-xs lg:text-base"
              >
                <li>News</li>
                <span>-</span>
                <li>Tips</li>
                <span>-</span>
                <li>Tactics</li>
                <span>-</span>
                <li>Treats</li>
                <span>-</span>
                <li>Cheats</li>
              </ul>
            </div>

            <div class="flex flex-row gap-4 font-nano-pix items-end">
              <div class="flex flex-row flex-1 relative">
                <div class="flex flex-row flex-1 bg-gradient-to-r">
                  <input
                    type="text"
                    placeholder="email address"
                    class="bg-transparent text-gray-500 flex-1 pb-2"
                  />
                </div>
              </div>
              <button
                class="rainbow text-black lg:text-lg lg:px-4 py-2 lg:py-3 rounded-md backdrop-blur-lg min-w-[120px] xl:min-w-[150px] hover:shadow-customWhite transition duration-300 h-fit"
              >
                Sign Up
              </button>
            </div>
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
</style>
