<template>
  <div>
    <Header />
    <!-- Using grid layout for consistent spacing and alignment -->
    <div class="max-w-[1200px] px-8 sm:px-28 mx-auto w-full grid min-h-screen place-items-start">
      <div class="grid grid-cols-1 gap-6 w-full mt-14 sm:mt-20">
        
        <!-- Page title -->
        <div class="flex justify-between items-center w-full mb-6">
          <h1 class="font-lemonmilk font-bold text-32px sm:text-40px text-LMBlue dark:text-DMyellow drop-shadow-md">
            My Projects
          </h1>

        </div>
        
        <!-- Brief introduction -->
        <p class="font-inter text-lighterGray text-md sm:text-lg leading-relaxed mb-8">
          Here are some of the projects I've been working on. Each demonstrates my skills in various technologies
          and problem-solving approaches.
        </p>
        
        <!-- Projects grid - 2x2 layout for medium screens and larger -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <!-- Project 1: Tetris game -->
          <div class="border border-gray-200 dark:border-gray-700 shadow-xl rounded-xl overflow-hidden bg-white dark:bg-gray-800 transition-all hover:shadow-2xl">
            <div class="h-48 bg-gray-200 dark:bg-gray-700 overflow-hidden">
              <!-- Placeholder for project image -->
              <img src="/assets/tetris2.png" alt="Tetris Game" class="w-full h-full object-cover" />
            </div>
            <div class="p-6">
              <div class="flex justify-between items-start mb-2">
                <h2 class="font-lemonmilk font-medium text-xl text-LMBlue dark:text-DMyellow">Tetris Game</h2>
                <span class="text-gray-500 dark:text-gray-400 text-sm">2023</span>
              </div>
              <p class="font-inter text-gray-700 dark:text-lightGray mb-4">
                The traditional tetris game using HTML, CSS & Javascript
              </p>
              <div class="flex justify-end">
                <router-link to="/project4" class="p-2 bg-gray-100 dark:bg-gray-700 rounded-full shadow-md hover:shadow-lg transition-all hover:bg-gray-200 dark:hover:bg-gray-600">
                  <img v-if="isDarkMode" src="../assets/icons/darkmore.svg" alt="Read more" class="w-6" />
                  <img v-else src="../assets/icons/lightmore.svg" alt="Read more" class="w-6" />
                </router-link>
              </div>
            </div>
          </div>
          
          <!-- Project 2: Pacman game -->
          <div class="border border-gray-200 dark:border-gray-700 shadow-xl rounded-xl overflow-hidden bg-white dark:bg-gray-800 transition-all hover:shadow-2xl">
            <div class="h-48 bg-gray-200 dark:bg-gray-700 overflow-hidden">
              <!-- Placeholder for project image -->
              <img src="/assets/pacman4.png" alt="Pacman Game" class="w-full h-full object-cover" />
            </div>
            <div class="p-6">
              <div class="flex justify-between items-start mb-2">
                <h2 class="font-lemonmilk font-medium text-xl text-LMBlue dark:text-DMyellow">Pacman Game</h2>
                <span class="text-gray-500 dark:text-gray-400 text-sm">2022</span>
              </div>
              <p class="font-inter text-gray-700 dark:text-lightGray mb-4">
                An enhanced version of the classic Pac-Man game, along with a flappy bird mini game using Python
              </p>
              <div class="flex justify-end">
                <router-link to="/project3" class="p-2 bg-gray-100 dark:bg-gray-700 rounded-full shadow-md hover:shadow-lg transition-all hover:bg-gray-200 dark:hover:bg-gray-600">
                  <img v-if="isDarkMode" src="../assets/icons/darkmore.svg" alt="Read more" class="w-6" />
                  <img v-else src="../assets/icons/lightmore.svg" alt="Read more" class="w-6" />
                </router-link>
              </div>
            </div>
          </div>
          
          <!-- Project 3: Vending Machine Robot -->
          <div class="border border-gray-200 dark:border-gray-700 shadow-xl rounded-xl overflow-hidden bg-white dark:bg-gray-800 transition-all hover:shadow-2xl">
            <div class="h-48 bg-gray-200 dark:bg-gray-700 overflow-hidden">
              <!-- Placeholder for project image -->
              <img src="/assets/vm.jpg" alt="Vending Machine Robot" class="w-full h-full object-cover" />
            </div>
            <div class="p-6">
              <div class="flex justify-between items-start mb-2">
                <h2 class="font-lemonmilk font-medium text-xl text-LMBlue dark:text-DMyellow">Vending Machine Robot</h2>
                <span class="text-gray-500 dark:text-gray-400 text-sm">2022</span>
              </div>
              <p class="font-inter text-gray-700 dark:text-lightGray mb-4">
                A vending machine built using Arduino, Esp32 cam along with QR code detection.
              </p>
              <div class="flex justify-end">
                <!-- No route specified in your requirements, using placeholder -->
                <router-link to="/project2" class="p-2 bg-gray-100 dark:bg-gray-700 rounded-full shadow-md hover:shadow-lg transition-all hover:bg-gray-200 dark:hover:bg-gray-600">
                  <img v-if="isDarkMode" src="../assets/icons/darkmore.svg" alt="Read more" class="w-6" />
                  <img v-else src="../assets/icons/lightmore.svg" alt="Read more" class="w-6" />
                </router-link>
              </div>
            </div>
          </div>
          
          <!-- Project 4: OIA Robot -->
          <div class="border border-gray-200 dark:border-gray-700 shadow-xl rounded-xl overflow-hidden bg-white dark:bg-gray-800 transition-all hover:shadow-2xl">
            <div class="h-48 bg-gray-200 dark:bg-gray-700 overflow-hidden">
              <!-- Placeholder for project image -->
              <img src="/assets/oia2.jpg" alt="OIA Robot" class="w-full h-full object-cover" />
            </div>
            <div class="p-6">
              <div class="flex justify-between items-start mb-2">
                <h2 class="font-lemonmilk font-medium text-xl text-LMBlue dark:text-DMyellow">OIA Robot</h2>
                <span class="text-gray-500 dark:text-gray-400 text-sm">2021</span>
              </div>
              <p class="font-inter text-gray-700 dark:text-lightGray mb-4">
                A robotic arm for playing rock paper scissors.
              </p>
              <div class="flex justify-end">
                <router-link to="/project1" class="p-2 bg-gray-100 dark:bg-gray-700 rounded-full shadow-md hover:shadow-lg transition-all hover:bg-gray-200 dark:hover:bg-gray-600">
                  <img v-if="isDarkMode" src="../assets/icons/darkmore.svg" alt="Read more" class="w-6" />
                  <img v-else src="../assets/icons/lightmore.svg" alt="Read more" class="w-6" />
                </router-link>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    
    <Footer class="mt-16" />
  </div>
</template>

<script setup>
import { inject } from "vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
const isDarkMode = inject("isDarkMode");
</script>