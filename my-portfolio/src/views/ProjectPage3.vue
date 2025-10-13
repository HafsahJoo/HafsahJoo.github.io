<template>
  <div
    class="min-h-screen bg-LMveryLightBeige dark:bg-black relative overflow-hidden"
  >
    <div
      class="absolute inset-0 bg-gradient-to-br from-LMlightBeige/20 via-transparent to-LMbeige/10 dark:from-gray-800/20 dark:via-transparent dark:to-gray-700/10"
    ></div>
    <div
      class="fixed inset-0 bg-grid-pattern-light dark:bg-grid-pattern-dark opacity-60 dark:opacity-40 pointer-events-none"
    ></div>

    <div class="mb-10 sm:mb-16 relative z-10">
      <Header />
    </div>

    <div class="max-w-[1200px] px-8 sm:px-28 mx-auto w-full relative z-10">
      <div class="flex flex-col items-start mb-8">
        <div class="flex justify-between items-center w-full mb-8">
          <router-link
            to="/"
            class="font-pixel text-xs uppercase tracking-wider inline-flex items-center px-4 py-2 bg-mocha hover:bg-sage dark:bg-gray-800 dark:hover:bg-DMyellow border-2 border-mocha dark:border-gray-600 text-white dark:text-DMyellow hover:text-charcoal dark:hover:text-black transition-all duration-300 hover:shadow-lg"
          >
            <span class="mr-2">&lt;</span> BACK_HOME
          </router-link>
        </div>

        <div class="relative mb-8 sm:mb-12 w-full">
          <h1
            class="font-pixel font-medium text-2xl sm:text-4xl mb-2 text-mocha dark:text-DMyellow uppercase"
          >
            Pacman: Python Chomping Adventure
          </h1>
          <div
            class="w-20 h-1 bg-gradient-to-r from-mocha to-sage dark:from-DMyellow dark:to-amber-500 rounded-full"
          ></div>
        </div>
        <div
          class="w-full max-w-lg mx-auto h-auto mb-8 overflow-hidden shadow-lg border-2 border-mocha dark:border-DMyellow bg-cream/40 dark:bg-gray-800"
        >
          <img
            src="/assets/pacman1.png"
            alt="Pacman Play Screen"
            class="w-full h-auto object-cover"
          />
        </div>
        <div class="w-full">
          <div
            class="font-inter text-text-secondary dark:text-gray-300 leading-relaxed space-y-6"
          >
            <p class="text-lg">
              Pacman is a Python-based game that brings the classic chomping
              adventure into the modern era with custom features, user accounts,
              and exciting mini-games. Built using the Pygame library, it offers
              a nostalgic yet fresh gaming experience.
            </p>

            <div class="flex justify-center my-6">
              <a
                href="https://github.com/HafsahJoo/pacman-game"
                target="_blank"
                rel="noopener noreferrer"
                class="font-pixel text-xs uppercase tracking-wider inline-flex items-center px-4 py-2 bg-mocha hover:bg-sage dark:bg-gray-800 dark:hover:bg-DMyellow border-2 border-mocha dark:border-gray-600 text-white dark:text-DMyellow hover:text-charcoal dark:hover:text-black transition-all duration-300 hover:shadow-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="mr-2"
                >
                  <path
                    d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                  ></path>
                </svg>
                VIEW_CODE
              </a>
            </div>

            <div
              class="border-2 border-mocha dark:border-DMyellow shadow-lg p-8 bg-cream/40 dark:bg-gray-800"
            >
              <h2
                class="font-pixel text-lg text-mocha dark:text-DMyellow uppercase tracking-wider mb-4"
              >
                Key Features
              </h2>

              <div class="space-y-4">
                <div>
                  <h3
                    class="font-pixel text-sm text-mocha dark:text-DMyellow uppercase tracking-wide mb-2"
                  >
                    User Accounts
                  </h3>
                  <p>
                    Each player can create and log into their personal account,
                    saving progress, scores, and unlocked characters for a
                    personalized gaming experience.
                  </p>
                </div>

                <div>
                  <h3
                    class="font-pixel text-sm text-mocha dark:text-DMyellow uppercase tracking-wide mb-2"
                  >
                    Character Selection
                  </h3>
                  <p>
                    Choose from a variety of Pacman characters, each with unique
                    visual styles and subtle gameplay advantages.
                  </p>
                </div>

                <div>
                  <h3
                    class="font-pixel text-sm text-mocha dark:text-DMyellow uppercase tracking-wide mb-2"
                  >
                    Main Game
                  </h3>
                  <p>
                    Navigate through challenging mazes, collect all the pellets
                    while avoiding ghosts. Special power-ups allow you to turn
                    the tables and chase the ghosts for bonus points.
                  </p>
                </div>

                <div>
                  <h3
                    class="font-pixel text-sm text-mocha dark:text-DMyellow uppercase tracking-wide mb-2"
                  >
                    Mini-Game
                  </h3>
                  <p>
                    Take a break from the main adventure with an engaging
                    mini-game that offers a different gameplay style while still
                    earning rewards for your main progress.
                  </p>
                </div>
              </div>
            </div>

            <h2
              class="font-pixel text-lg text-mocha dark:text-DMyellow uppercase tracking-wider mt-8 mb-4"
            >
              Game Screens
            </h2>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div>
                <h3
                  class="font-pixel text-sm text-mocha dark:text-DMyellow uppercase tracking-wide mb-3"
                >
                  Main Menu
                </h3>
                <div
                  class="bg-cream/40 dark:bg-gray-800 p-4 overflow-hidden shadow-md border-2 border-mocha dark:border-DMyellow"
                >
                  <img
                    src="/assets/pacman2.png"
                    alt="Pacman Main Menu"
                    class="w-full h-auto max-w-md mx-auto"
                  />
                </div>
              </div>

              <div>
                <h3
                  class="font-pixel text-sm text-mocha dark:text-DMyellow uppercase tracking-wide mb-3"
                >
                  Character Selection
                </h3>
                <div
                  class="bg-cream/40 dark:bg-gray-800 p-4 overflow-hidden shadow-md border-2 border-mocha dark:border-DMyellow"
                >
                  <img
                    src="/assets/pacman3.png"
                    alt="Character Selection Screen"
                    class="w-full h-auto max-w-md mx-auto"
                  />
                </div>
              </div>

              <div>
                <h3
                  class="font-pixel text-sm text-mocha dark:text-DMyellow uppercase tracking-wide mb-3"
                >
                  Gameplay
                </h3>
                <div
                  class="bg-cream/40 dark:bg-gray-800 p-4 overflow-hidden shadow-md border-2 border-mocha dark:border-DMyellow"
                >
                  <img
                    src="/assets/pacman4.png"
                    alt="Pacman Gameplay"
                    class="w-full h-auto max-w-md mx-auto"
                  />
                </div>
              </div>

              <div>
                <h3
                  class="font-pixel text-sm text-mocha dark:text-DMyellow uppercase tracking-wide mb-3"
                >
                  Mini-game
                </h3>
                <div
                  class="bg-cream/40 dark:bg-gray-800 p-4 overflow-hidden shadow-md border-2 border-mocha dark:border-DMyellow"
                >
                  <img
                    src="/assets/pacman5.png"
                    alt="Pacman Mini-game"
                    class="w-full h-auto max-w-md mx-auto"
                  />
                </div>
              </div>
            </div>

            <div
              class="border-2 border-mocha dark:border-DMyellow shadow-lg p-8 bg-cream/40 dark:bg-gray-800"
            >
              <h2
                class="font-pixel text-lg text-mocha dark:text-DMyellow uppercase tracking-wider mb-4"
              >
                Technical Stack
              </h2>
              <ul class="list-disc pl-6 space-y-2">
                <li>
                  <span class="font-medium">Core Technology:</span> Python 3.8+,
                  Pygame library for game development
                </li>
                <li>
                  <span class="font-medium">Graphics:</span> Custom pixel art
                  sprites, animations, and UI elements
                </li>
                <li>
                  <span class="font-medium">User Data:</span> SQLite database
                  for storing user accounts and game progress
                </li>
                <li>
                  <span class="font-medium">Sound:</span> Custom audio effects
                  and background music integration
                </li>
                <li>
                  <span class="font-medium">AI:</span> Custom pathfinding
                  algorithms for ghost movement patterns
                </li>
              </ul>
            </div>

            <div
              class="border-2 border-mocha dark:border-DMyellow shadow-lg p-8 bg-cream/40 dark:bg-gray-800"
            >
              <h2
                class="font-pixel text-lg text-mocha dark:text-DMyellow uppercase tracking-wider mb-4"
              >
                Development Process
              </h2>
              <ul class="list-disc pl-6 space-y-2">
                <li>
                  <span class="font-medium">Planning:</span> Created detailed
                  game design document outlining core mechanics and features
                </li>
                <li>
                  <span class="font-medium">Prototyping:</span> Built core
                  movement and collision systems to test gameplay feel
                </li>
                <li>
                  <span class="font-medium">Iterative Development:</span> Added
                  features incrementally with continuous testing
                </li>
                <li>
                  <span class="font-medium">Optimization:</span> Improved
                  rendering and game logic for smooth performance
                </li>
                <li>
                  <span class="font-medium">User Testing:</span> Gathered
                  feedback from testers to refine gameplay and fix issues
                </li>
              </ul>
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