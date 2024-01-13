<template>
  <div v-for="(voicemap, index) in voices" :key="index">
    <ContentVoices 
        :videoTitle="voicemap.title"
        :videoURL="voicemap.url"
        :voices="voicemap.voices"
    />
  </div>
</template>

<script setup lang="ts">
import { voices } from '@/voices/index';
</script>
