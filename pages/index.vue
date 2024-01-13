<template>
  <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
    <ButtonKonramu />
  </div>
  <YoutubeEmbed />
  <FanboxEmbed />

  <div id="view-tab" class="w-full">
    <div class="border-b border-gray-200 mb-4">
      <ul class="flex flex-wrap -mb-px">
        <li class="mr-2" v-for="tab of ['all', 'konramu', 'kawaii', 'kawaiso', 'nakigoe', 'zettaiousei', 'lewd']">
          <button @click="toggleTab(tab)" :class="{'selectedTab': activeTab === tab}" class="inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2" type="button" >{{ tab === 'lewd' ? '...' : tab[0].toUpperCase() + tab.slice(1).toLowerCase() }}</button>
        </li>
      </ul>
    </div>
    <div>
      <div v-if="activeTab === 'all'">
        <TabAll />
      </div>
      <div v-else>
        <TabTag :tag="activeTab" />
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
const activeTab = useState('activeTab', () => 'all');

const toggleTab = (tab: string) => {
  activeTab.value = tab;

  window.scrollTo({
    top: screen.height * 0.8,
    behavior: 'smooth'
  });
}
</script>