<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
    <!-- Subtle background pattern -->
    <div class="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-3 pointer-events-none"></div>
    
    <Header />
    
    <!-- Main content container with consistent styling from homepage -->
    <div class="max-w-[1200px] px-8 sm:px-28 mx-auto w-full grid min-h-screen place-items-start relative z-10">
      <div class="grid grid-cols-1 gap-6 w-full mt-14 sm:mt-20">
        
        <!-- Navigation -->
        <div class="flex justify-between items-center w-full mb-8">
          <router-link to="/" class="text-LMBlue dark:text-DMyellow hover:underline flex items-center">
            <span class="mr-2">←</span> Back to home
          </router-link>
        </div>
        
        <!-- Under Construction Content -->
        <div class="w-full flex flex-col items-center justify-center py-12 sm:py-20">
          <!-- Construction icon -->
          <div class="mb-8 text-LMBlue dark:text-DMyellow">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24 sm:h-32 sm:w-32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          </div>
          
          <!-- Title -->
          <h1 class="font-lemonmilk font-bold text-3xl sm:text-4xl mb-6 text-LMBlue dark:text-DMyellow text-center">
            Page Under Construction
          </h1>
          
          <!-- Message -->
          <div class="max-w-2xl text-center mb-8">
            <p class="font-inter text-gray-700 dark:text-lightGray text-lg mb-4">
              I'm currently working on creating this page. Please check back soon!
            </p>
            <p class="font-inter text-gray-600 dark:text-gray-400">
              In the meantime, feel free to explore my other projects and blog posts.
            </p>
          </div>
          
          <!-- Animated progress bar -->
          <div class="w-full max-w-md h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mt-4 mb-8">
            <div class="h-full bg-gradient-to-r from-LMBlue to-purple-500 dark:from-DMyellow dark:to-amber-500 rounded-full animate-progress"></div>
          </div>
          
          <!-- Back button -->
          <router-link to="/projects" 
            class="px-6 py-3 bg-LMBlue dark:bg-DMyellow text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 mt-6">
            View Other Projects
          </router-link>
        </div>
      </div>
    </div>
    
    <!-- Footer added for consistency -->
    <Footer class="mt-16 relative z-10" />
  </div>
</template>

<script setup>
import { inject } from "vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
const isDarkMode = inject("isDarkMode");
</script>

<style>
/* Background pattern */
.bg-grid-pattern {
  background-image: 
    linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
  background-size: 20px 20px;
}

/* Progress bar animation */
@keyframes progress {
  0% { width: 15%; }
  50% { width: 65%; }
  75% { width: 75%; }
  90% { width: 85%; }
  100% { width: 15%; }
}

.animate-progress {
  animation: progress 8s ease-in-out infinite;
}
</style>