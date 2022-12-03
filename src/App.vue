<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import PollyViewer from './Features/3dview/PollyViewer.vue'
import Head from './components/Head.vue'
import Plans from './Features/Plans/Plans.vue';
import Collection from './Features/collection/Collection.vue';
</script>

<template>
  <div class="w-full h-full overflow-y-auto overflow-x-hidden flex flex-col bg-gradient-to-br from-ll-100 to-ll-200">

    <Head></Head>
    <PollyViewer />
    <Collection />
    <Plans class="mt-20"></Plans>

  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
