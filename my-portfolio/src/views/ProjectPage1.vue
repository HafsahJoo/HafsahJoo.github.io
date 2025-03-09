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
          OIA Robot: Interactive Rock Paper Scissors Arm
        </h1>
        
        <!-- Featured image - smaller size -->
        <div class="w-full max-w-lg mx-auto h-auto mb-8 overflow-hidden shadow-lg rounded-xl">
          <img src="/assets/oia2.jpg" alt="OIA Robot Arm" 
               class="w-full h-auto object-cover" />
        </div>
        
        <!-- Project content - more concise -->
        <div class="font-inter text-gray-800 dark:text-lightGray leading-relaxed space-y-6">
          <!-- Introduction - concise -->
          <p>
            OIA Robot is an interactive robotic arm that plays rock paper scissors with users, featuring advanced motion tracking, gesture recognition, and a reward system for winners.
          </p>
          
          <!-- Project overview section -->
          <div class="border border-gray-200 dark:border-gray-700 shadow-lg rounded-xl p-8 bg-white dark:bg-gray-800">
            <h2 class="font-lemonmilk text-xl mb-4 text-LMBlue dark:text-DMyellow">Key Features</h2>
            
            <div class="space-y-4">
              <div>
                <h3 class="font-lemonmilk text-lg text-gray-800 dark:text-white mb-2">PID Motion Tracking</h3>
                <p>
                  Uses PID (Proportional-Integral-Derivative) control algorithms to precisely track the player's arm movements, maintaining optimal distance and position for the game. PID continuously corrects the arm's position by calculating error values and adjusting motor outputs accordingly.
                </p>
              </div>
              
              <div>
                <h3 class="font-lemonmilk text-lg text-gray-800 dark:text-white mb-2">Gesture Recognition</h3>
                <p>
                  Computer vision algorithms detect and classify player hand gestures as rock, paper, or scissors in real-time, enabling responsive gameplay.
                </p>
              </div>
              
              <div>
                <h3 class="font-lemonmilk text-lg text-gray-800 dark:text-white mb-2">Reward System</h3>
                <p>
                  When a player wins, the robotic arm autonomously picks up a chocolate and smoothly delivers it to the player as a reward, enhancing user engagement.
                </p>
              </div>
              
              <div>
                <h3 class="font-lemonmilk text-lg text-gray-800 dark:text-white mb-2">Interactive Feedback</h3>
                <p>
                  Integrated Bluetooth speaker and small LCD screen provide audio-visual feedback during gameplay, increasing user interaction and engagement with voice prompts and game status displays.
                </p>
              </div>
            </div>
          </div>
          
          <!-- Physical Design section -->
          <h2 class="font-lemonmilk text-xl mt-8 mb-4 text-LMBlue dark:text-DMyellow">Physical Design</h2>
          
          <div class="grid grid-cols-1 gap-8 mb-10">
            <div>
              <h3 class="font-lemonmilk text-lg text-gray-800 dark:text-white mb-3">Robotic Arm Construction</h3>
              <div class="bg-gray-100 dark:bg-gray-900 p-5 rounded-lg overflow-hidden shadow-md">
                <img src="/assets/oia.jpg" alt="OIA Robot Arm Construction" class="w-full h-auto max-w-sm  mx-auto" />
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