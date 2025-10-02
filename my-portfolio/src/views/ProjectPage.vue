<template>
  <div class="min-h-screen bg-LMveryLightBeige dark:bg-black relative overflow-hidden">
    <!-- Background gradient to match homepage -->
    <div class="absolute inset-0 bg-gradient-to-br from-LMlightBeige/20 via-transparent to-LMbeige/10 dark:from-gray-800/20 dark:via-transparent dark:to-gray-700/10"></div>
    <!-- Background grid pattern -->
    <div class="fixed inset-0 bg-grid-pattern-light dark:bg-grid-pattern-dark opacity-60 dark:opacity-40 pointer-events-none"></div>

    <!-- Header with proper spacing -->
    <div class="mb-10 sm:mb-16 relative z-10">
      <Header />
    </div>

    <!-- Main content with homepage styling -->
    <div class="max-w-[1200px] px-8 sm:px-28 mx-auto w-full relative z-10">
      <div class="flex flex-col items-start mb-8">
        <!-- Page title with decorative element -->
        <div class="relative mb-8 sm:mb-12 w-full">
          <h2 class="font-pixel font-medium text-2xl sm:text-4xl mb-2 text-mocha dark:text-DMyellow uppercase">
            My Projects
          </h2>
          <div class="w-20 h-1 bg-gradient-to-r from-mocha to-sage dark:from-DMyellow dark:to-purple-900 rounded-full"></div>
        </div>
        
        <!-- Brief introduction -->
        <p class="font-inter text-text-secondary dark:text-gray-300 text-md sm:text-lg leading-relaxed mb-8">
          Here are some of the projects I've been working on. Each demonstrates my skills in various technologies
          and problem-solving approaches.
        </p>
        <!-- Projects section with enhanced styling -->
        <div class="w-full">
          <!-- Projects grid - 2x2 layout for medium screens and larger -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          
            <!-- Project 1: Tetris game -->
            <div class="group relative bg-cream/50 dark:bg-gray-700 border-2 border-mocha dark:border-DMyellow overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 min-h-[400px] sm:min-h-[450px]">
              <!-- Terminal header -->
              <div class="bg-mocha dark:bg-gray-900 px-4 py-3 flex items-center">
                <div class="flex items-center space-x-2">
                  <div class="w-3 h-3 rounded-full bg-red-500"></div>
                  <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div class="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              <div class="h-48 sm:h-56 bg-gray-200 dark:bg-gray-700 overflow-hidden">
                <img src="/assets/tetris2.png" alt="Tetris Game" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div class="p-6 flex-1 flex flex-col justify-between">
                <div class="flex justify-between items-start mb-2">
                  <h3 class="font-pixel text-sm text-mocha dark:text-DMyellow uppercase mb-3 tracking-wide">Tetris Game</h3>
                  <span class="px-2 py-1 bg-mocha/10 dark:bg-DMyellow/10 text-mocha dark:text-DMyellow rounded-full text-xs font-medium">2023</span>
                </div>
                <p class="font-inter text-sm text-text-secondary dark:text-gray-300 leading-relaxed mb-4">
                  The traditional tetris game using HTML, CSS & Javascript
                </p>
                <div class="flex justify-end">
                  <router-link to="/project4" class="font-pixel text-xs uppercase tracking-wider inline-flex items-center px-4 py-2 bg-mocha hover:bg-sage dark:bg-gray-800 dark:hover:bg-DMyellow border-2 border-mocha dark:border-gray-600 text-white dark:text-DMyellow hover:text-charcoal dark:hover:text-black transition-all duration-300 hover:shadow-lg">
                    <span class="mr-2">></span>
                    EXPLORE
                  </router-link>
                </div>
              </div>
            </div>
          
            <!-- Project 2: Pacman game -->
            <div class="group relative bg-cream/50 dark:bg-gray-800 border-2 border-mocha dark:border-DMyellow overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 min-h-[400px] sm:min-h-[450px]">
              <!-- Terminal header -->
              <div class="bg-mocha dark:bg-gray-900 px-4 py-3 flex items-center">
                <div class="flex items-center space-x-2">
                  <div class="w-3 h-3 rounded-full bg-red-500"></div>
                  <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div class="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              <div class="h-48 sm:h-56 bg-gray-200 dark:bg-gray-700 overflow-hidden">
                <img src="/assets/pacman4.png" alt="Pacman Game" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div class="p-6 flex-1 flex flex-col justify-between">
                <div class="flex justify-between items-start mb-2">
                  <h3 class="font-pixel text-sm text-mocha dark:text-DMyellow uppercase mb-3 tracking-wide">Pacman Game</h3>
                  <span class="px-2 py-1 bg-mocha/10 dark:bg-DMyellow/10 text-mocha dark:text-DMyellow rounded-full text-xs font-medium">2023</span>
                </div>
                <p class="font-inter text-sm text-text-secondary dark:text-gray-300 leading-relaxed mb-4">
                  An enhanced version of the classic Pac-Man game, along with a flappy bird mini game using Python
                </p>
                <div class="flex justify-end">
                  <router-link to="/project3" class="font-pixel text-xs uppercase tracking-wider inline-flex items-center px-4 py-2 bg-mocha hover:bg-sage dark:bg-gray-800 dark:hover:bg-DMyellow border-2 border-mocha dark:border-gray-600 text-white dark:text-DMyellow hover:text-charcoal dark:hover:text-black transition-all duration-300 hover:shadow-lg">
                    <span class="mr-2">></span>
                    EXPLORE
                  </router-link>
                </div>
              </div>
            </div>
          
            <!-- Project 3: Vending Machine Robot -->
            <div class="group relative bg-cream/50 dark:bg-gray-800 border-2 border-mocha dark:border-DMyellow overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 min-h-[400px] sm:min-h-[450px]">
              <!-- Terminal header -->
              <div class="bg-mocha dark:bg-gray-900 px-4 py-3 flex items-center">
                <div class="flex items-center space-x-2">
                  <div class="w-3 h-3 rounded-full bg-red-500"></div>
                  <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div class="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              <div class="h-48 sm:h-56 bg-gray-200 dark:bg-gray-700 overflow-hidden">
                <img src="/assets/vm.jpg" alt="Vending Machine Robot" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div class="p-6 flex-1 flex flex-col justify-between">
                <div class="flex justify-between items-start mb-2">
                  <h3 class="font-pixel text-sm text-mocha dark:text-DMyellow uppercase mb-3 tracking-wide">Vending Machine Robot</h3>
                  <span class="px-2 py-1 bg-mocha/10 dark:bg-DMyellow/10 text-mocha dark:text-DMyellow rounded-full text-xs font-medium">2024</span>
                </div>
                <p class="font-inter text-sm text-text-secondary dark:text-gray-300 leading-relaxed mb-4">
                  A vending machine built using Arduino, Esp32 cam along with QR code detection.
                </p>
                <div class="flex justify-end">
                  <router-link to="/project2" class="font-pixel text-xs uppercase tracking-wider inline-flex items-center px-4 py-2 bg-mocha hover:bg-sage dark:bg-gray-800 dark:hover:bg-DMyellow border-2 border-mocha dark:border-gray-600 text-white dark:text-DMyellow hover:text-charcoal dark:hover:text-black transition-all duration-300 hover:shadow-lg">
                    <span class="mr-2">></span>
                    EXPLORE
                  </router-link>
                </div>
              </div>
            </div>
          
            <!-- Project 4: OIA Robot -->
            <div class="group relative bg-cream/50 dark:bg-gray-800 border-2 border-mocha dark:border-DMyellow overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 min-h-[400px] sm:min-h-[450px]">
              <!-- Terminal header -->
              <div class="bg-mocha dark:bg-gray-900 px-4 py-3 flex items-center">
                <div class="flex items-center space-x-2">
                  <div class="w-3 h-3 rounded-full bg-red-500"></div>
                  <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div class="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              <div class="h-48 sm:h-56 bg-gray-200 dark:bg-gray-700 overflow-hidden">
                <img src="/assets/oia2.jpg" alt="OIA Robot" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div class="p-6 flex-1 flex flex-col justify-between">
                <div class="flex justify-between items-start mb-2">
                  <h3 class="font-pixel text-sm text-mocha dark:text-DMyellow uppercase mb-3 tracking-wide">OIA Robot</h3>
                  <span class="px-2 py-1 bg-mocha/10 dark:bg-DMyellow/10 text-mocha dark:text-DMyellow rounded-full text-xs font-medium">2024</span>
                </div>
                <p class="font-inter text-sm text-text-secondary dark:text-gray-300 leading-relaxed mb-4">
                  A robotic arm for playing rock paper scissors.
                </p>
                <div class="flex justify-end">
                  <router-link to="/project1" class="font-pixel text-xs uppercase tracking-wider inline-flex items-center px-4 py-2 bg-mocha hover:bg-sage dark:bg-gray-800 dark:hover:bg-DMyellow border-2 border-mocha dark:border-gray-600 text-white dark:text-DMyellow hover:text-charcoal dark:hover:text-black transition-all duration-300 hover:shadow-lg">
                    <span class="mr-2">></span>
                    EXPLORE
                  </router-link>
                </div>
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
const isDarkMode = inject("isDarkMode");
</script>