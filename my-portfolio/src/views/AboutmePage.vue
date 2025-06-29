<template>
  <div
    class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
  >
    <!-- Subtle background pattern -->
    <div
      class="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-3 pointer-events-none"
    ></div>

    <!-- Header with proper spacing -->
    <div class="mb-10 sm:mb-16 relative z-10">
      <Header />
    </div>

    <!-- Main content with enhanced styling -->
    <div class="flex flex-col items-start min-h-screen relative z-10">
      <div
        class="mx-4 sm:mx-10 sm:ml-auto sm:mr-auto sm:w-full max-w-[1200px] sm:px-10"
      >
        <div>
          <div class="flex flex-col items-start mb-8">
            <!-- Page title with decorative element -->
            <div class="relative mb-8 sm:mb-12 w-full">
              <h2
                class="font-tommy font-medium text-2xl sm:text-4xl mb-2 text-gray-800 dark:text-white"
              >
                Who I Am<span class="text-LMBlue dark:text-DMyellow">...</span>
              </h2>
              <div
                class="w-20 h-1 bg-gradient-to-r from-LMBlue to-purple-500 dark:from-DMyellow dark:to-amber-500 rounded-full"
              ></div>
            </div>

            <!-- Profile section with enhanced styling -->
            <div class="w-full relative group">
              <!-- Decorative background -->
              <div
                class="absolute -inset-1 bg-gradient-to-r from-LMBlue/20 via-purple-500/20 to-pink-500/20 dark:from-DMyellow/20 dark:via-amber-500/20 dark:to-orange-500/20 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-all duration-700"
              ></div>

              <div
                class="relative p-6 sm:p-8 border border-gray-200 dark:border-gray-700 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                <!-- Animated background pattern -->
                <div
                  class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-LMBlue/5 to-purple-500/5 dark:from-DMyellow/5 dark:to-amber-500/5 rounded-full blur-3xl animate-pulse"
                ></div>
                <div
                  class="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-pink-500/5 to-LMBlue/5 dark:from-orange-500/5 dark:to-DMyellow/5 rounded-full blur-2xl animate-pulse delay-1000"
                ></div>

                <div
                  class="relative z-10 flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-8"
                >
                  <!-- Profile Avatar Section -->
                  <div class="flex-shrink-0 relative group/avatar">
                    <div
                      class="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 relative"
                    >
                      <!-- Static gradient border -->
                      <div
                        class="absolute inset-0 bg-gradient-to-r from-LMBlue via-purple-500 to-pink-500 dark:from-DMyellow dark:via-amber-500 dark:to-orange-500 rounded-full p-1"
                      >
                        <div
                          class="w-full h-full bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center overflow-hidden"
                        >
                          <!-- Profile image -->
                          <img
                            src="/assets/pp/dp.jpeg"
                            alt="Hafsah Joomun"
                            class="w-full h-full object-cover rounded-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Content Section -->
                  <div class="flex-1 space-y-4">
                    <!-- Name and Title -->
                    <div class="space-y-2">
                      <div class="flex items-center gap-3">
                        <h1
                          class="font-lemonmilk font-bold text-2xl sm:text-3xl lg:text-4xl text-LMBlue dark:text-DMyellow"
                        >
                          Hafsah Joomun
                        </h1>
                      </div>

                      <!-- Professional title with animated typing effect -->
                      <div
                        class="flex items-center gap-2 text-lg sm:text-xl text-gray-600 dark:text-gray-300"
                      >
                        <span class="font-medium"
                          >Computer Science Student</span
                        >

                      </div>

                      <!-- Quick stats -->
                      <div class="flex flex-wrap gap-4 mt-3">
                        <div
                          class="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                        >
                          <svg
                            class="w-4 h-4 text-LMBlue dark:text-DMyellow"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            ></path>
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            ></path>
                          </svg>
                          <span>Mauritius</span>
                        </div>
                      </div>
                    </div>

                    <!-- Description with better typography -->
                    <div class="space-y-4">
                      <div
                        class="prose prose-gray dark:prose-invert max-w-none"
                      >
                        <p
                          class="text-gray-700 dark:text-gray-300 leading-relaxed text-base sm:text-lg"
                        >
                          Hi there! 👋 I'm a passionate
                          <span
                            class="font-semibold text-LMBlue dark:text-DMyellow"
                            >Computer Science student</span
                          >
                          who loves exploring creative and practical tech
                          solutions.
                        </p>
                        <p
                          class="text-gray-700 dark:text-gray-300 leading-relaxed text-base sm:text-lg"
                        >
                          I've worked on diverse projects including
                          <span class="font-medium">software design</span>,
                          <span class="font-medium">robotics</span>, and
                          <span class="font-medium">game development</span>,
                          always seeking challenges that push me to think
                          differently and grow as a developer.
                        </p>
                        <p
                          class="text-gray-600 dark:text-gray-400 text-sm sm:text-base italic"
                        >
                          When I'm not coding, you'll find me building with
                          Legos 🧱 or exploring virtual worlds in video games 🎮
                        </p>
                      </div>
                    </div>

                    <!-- Enhanced CTA section -->
                    <div class="flex flex-col sm:flex-row gap-3 pt-2">
                      <button
                        @click="openCV"
                        class="group relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-white bg-LMBlue dark:bg-DMyellow rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                      >
                        <span
                          class="absolute inset-0 w-full h-full bg-gradient-to-r from-LMBlue to-purple-500 dark:from-DMyellow dark:to-amber-500"
                        ></span>
                        <span
                          class="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 dark:bg-orange-500 rounded-full opacity-30 group-hover:rotate-90 ease"
                        ></span>
                        <span
                          class="relative text-white dark:text-gray-900 font-inter font-medium flex items-center gap-2"
                        >
                          <svg
                            class="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            ></path>
                          </svg>
                          View My CV
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Collapsible Sections with enhanced styling -->
            <div class="mt-6 w-full">
              <!-- Personal Life & Interests Section -->
              <div
                class="mb-6 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div
                  @click="toggleSection('personal')"
                  class="cursor-pointer flex items-center justify-between p-3 sm:p-4 bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-700"
                >
                  <div class="flex items-center">
                    <div
                      class="w-1 h-6 bg-LMBlue dark:bg-DMyellow rounded-full mr-2 sm:mr-3"
                    ></div>
                    <h2
                      class="font-lemonmilk font-medium text-base sm:text-xl text-gray-800 dark:text-white"
                    >
                      Personal Life & Interests
                    </h2>
                  </div>
                  <span
                    class="text-LMBlue dark:text-DMyellow text-xl sm:text-2xl mr-2 sm:mr-4 transition-transform duration-300"
                    :class="{ 'transform rotate-180': isOpen.personal }"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 sm:h-6 sm:w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </div>

                <div
                  v-show="isOpen.personal"
                  class="p-4 sm:p-6 transition-all duration-500"
                >
                  <div class="space-y-6">
                    <!-- Hobbies & Interests -->
                    <div
                      class="border border-gray-200 dark:border-gray-600 rounded-lg p-4 bg-gray-50 dark:bg-gray-700/50 hover:border-LMBlue dark:hover:border-DMyellow transition-all duration-300"
                    >
                      <div class="flex items-center mb-4">
                        <div
                          class="w-8 h-8 bg-LMBlue dark:bg-DMyellow rounded-md flex items-center justify-center mr-3"
                        >
                          <svg
                            class="w-4 h-4 text-white dark:text-gray-900"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293H15M9 10v4a2 2 0 002 2h2a2 2 0 002-2v-4M9 10V9a2 2 0 012-2h2a2 2 0 012 2v1"
                            ></path>
                          </svg>
                        </div>
                        <h3
                          class="font-lemonmilk text-sm sm:text-base text-gray-800 dark:text-white"
                        >
                          What I Love Doing
                        </h3>
                      </div>
                      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div
                          class="flex items-start space-x-3 p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-600"
                        >
                          <div class="text-2xl">🎮</div>
                          <div class="flex-1">
                            <h4
                              class="font-medium text-gray-800 dark:text-white"
                            >
                              Gaming
                            </h4>
                            <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">
                              Started with classics on my old console. Now
                              I'm deep into indie games and anything with a good
                              story. Nothing beats a weekend gaming session.
                            </p>
                            <router-link to="/gaming" 
                                class="group inline-flex items-center gap-2 px-4 py-2 bg-LMBlue dark:bg-DMyellow text-white dark:text-gray-900 rounded-full hover:bg-LMBlue/80 dark:hover:bg-DMyellow/80 transition-all duration-200 hover:scale-105 shadow-sm hover:shadow-md">
                                
                                <!-- Text -->
                                <span class="text-sm font-medium">View more</span>
                                
                                <!-- Arrow icon -->
                                <svg class="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                                </svg>
                            </router-link>
                                                    </div>
                        </div>
                        <div
                          class="flex items-start space-x-3 p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-600"
                        >
                          <div class="text-2xl">🧱</div>
                          <div>
                            <h4
                              class="font-medium text-gray-800 dark:text-white"
                            >
                              LEGO Building
                            </h4>
                            <p class="text-sm text-gray-600 dark:text-gray-400">
                              Been collecting since my teen years. My desk is
                              cluttered with half-finished builds and random
                              pieces. There's something therapeutic about
                              following those instruction manuals.
                            </p>
                          </div>
                        </div>
                        <div
                          class="flex items-start space-x-3 p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-600"
                        >
                          <div class="text-2xl">🌿</div>
                          <div>
                            <h4
                              class="font-medium text-gray-800 dark:text-white"
                            >
                              Nature Walks
                            </h4>
                            <p class="text-sm text-gray-600 dark:text-gray-400">
                              Mauritius has some incredible trails and hidden
                              spots. I love discovering new paths and taking
                              photos of random insects or weird plants I find.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- Background & Values -->
                    <div
                      class="border border-gray-200 dark:border-gray-600 rounded-lg p-4 bg-gray-50 dark:bg-gray-700/50 hover:border-LMBlue dark:hover:border-DMyellow transition-all duration-300"
                    >
                      <div class="flex items-center mb-4">
                        <div
                          class="w-8 h-8 bg-LMBlue dark:bg-DMyellow rounded-md flex items-center justify-center mr-3"
                        >
                          <svg
                            class="w-4 h-4 text-white dark:text-gray-900"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                            ></path>
                          </svg>
                        </div>
                        <h3
                          class="font-lemonmilk text-sm sm:text-base text-gray-800 dark:text-white"
                        >
                          How I See Things
                        </h3>
                      </div>
                      <div
                        class="prose prose-gray dark:prose-invert max-w-none"
                      >
                        <p
                          class="text-gray-700 dark:text-gray-300 leading-relaxed mb-4"
                        >
                          I'm the kind of person who gets excited about small
                          details - whether it's finding the perfect LEGO piece
                          or discovering a bug in code that's been hiding for
                          a long time.
                        </p>
                        <p
                          class="text-gray-700 dark:text-gray-300 leading-relaxed mb-4"
                        >
                          I believe that everything
                          should have a purpose, even if that purpose is just to
                          make someone smile or solve a problem they didn't know
                          they had.
                        </p>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Skills Section -->

              <div
                class="mb-6 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div
                  @click="toggleSection('skills')"
                  class="cursor-pointer flex items-center justify-between p-3 sm:p-4 bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-700"
                >
                  <div class="flex items-center">
                    <div
                      class="w-1 h-6 bg-LMBlue dark:bg-DMyellow rounded-full mr-2 sm:mr-3"
                    ></div>
                    <h2
                      class="font-lemonmilk font-medium text-base sm:text-xl text-gray-800 dark:text-white"
                    >
                      Skills
                    </h2>
                  </div>
                  <span
                    class="text-LMBlue dark:text-DMyellow text-xl sm:text-2xl mr-2 sm:mr-4 transition-transform duration-300"
                    :class="{ 'transform rotate-180': isOpen.skills }"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 sm:h-6 sm:w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </div>

                <div
                  v-show="isOpen.skills"
                  class="p-3 sm:p-4 transition-all duration-500"
                >
                  <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                    <!-- Problem-Solving -->
                    <div
                      class="flex items-center space-x-2 sm:space-x-3 p-3 sm:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-LMBlue dark:hover:border-DMyellow transition-colors duration-300"
                    >
                      <svg
                        class="w-5 h-5 sm:w-6 sm:h-6 text-LMBlue dark:text-DMyellow"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                        ></path>
                      </svg>
                      <span
                        class="text-gray-700 dark:text-lightGray font-medium text-sm sm:text-base"
                        >Problem-Solving</span
                      >
                    </div>

                    <!-- Web Development -->
                    <div
                      class="flex items-center space-x-2 sm:space-x-3 p-3 sm:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-LMBlue dark:hover:border-DMyellow transition-colors duration-300"
                    >
                      <svg
                        class="w-5 h-5 sm:w-6 sm:h-6 text-LMBlue dark:text-DMyellow"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        ></path>
                      </svg>
                      <span
                        class="text-gray-700 dark:text-lightGray font-medium text-sm sm:text-base"
                        >Web Development</span
                      >
                    </div>

                    <!-- Collaboration & Teamwork -->
                    <div
                      class="flex items-center space-x-2 sm:space-x-3 p-3 sm:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-LMBlue dark:hover:border-DMyellow transition-colors duration-300"
                    >
                      <svg
                        class="w-5 h-5 sm:w-6 sm:h-6 text-LMBlue dark:text-DMyellow"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        ></path>
                      </svg>
                      <span
                        class="text-gray-700 dark:text-lightGray font-medium text-sm sm:text-base"
                        >Communication</span
                      >
                    </div>

                    <!-- Version Control (Git) -->
                    <div
                      class="flex items-center space-x-2 sm:space-x-3 p-3 sm:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-LMBlue dark:hover:border-DMyellow transition-colors duration-300"
                    >
                      <svg
                        class="w-5 h-5 sm:w-6 sm:h-6 text-LMBlue dark:text-DMyellow"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        ></path>
                      </svg>
                      <span
                        class="text-gray-700 dark:text-lightGray font-medium text-sm sm:text-base"
                        >Version Control</span
                      >
                    </div>

                    <!-- Project Management -->
                    <div
                      class="flex items-center space-x-2 sm:space-x-3 p-3 sm:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-LMBlue dark:hover:border-DMyellow transition-colors duration-300"
                    >
                      <svg
                        class="w-5 h-5 sm:w-6 sm:h-6 text-LMBlue dark:text-DMyellow"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        ></path>
                      </svg>
                      <span
                        class="text-gray-700 dark:text-lightGray font-medium text-sm sm:text-base"
                        >Project Management</span
                      >
                    </div>

                    <!-- Power BI -->
                    <div
                      class="flex items-center space-x-2 sm:space-x-3 p-3 sm:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-LMBlue dark:hover:border-DMyellow transition-colors duration-300"
                    >
                      <svg
                        class="w-5 h-5 sm:w-6 sm:h-6 text-LMBlue dark:text-DMyellow"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        ></path>
                      </svg>
                      <span
                        class="text-gray-700 dark:text-lightGray font-medium text-sm sm:text-base"
                        >Power BI</span
                      >
                    </div>

                    <!-- ETL Processing -->
                    <div
                      class="flex items-center space-x-2 sm:space-x-3 p-3 sm:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-LMBlue dark:hover:border-DMyellow transition-colors duration-300"
                    >
                      <svg
                        class="w-5 h-5 sm:w-6 sm:h-6 text-LMBlue dark:text-DMyellow"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7c-2 0-3 1-3 3zm0 5h16M12 4v16"
                        ></path>
                      </svg>
                      <span
                        class="text-gray-700 dark:text-lightGray font-medium text-sm sm:text-base"
                        >ETL Processing
                      </span>
                    </div>

                    <!-- Programming -->
                    <div
                      class="flex items-center space-x-2 sm:space-x-3 p-3 sm:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-LMBlue dark:hover:border-DMyellow transition-colors duration-300"
                    >
                      <svg
                        class="w-5 h-5 sm:w-6 sm:h-6 text-LMBlue dark:text-DMyellow"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        ></path>
                      </svg>
                      <span
                        class="text-gray-700 dark:text-lightGray font-medium text-sm sm:text-base"
                        >Programming (Python, C, C++, Dart)</span
                      >
                    </div>

                    <!-- Database -->
                    <div
                      class="flex items-center space-x-2 sm:space-x-3 p-3 sm:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-LMBlue dark:hover:border-DMyellow transition-colors duration-300"
                    >
                      <svg
                        class="w-5 h-5 sm:w-6 sm:h-6 text-LMBlue dark:text-DMyellow"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7a2 2 0 00-2 2v12a2 2 0 002 2z"
                        ></path>
                      </svg>
                      <span
                        class="text-gray-700 dark:text-lightGray font-medium text-sm sm:text-base"
                        >Database (Firebase, MongoDB, SQL)</span
                      >
                    </div>

                    <!-- Robotics -->
                    <div
                      class="flex items-center space-x-2 sm:space-x-3 p-3 sm:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-LMBlue dark:hover:border-DMyellow transition-colors duration-300"
                    >
                      <svg
                        class="w-5 h-5 sm:w-6 sm:h-6 text-LMBlue dark:text-DMyellow"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        ></path>
                      </svg>
                      <span
                        class="text-gray-700 dark:text-lightGray font-medium text-sm sm:text-base"
                        >Robotics</span
                      >
                    </div>

                    <!-- Blockchain Development -->
                    <div
                      class="flex items-center space-x-2 sm:space-x-3 p-3 sm:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-LMBlue dark:hover:border-DMyellow transition-colors duration-300"
                    >
                      <svg
                        class="w-5 h-5 sm:w-6 sm:h-6 text-LMBlue dark:text-DMyellow"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                        ></path>
                      </svg>
                      <span
                        class="text-gray-700 dark:text-lightGray font-medium text-sm sm:text-base"
                        >Blockchain Development</span
                      >
                    </div>

                    <!-- Bash/Batch Scripting -->
                    <div
                      class="flex items-center space-x-2 sm:space-x-3 p-3 sm:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-LMBlue dark:hover:border-DMyellow transition-colors duration-300"
                    >
                      <svg
                        class="w-5 h-5 sm:w-6 sm:h-6 text-LMBlue dark:text-DMyellow"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        ></path>
                      </svg>
                      <span
                        class="text-gray-700 dark:text-lightGray font-medium text-sm sm:text-base"
                        >Bash/Batch Scripting</span
                      >
                    </div>

                    <!-- Informatica -->
                    <div
                      class="flex items-center space-x-2 sm:space-x-3 p-3 sm:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-LMBlue dark:hover:border-DMyellow transition-colors duration-300"
                    >
                      <svg
                        class="w-5 h-5 sm:w-6 sm:h-6 text-LMBlue dark:text-DMyellow"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                        ></path>
                      </svg>
                      <span
                        class="text-gray-700 dark:text-lightGray font-medium text-sm sm:text-base"
                        >Informatica</span
                      >
                    </div>
                  </div>
                </div>
              </div>

              <!-- Technologies & Tools Section -->
              <div
                class="mb-6 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div
                  @click="toggleSection('tools')"
                  class="cursor-pointer flex items-center justify-between p-3 sm:p-4 bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-700"
                >
                  <div class="flex items-center">
                    <div
                      class="w-1 h-6 bg-LMBlue dark:bg-DMyellow rounded-full mr-2 sm:mr-3"
                    ></div>
                    <h2
                      class="font-lemonmilk font-medium text-base sm:text-xl text-gray-800 dark:text-white"
                    >
                      Technologies & Tools
                    </h2>
                  </div>
                  <span
                    class="text-LMBlue dark:text-DMyellow text-xl sm:text-2xl mr-2 sm:mr-4 transition-transform duration-300"
                    :class="{ 'transform rotate-180': isOpen.tools }"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 sm:h-6 sm:w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </div>

                <div
                  v-show="isOpen.tools"
                  class="p-4 sm:p-6 transition-all duration-500"
                >
                  <div class="space-y-6">
                    <!-- Programming Languages -->
                    <div
                      class="border border-gray-200 dark:border-gray-600 rounded-lg p-4 bg-gray-50 dark:bg-gray-700/50 hover:border-LMBlue dark:hover:border-DMyellow transition-all duration-300"
                    >
                      <div class="flex items-center mb-3">
                        <div
                          class="w-8 h-8 bg-LMBlue dark:bg-DMyellow rounded-md flex items-center justify-center mr-3"
                        >
                          <svg
                            class="w-4 h-4 text-white dark:text-gray-900"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                            ></path>
                          </svg>
                        </div>
                        <h3
                          class="font-lemonmilk text-sm sm:text-base text-gray-800 dark:text-white"
                        >
                          Programming Languages
                        </h3>
                      </div>
                      <div class="flex flex-wrap gap-2">
                        <span
                          class="px-3 py-1.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-md text-xs sm:text-sm font-medium border border-gray-300 dark:border-gray-600 hover:border-LMBlue dark:hover:border-DMyellow hover:shadow-sm transition-all duration-200"
                          >JavaScript</span
                        >
                        <span
                          class="px-3 py-1.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-md text-xs sm:text-sm font-medium border border-gray-300 dark:border-gray-600 hover:border-LMBlue dark:hover:border-DMyellow hover:shadow-sm transition-all duration-200"
                          >Python</span
                        >
                        <span
                          class="px-3 py-1.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-md text-xs sm:text-sm font-medium border border-gray-300 dark:border-gray-600 hover:border-LMBlue dark:hover:border-DMyellow hover:shadow-sm transition-all duration-200"
                          >Java</span
                        >
                        <span
                          class="px-3 py-1.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-md text-xs sm:text-sm font-medium border border-gray-300 dark:border-gray-600 hover:border-LMBlue dark:hover:border-DMyellow hover:shadow-sm transition-all duration-200"
                          >C++</span
                        >
                        <span
                          class="px-3 py-1.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-md text-xs sm:text-sm font-medium border border-gray-300 dark:border-gray-600 hover:border-LMBlue dark:hover:border-DMyellow hover:shadow-sm transition-all duration-200"
                          >C</span
                        >
                        <span
                          class="px-3 py-1.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-md text-xs sm:text-sm font-medium border border-gray-300 dark:border-gray-600 hover:border-LMBlue dark:hover:border-DMyellow hover:shadow-sm transition-all duration-200"
                          >Dart</span
                        >
                      </div>
                    </div>

                    <!-- Frameworks & Libraries -->
                    <div
                      class="border border-gray-200 dark:border-gray-600 rounded-lg p-4 bg-gray-50 dark:bg-gray-700/50 hover:border-LMBlue dark:hover:border-DMyellow transition-all duration-300"
                    >
                      <div class="flex items-center mb-3">
                        <div
                          class="w-8 h-8 bg-LMBlue dark:bg-DMyellow rounded-md flex items-center justify-center mr-3"
                        >
                          <svg
                            class="w-4 h-4 text-white dark:text-gray-900"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                            ></path>
                          </svg>
                        </div>
                        <h3
                          class="font-lemonmilk text-sm sm:text-base text-gray-800 dark:text-white"
                        >
                          Frameworks & Libraries
                        </h3>
                      </div>
                      <div class="flex flex-wrap gap-2">
                        <span
                          class="px-3 py-1.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-md text-xs sm:text-sm font-medium border border-gray-300 dark:border-gray-600 hover:border-LMBlue dark:hover:border-DMyellow hover:shadow-sm transition-all duration-200"
                          >Vue.js</span
                        >
                        <span
                          class="px-3 py-1.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-md text-xs sm:text-sm font-medium border border-gray-300 dark:border-gray-600 hover:border-LMBlue dark:hover:border-DMyellow hover:shadow-sm transition-all duration-200"
                          >TailwindCSS</span
                        >
                        <span
                          class="px-3 py-1.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-md text-xs sm:text-sm font-medium border border-gray-300 dark:border-gray-600 hover:border-LMBlue dark:hover:border-DMyellow hover:shadow-sm transition-all duration-200"
                          >Bootstrap</span
                        >
                        <span
                          class="px-3 py-1.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-md text-xs sm:text-sm font-medium border border-gray-300 dark:border-gray-600 hover:border-LMBlue dark:hover:border-DMyellow hover:shadow-sm transition-all duration-200"
                          >Node.js</span
                        >
                        <span
                          class="px-3 py-1.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-md text-xs sm:text-sm font-medium border border-gray-300 dark:border-gray-600 hover:border-LMBlue dark:hover:border-DMyellow hover:shadow-sm transition-all duration-200"
                          >Flutter</span
                        >
                      </div>
                    </div>

                    <!-- Development Tools -->
                    <div
                      class="border border-gray-200 dark:border-gray-600 rounded-lg p-4 bg-gray-50 dark:bg-gray-700/50 hover:border-LMBlue dark:hover:border-DMyellow transition-all duration-300"
                    >
                      <div class="flex items-center mb-3">
                        <div
                          class="w-8 h-8 bg-LMBlue dark:bg-DMyellow rounded-md flex items-center justify-center mr-3"
                        >
                          <svg
                            class="w-4 h-4 text-white dark:text-gray-900"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                            ></path>
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            ></path>
                          </svg>
                        </div>
                        <h3
                          class="font-lemonmilk text-sm sm:text-base text-gray-800 dark:text-white"
                        >
                          Development Tools
                        </h3>
                      </div>
                      <div class="flex flex-wrap gap-2">
                        <span
                          class="px-3 py-1.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-md text-xs sm:text-sm font-medium border border-gray-300 dark:border-gray-600 hover:border-LMBlue dark:hover:border-DMyellow hover:shadow-sm transition-all duration-200"
                          >Git</span
                        >
                        <span
                          class="px-3 py-1.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-md text-xs sm:text-sm font-medium border border-gray-300 dark:border-gray-600 hover:border-LMBlue dark:hover:border-DMyellow hover:shadow-sm transition-all duration-200"
                          >GitHub</span
                        >
                        <span
                          class="px-3 py-1.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-md text-xs sm:text-sm font-medium border border-gray-300 dark:border-gray-600 hover:border-LMBlue dark:hover:border-DMyellow hover:shadow-sm transition-all duration-200"
                          >VS Code</span
                        >
                        <span
                          class="px-3 py-1.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-md text-xs sm:text-sm font-medium border border-gray-300 dark:border-gray-600 hover:border-LMBlue dark:hover:border-DMyellow hover:shadow-sm transition-all duration-200"
                          >Figma</span
                        >
                        <span
                          class="px-3 py-1.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-md text-xs sm:text-sm font-medium border border-gray-300 dark:border-gray-600 hover:border-LMBlue dark:hover:border-DMyellow hover:shadow-sm transition-all duration-200"
                          >Postman</span
                        >
                        <span
                          class="px-3 py-1.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-md text-xs sm:text-sm font-medium border border-gray-300 dark:border-gray-600 hover:border-LMBlue dark:hover:border-DMyellow hover:shadow-sm transition-all duration-200"
                          >Bash/Batch</span
                        >
                      </div>
                    </div>

                    <!-- Data & Analytics Tools -->
                    <div
                      class="border border-gray-200 dark:border-gray-600 rounded-lg p-4 bg-gray-50 dark:bg-gray-700/50 hover:border-LMBlue dark:hover:border-DMyellow transition-all duration-300"
                    >
                      <div class="flex items-center mb-3">
                        <div
                          class="w-8 h-8 bg-LMBlue dark:bg-DMyellow rounded-md flex items-center justify-center mr-3"
                        >
                          <svg
                            class="w-4 h-4 text-white dark:text-gray-900"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                            ></path>
                          </svg>
                        </div>
                        <h3
                          class="font-lemonmilk text-sm sm:text-base text-gray-800 dark:text-white"
                        >
                          Data & Analytics
                        </h3>
                      </div>
                      <div class="flex flex-wrap gap-2">
                        <span
                          class="px-3 py-1.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-md text-xs sm:text-sm font-medium border border-gray-300 dark:border-gray-600 hover:border-LMBlue dark:hover:border-DMyellow hover:shadow-sm transition-all duration-200"
                          >Power BI</span
                        >
                        <span
                          class="px-3 py-1.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-md text-xs sm:text-sm font-medium border border-gray-300 dark:border-gray-600 hover:border-LMBlue dark:hover:border-DMyellow hover:shadow-sm transition-all duration-200"
                          >Informatica</span
                        >
                        <span
                          class="px-3 py-1.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-md text-xs sm:text-sm font-medium border border-gray-300 dark:border-gray-600 hover:border-LMBlue dark:hover:border-DMyellow hover:shadow-sm transition-all duration-200"
                          >Talend ETL</span
                        >
                        <span
                          class="px-3 py-1.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-md text-xs sm:text-sm font-medium border border-gray-300 dark:border-gray-600 hover:border-LMBlue dark:hover:border-DMyellow hover:shadow-sm transition-all duration-200"
                          >Snowflake</span
                        >
                      </div>
                    </div>

                    <!-- Databases & Storage -->
                    <div
                      class="border border-gray-200 dark:border-gray-600 rounded-lg p-4 bg-gray-50 dark:bg-gray-700/50 hover:border-LMBlue dark:hover:border-DMyellow transition-all duration-300"
                    >
                      <div class="flex items-center mb-3">
                        <div
                          class="w-8 h-8 bg-LMBlue dark:bg-DMyellow rounded-md flex items-center justify-center mr-3"
                        >
                          <svg
                            class="w-4 h-4 text-white dark:text-gray-900"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7c0-2.21-3.582-4-8-4s-8 1.79-8 4m0 5c0 2.21 3.582 4 8 4s8-1.79 8-4"
                            ></path>
                          </svg>
                        </div>
                        <h3
                          class="font-lemonmilk text-sm sm:text-base text-gray-800 dark:text-white"
                        >
                          Databases & Storage
                        </h3>
                      </div>
                      <div class="flex flex-wrap gap-2">
                        <span
                          class="px-3 py-1.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-md text-xs sm:text-sm font-medium border border-gray-300 dark:border-gray-600 hover:border-LMBlue dark:hover:border-DMyellow hover:shadow-sm transition-all duration-200"
                          >MySQL</span
                        >
                        <span
                          class="px-3 py-1.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-md text-xs sm:text-sm font-medium border border-gray-300 dark:border-gray-600 hover:border-LMBlue dark:hover:border-DMyellow hover:shadow-sm transition-all duration-200"
                          >SQLite</span
                        >
                        <span
                          class="px-3 py-1.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-md text-xs sm:text-sm font-medium border border-gray-300 dark:border-gray-600 hover:border-LMBlue dark:hover:border-DMyellow hover:shadow-sm transition-all duration-200"
                          >MongoDB</span
                        >
                        <span
                          class="px-3 py-1.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-md text-xs sm:text-sm font-medium border border-gray-300 dark:border-gray-600 hover:border-LMBlue dark:hover:border-DMyellow hover:shadow-sm transition-all duration-200"
                          >Firebase</span
                        >
                        <span
                          class="px-3 py-1.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-md text-xs sm:text-sm font-medium border border-gray-300 dark:border-gray-600 hover:border-LMBlue dark:hover:border-DMyellow hover:shadow-sm transition-all duration-200"
                          >PostgreSQL</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Experience Section -->
              <div
                class="mb-6 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div
                  @click="toggleSection('experience')"
                  class="cursor-pointer flex items-center justify-between p-3 sm:p-4 bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-700"
                >
                  <div class="flex items-center">
                    <div
                      class="w-1 h-6 bg-LMBlue dark:bg-DMyellow rounded-full mr-2 sm:mr-3"
                    ></div>
                    <h2
                      class="font-lemonmilk font-medium text-base sm:text-xl text-gray-800 dark:text-white"
                    >
                      Experience
                    </h2>
                  </div>
                  <span
                    class="text-LMBlue dark:text-DMyellow text-xl sm:text-2xl mr-2 sm:mr-4 transition-transform duration-300"
                    :class="{ 'transform rotate-180': isOpen.experience }"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 sm:h-6 sm:w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </div>

                <div
                  v-show="isOpen.experience"
                  class="p-3 sm:p-4 transition-all duration-500"
                >
                  <div
                    class="mb-6 p-3 sm:p-4 border-l-4 border-LMBlue dark:border-DMyellow bg-gray-50 dark:bg-gray-700 rounded-r-lg"
                  >
                    <div
                      class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2"
                    >
                      <h3
                        class="font-lemonmilk text-base sm:text-lg text-gray-800 dark:text-white"
                      >
                        Pick and Buy Ltd
                      </h3>
                      <span
                        class="px-2 py-1 bg-LMBlue/10 dark:bg-DMyellow/10 text-LMBlue dark:text-DMyellow rounded-full text-xs sm:text-sm font-medium mt-1 sm:mt-0 inline-block"
                      >
                        May 2024 - August 2024
                      </span>
                    </div>
                    <ul
                      class="mt-3 list-disc pl-4 sm:pl-6 text-gray-700 dark:text-gray-300 space-y-1 sm:space-y-2 text-sm sm:text-base"
                    >
                      <li class="leading-relaxed">
                        Engaged with stakeholders to gather requirements and
                        identify relevant data sources.
                      </li>
                      <li class="leading-relaxed">
                        Used SQL to query, clean, and transform data for BI
                        dashboards.
                      </li>
                      <li class="leading-relaxed">
                        Created ETL pipelines to extract, transform, and load
                        data using Talend.
                      </li>
                      <li class="leading-relaxed">
                        Developed Power BI dashboards based on stakeholder
                        requirements.
                      </li>
                      <li class="leading-relaxed">
                        Optimised Power BI dashboards to reduce load time and
                        make them more efficient.
                      </li>
                      <li class="leading-relaxed">
                        Trained in data warehousing concepts and worked on data
                        warehouse project using Snowflake.
                      </li>
                      <li class="leading-relaxed">
                        Debugged existing Java code and improved performance of
                        Talend scripts.
                      </li>
                      <li class="leading-relaxed">
                        Optimised and troubleshooted existing ETL processes by
                        refactoring Java code to improve performance and
                        reliability.
                      </li>
                    </ul>
                  </div>

                  <div
                    class="p-3 sm:p-4 border-l-4 border-LMBlue dark:border-DMyellow bg-gray-50 dark:bg-gray-700 rounded-r-lg"
                  >
                    <div
                      class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2"
                    >
                      <h3
                        class="font-lemonmilk text-base sm:text-lg text-gray-800 dark:text-white"
                      >
                        IDP Education Ltd
                      </h3>
                      <span
                        class="px-2 py-1 bg-LMBlue/10 dark:bg-DMyellow/10 text-LMBlue dark:text-DMyellow rounded-full text-xs sm:text-sm font-medium mt-1 sm:mt-0 inline-block"
                      >
                        2021-2023 | Part time
                      </span>
                    </div>
                    <ul
                      class="mt-3 list-disc pl-4 sm:pl-6 text-gray-700 dark:text-gray-300 space-y-1 sm:space-y-2 text-sm sm:text-base"
                    >
                      <li class="leading-relaxed">
                        Helped students choose their ideal study abroad
                        destinations based on their goals.
                      </li>
                      <li class="leading-relaxed">
                        Followed up regularly to keep students informed and on
                        track during the application process.
                      </li>
                      <li class="leading-relaxed">
                        Managed the organisation's social media accounts.
                      </li>

                      <li class="leading-relaxed">
                        Analysed social media data to enhance audience
                        engagement.
                      </li>
                      <li class="leading-relaxed">
                        Participated in educational fairs, assisting with
                        registration and cleaning data for analysis.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- Education Section -->
              <div
                class="mb-6 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div
                  @click="toggleSection('education')"
                  class="cursor-pointer flex items-center justify-between p-3 sm:p-4 bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-700"
                >
                  <div class="flex items-center">
                    <div
                      class="w-1 h-6 bg-LMBlue dark:bg-DMyellow rounded-full mr-2 sm:mr-3"
                    ></div>
                    <h2
                      class="font-lemonmilk font-medium text-base sm:text-xl text-gray-800 dark:text-white"
                    >
                      Education
                    </h2>
                  </div>
                  <span
                    class="text-LMBlue dark:text-DMyellow text-xl sm:text-2xl mr-2 sm:mr-4 transition-transform duration-300"
                    :class="{ 'transform rotate-180': isOpen.education }"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 sm:h-6 sm:w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </div>

                <div
                  v-show="isOpen.education"
                  class="p-3 sm:p-4 transition-all duration-500"
                >
                  <div
                    class="p-3 sm:p-4 border-l-4 border-LMBlue dark:border-DMyellow bg-gray-50 dark:bg-gray-700 rounded-r-lg mb-4 sm:mb-6"
                  >
                    <div
                      class="flex flex-col sm:flex-row sm:items-center sm:justify-between"
                    >
                      <h3
                        class="font-lemonmilk text-base sm:text-lg text-gray-800 dark:text-white"
                      >
                        Middlesex University Mauritius
                      </h3>
                      <span
                        class="px-2 py-1 bg-LMBlue/10 dark:bg-DMyellow/10 text-LMBlue dark:text-DMyellow rounded-full text-xs sm:text-sm font-medium mt-1 sm:mt-0 inline-block"
                      >
                        2023-2025
                      </span>
                    </div>
                    <p
                      class="mt-2 text-gray-700 dark:text-gray-300 text-sm sm:text-base"
                    >
                      BSc Computer Science
                    </p>
                  </div>

                  <div
                    class="p-3 sm:p-4 border-l-4 border-LMBlue dark:border-DMyellow bg-gray-50 dark:bg-gray-700 rounded-r-lg"
                  >
                    <div
                      class="flex flex-col sm:flex-row sm:items-center sm:justify-between"
                    >
                      <h3
                        class="font-lemonmilk text-base sm:text-lg text-gray-800 dark:text-white"
                      >
                        Queen Elizabeth College
                      </h3>
                      <span
                        class="px-2 py-1 bg-LMBlue/10 dark:bg-DMyellow/10 text-LMBlue dark:text-DMyellow rounded-full text-xs sm:text-sm font-medium mt-1 sm:mt-0 inline-block"
                      >
                        2015-2022
                      </span>
                    </div>
                    <p
                      class="mt-2 text-gray-700 dark:text-gray-300 text-sm sm:text-base"
                    >
                      High School
                    </p>
                  </div>
                </div>
              </div>

              <!-- Certifications Section -->
              <div
                class="mb-6 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div
                  @click="toggleSection('certifications')"
                  class="cursor-pointer flex items-center justify-between p-3 sm:p-4 bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-700"
                >
                  <div class="flex items-center">
                    <div
                      class="w-1 h-6 bg-LMBlue dark:bg-DMyellow rounded-full mr-2 sm:mr-3"
                    ></div>
                    <h2
                      class="font-lemonmilk font-medium text-base sm:text-xl text-gray-800 dark:text-white"
                    >
                      Certifications
                    </h2>
                  </div>
                  <span
                    class="text-LMBlue dark:text-DMyellow text-xl sm:text-2xl mr-2 sm:mr-4 transition-transform duration-300"
                    :class="{ 'transform rotate-180': isOpen.certifications }"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 sm:h-6 sm:w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </div>

                <div
                  v-show="isOpen.certifications"
                  class="p-3 sm:p-4 transition-all duration-500"
                >
                  <div
                    class="p-3 sm:p-4 border-l-4 border-LMBlue dark:border-DMyellow bg-gray-50 dark:bg-gray-700 rounded-r-lg"
                  >
                    <div
                      class="flex flex-col sm:flex-row sm:items-center sm:justify-between"
                    >
                      <h3
                        class="font-lemonmilk text-base sm:text-lg text-gray-800 dark:text-white"
                      >
                        Certified in Cybersecurity (CC)
                      </h3>
                      <span
                        class="px-2 py-1 bg-LMBlue/10 dark:bg-DMyellow/10 text-LMBlue dark:text-DMyellow rounded-full text-xs sm:text-sm font-medium mt-1 sm:mt-0 inline-block"
                      >
                        ISC2
                      </span>
                    </div>
                    <p
                      class="mt-2 text-gray-700 dark:text-gray-300 text-sm sm:text-base"
                    >
                      Professional certification in cybersecurity fundamentals
                      and best practices
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer
      class="border-t-2 border-x-0 mt-16 border-gray-300 dark:border-gray-700 bg-white dark:bg-DMdarkGray flex flex-row items-center justify-center relative z-10"
    >
      <div
        class="w-full max-w-[1200px] flex my-2 flex-row items-center justify-between p-2"
      >
        <div class="mx-4 sm:mx-8">
          <span class="text-gray-600 dark:text-gray-300 text-sm sm:text-base"
            >© 2024 HAFSAH JOOMUN</span
          >
        </div>
        <div class="mx-4 sm:mx-8 flex flex-row">
          <router-link to="/aboutme">
            <a
              class="text-LMBlue dark:text-DMyellow font-light hover:underline text-sm sm:text-base"
              >About me</a
            >
          </router-link>
          <span class="text-gray-500 dark:text-gray-400 font-light mx-2"
            >|</span
          >
          <router-link to="/blogs">
            <a
              class="text-LMBlue dark:text-DMyellow fontlight hover:underline text-sm sm:text-base"
              >Blogs</a
            >
          </router-link>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Header from "../components/Header.vue";

const openCV = () => {
  const cvPath = "hafsah_joomun_cv.pdf";
  window.open(cvPath, "_blank");
};

const isOpen = ref({
  skills: true,
  tools: true,
  experience: true,
  education: true,
  certifications: true,
  personal: true,
});

const toggleSection = (section) => {
  isOpen.value[section] = !isOpen.value[section];
};
</script>

<style>
/* Background pattern */
.bg-grid-pattern {
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.05) 1px,
      transparent 1px
    ),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
  background-size: 20px 20px;
}

/* Custom animations */
@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin-slow {
  animation: spin-slow 8s linear infinite;
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
