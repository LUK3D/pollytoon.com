<script lang="ts" setup>
import { defineProps, PropType } from 'vue'
import { IUser } from '../../types';

const props = defineProps({
    user: {
        type: Object,
        required: true
    }
})
</script>
<template >
    <div
        class="w-full p-2 md:p-5 mt-20  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-2 md:gap-4 lg:gap-8">
        <div v-for="(item, index) in [1, 2, 3, 4]" :key="index"
            class="col-span-1  bg-ll-100 rounded-md flex flex-col rounded-xl overflow-hidden relative border-2">
            <div class="w-full h-80 grid grid-cols-2 grid-rows-2 gap-1 ">
                <img class=" col-span-1 rows h-full w-full object-cover    "
                    src="../../assets/images/collection01/naruto_02.png" alt="">
                <img class=" col-span-1 rows h-full w-full object-cover    "
                    src="../../assets/images/collection01/naruto_03.png" alt="">
                <img class=" col-span-1 rows h-full w-full object-cover    "
                    src="../../assets/images/collection01/naruto_04.png" alt="">
                <img class=" col-span-1 rows h-full w-full object-cover    "
                    src="../../assets/images/collection01/naruto_05.png" alt="">
            </div>

            <p class="absolute top-2 right-2 bg-ll-primary text-white px-2 rounded-md ">3D included</p>

            <div class="w-full p-2 text-sm flex flex-col bg-ll-200">
                <ul class="flex flex-col text-gray-400 w-full">
                    <li class="mb-2 flex">
                        <p>Collection:</p>
                        <p class="ml-3">Naruto</p>
                    </li>
                    <li class="mb-2 flex">
                        <p>Original Size:</p>
                        <p class="ml-3">2084 x 2084</p>
                    </li>
                    <li class="mb-2 flex">
                        <p>File Types:</p>
                        <p class="ml-3">png, .obj, .blend</p>
                    </li>
                    <li class="mb-2 flex">
                        <p>File Size:</p>
                        <p class="ml-3">24.6MB</p>
                    </li>
                    <li class="mb-2 flex text-xs border-t pt-2">
                        <p>6 different expressions 1 full size image and 1 3D file</p>

                    </li>
                </ul>
            </div>
            <p v-show="!props.user?.email" class="w-full text-ll-primary text-center py-3  bg-ll-200">Login To download
                for
                free
            </p>
            <a href="https://zona.luk3d.com/cdn/pollytoon/pollytoon.com.collection.naruto.zip" target="_blank" download
                v-show="props.user?.email"
                class="w-full  bg-ll-primary text-white py-2 text-center flex items-center justify-center">
                <p>Download</p>
            </a>
        </div>

    </div>
</template>
<script lang="ts">
export default {

}
</script>
