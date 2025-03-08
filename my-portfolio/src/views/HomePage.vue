<template>
  <div>
    <Header />
    <!-- Using grid layout for consistent spacing and alignment -->
    <div class="max-w-[1200px] px-8 sm:px-28 mx-auto w-full grid min-h-screen place-items-start">
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-3 mt-14 sm:mt-28">
        <!-- Profile section with improved typography and spacing -->
        <div class="col-span-1 sm:col-span-2">
          <h1 class="font-lemonmilk font-bold text-32px sm:text-40px mb-6 text-LMBlue dark:text-DMyellow drop-shadow-md">
            Hafsah joomun
          </h1>
          <p class="font-inter text-lighterGray text-md sm:text-lg leading-relaxed">
            A curious mind from Mauritius, passionate about technology, coding, and mathematics.
            <br>This is my space to share my work and discoveries.
          </p>
          <!-- Enhanced social media links with hover effects -->
          <div class="flex flex-row mt-6">
            <a href="https://www.linkedin.com/in/hafsah-joomun/" class="transform transition-transform hover:scale-110">
              <img v-if="isDarkMode" src="../assets/icons/darklinkedin.svg" alt="linkedin"
                class="w-12 h-12 sm:inline-block mr-6" />
              <img v-else src="../assets/icons/lightlinkedin.svg" alt="linkedin"
                class="w-12 h-12 sm:inline-block mr-6" />
            </a>
            <a href="#" class="transform transition-transform hover:scale-110">
              <img v-if="isDarkMode" src="../assets/icons/darkgithub.svg" alt="github"
                class="w-12 h-12 sm:inline-block mr-6" />
              <img v-else src="../assets/icons/lightgithub.svg" alt="github" 
                class="w-12 h-12 sm:inline-block mr-6" />
            </a>
            <a href="mailto:hafsah260103@gmail.com" class="transform transition-transform hover:scale-110">
              <img v-if="isDarkMode" src="../assets/icons/darkmail.svg" alt="mail" 
                class="w-12 h-12 sm:inline-block" />
              <img v-else src="../assets/icons/lightmail.svg" alt="mail" 
                class="w-12 h-12 sm:inline-block" />
            </a>
          </div>
        </div>
        
        <!-- Simple profile picture with no background styling -->
        <div class="col-span-1 hidden sm:block my-auto">
          <div v-if="isDarkMode" class="transition-transform hover:scale-105">
            <img src="../assets/icons/lightprofile.svg" alt="Dark Mode" class="w-full h-auto" />
          </div>
          <div v-else class="transition-transform hover:scale-105">
            <img src="../assets/icons/darkprofile.svg" alt="Light Mode" class="w-full h-auto" />
          </div>
        </div>

        <!-- About me section with enhanced styling -->
        <div class="sm:col-span-3 my-10 border border-gray-200 dark:border-gray-700 shadow-xl rounded-xl p-8 bg-white dark:bg-gray-800 transition-all hover:shadow-2xl">
          <div class="flex flex-col items-center justify-center">
            <h1 class="pb-4 font-lemonmilk font-medium text-xl dark:text-white">About me</h1>
            <p class="font-inter text-center dark:text-lightGray mb-6 max-w-2xl mx-auto leading-relaxed">
              Hi, I'm Joomun hafsah, a Computer Science student who loves solving logical problems
              and exploring how technology works. <br>Click the arrow to know more about me!
            </p>

            <!-- Arrow with a visible background as requested -->
            <div class="flex flex-row w-full justify-end items-end">
              <router-link to="/aboutme" class="p-2 bg-gray-100 dark:bg-gray-700 rounded-full shadow-md hover:shadow-lg transition-all hover:bg-gray-200 dark:hover:bg-gray-600">
                <img v-if="isDarkMode" src="../assets/icons/darkmore.svg" alt="arrow" class="w-6" />
                <img v-else src="../assets/icons/lightmore.svg" alt="arrow" class="w-6" />
              </router-link>
            </div>
          </div>
        </div>

        <!-- Blogs section with enhanced card display -->
        <div class="sm:col-span-3">
          <h1 class="font-tommy text-xl sm:text-2xl my-6 dark:text-white border-b pb-2 border-gray-200 dark:border-gray-700">Blogs</h1>

          <!-- Enhanced container for blogs with smooth scroll and better shadows -->
          <div class="flex overflow-x-auto pb-4 sm:grid sm:grid-cols-3 sm:overflow-visible gap-6 scrollbar-hide">
            <Blog title="Robotic arm playing rock paper scissors"
              body="This is a robotic arm playing rock paper scissors, it uses gesture detection from MediaPipe and Python"
              imgpath="/assets/blogs/robot.jpg" page="/blog1" 
              class="min-w-full sm:min-w-0 transform transition-transform hover:scale-105" />
            <Blog class="min-w-full sm:min-w-0 transform transition-transform hover:scale-105" />
            <Blog class="min-w-full sm:min-w-0 transform transition-transform hover:scale-105" />
          </div>

          <!-- Enhanced view all link -->
          <router-link to="/blogs" class="text-blue-500 hover:text-blue-700 block mt-4 text-right font-medium transition-colors">
            View all &gt;
          </router-link>
        </div>

        <!-- Projects section with consistent styling -->
        <div class="sm:col-span-3 mb-16">
          <h1 class="font-tommy text-xl sm:text-2xl mx-auto my-6 text-left dark:text-white border-b pb-2 border-gray-200 dark:border-gray-700">Projects</h1>

          <!-- Placeholder for projects - kept the same structure but styled consistently with blogs -->
          <div class="flex overflow-x-auto pb-4 sm:grid sm:grid-cols-3 sm:overflow-visible gap-6 scrollbar-hide">
            <Blog title="Robotic arm playing rock paper scissors"
              body="This is a robotic arm playing rock paper scissors, it uses gesture detection from MediaPipe and Python"
              imgpath="/assets/blogs/robot.jpg" page="/blog1" 
              class="min-w-full sm:min-w-0 transform transition-transform hover:scale-105" />
            <Blog class="min-w-full sm:min-w-0 transform transition-transform hover:scale-105" />
            <Blog class="min-w-full sm:min-w-0 transform transition-transform hover:scale-105" />
          </div>
          
          <!-- Added view all link for projects section -->
          <router-link to="/projects" class="text-blue-500 hover:text-blue-700 block mt-4 text-right font-medium transition-colors">
            View all &gt;
          </router-link>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { inject } from "vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Blog from "../components/BlogCard.vue";
const isDarkMode = inject("isDarkMode");
</script>

<style>
/* Hide scrollbar for Chrome, Safari and Opera */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.scrollbar-hide {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>