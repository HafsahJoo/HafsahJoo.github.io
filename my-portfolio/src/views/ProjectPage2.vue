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
              SmartBite: Vending Machine & Water Dispenser
            </h1>
            <div class="w-20 h-1 bg-gradient-to-r from-mocha to-sage dark:from-DMyellow dark:to-amber-500 rounded-full"></div>
          </div>
          <!-- Featured image with terminal styling -->
          <div class="w-full max-w-lg mx-auto h-auto mb-8 overflow-hidden shadow-lg border-2 border-mocha dark:border-DMyellow bg-cream/40 dark:bg-gray-800">
            <img src="/assets/vm.jpg" alt="SmartBite Vending Machine" 
                 class="w-full h-auto object-cover" />
          </div>
          <!-- Project content -->
          <div class="w-full">
            <div class="font-inter text-text-secondary dark:text-gray-300 leading-relaxed space-y-6">
              <!-- Introduction -->
              <p class="text-lg">
                SmartBite combines a smart vending machine with an integrated water dispenser, featuring QR authentication and automated billing for workplace refreshments.
              </p>
              
              <!-- Project overview section -->
              <div class="border-2 border-mocha dark:border-DMyellow shadow-lg p-8 bg-cream/40 dark:bg-gray-800">
                <h2 class="font-pixel text-lg text-mocha dark:text-DMyellow uppercase tracking-wider mb-4">Key Features</h2>
              
              <div class="space-y-4">
                <div>
                  <h3 class="font-pixel text-sm text-mocha dark:text-DMyellow uppercase tracking-wide mb-2">QR Authentication</h3>
                  <p>
                    Camera activates when users approach, verifies QR codes against database, and grants access for snack selection.
                  </p>
                </div>
                
                <div>
                  <h3 class="font-pixel text-sm text-mocha dark:text-DMyellow uppercase tracking-wide mb-2">Smart Dispensing</h3>
                  <p>
                    Spiral mechanisms with servo motors release snacks onto conveyor belt, with laser sensors ensuring proper delivery.
                  </p>
                </div>
                
                <div>
                  <h3 class="font-pixel text-sm text-mocha dark:text-DMyellow uppercase tracking-wide mb-2">Automated Billing</h3>
                  <p>
                    Transactions are recorded with user ID and automatically deducted from employee's salary at month-end.
                  </p>
                </div>
                
                <div>
                  <h3 class="font-pixel text-sm text-mocha dark:text-DMyellow uppercase tracking-wide mb-2">Water Dispenser</h3>
                  <p>
                    Air pump activates when container is detected, increasing pressure to dispense water, with auto-stop after 5 seconds.
                  </p>
                </div>
              </div>
            </div>
            
            <!-- Physical Design section -->
            <h2 class="font-pixel text-lg text-mocha dark:text-DMyellow uppercase tracking-wider mt-8 mb-4">Physical Design</h2>
            
            <div class="grid grid-cols-1 gap-8 mb-10">
              <div>
                <h3 class="font-pixel text-sm text-mocha dark:text-DMyellow uppercase tracking-wide mb-3">3D Design</h3>
                <div class="bg-cream/40 dark:bg-gray-800 p-5 overflow-hidden shadow-md border-2 border-mocha dark:border-DMyellow">
                  <img src="/assets/vm/sideview.png" alt="SmartBite 3D Design" class="w-full h-auto max-w-4xl mx-auto" />
                </div>
              </div>
              
              <div>
                <h3 class="font-pixel text-sm text-mocha dark:text-DMyellow uppercase tracking-wide mb-3">Final Product</h3>
                <div class="bg-cream/40 dark:bg-gray-800 p-5 overflow-hidden shadow-md border-2 border-mocha dark:border-DMyellow">
                  <img src="/assets/vm/sideview1.png" alt="SmartBite Final Product" class="w-full h-auto max-w-4xl mx-auto" />
                </div>
              </div>
            </div>
            
            <!-- Architectural Diagram -->
            <div class="mb-8">
              <h3 class="font-pixel text-sm text-mocha dark:text-DMyellow uppercase tracking-wide mb-3">Architectural Diagram</h3>
              <div class="bg-cream/40 dark:bg-gray-800 p-4 overflow-hidden shadow-md border-2 border-mocha dark:border-DMyellow">
                <img src="/assets/vm/cdiagram.png" alt="SmartBite Architectural Diagram" class="w-full h-auto max-w-xl mx-auto" />
              </div>
            </div>
            
            <!-- Components Used -->
            <div class="border-2 border-mocha dark:border-DMyellow shadow-lg p-8 bg-cream/40 dark:bg-gray-800">
              <h2 class="font-pixel text-lg text-mocha dark:text-DMyellow uppercase tracking-wider mb-4">Core Components</h2>
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
      </div>
    </div>

    <Footer class="relative z-10" />
</template>

<script setup>
  import { inject } from "vue";
  import Header from "../components/Header.vue";
  import Footer from "../components/Footer.vue";
  const isDarkMode = inject("isDarkMode");
  </script>