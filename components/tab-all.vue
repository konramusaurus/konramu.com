<template>
  <div v-for="(voicemap, index) in voices" :key="index">
    <ContentVoices 
        :videoTitle="voicemap.title"
        :videoURL="voicemap.video_url"
        :voices="voicemap.voices"
    />
  </div>
</template>

<script setup lang="ts">
import type { VoiceMap } from '@/types/index';

interface Props {
  voices: VoiceMap[];
}
const Props = withDefaults(defineProps<Props>(), {
  tag: '',
});

</script>
