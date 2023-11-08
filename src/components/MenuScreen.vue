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
  <div
    v-show="currentSlide === 1"
    class="flex flex-row gradient1 w-full h-full rounded-[30px] carousel-slide tv-shadow"
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
      class="w-8/12 h-auto object-contain md:py-4 lg:py-6 2xl:py-8"
    />
    <button @click="nextSlide" class="flex justify-center items-center w-2/12">
      <img src="../assets/right-arrow.svg" alt="" class="mix-blend-overlay" />
    </button>
  </div>

  <div
    v-show="currentSlide === 2"
    class="flex flex-row gradient2 w-full h-full rounded-[30px] relative carousel-slide tv-shadow"
    id="slide2"
  >
    <div class="absolute top-8 right-11 lg:top-24 lg:right-32">
      <img src="../assets/kade-watermark.svg" alt="kade watermark" />
    </div>
    <button @click="prevSlide" class="flex justify-center items-center w-2/12">
      <img src="../assets/left-arrow.svg" alt="" class="mix-blend-overlay" />
    </button>
    <div
      class="flex flex-col gap-6 flex-1 items-start justify-center text-left"
    >
      <div
        class="flex flex-col w-full max-w-screen-lg mx-auto gap-2 text-center"
      >
        <h3
          class="flex-1 text-lg md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-holtwood-one-sc"
        >
          Collect&nbsp;Up&nbsp;to&nbsp;10x&nbsp;Kade
        </h3>
        <h2
          class="uppercase text-2xl md:text-4xl lg:text-4xl xl:text-5xl font-holtwood-one-sc"
        >
          Per&nbsp;Day&nbsp;For&nbsp;Free
        </h2>
        <div>
          <p
            class="mix-blend-overlay font-rowdies md:mb-4 md:text-xl lg:text-2xl"
          >
            Win it in alpha-exclusive Kade contests and get rewarded with it
            whenever you compete in Tix-entry games.
          </p>
        </div>
        <router-link
          :to="{ name: 'WhatsKade' }"
          class="bg-[#8cb2f4] px-8 py-4 rounded-full font-nano-pix text-lg md:text-xl lg:text-2xl w-fit mx-auto"
        >
          What's Kade?
        </router-link>
      </div>
    </div>
    <button @click="nextSlide" class="flex justify-center items-center w-2/12">
      <img src="../assets/right-arrow.svg" alt="" class="mix-blend-overlay" />
    </button>
  </div>

  <div
    v-show="currentSlide === 3"
    class="flex flex-row gradient3 w-full h-full rounded-[30px] carousel-slide tv-shadow"
    id="slide3"
  >
    <button @click="prevSlide" class="flex justify-center items-center w-2/12">
      <img src="../assets/left-arrow.svg" alt="" class="mix-blend-overlay" />
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
          <button
            class="bg-[#D751FF] text-[#FF9FFF] rounded-[20px] font-nano-pix px-8 py-2 2xl:py-3 text-xl lg:text-4xl 2xl:text-6xl min-w-fit max-w-fit h-fit mt-auto text-center ml-auto mr-auto md:ml-auto md:mr-0"
          >
            Let's go!
          </button>
        </div>
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

.tv-shadow {
  box-shadow: 0px 0px 50px 25px #656565 inset;
}
</style>
