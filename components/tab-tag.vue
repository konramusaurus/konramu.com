<template>
  <div class="mx-auto mt-5 flex flex-wrap">
    <div v-for="(voice, index) in taggedVoices()" :key="index" class="w-full md:w-1/2 px-2 text-center">
      <ButtonVoices :text="voice.text" :voice="voice.voice" :tags="voice.tags" />
    </div>
  </div>
</template>

<script setup lang="ts">
// import { voices } from '@/voices/index';

interface Props {
  tag: string;
}
const Props = withDefaults(defineProps<Props>(), {
  tag: '',
});

// const taggedVoices = () => {
//   return voices.flatMap(v => v.voices).filter(v => v.tags.includes(Props.tag));
// }
</script>
