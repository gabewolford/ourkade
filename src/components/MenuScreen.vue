<script>
export default {
  data() {
    return {
      currentSlide: 1,
      touchStartX: 0,
      touchEndX: 0,
    };
  },
  methods: {
    showSlide(n) {
      this.currentSlide = n;
    },
    nextSlide() {
      if (this.currentSlide < 4) {
        // Check if not on the last slide
        this.showSlide(this.currentSlide + 1);
      }
    },
    prevSlide() {
      if (this.currentSlide > 1) {
        // Check if not on the first slide
        this.showSlide(this.currentSlide - 1);
      }
    },
    handleTouchStart(event) {
      this.touchStartX = event.touches[0].clientX;
    },
    handleTouchMove(event) {
      this.touchEndX = event.touches[0].clientX;
    },
    handleTouchEnd() {
      const diffX = this.touchEndX - this.touchStartX;
      if (diffX > 50) {
        // Swipe right, go to the previous slide
        this.prevSlide();
      } else if (diffX < -50) {
        // Swipe left, go to the next slide
        this.nextSlide();
      }
    },
  },
};
</script>

<template>
  <div
    v-show="currentSlide === 1"
    class="flex flex-col lg:flex-row gradient1 w-full h-full rounded-[30px] carousel-slide shadow-tvShadow relative"
    id="slide1"
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
  >
    <div class="hidden lg:flex flex-col items-center justify-center w-2/12">
      <button
        class="hidden lg:flex justify-center items-center z-[1000]"
        @click="prevSlide"
        :disabled="currentSlide === 1"
      >
        <img
          src="../assets/left-arrow.svg"
          alt=""
          class="mix-blend-overlay hidden"
        />
      </button>
    </div>

    <div
      class="flex flex-col h-full items-center justify-center w-8/12 mx-auto"
    >
      <img
        src="../assets/classic-games-logo.png"
        alt="compete in classic games"
        class="w-full h-auto object-contain md:py-4 lg:py-6 2xl:py-8"
      />
    </div>
    <div
      class="lg:hidden absolute bottom-4 left-1/2 transform -translate-x-1/2 z-[1000]"
    >
      <button
        class="mx-2 h-4 w-4 rounded-full z-[1000]"
        :class="{
          'bg-white': currentSlide === 1,
          'bg-[#FFC147]': currentSlide !== 1,
        }"
        @click="showSlide(1)"
      ></button>
      <button
        class="mx-2 h-4 w-4 rounded-full z-[1000]"
        :class="{
          'bg-white': currentSlide === 2,
          'bg-[#FFC147]': currentSlide !== 2,
        }"
        @click="showSlide(2)"
      ></button>
      <button
        class="mx-2 h-4 w-4 rounded-full z-[1000]"
        :class="{
          'bg-white': currentSlide === 3,
          'bg-[#FFC147]': currentSlide !== 3,
        }"
        @click="showSlide(3)"
      ></button>
      <button
        class="mx-2 h-4 w-4 rounded-full z-[1000]"
        :class="{
          'bg-white': currentSlide === 4,
          'bg-[#FFC147]': currentSlide !== 4,
        }"
        @click="showSlide(4)"
      ></button>
    </div>

    <div class="hidden lg:flex flex-col items-center justify-center w-2/12">
      <button
        class="hidden lg:flex justify-center items-center z-[1000]"
        @click="nextSlide"
      >
        <img src="../assets/right-arrow.svg" alt="" class="" />
      </button>
    </div>
  </div>

  <div
    v-show="currentSlide === 2"
    class="flex flex-row gradient2 w-full h-full rounded-[30px] relative carousel-slide shadow-tvShadow"
    id="slide2"
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
  >
    <div class="hidden lg:flex flex-col items-center justify-center w-2/12">
      <button
        class="hidden lg:flex justify-center items-center z-[1000]"
        @click="prevSlide"
      >
        <img src="../assets/left-arrow.svg" alt="" class="mix-blend-overlay" />
      </button>
    </div>

    <div class="flex flex-col flex-1 items-start justify-center text-center">
      <div
        class="flex flex-col w-full max-w-screen-lg mx-auto text-center text-shadow2"
      >
        <h3
          class="flex-1 text-3xl md:text-4xl lg:text-7xl font-holtwood-one-sc"
        >
          Play&nbsp;for&nbsp;Kade
        </h3>
        <p class="font-rowdies texl-lg md:text-2xl lg:text-4xl lg:py-2">
          Compete in Kade-prize contests.
        </p>
        <p class="font-rowdies texl-lg md:text-2xl lg:text-4xl lg:pb-4">
          Only available during Alpha.
        </p>
        <div class="flex flex-row z-[1000]">
          <router-link
            :to="{ name: 'WhatsKade' }"
            class="hidden lg:flex bg-[#ec4569]/30 hover:bg-[#f67a94]/60 px-8 py-2 lg:py-4 rounded-3xl font-nano-pix text-lg md:text-xl lg:text-2xl w-fit mx-auto transition-all duration-200 z-[1000]"
          >
            What's Kade?
          </router-link>
        </div>
      </div>
    </div>

    <div
      class="lg:hidden absolute bottom-4 left-1/2 transform -translate-x-1/2 z-[1000]"
    >
      <button
        class="mx-2 h-4 w-4 rounded-full z-[1000]"
        :class="{
          'bg-white': currentSlide === 1,
          'bg-[#FFC147]': currentSlide !== 1,
        }"
        @click="showSlide(1)"
      ></button>
      <button
        class="mx-2 h-4 w-4 rounded-full z-[1000]"
        :class="{
          'bg-white': currentSlide === 2,
          'bg-[#FFC147]': currentSlide !== 2,
        }"
        @click="showSlide(2)"
      ></button>
      <button
        class="mx-2 h-4 w-4 rounded-full z-[1000]"
        :class="{
          'bg-white': currentSlide === 3,
          'bg-[#FFC147]': currentSlide !== 3,
        }"
        @click="showSlide(3)"
      ></button>
      <button
        class="mx-2 h-4 w-4 rounded-full z-[1000]"
        :class="{
          'bg-white': currentSlide === 4,
          'bg-[#FFC147]': currentSlide !== 4,
        }"
        @click="showSlide(4)"
      ></button>
    </div>

    <div class="hidden lg:flex flex-col items-center justify-center w-2/12">
      <button
        class="hidden lg:flex justify-center items-center z-[1000]"
        @click="nextSlide"
      >
        <img src="../assets/right-arrow.svg" alt="" class="mix-blend-overlay" />
      </button>
    </div>
  </div>

  <div
    v-show="currentSlide === 3"
    class="flex flex-row gradient3 w-full h-full rounded-[30px] relative carousel-slide shadow-tvShadow"
    id="slide3"
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
  >
    <div class="hidden lg:flex flex-col items-center justify-center w-2/12">
      <button
        class="hidden lg:flex justify-center items-center z-[1000]"
        @click="prevSlide"
      >
        <img
          src="../assets/left-arrow.svg"
          alt="prev"
          class="mix-blend-overlay"
        />
      </button>
    </div>
    <div class="flex flex-col flex-1 items-start justify-center text-left p-4">
      <div class="flex flex-col w-full max-w-screen-lg mx-auto text-left">
        <img
          src="../assets/kaderunner-logo-white.png"
          alt="kade runner logo"
          class="w-3/4"
        />
        <p
          class="texl-3xl md:text-4xl lg:text-[40px] xl:text-5xl py-2 text-shadow"
        >
          endless runner game
        </p>
        <div class="flex flex-row z-[4000] mr-auto">
          <router-link
            :to="{ name: 'Play' }"
            class="z-[4000] flex bg-[#7A98E6]/80 hover:bg-[#7A98E6]/60 text-black px-10 py-2 lg:py-4 rounded-3xl font-nano-pix text-lg md:text-xl lg:text-2xl w-fit mx-auto transition-all duration-200 mr-auto inverse"
          >
            Play
          </router-link>
        </div>
      </div>
    </div>

    <div
      class="lg:hidden absolute bottom-4 left-1/2 transform -translate-x-1/2 z-[1000]"
    >
      <button
        class="mx-2 h-4 w-4 rounded-full z-[1000]"
        :class="{
          'bg-white': currentSlide === 1,
          'bg-[#FFC147]': currentSlide !== 1,
        }"
        @click="showSlide(1)"
      ></button>
      <button
        class="mx-2 h-4 w-4 rounded-full z-[1000]"
        :class="{
          'bg-white': currentSlide === 2,
          'bg-[#FFC147]': currentSlide !== 2,
        }"
        @click="showSlide(2)"
      ></button>
      <button
        class="mx-2 h-4 w-4 rounded-full z-[1000]"
        :class="{
          'bg-white': currentSlide === 3,
          'bg-[#FFC147]': currentSlide !== 3,
        }"
        @click="showSlide(3)"
      ></button>
      <button
        class="mx-2 h-4 w-4 rounded-full z-[1000]"
        :class="{
          'bg-white': currentSlide === 4,
          'bg-[#FFC147]': currentSlide !== 4,
        }"
        @click="showSlide(4)"
      ></button>
    </div>

    <div class="hidden lg:flex flex-col items-center justify-center w-2/12">
      <button
        class="hidden lg:flex justify-center items-center z-[1000]"
        @click="nextSlide"
      >
        <img src="../assets/right-arrow.svg" alt="" class="mix-blend-overlay" />
      </button>
    </div>
  </div>

  <div
    v-show="currentSlide === 4"
    class="flex flex-row gradient4 w-full h-full rounded-[30px] carousel-slide shadow-tvShadow relative p-4 lg:p-0"
    id="slide4"
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
  >
    <div class="hidden lg:flex flex-col items-center justify-center w-2/12">
      <button
        class="hidden lg:flex justify-center items-center z-[1000]"
        @click="prevSlide"
      >
        <img
          src="../assets/left-arrow.svg"
          alt="prev"
          class="mix-blend-overlay"
        />
      </button>
    </div>
    <div class="flex flex-col gap-6 flex-1 items-center justify-center">
      <div class="flex flex-col w-full max-w-screen-lg mx-auto gap-2">
        <h2
          class="uppercase text-lg lg:text-5xl 2xl:text-[74px] font-holtwood-one-sc"
        >
          Learn&nbsp;More&nbsp;About
        </h2>
        <div class="flex flex-col lg:flex-row gap-8 lg:gap-4">
          <img
            src="../assets/large-logo.svg"
            alt="Ourkade"
            class="lg:max-w-[75%] 2xl:max-w[90%]"
          />
          <a
            href="https://ourkade.io"
            target="_blank"
            class="bg-[#3E4181]/80 hover:bg-[#4b4e88] text-[#858CFF] rounded-[20px] font-nano-pix px-8 py-2 2xl:py-3 text-xl lg:text-3xl 2xl:text-6xl min-w-fit max-w-fit h-fit mt-auto text-center ml-auto mr-auto md:ml-auto md:mr-0 z-[4000]"
          >
            Let's go!
          </a>
        </div>
      </div>
    </div>

    <div
      class="lg:hidden absolute bottom-4 left-1/2 transform -translate-x-1/2 z-[1000]"
    >
      <button
        class="mx-2 h-4 w-4 rounded-full z-[1000]"
        :class="{
          'bg-white': currentSlide === 1,
          'bg-[#FFC147]': currentSlide !== 1,
        }"
        @click="showSlide(1)"
      ></button>
      <button
        class="mx-2 h-4 w-4 rounded-full z-[1000]"
        :class="{
          'bg-white': currentSlide === 2,
          'bg-[#FFC147]': currentSlide !== 2,
        }"
        @click="showSlide(2)"
      ></button>
      <button
        class="mx-2 h-4 w-4 rounded-full z-[1000]"
        :class="{
          'bg-white': currentSlide === 3,
          'bg-[#FFC147]': currentSlide !== 3,
        }"
        @click="showSlide(3)"
      ></button>
      <button
        class="mx-2 h-4 w-4 rounded-full z-[1000]"
        :class="{
          'bg-white': currentSlide === 4,
          'bg-[#FFC147]': currentSlide !== 4,
        }"
        @click="showSlide(4)"
      ></button>
    </div>

    <div class="hidden lg:flex flex-col items-center justify-center w-2/12">
      <button
        class="hidden lg:flex justify-center items-center z-[1000]"
        :disabled="currentSlide === 4"
        @click="nextSlide"
      >
        <img
          src="../assets/right-arrow.svg"
          alt=""
          class="mix-blend-overlay hidden"
        />
      </button>
    </div>
  </div>
</template>

<style scoped>
button {
  z-index: 1000;
}

.gradient1 {
  background-image: url("../assets/classic-games-bg-image.jpg");
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  z-index: 20;
}
.gradient2 {
  background-image: url("../assets/whats-kade-bg-image.png");
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  filter: contrast(-80%);
  z-index: 20;
}
.gradient3 {
  background-image: url("../assets/kade-runner-bg.png");
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

  z-index: 20;
}
.gradient4 {
  background: linear-gradient(95deg, #3d4079 6.88%, #181933 98.35%);
  z-index: 20;
}

.stroker {
  -webkit-text-stroke: 1px #506469;
}

.text-shadow {
  text-shadow: 2px 2px 4px #000000;
}
.text-shadow2 {
  text-shadow: 1px 1px 0.5px #5d5d5d7e;
  filter: brightness(150%);
}
</style>
