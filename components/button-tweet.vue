<template>
  <button v-on:click="tweetThisPage" type="button" class="text-black hover:bg-[#dddddd]/70 focus:ring-4 focus:outline-none focus:ring-[#dddddd]/50 font-medium rounded-full text-sm px-2 py-2 text-center inline-flex items-center mr-2 mb-2">
    <svg width=16 height=16 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </g>
    </svg>
  </button>
</template>

<script setup lang="ts">
const tweetThisPage = () => {
  const viaUrl = 'https://konramu.com';
  window.open(`https://twitter.com/intent/tweet?text=こんらむ～%0D%0A${viaUrl}`);
}
</script>