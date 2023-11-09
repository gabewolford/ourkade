<template>
  <div
    class="flex flex-col gap-6 bg-[#8E7F47] rounded-[20px] min-h-[350px] py-6 justify-between shadow-custom"
  >
    <div class="flex flex-row gap-4 items-center ml-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="41"
        height="44"
        viewBox="0 0 41 44"
        fill="none"
      >
        <g style="mix-blend-mode: overlay">
          <path
            d="M41 13.7462V19.2458H38.27V16.4916L27.3362 16.4918V13.746L41 13.7462ZM32.8032 41.2458V43.9991H41V38.4995H38.27V41.246L32.8032 41.2458ZM35.533 38.4994H38.2698V32.9998H35.533V38.4994ZM35.533 22.007H38.2698V19.2459H35.533V22.007ZM32.8032 32.9992H35.5332V27.5066H32.8032V32.9992ZM32.8032 24.753H35.5332V22.0066H32.8032V24.753ZM27.336 38.4988V41.2453H32.8027V38.4988H27.336ZM30.0731 27.5066H32.803V24.7533H30.0731V27.5066ZM21.8613 35.7528V38.4992L27.336 38.499V35.7526L21.8613 35.7528ZM24.6061 13.7458H27.3359V8.24512H24.6059L24.6061 13.7458ZM21.8613 24.7536H24.6059L24.6061 16.4919H21.8616L21.8613 24.7536ZM21.8613 8.24566H24.6059V2.75355H21.8613V8.24566ZM19.1239 32.9998V35.7531H21.8616V32.9998H19.1239ZM21.8613 0H19.1236V2.75419H21.8613V0ZM16.3947 24.7541H19.1241V16.4924H16.3947V24.7541ZM19.1241 2.75409H16.3947V8.24619H19.1241V2.75409ZM13.6649 35.7539V38.5003H19.1241V35.7539H13.6649ZM16.3947 8.24619H13.6646V13.7469H16.3946L16.3947 8.24619ZM8.19782 38.4999V41.2463H13.6645V38.4999H8.19782ZM10.927 24.7541H8.19761V27.5075H10.927V24.7541ZM8.19782 27.5075H5.46784V33.0001H8.19782V27.5075ZM5.46784 22.0078V24.7543H8.19782V22.0078H5.46784ZM2.73014 41.2468V38.5004H0.000159226V44H8.1975V41.2467L2.73014 41.2468ZM5.46784 33.0006H2.73014V38.5002H5.46784V33.0006ZM2.73014 19.2468V22.0079L5.46784 22.0078V19.2468H2.73014ZM13.6645 16.4926V13.7468H0V19.2464H2.72998V16.4922L13.6645 16.4926Z"
            fill="white"
          />
        </g>
      </svg>
      <div class="flex flex-col text-start">
        <h5 class="mix-blend-overlay text-lg font-nano-pix">kade runner</h5>
        <h4 class="text-[34px] xl:text-[40px] leading-8 font-nano-pix">
          Stats
        </h4>
      </div>
    </div>

    <div class="flex flex-col space-y-2 mx-auto">
      <div class="flex flex-col items-start px-4">
        <h5
          class="uppercase text-black mix-blend-overlay opacity-50 text-lg font-bold"
        >
          Top Score
        </h5>
        <div
          class="bg-[#776639] flex items-center min-w-fit text-xl px-6 pb-2 pt-3 rounded-md w-[150px] justify-center"
        >
          1890pts
        </div>
      </div>

      <div class="flex flex-col items-start px-4">
        <h5
          class="uppercase text-black mix-blend-overlay opacity-50 text-lg font-bold"
        >
          Avg. Score
        </h5>
        <div
          class="bg-[#776639] flex items-center min-w-fit text-xl px-6 pb-2 pt-3 rounded-md w-[150px] justify-center"
        >
          1840pts
        </div>
      </div>

      <div class="flex flex-col items-start px-4">
        <h5
          class="uppercase text-black mix-blend-overlay opacity-50 text-lg font-bold"
        >
          Total Kade
        </h5>
        <div
          class="bg-[#776639] flex items-center min-w-fit w-[150px] text-xl px-6 pb-2 pt-2 rounded-md justify-center"
        >
          <h6 class="pr-2 pt-1">49</h6>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="20"
            viewBox="0 0 18 20"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.7596 6.45535L16.2903 3.08096L14.5073 0L11.6844 2.15877L11.366 4.61096L8.64923 4.00314L6.14467 4.61096L5.8263 2.15877L3.04581 0L1.26291 3.08096L1.79354 6.45535L0.244141 8.61412L1.17806 11.6951L4.5953 14.3778L6.8027 18.4648L8.88276 19.0726L10.7506 18.4648L12.958 14.3778L16.3752 11.6951L17.3091 8.61412L15.7596 6.45535ZM6.22957 13.2251L5.27445 12.3029L2.76989 10.7728L3.04585 9.53631H4.29815L6.22963 11.9885L6.22957 13.2251ZM8.77658 17.857L7.94879 17.3959L8.20345 16.6624H9.32842L9.62558 17.3959L8.77658 17.857ZM12.024 12.3029L11.1113 13.2251V11.9885L12.9367 9.53631H14.189L14.5073 10.7729L12.024 12.3029Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
