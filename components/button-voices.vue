<template>
  <div class="my-2 group">
    <p class="text-left text-gray-400 text-xs opacity-0 group-hover:transition-opacity group-hover:opacity-100 ease-in-out duration-500">
      <span v-if="tags.length === 0 || !tags[0]" class="mr-1 text-gray-300">
        <button>#notags</button>
      </span>
      <span v-else class="mr-1 hover:text-pink-400 transition ease-in-out duration-500" v-for="tag of tags.sort()">
        <button @click="toggleTab(tag)">#{{ tag }}</button>
      </span>
    </p>

    <button class="w-full mx-auto py-2 text-white bg-pink-500 focus:outline-none transition ease-in-out hover:duration-500 hover:bg-pink-600 rounded" @click="playAudio(Props.voice_url)">
      {{ slug }}
    </button>

  </div>
</template>

<script setup lang="ts">
const activeTab = useState('activeTab');

interface Props {
  slug: string;
  voice_url: string;
  tags: string[];
}

const Props = withDefaults(defineProps<Props>(), {
  slug: "",
  voice_url: "",
  tags: [], 
});

const playAudio = (audioSrc: string) => {
  const newAudio = new Audio(audioSrc);
  newAudio.play().catch(e => console.error('Error playing audio:', e));
};

const toggleTab = (tab: string) => {
  activeTab.value = tab;

  window.scrollTo({
    top: screen.height * 0.8,
    behavior: 'smooth'
  });
};

</script>