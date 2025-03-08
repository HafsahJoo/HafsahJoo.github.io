<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
    <Header />
    
    <!-- Subtle background pattern -->
    <div class="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-3 pointer-events-none"></div>
    
    <!-- Main content with enhanced visual elements -->
    <div class="max-w-[1200px] px-8 sm:px-28 mx-auto w-full grid min-h-screen place-items-start relative z-10">
      <div class="grid grid-cols-1 gap-8 sm:grid-cols-3 mt-14 sm:mt-28">
        
        <!-- Profile section with refined styling and adjusted padding -->
        <div class="col-span-1 sm:col-span-2 relative pl-6">
          <!-- Enhanced decorative accent element aligned with About Me box -->
          <div class="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-LMBlue via-purple-500 to-indigo-300 dark:from-DMyellow dark:via-amber-500 dark:to-amber-300 rounded-full opacity-80 hidden sm:block"></div>
          
          <h1 class="font-lemonmilk font-bold text-32px sm:text-40px mb-6 text-LMBlue dark:text-DMyellow drop-shadow-md">
            Hafsah joomun
          </h1>
          <p class="font-inter text-lighterGray text-md sm:text-lg leading-relaxed">
            A curious mind from Mauritius, passionate about technology, coding, and mathematics.
            <br>This is my space to share my work and discoveries.
          </p>
          
          <!-- Social media links with enhanced styling -->
          <div class="flex flex-row mt-8">
            <a href="https://www.linkedin.com/in/hafsah-joomun/" 
               class="transform transition-all duration-300 hover:scale-110 mr-6 bg-white dark:bg-gray-800 p-3 rounded-full shadow-md hover:shadow-lg">
              <img v-if="isDarkMode" src="../assets/icons/darklinkedin.svg" alt="linkedin" class="w-8 h-8" />
              <img v-else src="../assets/icons/lightlinkedin.svg" alt="linkedin" class="w-8 h-8" />
            </a>
            <a href="#" 
               class="transform transition-all duration-300 hover:scale-110 mr-6 bg-white dark:bg-gray-800 p-3 rounded-full shadow-md hover:shadow-lg">
              <img v-if="isDarkMode" src="../assets/icons/darkgithub.svg" alt="github" class="w-8 h-8" />
              <img v-else src="../assets/icons/lightgithub.svg" alt="github" class="w-8 h-8" />
            </a>
            <a href="mailto:hafsah260103@gmail.com" 
               class="transform transition-all duration-300 hover:scale-110 bg-white dark:bg-gray-800 p-3 rounded-full shadow-md hover:shadow-lg">
              <img v-if="isDarkMode" src="../assets/icons/darkmail.svg" alt="mail" class="w-8 h-8" />
              <img v-else src="../assets/icons/lightmail.svg" alt="mail" class="w-8 h-8" />
            </a>
          </div>
        </div>
        
        <!-- Profile picture with subtle floating animation but no background -->
        <div class="col-span-1 hidden sm:block my-auto">
          <div v-if="isDarkMode" class="transition-transform hover:scale-105 animate-float">
            <img src="../assets/icons/lightprofile.svg" alt="Dark Mode" class="w-full h-auto" />
          </div>
          <div v-else class="transition-transform hover:scale-105 animate-float">
            <img src="../assets/icons/darkprofile.svg" alt="Light Mode" class="w-full h-auto" />
          </div>
        </div>
        
        <!-- About me section with enhanced styling (without dot patterns) -->
        <div class="sm:col-span-3 my-10 border border-gray-200 dark:border-gray-700 shadow-xl rounded-xl bg-white dark:bg-gray-800 transition-all hover:shadow-2xl relative overflow-hidden group">
          <!-- Decorative background elements -->
          <div class="absolute -right-16 -bottom-16 w-64 h-64 bg-gradient-to-tr from-LMBlue/10 to-purple-500/5 dark:from-DMyellow/10 dark:to-amber-500/5 rounded-full transform group-hover:scale-110 transition-transform duration-700"></div>
          <div class="absolute -left-16 -top-16 w-64 h-64 bg-gradient-to-br from-LMBlue/10 to-purple-500/5 dark:from-DMyellow/10 dark:to-amber-500/5 rounded-full transform group-hover:scale-110 transition-transform duration-700"></div>
          
          <!-- Content container with padding -->
          <div class="relative z-10 p-10">
            <div class="flex flex-col items-center justify-center">
              <!-- Title with decorative elements -->
              <div class="relative mb-8">
                <h1 class="font-lemonmilk font-medium text-xl text-LMBlue dark:text-DMyellow relative z-10">About me</h1>
                <div class="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-LMBlue to-purple-500 dark:from-DMyellow dark:to-amber-500 rounded-full"></div>
              </div>
              
              <!-- About content with enhanced typography -->
              <p class="font-inter text-center dark:text-lightGray mb-8 max-w-2xl mx-auto leading-relaxed">
                Hi, I'm Joomun hafsah, a <span class="text-LMBlue dark:text-DMyellow font-medium">Computer Science</span> student who loves solving logical problems
                and exploring how technology works. <br>Click the arrow to know more about me!
              </p>
              
              <!-- Enhanced arrow button with animation -->
              <div class="flex flex-row w-full justify-end items-end">
                <router-link to="/aboutme" 
                  class="p-3 bg-gray-100 dark:bg-gray-700 rounded-full shadow-md hover:shadow-lg transition-all duration-500 hover:bg-LMBlue hover:text-white dark:hover:bg-DMyellow group relative overflow-hidden">
                  <!-- Arrow background pulse effect -->
                  <div class="absolute inset-0 bg-LMBlue/20 dark:bg-DMyellow/20 rounded-full transform scale-0 group-hover:scale-150 transition-transform duration-700 opacity-0 group-hover:opacity-100"></div>
                  <!-- Arrow icon -->
                  <img v-if="isDarkMode" src="../assets/icons/darkmore.svg" alt="arrow" 
                    class="w-6 h-6 relative z-10 group-hover:filter group-hover:brightness-150 transform group-hover:translate-x-1 transition-transform duration-300" />
                  <img v-else src="../assets/icons/lightmore.svg" alt="arrow" 
                    class="w-6 h-6 relative z-10 group-hover:filter group-hover:brightness-0 group-hover:invert transform group-hover:translate-x-1 transition-transform duration-300" />
                </router-link>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Projects section with enhanced styling to match About Me (without vertical line and dots) -->
        <div class="sm:col-span-3 mb-16 relative">
          <div class="relative z-10">
            <!-- Section header with matching font and styling -->
            <div class="flex items-center mb-8 group">
              <div class="relative">
                <h1 class="font-lemonmilk font-medium text-xl text-LMBlue dark:text-DMyellow">Projects</h1>
                <div class="absolute -bottom-3 left-0 w-12 h-1 bg-gradient-to-r from-LMBlue to-purple-500 dark:from-DMyellow dark:to-amber-500 rounded-full transition-width duration-500 group-hover:w-full"></div>
              </div>
              <div class="flex-grow mx-6 h-px bg-gray-200 dark:bg-gray-700"></div>
              <router-link to="/projects" 
                class="text-LMBlue dark:text-DMyellow font-medium transition-all duration-300 flex items-center bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-sm hover:shadow-md">
                View all
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1 transition-transform duration-300 transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </router-link>
            </div>
            
            <!-- Projects grid with enhanced card effects -->
            <div class="flex overflow-x-auto pb-4 sm:grid sm:grid-cols-3 sm:overflow-visible gap-8 scrollbar-hide">
              <Blog title="OIA ROBOT"
                body="This is a robotic arm playing rock paper scissors, it uses gesture detection from MediaPipe and Python"
                imgpath="/assets/oia2.jpg" page="/project1" 
                class="min-w-full sm:min-w-0 transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-xl" />
              <Blog title="Vending Machine Robot"
                body="This is a vending machine built using Arduino, Esp32 cam along with QR code detection."
                imgpath="/assets/vm.jpg" page="/project2" 
                class="min-w-full sm:min-w-0 transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-xl" />
              <Blog title="Pacman Game"
                body="This is a pacman game built using python"
                imgpath="/assets/pacman4.png" page="/project3" 
                class="min-w-full sm:min-w-0 transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-xl" />
            </div>
          </div>
        </div>
        
        <!-- Blogs section with "Under Construction" message -->
        <div class="sm:col-span-3 mb-16 relative">
          <div class="relative z-10">
            <!-- Section header with matching font and styling -->
            <div class="flex items-center mb-8 group">
              <div class="relative">
                <h1 class="font-lemonmilk font-medium text-xl text-LMBlue dark:text-DMyellow">Blogs</h1>
                <div class="absolute -bottom-3 left-0 w-12 h-1 bg-gradient-to-r from-LMBlue to-purple-500 dark:from-DMyellow dark:to-amber-500 rounded-full transition-width duration-500 group-hover:w-full"></div>
              </div>
              <div class="flex-grow mx-6 h-px bg-gray-200 dark:bg-gray-700"></div>
              <router-link to="/blogs" 
                class="text-LMBlue dark:text-DMyellow font-medium transition-all duration-300 flex items-center bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-sm hover:shadow-md">
                View all
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1 transition-transform duration-300 transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </router-link>
            </div>
            
            <!-- Under Construction message -->
            <div class="border border-gray-200 dark:border-gray-700 shadow-md rounded-xl bg-white dark:bg-gray-800 p-8 text-center">
              <div class="flex flex-col items-center">
                <!-- Construction icon -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mb-4 text-LMBlue dark:text-DMyellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                
                <h2 class="font-lemonmilk text-lg text-gray-800 dark:text-white mb-3">Under Construction</h2>
                <p class="font-inter text-gray-600 dark:text-gray-300 max-w-lg mx-auto">
                  Blog section coming soon! Check back later for updates, articles, and insights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <Footer class="relative z-10" />
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

/* Background pattern */
.bg-grid-pattern {
  background-image: 
    linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
  background-size: 20px 20px;
}

/* Subtle floating animation for profile picture */
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

/* Smooth transitions */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}
</style>