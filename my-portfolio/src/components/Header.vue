<template>
<header class="border-b-2 border-x-0 border-gray-300  dark:bg-black flex flex-row items-center justify-center">
    <div class=" w-full max-w-[1200px] flex flex-row items-center justify-between p-2">
        <div class="mx-8">
            <button @click="navigateToHome">
                <h1 class="font-lemonmilk text-lightGray font-light">Hafsah</h1>
            </button>
        </div>
        <div class="mx-8">
            <button class="border-gray-300 rounded border-2 p-1 dark:bg-gray-600" @click="toggleDarkMode">
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

// Function to navigate to the home page
const navigateToHome = () => {
    window.location.href = '/';
};
</script>

