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
          Classic Tetris Game
        </h1>
        
        <!-- Featured image with smaller size -->
        <div class="w-full max-w-2xl mx-auto h-auto mb-8 overflow-hidden shadow-lg rounded-xl">
          <img src="/assets/tetris2.png" alt="Tetris Game Screenshot" 
               class="w-full h-auto object-cover" />
        </div>
        
        <!-- Project content -->
        <div class="font-inter text-gray-800 dark:text-lightGray leading-relaxed space-y-6">
          <!-- Introduction -->
          <p>
            This project is a faithful recreation of the classic Tetris game using HTML, CSS, and JavaScript. It captures the nostalgic feel of the original while incorporating modern web technologies for smooth gameplay and responsive design.
          </p>
          
          <!-- Project overview section -->
          <div class="border border-gray-200 dark:border-gray-700 shadow-lg rounded-xl p-8 bg-white dark:bg-gray-800">
            <h2 class="font-lemonmilk text-xl mb-4 text-LMBlue dark:text-DMyellow">Game Features</h2>
            
            <div class="space-y-4">
              <div>
                <h3 class="font-lemonmilk text-lg text-gray-800 dark:text-white mb-2">Authentic Gameplay</h3>
                <p>
                  The game faithfully reproduces the classic Tetris experience with accurate piece movements, rotations, and line-clearing mechanics. Players navigate falling tetrominos to create complete rows which then disappear, earning points.
                </p>
              </div>
              
              <div>
                <h3 class="font-lemonmilk text-lg text-gray-800 dark:text-white mb-2">Score Tracking</h3>
                <p>
                  A real-time scoring system keeps track of points earned through line clears, with bonuses for clearing multiple lines simultaneously. The game also tracks the current level, which increases the falling speed of pieces as you progress.
                </p>
              </div>
              
              <div>
                <h3 class="font-lemonmilk text-lg text-gray-800 dark:text-white mb-2">User Accounts</h3>
                <p>
                  Players can create accounts to save their high scores and track their progress over time. The login system securely stores user data and allows for personalized gameplay experiences.
                </p>
              </div>
              
              <div>
                <h3 class="font-lemonmilk text-lg text-gray-800 dark:text-white mb-2">Responsive Controls</h3>
                <p>
                  The game features keyboard controls for desktop play, with left/right arrows to move pieces, up arrow to rotate, and down arrow to speed up descent. The space bar allows for an instant drop of the current piece.
                </p>
              </div>
            </div>
          </div>
          
          <!-- Project screenshots -->
          <h2 class="font-lemonmilk text-xl mt-8 mb-4 text-LMBlue dark:text-DMyellow">Game Screens</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 class="font-lemonmilk text-lg text-gray-800 dark:text-white mb-3">Sign-up Screen</h3>
              <div class="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-hidden shadow-md">
                <img src="/assets/tetris1.png" alt="Tetris Sign-up Screen" class="w-full h-auto rounded" />
              </div>
              <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">User registration page with clean design and simple form fields.</p>
            </div>
            
            <div>
              <h3 class="font-lemonmilk text-lg text-gray-800 dark:text-white mb-3">Gameplay Screen</h3>
              <div class="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-hidden shadow-md">
                <img src="/assets/tetris2.png" alt="Tetris Gameplay Screen" class="w-full h-auto rounded" />
              </div>
              <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Main gameplay area showing falling blocks, score tracking, and next piece preview.</p>
            </div>
          </div>
          
          <!-- Technical Implementation -->
          <div class="border border-gray-200 dark:border-gray-700 shadow-lg rounded-xl p-8 bg-white dark:bg-gray-800">
            <h2 class="font-lemonmilk text-xl mb-4 text-LMBlue dark:text-DMyellow">Technical Implementation</h2>
            
            <div class="space-y-4">
              <div>
                <h3 class="font-lemonmilk text-lg text-gray-800 dark:text-white mb-2">HTML Canvas</h3>
                <p>
                  The game board is built using HTML Canvas, which allows for efficient rendering of game elements and smooth animations. The canvas is updated on each frame to reflect the current state of the game.
                </p>
              </div>
              
              <div>
                <h3 class="font-lemonmilk text-lg text-gray-800 dark:text-white mb-2">JavaScript Game Logic</h3>
                <p>
                  The core game mechanics are powered by JavaScript, handling piece generation, movement calculations, collision detection, and line clearing logic. The game loop uses requestAnimationFrame for smooth performance.
                </p>
              </div>
              
              <div>
                <h3 class="font-lemonmilk text-lg text-gray-800 dark:text-white mb-2">CSS Styling</h3>
                <p>
                  Custom CSS provides the nostalgic look and feel of classic Tetris while ensuring the interface is clean and modern. Responsive design principles ensure the game is playable on various screen sizes.
                </p>
              </div>
              
            </div>
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