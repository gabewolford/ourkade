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
      if (this.currentSlide < 3) {
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
        class="flex justify-center items-center"
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
      class="lg:hidden absolute bottom-4 left-1/2 transform -translate-x-1/2"
    >
      <button
        class="mx-2 h-4 w-4 rounded-full"
        :class="{
          'bg-white': currentSlide === 1,
          'bg-[#FFC147]': currentSlide !== 1,
        }"
        @click="showSlide(1)"
      ></button>
      <button
        class="mx-2 h-4 w-4 rounded-full"
        :class="{
          'bg-white': currentSlide === 2,
          'bg-[#FFC147]': currentSlide !== 2,
        }"
        @click="showSlide(2)"
      ></button>
      <button
        class="mx-2 h-4 w-4 rounded-full"
        :class="{
          'bg-white': currentSlide === 3,
          'bg-[#FFC147]': currentSlide !== 3,
        }"
        @click="showSlide(3)"
      ></button>
    </div>

    <div class="hidden lg:flex flex-col items-center justify-center w-2/12">
      <button class="flex justify-center items-center" @click="nextSlide">
        <img src="../assets/right-arrow.svg" alt="" class="mix-blend-overlay" />
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
    <div class="absolute top-8 right-11 lg:top-24 lg:right-32">
      <img src="../assets/kade-watermark.svg" alt="kade watermark" />
    </div>
    <div class="hidden lg:flex flex-col items-center justify-center w-2/12">
      <button class="flex justify-center items-center" @click="prevSlide">
        <img src="../assets/left-arrow.svg" alt="" class="mix-blend-overlay" />
      </button>
    </div>
    <div
      class="flex flex-col gap-6 flex-1 items-start justify-center text-left"
    >
      <div
        class="flex flex-col w-full max-w-screen-lg mx-auto text-center lg:text-left"
      >
        <h3
          class="flex-1 text-4xl lg:text-5xl xl:text-6xl font-holtwood-one-sc"
        >
          Win&nbsp;Kade
        </h3>
        <h2
          class="uppercase text-xl mb-4 md:text-4xl lg:text-3xl xl:text-4xl font-holtwood-one-sc"
        >
          while&nbsp;in&nbsp;alpha
        </h2>
        <div>
          <p class="mix-blend-overlay font-rowdies text-sm md:text-xl">
            Alpha-exclusive contests are the best way to collect Kade. After
            Alpha, you cannot win Kade.
          </p>
          <br />
          <p class="mix-blend-overlay font-rowdies mb-4 text-sm md:text-xl">
            Instead, you get rewarded with it for every minute spent competing
            in Tix-entry games.
          </p>
        </div>
        <div class="flex flex-row lg:ml-auto z-20">
          <router-link
            :to="{ name: 'WhatsKade' }"
            class="hidden lg:flex bg-[#8cb2f4] hover:bg-[#6d9cee] px-8 py-2 lg:py-4 rounded-full font-nano-pix text-lg md:text-xl lg:text-2xl w-fit mx-auto"
          >
            What's Kade?
          </router-link>
        </div>
      </div>
    </div>

    <div
      class="lg:hidden absolute bottom-4 left-1/2 transform -translate-x-1/2"
    >
      <button
        class="mx-2 h-4 w-4 rounded-full"
        :class="{
          'bg-white': currentSlide === 1,
          'bg-[#FFC147]': currentSlide !== 1,
        }"
        @click="showSlide(1)"
      ></button>
      <button
        class="mx-2 h-4 w-4 rounded-full"
        :class="{
          'bg-white': currentSlide === 2,
          'bg-[#FFC147]': currentSlide !== 2,
        }"
        @click="showSlide(2)"
      ></button>
      <button
        class="mx-2 h-4 w-4 rounded-full"
        :class="{
          'bg-white': currentSlide === 3,
          'bg-[#FFC147]': currentSlide !== 3,
        }"
        @click="showSlide(3)"
      ></button>
    </div>

    <div class="hidden lg:flex flex-col items-center justify-center w-2/12">
      <button class="flex justify-center items-center" @click="nextSlide">
        <img src="../assets/right-arrow.svg" alt="" class="mix-blend-overlay" />
      </button>
    </div>
  </div>

  <div
    v-show="currentSlide === 3"
    class="flex flex-row gradient3 w-full h-full rounded-[30px] carousel-slide shadow-tvShadow relative"
    id="slide3"
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
  >
    <button @click="prevSlide" class="flex justify-center items-center w-2/12">
      <img
        src="../assets/left-arrow.svg"
        alt=""
        class="mix-blend-overlay hidden lg:flex"
      />
    </button>
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
            class="bg-[#D751FF] hover:bg-[#b745da] text-[#FF9FFF] rounded-[20px] font-nano-pix px-8 py-2 2xl:py-3 text-xl lg:text-3xl 2xl:text-6xl min-w-fit max-w-fit h-fit mt-auto text-center ml-auto mr-auto md:ml-auto md:mr-0"
          >
            Let's go!
          </a>
        </div>
      </div>
    </div>

    <div
      class="lg:hidden absolute bottom-4 left-1/2 transform -translate-x-1/2"
    >
      <button
        class="mx-2 h-4 w-4 rounded-full"
        :class="{
          'bg-white': currentSlide === 1,
          'bg-[#FFC147]': currentSlide !== 1,
        }"
        @click="showSlide(1)"
      ></button>
      <button
        class="mx-2 h-4 w-4 rounded-full"
        :class="{
          'bg-white': currentSlide === 2,
          'bg-[#FFC147]': currentSlide !== 2,
        }"
        @click="showSlide(2)"
      ></button>
      <button
        class="mx-2 h-4 w-4 rounded-full"
        :class="{
          'bg-white': currentSlide === 3,
          'bg-[#FFC147]': currentSlide !== 3,
        }"
        @click="showSlide(3)"
      ></button>
    </div>

    <button
      @click="nextSlide"
      :disabled="currentSlide === 3"
      class="flex justify-center items-center w-2/12"
    >
      <img
        src="../assets/right-arrow.svg"
        alt=""
        class="mix-blend-overlay hidden"
      />
    </button>
  </div>
</template>

<style scoped>
.gradient1 {
  background: linear-gradient(90deg, #a33d15 2.38%, #9c8533 99.98%);
}
.gradient2 {
  background: linear-gradient(90deg, #9c8533 1.68%, #1f4ec6 99.98%);
}
.gradient3 {
  background: linear-gradient(270deg, #871b89 0.02%, #1f4ec6 100%);
}
</style>
