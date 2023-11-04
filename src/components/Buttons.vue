<template>
  <div
    class="grid grid-cols-2 lg:grid-cols-4 justify-between gap-2 lg:gap-6 text-base lg:text-3xl 2xl:text-5xl"
  >
    <router-link :to="{ name: 'Compete' }">
      <button
        class="flex flew-row flex-1 gap-2 items-center rounded-[50px] bg-[#3d4D7C] w-full min-w-fit p-2 lg:p-4 h-fit lg:h-[125px] shadow-custom4 font-nano-pix"
      >
        <img src="../assets/button-icons/compete-icon.svg" alt="compete icon" />
        <h3>Compete</h3>
      </button>
    </router-link>

    <router-link :to="{ name: 'Challenge' }">
      <button
        class="flex flew-row flex-1 gap-2 items-center rounded-[50px] bg-[#386D9D] w-full min-w-fit p-2 lg:p-4 h-fit lg:h-[125px] shadow-custom4 font-nano-pix"
      >
        <img
          src="../assets/button-icons/challenge-icon.svg"
          alt="challenge icon"
        />
        <h3>Challenge</h3>
      </button>
    </router-link>

    <router-link :to="{ name: 'Practice' }">
      <button
        class="flex flew-row flex-1 gap-2 items-center rounded-[50px] bg-[#067A5E] w-full min-w-fit p-2 lg:p-4 h-fit lg:h-[125px] shadow-custom4 font-nano-pix"
      >
        <img
          src="../assets/button-icons/practice-icon.svg"
          alt="practice icon"
        />
        <h3>Practice</h3>
      </button>
    </router-link>

    <router-link :to="{ name: 'Home' }">
      <button
        class="flex flew-row flex-1 gap-2 items-center rounded-[50px] bg-[#783B28] w-full min-w-fit p-2 lg:p-4 h-fit lg:h-[125px] shadow-custom4 font-nano-pix"
      >
        <img src="../assets/button-icons/menu-icon.svg" alt="menu icon" />
        <h3>Menu</h3>
      </button>
    </router-link>
  </div>
</template>
