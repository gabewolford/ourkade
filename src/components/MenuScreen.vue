<script>
export default {
  data() {
    return {
      currentSlide: 1,
    };
  },
  methods: {
    showSlide(n) {
      this.currentSlide = n;
    },
    nextSlide() {
      this.showSlide(this.currentSlide + 1);
    },
    prevSlide() {
      this.showSlide(this.currentSlide - 1);
    },
  },
};
</script>

<template>
  <div class="flex w-full h-[313px] lg:h-[517px]">
    <div
      v-show="currentSlide === 1"
      class="flex flex-row gradient1 w-full h-full rounded-t-[40px] lg:rounded-t-[30px] carousel-slide"
      id="slide1"
    >
      <button
        class="flex justify-center items-center w-2/12"
        :disabled="currentSlide === 1"
      >
        <img
          src="../assets/left-arrow.svg"
          alt=""
          class="mix-blend-overlay hidden"
        />
      </button>
      <img
        src="../assets/classic-games-logo.png"
        alt="compete in classic games"
        class="w-8/12 h-auto object-contain"
      />
      <button
        @click="nextSlide"
        class="flex justify-center items-center w-2/12"
      >
        <img src="../assets/right-arrow.svg" alt="" class="mix-blend-overlay" />
      </button>
    </div>

    <div
      v-show="currentSlide === 2"
      class="flex flex-row gradient2 w-full h-full rounded-t-[40px] lg:rounded-t-[30px] relative carousel-slide"
      id="slide2"
    >
      <div class="absolute translate-y-1/2 flex right-32">
        <img src="../assets/kade-watermark.svg" alt="kade watermark" />
      </div>
      <button
        @click="prevSlide"
        class="flex justify-center items-center w-2/12"
      >
        <img src="../assets/left-arrow.svg" alt="" class="mix-blend-overlay" />
      </button>
      <div class="flex flex-col gap-6 flex-1 items-center justify-center">
        <div
          class="flex flex-col w-full max-w-screen-lg mx-auto gap-2 text-center"
        >
          <h3 class="flex-1 lg:text-4xl 2xl:text-[56px] font-holtwood-one-sc">
            Collect&nbsp;Up&nbsp;to&nbsp;10x&nbsp;Kade
          </h3>
          <h2
            class="uppercase lg:text-5xl 2xl:text-[74px] font-holtwood-one-sc"
          >
            Per&nbsp;Day&nbsp;For&nbsp;Free
          </h2>
          <router-link :to="{ name: 'WhatsKade' }">
            <button class="bg-blend-overlay border px-10 py-4 rounded-full">
              What's Kade?
            </button>
          </router-link>
        </div>
      </div>
      <button
        @click="nextSlide"
        class="flex justify-center items-center w-2/12"
      >
        <img src="../assets/right-arrow.svg" alt="" class="mix-blend-overlay" />
      </button>
    </div>

    <div
      v-show="currentSlide === 3"
      class="flex flex-row gradient3 w-full h-full rounded-t-[40px] lg:rounded-t-[30px] carousel-slide"
      id="slide3"
    >
      <button
        @click="prevSlide"
        class="flex justify-center items-center w-2/12"
      >
        <img src="../assets/left-arrow.svg" alt="" class="mix-blend-overlay" />
      </button>
      <div class="flex flex-col gap-6 flex-1 items-center justify-center">
        <div
          class="flex flex-col w-full max-w-screen-lg mx-auto gap-2 text-center"
        >
          <h2
            class="uppercase lg:text-5xl 2xl:text-[74px] font-holtwood-one-sc"
          >
            Learn&nbsp;More&nbsp;About
          </h2>
          <h2 class="lg:text-6xl 2xl:text-[86px] font-holtwood-one-sc">
            Ourkade
          </h2>
          <button class="bg-blend-overlay border px-10 py-4 rounded-full">
            Lets Go
          </button>
        </div>
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
