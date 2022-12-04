<script setup lang="ts">

import { ref, } from 'vue';
import logo from '../assets/pollytoon_large.svg';
import { IUser } from '../types';
import { googleOneTap, decodeCredential, googleLogout, } from "vue3-google-login"
import axios from "axios";

const showMenu = ref(false);

</script>
<template >
    <div
        class="z-10 flex items-center justify-between px-5 md:px-10 fixed top-0 left-0 w-full py-2 text-gray-500 bg-ll-200 shadow-lg ">
        <div class="w-1/4 flex items-center">
            <button @click="showMenu = !showMenu"
                class="md:hidden mr-10  p-1 rounded-md bg-ll-100 active:scale-95 transform transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                </svg>

            </button>
            <img ca :src="logo" alt="Pollytoon logo" class="h-8">
        </div>
        <div
            :class="`
            
                        ${showMenu ? 'w-full' : 'w-0 p-0 md:w-full'}
            
            h-screen md:h-auto p-5 md:p-0 top-0 left-0 flex flex-col overflow-x-hidden md:overflow-hidden transition-all md:flex-row items-center justify-between absolute md:relative bg-ll-100 bg-opacity-80 md:bg-transparent`">
            <div class="flex flex-col md:flex-row w-full">
                <a href="#" class="mr-10 mb-4 md:mb-0 md:hidden relative">
                    <img :src="logo" alt="" class="h-10">
                </a>
                <button @click="showMenu = !showMenu"
                    class=" absolute right-0 md:hidden w-10 h-10 bg-ll-200 mx-5 flex items-center justify-center rounded-full text-gray-500 active:scale-95 transform transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>


                </button>
                <a href="#home" class="md:mr-4 lg:mr-10 mb-4 md:mb-0">Home</a>
                <!-- <a href="#pricing" class="md:mr-4 lg:mr-10 mb-4 md:mb-0">Pricing</a> -->
                <a href="#" class="md:mr-4 lg:mr-10 mb-4 md:mb-0">About</a>
                <a href="#" class="md:mr-4 lg:mr-10 mb-4 md:mb-0">Contacts</a>
            </div>
            <div class=" flex md:items-center flex-col md:flex-row w-full  md:justify-end">
                <!-- <div class="bg-ll-200 rounded-md flex items-center shadow-lg md:hidden lg:flex">
                    <input type="text" placeholder="Search..."
                        class="bg-transparent outline-none border-none px-2 active:outline-none w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-5 h-5 mr-2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>

                </div> -->
                <!-- 
                <button
                    class=" hidden md:flex w-10 h-10 bg-ll-200 mx-5 flex items-center justify-center rounded-full text-gray-500 active:scale-95 transform transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path
                            d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                    </svg>

                </button> -->
                <div v-if="loggedUser.email" class="flex items-center mr-2">
                    <div class="w-10 h-10 rounded-full bg-gray-200">
                        <img :src="loggedUser.picture" class="w-full h-full rounded-full object-cover" alt="">
                    </div>
                    <p class="text-sm mx-1">{{ loggedUser.name }}</p>
                </div>
                <GoogleLogin v-if="!loggedUser.email" :callback="onLoginCallback" prompt auto-login class="mb-2" />



                <button v-if="loggedUser.email" @click="() => {
                    googleLogout();
                
                    logout();
                
                }"
                    class="mt-10 md:mt-0 ml-2 mb-2 whitespace-nowrap bg-ll-primary px-5 py-2 text-white rounded-md active:scale-95 transform transition-transform">Logout</button>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
export default {

    data: function () {

        return new class {
            createUserStep: number = 0;
            maxSteps = 3;
            showWelcome: boolean = false;
            loggedUser: IUser = {};
            darkMode: boolean = true;
            animeThemes: Array<Object> = [
                { label: "Manga" },
                { label: "Anime" },
                { label: "Cartoon" },
                { label: "Comic" },
            ];



        }();
    },

    mounted() {
        const ctx = this;

        setTimeout(() => {
            let tmpUser = localStorage.getItem('user');

            if (tmpUser) {
                this.loggedUser = JSON.parse(tmpUser);
                this.$.emit("onLogin", this.loggedUser);
            } else {
                googleOneTap()
                    .then((response) => {
                        ctx.onLoginCallback(response)
                    })
                    .catch((error) => {
                        console.log("Handle the error", error)
                    })
            }





        }, 500);
    },

    methods: {
        onLoginCallback: function (response: any) {

            const userData = decodeCredential(response.credential)
            this.loggedUser = userData;
            this.showWelcome = true;
            this.createUserStep = 0;


            const options = {
                method: 'POST',
                url: 'https://next.luk3d.com/public/api/clients',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                data: this.loggedUser
            };

            axios.request(options).then((response) => {

                localStorage.setItem('user', JSON.stringify(this.loggedUser));

                this.$.emit("onLogin", this.loggedUser);
            }).catch(function (error) {
                console.error(error);
            });




            // //@ts-ignore
            // window.user = userData;


        },

        logout: function () {
            this.loggedUser = {};
            this.createUserStep = 0;
            localStorage.removeItem('user');
        }
    }

}
</script>
<style lang="">
    
</style>