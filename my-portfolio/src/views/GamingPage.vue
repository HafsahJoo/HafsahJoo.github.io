<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
    <!-- Subtle background pattern -->
    <div class="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-3 pointer-events-none"></div>

    <!-- Header with proper spacing -->
    <div class="mb-10 sm:mb-16 relative z-10">
      <Header />
    </div>

    <!-- Main content with enhanced styling -->
    <div class="flex flex-col items-start min-h-screen relative z-10">
      <div class="mx-4 sm:mx-10 sm:ml-auto sm:mr-auto sm:w-full max-w-[1200px] sm:px-10">
        <div>
          <div class="flex flex-col items-start mb-8">
            <!-- Page title with decorative element -->
            <div class="relative mb-8 sm:mb-12 w-full">
              <h2 class="font-tommy font-medium text-2xl sm:text-4xl mb-2 text-gray-800 dark:text-white">
                My Gaming Timeline<span class="text-LMBlue dark:text-DMyellow">...</span>
              </h2>
              <div class="w-24 h-1 bg-gradient-to-r from-LMBlue to-purple-500 dark:from-DMyellow dark:to-amber-500 rounded-full"></div>
            </div>

            <!-- Gaming Timeline -->
            <div class="w-full relative">
              <!-- Vertical Timeline Line -->
              <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-LMBlue via-purple-500 to-pink-500 dark:from-DMyellow dark:via-amber-500 dark:to-orange-500"></div>

              <!-- Timeline Items -->
              <div class="space-y-12">
                
                <!-- Childhood Era - PSP & Nintendo DS -->
                <div class="relative flex items-start">
                  <div class="absolute left-6 w-4 h-4 bg-LMBlue dark:bg-DMyellow rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>
                  <div class="ml-16 group w-full">
                    <div class="relative p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col">
                      <!-- Timeline badge -->
                      <div class="absolute -top-3 left-4 px-3 py-1 bg-gradient-to-r from-LMBlue to-purple-500 dark:from-DMyellow dark:to-amber-500 text-white dark:text-gray-900 text-sm font-medium rounded-full">
                        Childhood
                      </div>
                      
                      <div class="flex items-start gap-4 flex-1">
                        <div class="text-4xl">🎮</div>
                        <div class="flex-1">
                          <h3 class="font-lemonmilk text-lg text-gray-800 dark:text-white mb-2">
                            Handheld Beginnings
                          </h3>
                          <p class="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-3">
                            My gaming journey started on handhelds; first the <span class="font-semibold text-LMBlue dark:text-DMyellow">PSP</span>, then the <span class="font-semibold text-LMBlue dark:text-DMyellow">Nintendo DS</span>. These portable consoles introduced me to the joy of gaming on the go. The Mario series quickly became a favorite, and simulation titles like Cooking Mama were hours of pure fun.
                          </p>
                          <div class="inline-flex items-center gap-1 px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 text-xs rounded-full mt-auto">
                            <span>❤️</span>
                            <span>Mario - All-time Favorite</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Pre-Teen Era - Nintendo Wii -->
                <div class="relative flex items-start">
                  <div class="absolute left-6 w-4 h-4 bg-purple-500 dark:bg-amber-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>
                  <div class="ml-16 group w-full">
                    <div class="relative p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col">
                      <div class="absolute -top-3 left-4 px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 dark:from-amber-500 dark:to-orange-500 text-white dark:text-gray-900 text-sm font-medium rounded-full">
                        Pre-Teen Years
                      </div>
                      
                      <div class="flex items-start gap-4 flex-1">
                        <div class="text-4xl">🍄</div>
                        <div class="flex-1">
                          <h3 class="font-lemonmilk text-lg text-gray-800 dark:text-white mb-2">
                            Console Gaming Revolution
                          </h3>
                          <p class="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                            The <span class="font-semibold text-LMBlue dark:text-DMyellow">Nintendo Wii</span> changed everything. Motion controls made games  feel incredibly lifelike. I also played FIFA and racing games. Around this time, I discovered <span class="font-semibold text-LMBlue dark:text-DMyellow">Habbo Hotel</span> on PC—my first deep dive into an online world filled with player-run rooms, economies, and social communities.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Teen Era - Laptop & iPad -->
                <div class="relative flex items-start">
                  <div class="absolute left-6 w-4 h-4 bg-pink-500 dark:bg-orange-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>
                  <div class="ml-16 group w-full">
                    <div class="relative p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col">
                      <div class="absolute -top-3 left-4 px-3 py-1 bg-gradient-to-r from-pink-500 to-red-500 dark:from-orange-500 dark:to-red-500 text-white dark:text-gray-900 text-sm font-medium rounded-full">
                        Teen Years
                      </div>
                      
                      <div class="flex items-start gap-4 flex-1">
                        <div class="text-4xl">💻</div>
                        <div class="flex-1">
                          <h3 class="font-lemonmilk text-lg text-gray-800 dark:text-white mb-2">
                            Mobile & Online Gaming Era
                          </h3>
                          <p class="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                            Played <span class="font-semibold text-LMBlue dark:text-DMyellow">Call of Duty</span> and <span class="font-semibold text-LMBlue dark:text-DMyellow">PUBG</span> and other games on my Ipad. Meanwhile, my love for <span class="font-semibold text-LMBlue dark:text-DMyellow">Habbo</span> continued growing. I've actually been playing it for 12 years now! It taught me about virtual economies and creative expression.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Recently - Gaming PC -->
                <div class="relative flex items-start">
                  <div class="absolute left-6 w-4 h-4 bg-blue-500 dark:bg-blue-400 rounded-full border-4 border-white dark:border-gray-900 shadow-lg animate-pulse"></div>
                  <div class="ml-16 group w-full">
                    <div class="relative p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col">
                      <div class="absolute -top-3 left-4 px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 dark:from-blue-400 dark:to-cyan-400 text-white dark:text-gray-900 text-sm font-medium rounded-full">
                        Recently
                      </div>
                      
                      <div class="flex items-start gap-4 flex-1">
                        <div class="text-4xl">🖥️</div>
                        <div class="flex-1">
                          <h3 class="font-lemonmilk text-lg text-gray-800 dark:text-white mb-2">
                            Gaming PC 
                          </h3>
                          <p class="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-3">
                            Recently bought my own <span class="font-semibold text-LMBlue dark:text-DMyellow">gaming PC</span>! It marked a new era of high-quality gaming for me.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Current Gaming -->
                <div class="relative flex items-start">
                  <div class="absolute left-6 w-4 h-4 bg-green-500 dark:bg-green-400 rounded-full border-4 border-white dark:border-gray-900 shadow-lg animate-pulse"></div>
                  <div class="ml-16 group w-full">
                    <div class="relative p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col">
                      <div class="absolute -top-3 left-4 px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 dark:from-green-400 dark:to-emerald-400 text-white dark:text-gray-900 text-sm font-medium rounded-full">
                        Current Obsession
                      </div>
                      
                      <div class="flex items-start gap-4 flex-1">
                        <div class="text-4xl">⛏️</div>
                        <div class="flex-1">
                          <h3 class="font-lemonmilk text-lg text-gray-800 dark:text-white mb-3">
                            Current Favorites
                          </h3>
                          
                          <!-- Current Games Grid -->
                          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-auto">
                            <div class="flex items-center gap-2 p-2 bg-white dark:bg-gray-800 rounded-lg border border-green-200 dark:border-green-700">
                              <span class="text-lg">⛏️</span>
                              <span class="text-xs font-medium text-gray-700 dark:text-gray-300">Minecraft</span>
                            </div>
                            <div class="flex items-center gap-2 p-2 bg-white dark:bg-gray-800 rounded-lg border border-blue-200 dark:border-blue-700">
                              <span class="text-lg">🏴‍☠️</span>
                              <span class="text-xs font-medium text-gray-700 dark:text-gray-300">Sea of Thieves</span>
                            </div>
                            <div class="flex items-center gap-2 p-2 bg-white dark:bg-gray-800 rounded-lg border border-orange-200 dark:border-orange-700">
                              <span class="text-lg">👨‍🍳</span>
                              <span class="text-xs font-medium text-gray-700 dark:text-gray-300">Overcooked</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <Footer class="relative z-10" />
  </div>
</template>

<script setup>
// Import necessary components for the Vue.js template
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
</script>

<style>
/* Background pattern for subtle visual texture */
.bg-grid-pattern {
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.05) 1px,
      transparent 1px
    ),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
  background-size: 20px 20px;
}

/* Prose styling for better text appearance */
.prose {
  max-width: none;
}

.prose p {
  margin-bottom: 1rem;
}

/* For very small screens, adjust spacing */
@media (max-width: 360px) {
  .mx-4 {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }

  .p-3 {
    padding: 0.5rem;
  }
}

/* Enhanced hover effects */
.group:hover .group-hover\:animate-spin {
  animation: spin 1s linear infinite;
}

/* Backdrop blur support */
@supports (backdrop-filter: blur(0)) {
  .backdrop-blur-sm {
    backdrop-filter: blur(4px);
  }
}
</style>