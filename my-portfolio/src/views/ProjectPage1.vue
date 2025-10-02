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
        <!-- Navigation -->
        <div class="flex justify-between items-center w-full mb-8">
          <router-link to="/" class="font-pixel text-xs uppercase tracking-wider inline-flex items-center px-4 py-2 bg-mocha hover:bg-sage dark:bg-gray-800 dark:hover:bg-DMyellow border-2 border-mocha dark:border-gray-600 text-white dark:text-DMyellow hover:text-charcoal dark:hover:text-black transition-all duration-300 hover:shadow-lg">
            <span class="mr-2">&lt;</span> BACK_HOME
          </router-link>
        </div>
        
        <!-- Project title with decorative element -->
        <div class="relative mb-8 sm:mb-12 w-full">
          <h1 class="font-pixel font-medium text-2xl sm:text-4xl mb-2 text-mocha dark:text-DMyellow uppercase">
            OIA Robot: Interactive Rock Paper Scissors Arm
          </h1>
          <div class="w-20 h-1 bg-gradient-to-r from-mocha to-sage dark:from-DMyellow dark:to-amber-500 rounded-full"></div>
        </div>
        <!-- Featured image with terminal styling -->
        <div class="w-full max-w-lg mx-auto h-auto mb-8 overflow-hidden shadow-lg border-2 border-mocha dark:border-DMyellow bg-cream/40 dark:bg-gray-800">
          <img src="/assets/oia2.jpg" alt="OIA Robot Arm" 
               class="w-full h-auto object-cover" />
        </div>
        <!-- Project content -->
        <div class="w-full">
          <div class="font-inter text-text-secondary dark:text-gray-300 leading-relaxed space-y-6">
            <!-- Introduction -->
            <p class="text-lg">
              OIA Robot is an interactive robotic arm that plays rock paper scissors with users, featuring advanced motion tracking, gesture recognition, and a reward system for winners.
            </p>
            
            <!-- Project overview section -->
            <div class="border-2 border-mocha dark:border-DMyellow shadow-lg p-8 bg-cream/40 dark:bg-gray-800">
              <h2 class="font-pixel text-lg text-mocha dark:text-DMyellow uppercase tracking-wider mb-4">Key Features</h2>
            
            <div class="space-y-4">
              <div>
                <h3 class="font-pixel text-sm text-mocha dark:text-DMyellow uppercase tracking-wide mb-2">PID Motion Tracking</h3>
                <p>
                  Uses PID (Proportional-Integral-Derivative) control algorithms to precisely track the player's arm movements, maintaining optimal distance and position for the game. PID continuously corrects the arm's position by calculating error values and adjusting motor outputs accordingly.
                </p>
              </div>
              
              <div>
                <h3 class="font-pixel text-sm text-mocha dark:text-DMyellow uppercase tracking-wide mb-2">Gesture Recognition</h3>
                <p>
                  Computer vision algorithms detect and classify player hand gestures as rock, paper, or scissors in real-time, enabling responsive gameplay.
                </p>
              </div>
              
              <div>
                <h3 class="font-pixel text-sm text-mocha dark:text-DMyellow uppercase tracking-wide mb-2">Reward System</h3>
                <p>
                  When a player wins, the robotic arm autonomously picks up a chocolate and smoothly delivers it to the player as a reward, enhancing user engagement.
                </p>
              </div>
              
              <div>
                <h3 class="font-pixel text-sm text-mocha dark:text-DMyellow uppercase tracking-wide mb-2">Interactive Feedback</h3>
                <p>
                  Integrated Bluetooth speaker and small LCD screen provide audio-visual feedback during gameplay, increasing user interaction and engagement with voice prompts and game status displays.
                </p>
              </div>
            </div>
          </div>
          
          <!-- Physical Design section -->
          <h2 class="font-pixel text-lg text-mocha dark:text-DMyellow uppercase tracking-wider mt-8 mb-4">Physical Design</h2>
          
          <div class="grid grid-cols-1 gap-8 mb-10">
            <div>
              <h3 class="font-pixel text-sm text-mocha dark:text-DMyellow uppercase tracking-wide mb-3">Robotic Arm Construction</h3>
              <div class="bg-cream/40 dark:bg-gray-800 p-5 overflow-hidden shadow-md border-2 border-mocha dark:border-DMyellow">
                <img src="/assets/oia.jpg" alt="OIA Robot Arm Construction" class="w-full h-auto max-w-sm mx-auto" />
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