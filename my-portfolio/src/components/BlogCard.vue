<template>
    <div class="border border-gray-200 dark:border-gray-700 shadow-xl rounded-xl overflow-hidden bg-white dark:bg-gray-800 transition-all hover:shadow-2xl h-96">
      <!-- Image Section with consistent styling -->
      <div class="h-48 bg-gray-200 dark:bg-gray-700 overflow-hidden">
        <img :src="imgpath || ''" :alt="title || 'Blog image'" class="w-full h-full object-cover" />
      </div>
      
      <!-- Content Section with updated styling to match projects -->
      <div class="p-6 flex flex-col justify-between h-48">
        <div>
          <div class="flex justify-between items-start mb-2">
            <!-- Reduced font size from text-xl to text-lg -->
            <h2 class="font-lemonmilk font-medium text-lg text-LMBlue dark:text-DMyellow">{{ title || 'Blog Title' }}</h2>
            <!-- You can add date here if needed -->
          </div>
          <!-- Reduced font size from text-sm to text-xs -->
          <p class="font-inter text-gray-700 dark:text-lightGray mb-4 text-xs line-clamp-3">
            {{ body || 'Blog content placeholder.' }}
          </p>
        </div>
        
        <!-- Using the same styled icon button as in your About Me section -->
        <div class="flex justify-end">
          <router-link :to="page || '#'" class="p-2 bg-gray-100 dark:bg-gray-700 rounded-full shadow-md hover:shadow-lg transition-all hover:bg-gray-200 dark:hover:bg-gray-600">
            <!-- Reduced icon size from w-6 to w-5 -->
            <img v-if="isDarkMode" src="../assets/icons/darkmore.svg" alt="Read more" class="w-5" />
            <img v-else src="../assets/icons/lightmore.svg" alt="Read more" class="w-5" />
          </router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  // Import isDarkMode from injected values
  import { inject } from "vue";
  const isDarkMode = inject("isDarkMode");
  
  // Define props with default values
  defineProps({
    title: {
      type: String,
      default: ''
    },
    imgpath: {
      type: String,
      default: ''
    },
    body: {
      type: String,
      default: ''
    },
    page: {
      type: String,
      default: '#'
    }
  });
  </script>
  
  <style scoped>
  /* Line clamp for text overflow */
  .line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  </style>