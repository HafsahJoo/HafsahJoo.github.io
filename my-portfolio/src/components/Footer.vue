<template>
  <footer
    class="border-t-2 border-sand/30 dark:border-gray-600 mt-12 sm:mt-20 flex flex-row items-center justify-center"
  >
    <div
      class="w-full max-w-[1200px] px-8 sm:px-28 flex flex-col sm:flex-row items-center justify-between py-3 sm:py-6 space-y-2 sm:space-y-0"
    >
      <div>
        <span
          class="font-pixel text-text-secondary dark:text-gray-300 text-xs uppercase tracking-wider"
          >© 2025 HJ</span
        >
      </div>
      <div class="flex flex-row items-center space-x-3 sm:space-x-4">
        <router-link to="/aboutme">
          <a
            class="font-pixel text-xs uppercase tracking-wider text-mocha dark:text-DMyellow hover:text-sage dark:hover:text-amber-300 transition-colors duration-300"
            >About</a
          >
        </router-link>
        <span class="text-sand dark:text-gray-600">|</span>
        <router-link to="/blogs">
          <a
            class="font-pixel text-xs uppercase tracking-wider text-mocha dark:text-DMyellow hover:text-sage dark:hover:text-amber-300 transition-colors duration-300"
            >Blogs</a
          >
        </router-link>
      </div>
    </div>
  </footer>
</template>


<script setup>
import AboutmePage from "../views/AboutmePage.vue";
</script>