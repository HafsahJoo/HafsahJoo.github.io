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
            Classic Tetris Game
          </h1>
          <div
            class="w-20 h-1 bg-gradient-to-r from-mocha to-sage dark:from-DMyellow dark:to-amber-500 rounded-full"
          ></div>
        </div>
        <div
          class="w-full max-w-2xl mx-auto h-auto mb-8 overflow-hidden shadow-lg border-2 border-mocha dark:border-DMyellow bg-cream/40 dark:bg-gray-800"
        >
          <img
            src="/assets/tetris2.png"
            alt="Tetris Game Screenshot"
            class="w-full h-auto object-cover"
          />
        </div>
        <div class="w-full">
          <div
            class="font-inter text-text-secondary dark:text-gray-300 leading-relaxed space-y-6"
          >
            <p class="text-lg">
              This project is a faithful recreation of the classic Tetris game
              using HTML, CSS, and JavaScript. It captures the nostalgic feel of
              the original while incorporating modern web technologies for
              smooth gameplay and responsive design.
            </p>

            <div
              class="border-2 border-mocha dark:border-DMyellow shadow-lg p-8 bg-cream/40 dark:bg-gray-800"
            >
              <h2
                class="font-pixel text-lg text-mocha dark:text-DMyellow uppercase tracking-wider mb-4"
              >
                Game Features
              </h2>

              <div class="space-y-4">
                <div>
                  <h3
                    class="font-pixel text-sm text-mocha dark:text-DMyellow uppercase tracking-wide mb-2"
                  >
                    Authentic Gameplay
                  </h3>
                  <p>
                    The game faithfully reproduces the classic Tetris experience
                    with accurate piece movements, rotations, and line-clearing
                    mechanics. Players navigate falling tetrominos to create
                    complete rows which then disappear, earning points.
                  </p>
                </div>

                <div>
                  <h3
                    class="font-pixel text-sm text-mocha dark:text-DMyellow uppercase tracking-wide mb-2"
                  >
                    Score Tracking
                  </h3>
                  <p>
                    A real-time scoring system keeps track of points earned
                    through line clears, with bonuses for clearing multiple
                    lines simultaneously. The game also tracks the current
                    level, which increases the falling speed of pieces as you
                    progress.
                  </p>
                </div>

                <div>
                  <h3
                    class="font-pixel text-sm text-mocha dark:text-DMyellow uppercase tracking-wide mb-2"
                  >
                    User Accounts
                  </h3>
                  <p>
                    Players can create accounts to save their high scores and
                    track their progress over time. The login system securely
                    stores user data and allows for personalized gameplay
                    experiences.
                  </p>
                </div>

                <div>
                  <h3
                    class="font-pixel text-sm text-mocha dark:text-DMyellow uppercase tracking-wide mb-2"
                  >
                    Responsive Controls
                  </h3>
                  <p>
                    The game features keyboard controls for desktop play, with
                    left/right arrows to move pieces, up arrow to rotate, and
                    down arrow to speed up descent. The space bar allows for an
                    instant drop of the current piece.
                  </p>
                </div>
              </div>
            </div>

            <h2
              class="font-pixel text-lg text-mocha dark:text-DMyellow uppercase tracking-wider mt-8 mb-4"
            >
              Game Screens
            </h2>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3
                  class="font-pixel text-sm text-mocha dark:text-DMyellow uppercase tracking-wide mb-3"
                >
                  Sign-up Screen
                </h3>
                <div
                  class="bg-cream/40 dark:bg-gray-800 p-4 overflow-hidden shadow-md border-2 border-mocha dark:border-DMyellow"
                >
                  <img
                    src="/assets/tetris1.png"
                    alt="Tetris Sign-up Screen"
                    class="w-full h-auto"
                  />
                </div>
                <p class="mt-2 text-sm text-text-secondary dark:text-gray-400">
                  User registration page with clean design and simple form
                  fields.
                </p>
              </div>

              <div>
                <h3
                  class="font-pixel text-sm text-mocha dark:text-DMyellow uppercase tracking-wide mb-3"
                >
                  Gameplay Screen
                </h3>
                <div
                  class="bg-cream/40 dark:bg-gray-800 p-4 overflow-hidden shadow-md border-2 border-mocha dark:border-DMyellow"
                >
                  <img
                    src="/assets/tetris2.png"
                    alt="Tetris Gameplay Screen"
                    class="w-full h-auto"
                  />
                </div>
                <p class="mt-2 text-sm text-text-secondary dark:text-gray-400">
                  Main gameplay area showing falling blocks, score tracking, and
                  next piece preview.
                </p>
              </div>
            </div>

            <div
              class="border-2 border-mocha dark:border-DMyellow shadow-lg p-8 bg-cream/40 dark:bg-gray-800"
            >
              <h2
                class="font-pixel text-lg text-mocha dark:text-DMyellow uppercase tracking-wider mb-4"
              >
                Technical Implementation
              </h2>

              <div class="space-y-4">
                <div>
                  <h3
                    class="font-pixel text-sm text-mocha dark:text-DMyellow uppercase tracking-wide mb-2"
                  >
                    HTML Canvas
                  </h3>
                  <p>
                    The game board is built using HTML Canvas, which allows for
                    efficient rendering of game elements and smooth animations.
                    The canvas is updated on each frame to reflect the current
                    state of the game.
                  </p>
                </div>

                <div>
                  <h3
                    class="font-pixel text-sm text-mocha dark:text-DMyellow uppercase tracking-wide mb-2"
                  >
                    JavaScript Game Logic
                  </h3>
                  <p>
                    The core game mechanics are powered by JavaScript, handling
                    piece generation, movement calculations, collision
                    detection, and line clearing logic. The game loop uses
                    requestAnimationFrame for smooth performance.
                  </p>
                </div>

                <div>
                  <h3
                    class="font-pixel text-sm text-mocha dark:text-DMyellow uppercase tracking-wide mb-2"
                  >
                    CSS Styling
                  </h3>
                  <p>
                    Custom CSS provides the nostalgic look and feel of classic
                    Tetris while ensuring the interface is clean and modern.
                    Responsive design principles ensure the game is playable on
                    various screen sizes.
                  </p>
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