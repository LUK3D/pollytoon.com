<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import PollyViewer from './Features/3dview/PollyViewer.vue'
import Head from './components/Head.vue'
</script>

<template>
  <div class="w-screen h-screen overscroll-y-auto flex flex-col">

    <Head></Head>
    <PollyViewer msg="Vite + Vue" />
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
