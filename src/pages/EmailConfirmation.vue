<template>
  <div
    class="flex flex-col text-center justify-center items-center font-nano-pix my-6 lg:my-24 w-2/3 mx-auto gap-6"
  >
    <img
      src="../assets/email-icon.svg"
      alt="email icon"
      class="w-1/4 lg:w-1/5"
    />
    <h4 class="text-3xl">
      We emailed a link to
      <span class="text-[#46FFBC]">{{ $route.query.email }}</span> in order to
      verify this address.
    </h4>
    <h4 class="text-3xl">Please click on it to complete sign up.</h4>
  </div>
</template>
