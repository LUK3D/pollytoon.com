<script setup lang="ts">

import logo from '../assets/pollytoon_large.svg';

</script>
<template >
    <div class="flex items-center justify-between px-10 fixed top-0 left-0 w-full py-2 text-white">
        <div class="">
            <img ca :src="logo" alt="Pollytoon logo" class="h-8">
        </div>
        <div class="">
            <a href="#" class="mr-10">Home</a>
            <a href="#" class="mr-10">Shop</a>
            <a href="#" class="mr-10">Pricing</a>
            <a href="#" class="mr-10">About</a>
            <a href="#" class="mr-10">Contacts</a>
        </div>
        <div class=" flex items-center">
            <div class="bg-ll-200 rounded-md flex items-center">
                <input type="text" placeholder="Search..."
                    class="bg-transparent outline-none border-none px-2 active:outline-none ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-5 h-5 mr-2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>

            </div>

            <button
                class="w-10 h-10 bg-ll-200 mx-5 flex items-center justify-center rounded-full text-gray-500 active:scale-95 transform transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                    <path
                        d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                </svg>

            </button>

            <button
                class="bg-ll-primary px-5 py-2 text-white rounded-md active:scale-95 transform transition-transform">Pick
                a Plan</button>
        </div>
    </div>
</template>
<script lang="ts">
export default {

}
</script>
<style lang="">
    
</style>