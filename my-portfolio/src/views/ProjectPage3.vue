<template>
  <div>
    <Header />
    <!-- Main content container with consistent styling from homepage -->
    <div class="max-w-[1200px] px-8 sm:px-28 mx-auto w-full grid min-h-screen place-items-start">
      <div class="grid grid-cols-1 gap-6 w-full mt-14 sm:mt-20">
        
        <!-- Blog navigation and date -->
        <div class="flex justify-between items-center w-full mb-4">
          <router-link to="/" class="text-LMBlue dark:text-DMyellow hover:underline flex items-center">
            <span class="mr-2">←</span> Back to home
          </router-link>
        </div>
        
        <!-- Project title -->
        <h1 class="font-lemonmilk font-bold text-32px sm:text-44px mb-6 text-LMBlue dark:text-DMyellow drop-shadow-md">
          Pacman: Python Chomping Adventure
        </h1>
        
        <!-- Featured image - smaller size (Play Screen) -->
        <div class="w-full max-w-lg mx-auto h-auto mb-8 overflow-hidden shadow-lg rounded-xl">
          <img src="/assets/pacman1.png" alt="Pacman Play Screen" 
               class="w-full h-auto object-cover" />
        </div>
        
        <!-- Project content - more concise -->
        <div class="font-inter text-gray-800 dark:text-lightGray leading-relaxed space-y-6">
          <!-- Introduction - concise -->
          <p>
            Pacman is a Python-based game that brings the classic chomping adventure into the modern era with custom features, user accounts, and exciting mini-games. Built using the Pygame library, it offers a nostalgic yet fresh gaming experience.
          </p>
          
          <!-- GitHub Link -->
          <div class="flex justify-center my-6">
            <a href="https://github.com/HafsahJoo/pacman-game" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 bg-LMBlue dark:bg-DMyellow hover:opacity-90 transition-opacity duration-300 text-white py-3 px-6 rounded-lg shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              View Code on GitHub
            </a>
          </div>
          
          <!-- Project overview section -->
          <div class="border border-gray-200 dark:border-gray-700 shadow-lg rounded-xl p-8 bg-white dark:bg-gray-800">
            <h2 class="font-lemonmilk text-xl mb-4 text-LMBlue dark:text-DMyellow">Key Features</h2>
            
            <div class="space-y-4">
              <div>
                <h3 class="font-lemonmilk text-lg text-gray-800 dark:text-white mb-2">User Accounts</h3>
                <p>
                  Each player can create and log into their personal account, saving progress, scores, and unlocked characters for a personalized gaming experience.
                </p>
              </div>
              
              <div>
                <h3 class="font-lemonmilk text-lg text-gray-800 dark:text-white mb-2">Character Selection</h3>
                <p>
                  Choose from a variety of Pacman characters, each with unique visual styles and subtle gameplay advantages.
                </p>
              </div>
              
              <div>
                <h3 class="font-lemonmilk text-lg text-gray-800 dark:text-white mb-2">Main Game</h3>
                <p>
                  Navigate through challenging mazes, collect all the pellets while avoiding ghosts. Special power-ups allow you to turn the tables and chase the ghosts for bonus points.
                </p>
              </div>
              
              <div>
                <h3 class="font-lemonmilk text-lg text-gray-800 dark:text-white mb-2">Mini-Game</h3>
                <p>
                  Take a break from the main adventure with an engaging mini-game that offers a different gameplay style while still earning rewards for your main progress.
                </p>
              </div>
            </div>
          </div>
          
          <!-- Game Screens section -->
          <h2 class="font-lemonmilk text-xl mt-8 mb-4 text-LMBlue dark:text-DMyellow">Game Screens</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <!-- Main Menu -->
            <div>
              <h3 class="font-lemonmilk text-lg text-gray-800 dark:text-white mb-3">Main Menu</h3>
              <div class="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg overflow-hidden shadow-md">
                <img src="/assets/pacman2.png" alt="Pacman Main Menu" class="w-full h-auto max-w-md mx-auto" />
              </div>
            </div>
            
            <!-- Character Selection -->
            <div>
              <h3 class="font-lemonmilk text-lg text-gray-800 dark:text-white mb-3">Character Selection</h3>
              <div class="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg overflow-hidden shadow-md">
                <img src="/assets/pacman3.png" alt="Character Selection Screen" class="w-full h-auto max-w-md mx-auto" />
              </div>
            </div>
            
            <!-- Game Screen -->
            <div>
              <h3 class="font-lemonmilk text-lg text-gray-800 dark:text-white mb-3">Gameplay</h3>
              <div class="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg overflow-hidden shadow-md">
                <img src="/assets/pacman4.png" alt="Pacman Gameplay" class="w-full h-auto max-w-md mx-auto" />
              </div>
            </div>
            
            <!-- Mini-game -->
            <div>
              <h3 class="font-lemonmilk text-lg text-gray-800 dark:text-white mb-3">Mini-game</h3>
              <div class="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg overflow-hidden shadow-md">
                <img src="/assets/pacman5.png" alt="Pacman Mini-game" class="w-full h-auto max-w-md mx-auto" />
              </div>
            </div>
          </div>
          
          
            
          
          <!-- Components Used - concise -->
          <div class="border border-gray-200 dark:border-gray-700 shadow-lg rounded-xl p-8 bg-white dark:bg-gray-800">
            <h2 class="font-lemonmilk text-xl mb-4 text-LMBlue dark:text-DMyellow">Technical Stack</h2>
            <ul class="list-disc pl-6 space-y-2">
              <li><span class="font-medium">Core Technology:</span> Python 3.8+, Pygame library for game development</li>
              <li><span class="font-medium">Graphics:</span> Custom pixel art sprites, animations, and UI elements</li>
              <li><span class="font-medium">User Data:</span> SQLite database for storing user accounts and game progress</li>
              <li><span class="font-medium">Sound:</span> Custom audio effects and background music integration</li>
              <li><span class="font-medium">AI:</span> Custom pathfinding algorithms for ghost movement patterns</li>
            </ul>
          </div>
          
          <!-- Development Process -->
          <div class="border border-gray-200 dark:border-gray-700 shadow-lg rounded-xl p-8 bg-white dark:bg-gray-800">
            <h2 class="font-lemonmilk text-xl mb-4 text-LMBlue dark:text-DMyellow">Development Process</h2>
            <ul class="list-disc pl-6 space-y-2">
              <li><span class="font-medium">Planning:</span> Created detailed game design document outlining core mechanics and features</li>
              <li><span class="font-medium">Prototyping:</span> Built core movement and collision systems to test gameplay feel</li>
              <li><span class="font-medium">Iterative Development:</span> Added features incrementally with continuous testing</li>
              <li><span class="font-medium">Optimization:</span> Improved rendering and game logic for smooth performance</li>
              <li><span class="font-medium">User Testing:</span> Gathered feedback from testers to refine gameplay and fix issues</li>
            </ul>
          </div>


        </div>
      </div>
    </div>
    
    <!-- Footer added for consistency -->
    <Footer class="mt-16" />
  </div>
</template>

<script setup>
import { inject } from "vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
const isDarkMode = inject("isDarkMode");
</script>