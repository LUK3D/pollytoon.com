<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import PollyViewer from './Features/3dview/PollyViewer.vue'
import Head from './components/Head.vue'
import Plans from './Features/Plans/Plans.vue';
import Collection from './Features/collection/Collection.vue';

import { PropType } from 'vue'
import { IUser } from './types';





</script>

<template>
  <div class="w-full h-full overflow-y-auto overflow-x-hidden flex flex-col bg-gradient-to-br from-ll-100 to-ll-200">

    <Head @on-login="(_user) => {
      user = _user;
    }"></Head>
    <PollyViewer />
    <Collection :user="user" />
    <!-- <Plans class="mt-20"></Plans> -->

  </div>
</template>


<script lang="ts">

export default {
  data() {
    return {
      user: {
        type: Object as PropType<IUser>

      }
    }
  }
}

</script>


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
