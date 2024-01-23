<template>
  <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
    <ButtonKonramu />
  </div>
  <YoutubeEmbed />
  <FanboxEmbed />

  <div id="view-tab" class="w-full">
    <div class="border-b border-gray-200 mb-4">
      <ul class="flex flex-wrap -mb-px">
        <li class="mr-2" v-for="tab of ['all', 'konramu', 'kawaii', 'kawaiso', 'nakigoe']">
          <button @click="toggleTab(tab)" :class="{'selectedTab': activeTab === tab}" class="inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2" type="button" >{{ tab === 'lewd' ? '...' : tab[0].toUpperCase() + tab.slice(1).toLowerCase() }}</button>
        </li>
      </ul>
    </div>
    <div>
      <div v-if="activeTab === 'all'">
        <TabAll :voices="voices" />
      </div>
      <div v-else>
        <TabTag :tag="activeTab" :voices="voices" />
      </div>
    </div>
  </div>
</template>

<style>
.selectedTab {
  color: #ec4899;
  border-color: #ec4899;
}

.selectedTab:hover {
  color: #ec4899;
}
</style>

<script setup lang="ts">
import type { VoiceMap } from '@/types/index';

const url = 'https://raw.githubusercontent.com/konramusaurus/voices/main/index.json';
const { data: voices, pending, error } = useFetch<VoiceMap[]>(url, {
  initialData: [],
  transform: (response) => {
    try {
      const parsed = JSON.parse(response);
      return parsed.sort((a, b) => {
        const formatDate = (dateStr) => {
          return dateStr.replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3');
        };
        return new Date(formatDate(b.publish_date)) - new Date(formatDate(a.publish_date));
      });
    } catch (e) {
      console.error('JSON parsing error:', e);
      return null;
    }
  }
});

const activeTab = useState('activeTab', () => 'all');

const toggleTab = (tab: string) => {
  activeTab.value = tab;

  window.scrollTo({
    top: screen.height * 0.8,
    behavior: 'smooth'
  });
}
</script>