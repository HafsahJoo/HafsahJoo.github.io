<template>
<header class="border-b-2 border-x-0 border-gray-300  flex flex-row items-center justify-center">
    <div class=" w-full max-w-[1200px] flex flex-row items-center justify-between p-2">
        <div class="mx-8">
            <router-link to="/">
                <h1 class="font-lemonmilk text-lightGray font-light">Hafsah</h1>
            </router-link>
        </div>
        <div class="mx-8">
            <button class=" p-1 " @click="toggleDarkMode">
                <img v-if="isDarkMode" src="../assets/icons/lightmode.svg" class="w-6 h-6" alt="Light Mode" />
                <img v-else src="../assets/icons/darkmode.svg" class="w-6 h-6" alt="Dark Mode" />
            </button>
        </div>
    </div>
</header>

</template>
 
<script setup>
import { inject } from 'vue';

// Inject the dark mode and the toggle function
const isDarkMode = inject('isDarkMode');
const toggleDarkMode = inject('toggleDarkMode');


</script>

