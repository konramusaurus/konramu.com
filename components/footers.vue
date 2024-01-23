<template>
  <footer class="text-gray-600 body-font">
    <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">©{{ year }} <a href="https://twitter.com/konramu_saurus" class="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@konramu_saurus</a></p>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear();
</script>
