<script setup lang="ts">
import { AnimationMixer, Clock } from 'three';
// defineProps<{ msg: string }>()


</script>

<template>

  <div id="home"
    class="w-screen min-h-[600px] overflow-none  flex flex-col-reverse md:grid md:grid-cols-2 bg-ll-200 shadow ">
    <div class="z-1 h-full flex flex-col justify-center  md:pl-10 p-5">
      <h1 class="text-4xl md:text-8xl font-bold text-ll-primary ">PollyToon</h1>
      <p class="text-sm md:text-normal text-gray-400 mt-4 font-light">
        Welcome to Pollytoon, we are a company that provide various collections of 3D models that you can use on your
        design, animation or game project. Each month we launch new collections, pick a plan to start get access to all
        dataset.
      </p>
      <div class="mt-10 flex">
        <button
          class="bg-ll-primary px-5 py-2 rounded-bl-lg rounded-tr-lg mt-2 text-white active:scale-95 transform transition-transform">Sign
          up for free</button>
      </div>
    </div>
    <div class=" z-0  w-full md:relative h-full  flex justify-center  items-end md:items-center">

      <img src="../../assets/images/naruto.png" alt="pollytoon 3D model of naruto"
        class="h-4/5 pt-10 animate-bubble animate-duration-[10.3s] animate-loop">
      <!-- <Renderer class="hidden" ref="renderer" :alpha="true" :antialias="true" :resize="true" shadow
        :orbit-ctrl="{ enableDamping: true, dampingFactor: 0.05 }" pointer>
        <Camera :position="{ z: 10 }" />
        <Scene>
          <HemisphereLight />
          <PointLight intensity="0.1" :position="{ y: 50, z: 50 }" />
          <PointLight intensity="0.5" color="#DF4F60" :position="{ y: 150, z: -300 }" />
          <PointLight intensity="0.5" :position="{ y: -150, x: 20, z: -300 }" />


          <PointLight intensity="0.1" color="#8669FD" :position="{ x: 100 }" />
          <PointLight intensity="0.1" color="#8669FD" :position="{ x: -100 }" />
          <DirectionalLight :position="{ x: 0, y: 200, z: 100 }" cast-shadow
            :shadow-camera="{ top: 180, bottom: -120, left: -120, right: 120 }" />

          <GltfModel src="./3dmodels/pollytoon_naruto.glb" :position="{ y: -1 }" @load="onLoad" />

        </Scene>

      </Renderer> -->
    </div>
  </div>

</template>

<script lang="ts">



export default {

  methods: {
    onLoad(object: any) {
      //@ts-ignore
      this.mixer = new AnimationMixer(object);
      //@ts-ignore
      console.log(object.animations)

      object.animations.forEach((anim: any) => {
        //@ts-ignore
        const action = this.mixer.clipAction(anim);
        action.play();
      });


      //@ts-ignore
      // const action2 = this.mixer.clipAction(object.animations[1]);
      // action2.play();
      // //@ts-ignore

      // object.traverse(function (child) {
      //   if (child.isMesh) {
      //     child.castShadow = true;
      //     child.receiveShadow = true;
      //   }
      // });
      //@ts-ignore
      this.clock = new Clock();
      // //@ts-ignore
      // this.$refs.renderer.onBeforeRender(this.updateMixer);
    }
  },
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
