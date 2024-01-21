<template>
  <button v-on:click="playAudio('voices/konramu.mp3')" class="flex mx-auto text-white bg-pink-500 border-0 py-2 px-12 focus:outline-none transition ease-in-out hover:duration-500 hover:bg-pink-600 rounded text-lg">こんらむ～</button>
</template>

<script setup lang="ts">
const playAudio = (audioSrc: string) => {
  const newAudio = new Audio(audioSrc);
  newAudio.play().catch(e => console.error('Error playing audio:', e));
};
</script>