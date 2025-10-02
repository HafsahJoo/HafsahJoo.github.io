<template>
<header class="border-b-2 border-sand/30 dark:border-gray-600 flex flex-row items-center justify-center">
    <div class="w-full max-w-[1200px] px-8 sm:px-28 flex flex-row items-center justify-between py-4">
        <div>
            <router-link to="/">
                <h1 class="font-pixel text-mocha dark:text-DMyellow font-normal text-lg uppercase tracking-wider hover:text-sage dark:hover:text-amber-300 transition-colors duration-300">HJ</h1>
            </router-link>
        </div>
        <div>
            <button class="p-2 rounded-lg bg-sand/20 dark:bg-gray-800 border border-sand/40 dark:border-gray-600 hover:bg-sand/30 dark:hover:bg-gray-700 transition-all duration-300" @click="toggleDarkMode">
                <img v-if="isDarkMode" src="../assets/icons/lightmode.svg" class="w-5 h-5" alt="Light Mode" />
                <img v-else src="../assets/icons/darkmode.svg" class="w-5 h-5" alt="Dark Mode" />
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

