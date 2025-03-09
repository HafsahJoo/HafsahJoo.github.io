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
            SmartBite: Vending Machine & Water Dispenser
          </h1>
          
          <!-- Featured image - smaller size -->
          <div class="w-full max-w-lg mx-auto h-auto mb-8 overflow-hidden shadow-lg rounded-xl">
            <img src="/assets/vm.jpg" alt="SmartBite Vending Machine" 
                 class="w-full h-auto object-cover" />
          </div>
          
          <!-- Project content - more concise -->
          <div class="font-inter text-gray-800 dark:text-lightGray leading-relaxed space-y-6">
            <!-- Introduction - concise -->
            <p>
              SmartBite combines a smart vending machine with an integrated water dispenser, featuring QR authentication and automated billing for workplace refreshments.
            </p>
            
            <!-- Project overview section - more concise -->
            <div class="border border-gray-200 dark:border-gray-700 shadow-lg rounded-xl p-8 bg-white dark:bg-gray-800">
              <h2 class="font-lemonmilk text-xl mb-4 text-LMBlue dark:text-DMyellow">Key Features</h2>
              
              <div class="space-y-4">
                <div>
                  <h3 class="font-lemonmilk text-lg text-gray-800 dark:text-white mb-2">QR Authentication</h3>
                  <p>
                    Camera activates when users approach, verifies QR codes against database, and grants access for snack selection.
                  </p>
                </div>
                
                <div>
                  <h3 class="font-lemonmilk text-lg text-gray-800 dark:text-white mb-2">Smart Dispensing</h3>
                  <p>
                    Spiral mechanisms with servo motors release snacks onto conveyor belt, with laser sensors ensuring proper delivery.
                  </p>
                </div>
                
                <div>
                  <h3 class="font-lemonmilk text-lg text-gray-800 dark:text-white mb-2">Automated Billing</h3>
                  <p>
                    Transactions are recorded with user ID and automatically deducted from employee's salary at month-end.
                  </p>
                </div>
                
                <div>
                  <h3 class="font-lemonmilk text-lg text-gray-800 dark:text-white mb-2">Water Dispenser</h3>
                  <p>
                    Air pump activates when container is detected, increasing pressure to dispense water, with auto-stop after 5 seconds.
                  </p>
                </div>
              </div>
            </div>
            
            <!-- Physical Design section -->
            <h2 class="font-lemonmilk text-xl mt-8 mb-4 text-LMBlue dark:text-DMyellow">Physical Design</h2>
            
            <div class="grid grid-cols-1 gap-8 mb-10">
              <div>
                <h3 class="font-lemonmilk text-lg text-gray-800 dark:text-white mb-3">3D Design</h3>
                <div class="bg-gray-100 dark:bg-gray-900 p-5 rounded-lg overflow-hidden shadow-md">
                  <img src="/assets/vm/sideview.png" alt="SmartBite 3D Design" class="w-full h-auto max-w-4xl mx-auto" />
                </div>
              </div>
              
              <div>
                <h3 class="font-lemonmilk text-lg text-gray-800 dark:text-white mb-3">Final Product</h3>
                <div class="bg-gray-100 dark:bg-gray-900 p-5 rounded-lg overflow-hidden shadow-md">
                  <img src="/assets/vm/sideview1.png" alt="SmartBite Final Product" class="w-full h-auto max-w-4xl mx-auto" />
                </div>
              </div>
            </div>
            
            <!-- Architectural Diagram -->
            <div class="mb-8">
              <h3 class="font-lemonmilk text-lg text-gray-800 dark:text-white mb-3">Architectural Diagram</h3>
              <div class="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg overflow-hidden shadow-md">
                <img src="/assets/vm/cdiagram.png" alt="SmartBite Architectural Diagram" class="w-full h-auto max-w-xl mx-auto" />
              </div>
            </div>
            
            <!-- Components Used - concise -->
            <div class="border border-gray-200 dark:border-gray-700 shadow-lg rounded-xl p-8 bg-white dark:bg-gray-800">
              <h2 class="font-lemonmilk text-xl mb-4 text-LMBlue dark:text-DMyellow">Core Components</h2>
              <ul class="list-disc pl-6 space-y-2">
                <li><span class="font-medium">Motors & Mechanics:</span> 6 DC motors, 8 wheels for dispensing and conveyor systems</li>
                <li><span class="font-medium">Sensors:</span> HC-SR04 ultrasonic sensors, KY-008 laser modules, LDR sensors for item detection</li>
                <li><span class="font-medium">Control:</span> Arduino Mega 2560 with Atmega2560 microcontroller, 3 L298N motor shields</li>
                <li><span class="font-medium">Interface:</span> LCD 1602 I2C display, ESP32 Cam for QR scanning, selection buttons</li>
                <li><span class="font-medium">Water System:</span> Invento 3V-6V Mini DC Air Pump with pressure-based dispensing</li>
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