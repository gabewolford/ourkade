<script setup>
defineProps({
  color: String,
});
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="13"
    height="10"
    viewBox="0 0 13 10"
    fill="none"
  >
    <path
      d="M3.79905 1.625H2.67969V3.87504H3.79905V1.625Z"
      :fill="`${color}`"
    />
    <path
      d="M3.80078 3.875H4.92014V5.00002H3.80078V3.875Z"
      :fill="`${color}`"
    />
    <path d="M4.91797 5H6.03733V6.12502H4.91797V5Z" :fill="`${color}`" />
    <path
      d="M10.5139 1.625H9.39453V3.87504H10.5139V1.625Z"
      :fill="`${color}`"
    />
    <path d="M8.27734 3.875H9.3967V5.00002H8.27734V3.875Z" :fill="`${color}`" />
    <path d="M7.15625 5H8.27561V6.12502H7.15625V5Z" :fill="`${color}`" />
    <path
      d="M6.0395 7.25002H4.92014V8.37504H3.80078V9.50007H9.39758V8.37504H8.27822V7.25002H7.15886V6.125H6.0395V7.25002Z"
      :fill="`${color}`"
    />
    <path d="M10.5156 3.875H11.635V5.00002H10.5156V3.875Z" :fill="`${color}`" />
    <path
      d="M11.6367 1.625V3.87504H12.7561V1.625H11.6367Z"
      :fill="`${color}`"
    />
    <path d="M10.5156 0.5H11.635V1.62502H10.5156V0.5Z" :fill="`${color}`" />
    <path d="M1.5625 0.5H2.68186V1.62502H1.5625V0.5Z" :fill="`${color}`" />
    <path
      d="M1.56077 1.625H0.441406V3.87504H1.56077V1.625Z"
      :fill="`${color}`"
    />
    <path d="M1.5625 3.875H2.68186V5.00002H1.5625V3.875Z" :fill="`${color}`" />
    <path
      d="M6.0395 1.62502H9.39758V0.5H3.80078V1.62502H6.0395Z"
      :fill="`${color}`"
    />
  </svg>
</template>
