<script lang="ts" setup>
</script>
<template >
    <div class="w-full grid md:grid-cols-3 gap-4 md:px-30 mb-20">

        <div
            class="col-span-1 p-10 shadow-2xl rounded-lg p-10 flex flex-col items-center bg-gradient-to-t to-ll-100 from-ll-200 mt-10">
            <p class="text-4xl font-semibold text-white">Free Plan</p>
            <p class="text-4xl text-ll-primary font-semibold mt-5">$0<span class="font-normal text-sm">/Month</span></p>

            <ul class="text-gray-300 mt-10">
                <li class="flex items-center mb-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6 mr-2 text-ll-primary">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p>Personal License</p>
                </li>
                <li class="flex items-center mb-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6 mr-2 text-ll-primary">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p>5 Rendered Images per Collection</p>
                </li>
                <li class="flex items-center mb-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6 mr-2 text-ll-primary">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p>1 Rendered image on non Collection Models</p>
                </li>
            </ul>
            <div class="h-full flex flex-col justify-end">
                <button
                    class="bg-ll-primary px-10 md:px-20 border-2 border-sky-400 bg-opacity-50 py-2 rounded-bl-lg rounded-tr-lg mt-2 text-white active:scale-95 transform transition-transform">Pick
                    this plan</button>
            </div>
        </div>
        <div
            class="col-span-1 p-10 shadow-2xl rounded-lg p-10 flex flex-col items-center bg-ll-200 border-2 border-ll-primary relative">

            <p class="absolute -top-5 bg-ll-200 text-gray-200 py-2 px-4 rounded-lg border-ll-primary border-2 ">Most
                Popular</p>

            <p class="text-4xl font-semibold text-white">Basic Plan</p>
            <p class="text-4xl text-ll-primary font-semibold mt-5">$19.99<span class="font-normal text-sm">/Month</span>
            </p>

            <ul class="text-gray-300 mt-10">
                <li class="flex items-center mb-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6 mr-2 text-ll-primary">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p>Commercial License</p>
                </li>
                <li class="flex items-center mb-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6 mr-2 text-ll-primary">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p>All Rendered Images per Collection</p>
                </li>
                <li class="flex items-center mb-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6 mr-2 text-ll-primary">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p>1 Base 3D Model on each Collection </p>
                </li>
                <li class="flex items-center mb-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6 mr-2 text-ll-primary">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p>Discount on Custom 3D Model</p>
                </li>
                <li class="flex items-center mb-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6 mr-2 text-ll-primary">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p>Access to Premium Assets</p>
                </li>
                <li class="flex items-center mb-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6 mr-2 text-ll-primary">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p>2 Revisions</p>
                </li>
            </ul>
            <div class="h-full flex flex-col justify-end">
                <button
                    class="bg-ll-primary px-10 md:px-20 border-2 border-sky-400 py-2 rounded-bl-lg rounded-tr-lg mt-2 text-white active:scale-95 transform transition-transform">Pick
                    this plan</button>
            </div>
        </div>
        <div
            class="col-span-1 p-10 shadow-2xl rounded-lg p-10 flex flex-col items-center bg-gradient-to-t to-ll-100 from-ll-200 mt-10">
            <p class="text-4xl font-semibold text-white">Premium Plan</p>
            <p class="text-4xl text-ll-primary font-semibold mt-5">$29.99<span class="font-normal text-sm">/Month</span>
            </p>

            <ul class="text-gray-300 mt-10">
                <li class="flex items-center mb-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6 mr-2 text-ll-primary">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p>Commercial License</p>
                </li>
                <li class="flex items-center mb-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6 mr-2 text-ll-primary">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p>All Rendered Images per Collection</p>
                </li>
                <li class="flex items-center mb-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6 mr-2 text-ll-primary">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p>1 Base 3D Model on Collections </p>
                </li>
                <li class="flex items-center mb-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6 mr-2 text-ll-primary">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p>All 3D Models on each Collection</p>
                </li>
                <li class="flex items-center mb-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6 mr-2 text-ll-primary">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p>Access to Premium Assets</p>
                </li>
                <li class="flex items-center mb-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6 mr-2 text-ll-primary">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p>4 Revisions</p>
                </li>
                <li class="flex items-center mb-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6 mr-2 text-ll-primary">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p>Dedicated voice consultations</p>
                </li>
            </ul>
            <div class="h-full flex flex-col justify-end">
                <button
                    class="bg-ll-primary px-10 md:px-20 border-2 border-sky-400 bg-opacity-50 py-2 rounded-bl-lg rounded-tr-lg mt-2 text-white active:scale-95 transform transition-transform">Pick
                    this plan</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
