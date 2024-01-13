<template>
  <div class="flex flex-col text-center w-full mt-12">
    <a :href="videoURL">
      <h2 class="text-xl font-medium text-gray-900">{{ videoTitle }}</h2>
    </a>
  </div>
  <div class="w-full mx-auto mt-5 flex flex-wrap border-t border-gray-200 ">
    <div v-for="(voice, index) in voices" :key="index" class="w-full md:w-1/2 px-2 text-center">
      <ButtonVoices :text="voice.text" :voice="voice.voice" :tags="voice.tags"/>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  videoTitle: string;
  videoURL: string;
  voices: Voice[];
}

const Props = withDefaults(defineProps<Props>(), {
  videoTitle: "",
  videoURL: "",
  voices: [],
});
</script>