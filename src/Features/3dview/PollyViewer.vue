<script setup lang="ts">

// defineProps<{ msg: string }>()


</script>

<template>

  <div
    class="w-screen h-screen overflow-hidden  flex flex-col-reverse md:grid md:grid-cols-2 bg-gradient-to-br from-ll-100 to-ll-200">
    <div class="z-1 h-full flex flex-col justify-center  md:pl-10 p-5">
      <h1 class="text-4xl md:text-8xl font-bold text-gray-200">PollyToon</h1>
      <p class="text-sm md:text-normal text-gray-200 mt-4 font-light">
        Welcome to Pollytoon, we are a company that provide various collections of 3D models that you can use on your
        design, animation or game project. Each month we launch new collections, pick a plan to start get access to all
        dataset.
      </p>
      <div class="mt-10">
        <button
          class="bg-ll-primary px-5 py-2 rounded-bl-lg rounded-tr-lg mt-2 text-white active:scale-95 transform transition-transform">Pick
          a
          Plan</button>
      </div>
    </div>
    <div class="opacity-60 z-0  w-full md:relative h-full pt-10 md:pt-0">
      <Renderer ref="renderer" :alpha="true" :antialias="true" :resize="true"
        :orbit-ctrl="{ enableDamping: true, dampingFactor: 0.05 }" pointer>
        <Camera :position="{ z: 5 }" />
        <Scene>
          <PointLight :position="{ y: 50, z: 50 }" />

          <GltfModel src="./3dmodels/theguy.gltf" :position="{ y: -1.5 }" />


        </Scene>
      </Renderer>
    </div>
  </div>

</template>

<script lang="ts">



export default {
  mounted() {
    // const renderer: any = this.$refs.renderer;

    // const box = (this.$refs.gltfModel as any).mesh;
    // renderer.onBeforeRender(() => {
    //   box.rotation.x += 0.01;
    // });

  },
};
</script>

<style scoped>

</style>
