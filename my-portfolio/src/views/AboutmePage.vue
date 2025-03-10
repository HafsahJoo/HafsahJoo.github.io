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
                                Who I Am<span class="text-LMBlue dark:text-DMyellow">...</span>
                            </h2>
                            <div
                                class="w-20 h-1 bg-gradient-to-r from-LMBlue to-purple-500 dark:from-DMyellow dark:to-amber-500 rounded-full">
                            </div>
                        </div>

                        <!-- Profile section with enhanced styling -->
                        <div
                            class="w-full p-4 sm:p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
                            <div>
                                <h1
                                    class="font-lemonmilk font-medium text-xl sm:text-3xl mb-4 text-LMBlue dark:text-DMyellow">
                                    Hafsah Joomun
                                </h1>
                                <p class="mb-3 text-gray-700 dark:text-lightGray leading-relaxed text-sm sm:text-base">
                                    Hi! I'm a 3rd year Computer Science student who loves exploring creative and
                                    practical tech
                                    solutions. I enjoy learning new things, following established practices, and adding
                                    my own
                                    creative touch.
                                    <br>I worked on projects like software design, robotics, and game development,
                                    always
                                    looking for challenges that make me think differently.
                                </p>
                                <p class="mb-4 text-gray-700 dark:text-lightGray text-sm sm:text-base">
                                    When I'm not coding, I'm either building with Legos or playing video games.
                                </p>
                                <div class="mt-2">
                                    <button @click="openCV"
                                        class="rounded-lg border border-LMBlue bg-LMBlue dark:border-DMyellow dark:bg-DMyellow px-4 sm:px-6 py-2 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                                        <span class="text-white font-inter font-medium text-sm sm:text-base">View my
                                            CV</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <!-- Collapsible Sections with enhanced styling -->
                        <div class="mt-6 w-full">
                            <!-- Skills Section -->
                            
                            <div
                                class="mb-6 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300">
                                <div @click="toggleSection('skills')"
                                    class="cursor-pointer flex items-center justify-between p-3 sm:p-4 bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-700">
                                    <div class="flex items-center">
                                        <div class="w-1 h-6 bg-LMBlue dark:bg-DMyellow rounded-full mr-2 sm:mr-3"></div>
                                        <h2
                                            class="font-lemonmilk font-medium text-base sm:text-xl text-gray-800 dark:text-white">
                                            Skills</h2>
                                    </div>
                                    <span
                                        class="text-LMBlue dark:text-DMyellow text-xl sm:text-2xl mr-2 sm:mr-4 transition-transform duration-300"
                                        :class="{ 'transform rotate-180': isOpen.skills }">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6"
                                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </span>
                                </div>

                                <div v-show="isOpen.skills" class="p-3 sm:p-4 transition-all duration-500">
                                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                                        <!-- Problem-Solving -->
                                        <div
                                            class="flex items-center space-x-2 sm:space-x-3 p-3 sm:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-LMBlue dark:hover:border-DMyellow transition-colors duration-300">
                                            <svg class="w-5 h-5 sm:w-6 sm:h-6 text-LMBlue dark:text-DMyellow"
                                                fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2">
                                                </path>
                                            </svg>
                                            <span
                                                class="text-gray-700 dark:text-lightGray font-medium text-sm sm:text-base">Problem-Solving</span>
                                        </div>

                                        <!-- Web Development -->
                                        <div
                                            class="flex items-center space-x-2 sm:space-x-3 p-3 sm:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-LMBlue dark:hover:border-DMyellow transition-colors duration-300">
                                            <svg class="w-5 h-5 sm:w-6 sm:h-6 text-LMBlue dark:text-DMyellow"
                                                fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                                            </svg>
                                            <span
                                                class="text-gray-700 dark:text-lightGray font-medium text-sm sm:text-base">Web
                                                Development</span>
                                        </div>

                                        <!-- Collaboration & Teamwork -->
                                        <div
                                            class="flex items-center space-x-2 sm:space-x-3 p-3 sm:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-LMBlue dark:hover:border-DMyellow transition-colors duration-300">
                                            <svg class="w-5 h-5 sm:w-6 sm:h-6 text-LMBlue dark:text-DMyellow"
                                                fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z">
                                                </path>
                                            </svg>
                                            <span
                                                class="text-gray-700 dark:text-lightGray font-medium text-sm sm:text-base">Communication</span>
                                        </div>

                                        <!-- Version Control (Git) -->
                                        <div
                                            class="flex items-center space-x-2 sm:space-x-3 p-3 sm:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-LMBlue dark:hover:border-DMyellow transition-colors duration-300">
                                            <svg class="w-5 h-5 sm:w-6 sm:h-6 text-LMBlue dark:text-DMyellow"
                                                fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z">
                                                </path>
                                            </svg>
                                            <span
                                                class="text-gray-700 dark:text-lightGray font-medium text-sm sm:text-base">Version
                                                Control</span>
                                        </div>

                                        <!-- Project Management -->
                                        <div
                                            class="flex items-center space-x-2 sm:space-x-3 p-3 sm:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-LMBlue dark:hover:border-DMyellow transition-colors duration-300">
                                            <svg class="w-5 h-5 sm:w-6 sm:h-6 text-LMBlue dark:text-DMyellow"
                                                fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z">
                                                </path>
                                            </svg>
                                            <span
                                                class="text-gray-700 dark:text-lightGray font-medium text-sm sm:text-base">Project
                                                Management</span>
                                        </div>
                                        
                                        <!-- Power BI -->
                                        <div
                                            class="flex items-center space-x-2 sm:space-x-3 p-3 sm:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-LMBlue dark:hover:border-DMyellow transition-colors duration-300">
                                            <svg class="w-5 h-5 sm:w-6 sm:h-6 text-LMBlue dark:text-DMyellow"
                                                fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z">
                                                </path>
                                            </svg>
                                            <span
                                                class="text-gray-700 dark:text-lightGray font-medium text-sm sm:text-base">Power BI</span>
                                        </div>
                                        
                                        <!-- ETL Processing -->
                                        <div
                                            class="flex items-center space-x-2 sm:space-x-3 p-3 sm:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-LMBlue dark:hover:border-DMyellow transition-colors duration-300">
                                            <svg class="w-5 h-5 sm:w-6 sm:h-6 text-LMBlue dark:text-DMyellow"
                                                fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7c-2 0-3 1-3 3zm0 5h16M12 4v16">
                                                </path>
                                            </svg>
                                            <span
                                                class="text-gray-700 dark:text-lightGray font-medium text-sm sm:text-base">ETL Processing </span>
                                        </div>
                                        
                                        <!-- Programming -->
                                        <div
                                            class="flex items-center space-x-2 sm:space-x-3 p-3 sm:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-LMBlue dark:hover:border-DMyellow transition-colors duration-300">
                                            <svg class="w-5 h-5 sm:w-6 sm:h-6 text-LMBlue dark:text-DMyellow"
                                                fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4">
                                                </path>
                                            </svg>
                                            <span
                                                class="text-gray-700 dark:text-lightGray font-medium text-sm sm:text-base">Programming (Python, C, C++, Dart)</span>
                                        </div>
                                        
                                        
                                        
                                        <!-- Database -->
                                        <div
                                            class="flex items-center space-x-2 sm:space-x-3 p-3 sm:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-LMBlue dark:hover:border-DMyellow transition-colors duration-300">
                                            <svg class="w-5 h-5 sm:w-6 sm:h-6 text-LMBlue dark:text-DMyellow"
                                                fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7c-2 0-3 1-3 3z">
                                                </path>
                                            </svg>
                                            <span
                                                class="text-gray-700 dark:text-lightGray font-medium text-sm sm:text-base">Database (Firebase, MongoDB, SQL)</span>
                                        </div>
                                        
                                        <!-- Robotics -->
                                        <div
                                            class="flex items-center space-x-2 sm:space-x-3 p-3 sm:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-LMBlue dark:hover:border-DMyellow transition-colors duration-300">
                                            <svg class="w-5 h-5 sm:w-6 sm:h-6 text-LMBlue dark:text-DMyellow"
                                                fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                                                </path>
                                            </svg>
                                            <span
                                                class="text-gray-700 dark:text-lightGray font-medium text-sm sm:text-base">Robotics</span>
                                        </div>
                                        
                                        <!-- Blockchain Development -->
                                        <div
                                            class="flex items-center space-x-2 sm:space-x-3 p-3 sm:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-LMBlue dark:hover:border-DMyellow transition-colors duration-300">
                                            <svg class="w-5 h-5 sm:w-6 sm:h-6 text-LMBlue dark:text-DMyellow"
                                                fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1">
                                                </path>
                                            </svg>
                                            <span
                                                class="text-gray-700 dark:text-lightGray font-medium text-sm sm:text-base">Blockchain Development</span>
                                        </div>
                                        
                                        <!-- Bash/Batch Scripting -->
                                        <div
                                            class="flex items-center space-x-2 sm:space-x-3 p-3 sm:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-LMBlue dark:hover:border-DMyellow transition-colors duration-300">
                                            <svg class="w-5 h-5 sm:w-6 sm:h-6 text-LMBlue dark:text-DMyellow"
                                                fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z">
                                                </path>
                                            </svg>
                                            <span
                                                class="text-gray-700 dark:text-lightGray font-medium text-sm sm:text-base">Bash/Batch Scripting</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Technologies & Tools Section -->
                            <div
                                class="mb-6 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300">
                                <div @click="toggleSection('tools')"
                                    class="cursor-pointer flex items-center justify-between p-3 sm:p-4 bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-700">
                                    <div class="flex items-center">
                                        <div class="w-1 h-6 bg-LMBlue dark:bg-DMyellow rounded-full mr-2 sm:mr-3"></div>
                                        <h2
                                            class="font-lemonmilk font-medium text-base sm:text-xl text-gray-800 dark:text-white">
                                            Technologies & Tools</h2>
                                    </div>
                                    <span
                                        class="text-LMBlue dark:text-DMyellow text-xl sm:text-2xl mr-2 sm:mr-4 transition-transform duration-300"
                                        :class="{ 'transform rotate-180': isOpen.tools }">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6"
                                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </span>
                                </div>
                                <div v-show="isOpen.tools" class="p-3 sm:p-4 transition-all duration-500">
                                    <table
                                        class="hidden sm:table w-full border-collapse border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                                        <tbody>
                                            <tr class="bg-gray-50 dark:bg-gray-700">
                                                <td
                                                    class="border-r border-b border-gray-200 dark:border-gray-600 p-4 w-1/3">
                                                    <span
                                                        class="font-lemonmilk text-LMBlue dark:text-DMyellow">Programming
                                                        Languages</span>
                                                </td>
                                                <td class="p-4 border-b border-gray-200 dark:border-gray-600">
                                                    <div class="flex flex-wrap gap-2">
                                                        <span
                                                            class="px-3 py-1 bg-gray-100 dark:bg-gray-600 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200">JavaScript</span>
                                                        <span
                                                            class="px-3 py-1 bg-gray-100 dark:bg-gray-600 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200">Python</span>
                                                        <span
                                                            class="px-3 py-1 bg-gray-100 dark:bg-gray-600 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200">Java</span>
                                                        <span
                                                            class="px-3 py-1 bg-gray-100 dark:bg-gray-600 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200">C++</span>
                                                        <span
                                                            class="px-3 py-1 bg-gray-100 dark:bg-gray-600 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200">C</span>
                                                        <span
                                                            class="px-3 py-1 bg-gray-100 dark:bg-gray-600 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200">Dart</span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="border-r border-b border-gray-200 dark:border-gray-600 p-4">
                                                    <span
                                                        class="font-lemonmilk text-LMBlue dark:text-DMyellow">Frameworks
                                                        & Libraries</span>
                                                </td>
                                                <td class="p-4 border-b border-gray-200 dark:border-gray-600">
                                                    <div class="flex flex-wrap gap-2">
                                                        <span
                                                            class="px-3 py-1 bg-gray-100 dark:bg-gray-600 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200">Vue</span>
                                                        <span
                                                            class="px-3 py-1 bg-gray-100 dark:bg-gray-600 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200">TailwindCSS</span>
                                                        <span
                                                            class="px-3 py-1 bg-gray-100 dark:bg-gray-600 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200">Bootstrap</span>
                                                        <span
                                                            class="px-3 py-1 bg-gray-100 dark:bg-gray-600 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200">NodeJS</span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr class="bg-gray-50 dark:bg-gray-700">
                                                <td class="border-r border-b border-gray-200 dark:border-gray-600 p-4">
                                                    <span
                                                        class="font-lemonmilk text-LMBlue dark:text-DMyellow">Tools</span>
                                                </td>
                                                <td class="p-4 border-b border-gray-200 dark:border-gray-600">
                                                    <div class="flex flex-wrap gap-2">
                                                        <span
                                                            class="px-3 py-1 bg-gray-100 dark:bg-gray-600 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200">Git</span>
                                                        <span
                                                            class="px-3 py-1 bg-gray-100 dark:bg-gray-600 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200">GitHub</span>
                                                        <span
                                                            class="px-3 py-1 bg-gray-100 dark:bg-gray-600 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200">Figma</span>
                                                        <span
                                                            class="px-3 py-1 bg-gray-100 dark:bg-gray-600 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200">Postman</span>
                                                        <span
                                                            class="px-3 py-1 bg-gray-100 dark:bg-gray-600 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200">Power BI</span>
                                                        <span
                                                            class="px-3 py-1 bg-gray-100 dark:bg-gray-600 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200">Talend ETL</span>
                                                        <span
                                                            class="px-3 py-1 bg-gray-100 dark:bg-gray-600 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200">Bash/Batch</span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="border-r border-b border-gray-200 dark:border-gray-600 p-4">
                                                    <span
                                                        class="font-lemonmilk text-LMBlue dark:text-DMyellow">Databases</span>
                                                </td>
                                                <td class="p-4 border-b border-gray-200 dark:border-gray-600">
                                                    <div class="flex flex-wrap gap-2">
                                                        <span
                                                            class="px-3 py-1 bg-gray-100 dark:bg-gray-600 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200">MySQL</span>
                                                        <span
                                                            class="px-3 py-1 bg-gray-100 dark:bg-gray-600 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200">SQLite</span>
                                                        <span
                                                            class="px-3 py-1 bg-gray-100 dark:bg-gray-600 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200">MongoDB</span>
                                                        <span
                                                            class="px-3 py-1 bg-gray-100 dark:bg-gray-600 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200">Firebase</span>
                                                    </div>
                                                </td>
                                            </tr>
                                            
                                        </tbody>
                                    </table>
                                    <!-- Mobile view with improved spacing -->
                                    <div class="sm:hidden space-y-3">
                                        <div class="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                            <span
                                                class="font-lemonmilk text-LMBlue dark:text-DMyellow block mb-2 text-sm">Programming
                                                Languages</span>
                                            <div class="flex flex-wrap gap-2">
                                                <span
                                                    class="px-2 py-1 bg-gray-100 dark:bg-gray-600 rounded-full text-xs font-medium text-gray-700 dark:text-gray-200">JavaScript</span>
                                                <span
                                                    class="px-2 py-1 bg-gray-100 dark:bg-gray-600 rounded-full text-xs font-medium text-gray-700 dark:text-gray-200">Python</span>
                                                <span
                                                    class="px-2 py-1 bg-gray-100 dark:bg-gray-600 rounded-full text-xs font-medium text-gray-700 dark:text-gray-200">Java</span>
                                                <span
                                                    class="px-2 py-1 bg-gray-100 dark:bg-gray-600 rounded-full text-xs font-medium text-gray-700 dark:text-gray-200">C++</span>
                                                <span
                                                    class="px-2 py-1 bg-gray-100 dark:bg-gray-600 rounded-full text-xs font-medium text-gray-700 dark:text-gray-200">C</span>
                                                <span
                                                    class="px-2 py-1 bg-gray-100 dark:bg-gray-600 rounded-full text-xs font-medium text-gray-700 dark:text-gray-200">Dart</span>
                                            </div>
                                        </div>
                                        <div class="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                            <span
                                                class="font-lemonmilk text-LMBlue dark:text-DMyellow block mb-2 text-sm">Frameworks
                                                & Libraries</span>
                                            <div class="flex flex-wrap gap-2">
                                                <span
                                                    class="px-2 py-1 bg-gray-100 dark:bg-gray-600 rounded-full text-xs font-medium text-gray-700 dark:text-gray-200">Vue</span>
                                                <span
                                                    class="px-2 py-1 bg-gray-100 dark:bg-gray-600 rounded-full text-xs font-medium text-gray-700 dark:text-gray-200">TailwindCSS</span>
                                                <span
                                                    class="px-2 py-1 bg-gray-100 dark:bg-gray-600 rounded-full text-xs font-medium text-gray-700 dark:text-gray-200">Bootstrap</span>
                                                <span
                                                    class="px-2 py-1 bg-gray-100 dark:bg-gray-600 rounded-full text-xs font-medium text-gray-700 dark:text-gray-200">NodeJS</span>
                                            </div>
                                        </div>
                                        <div class="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                            <span
                                                class="font-lemonmilk text-LMBlue dark:text-DMyellow block mb-2 text-sm">Tools</span>
                                            <div class="flex flex-wrap gap-2">
                                                <span
                                                    class="px-2 py-1 bg-gray-100 dark:bg-gray-600 rounded-full text-xs font-medium text-gray-700 dark:text-gray-200">Git</span>
                                                <span
                                                    class="px-2 py-1 bg-gray-100 dark:bg-gray-600 rounded-full text-xs font-medium text-gray-700 dark:text-gray-200">GitHub</span>
                                                <span
                                                    class="px-2 py-1 bg-gray-100 dark:bg-gray-600 rounded-full text-xs font-medium text-gray-700 dark:text-gray-200">Figma</span>
                                                <span
                                                    class="px-2 py-1 bg-gray-100 dark:bg-gray-600 rounded-full text-xs font-medium text-gray-700 dark:text-gray-200">Postman</span>
                                                <span
                                                    class="px-2 py-1 bg-gray-100 dark:bg-gray-600 rounded-full text-xs font-medium text-gray-700 dark:text-gray-200">Power BI</span>
                                                <span
                                                    class="px-2 py-1 bg-gray-100 dark:bg-gray-600 rounded-full text-xs font-medium text-gray-700 dark:text-gray-200">Talend</span>
                                            </div>
                                        </div>
                                        <div class="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                            <span
                                                class="font-lemonmilk text-LMBlue dark:text-DMyellow block mb-2 text-sm">Databases</span>
                                            <div class="flex flex-wrap gap-2">
                                                <span
                                                    class="px-2 py-1 bg-gray-100 dark:bg-gray-600 rounded-full text-xs font-medium text-gray-700 dark:text-gray-200">MySQL</span>
                                                <span
                                                    class="px-2 py-1 bg-gray-100 dark:bg-gray-600 rounded-full text-xs font-medium text-gray-700 dark:text-gray-200">SQLite</span>
                                                <span
                                                    class="px-2 py-1 bg-gray-100 dark:bg-gray-600 rounded-full text-xs font-medium text-gray-700 dark:text-gray-200">MongoDB</span>
                                                <span
                                                    class="px-2 py-1 bg-gray-100 dark:bg-gray-600 rounded-full text-xs font-medium text-gray-700 dark:text-gray-200">Firebase</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Experience Section -->
                            <div
                                class="mb-6 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300">
                                <div @click="toggleSection('experience')"
                                    class="cursor-pointer flex items-center justify-between p-3 sm:p-4 bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-700">
                                    <div class="flex items-center">
                                        <div class="w-1 h-6 bg-LMBlue dark:bg-DMyellow rounded-full mr-2 sm:mr-3"></div>
                                        <h2
                                            class="font-lemonmilk font-medium text-base sm:text-xl text-gray-800 dark:text-white">
                                            Experience</h2>
                                    </div>
                                    <span
                                        class="text-LMBlue dark:text-DMyellow text-xl sm:text-2xl mr-2 sm:mr-4 transition-transform duration-300"
                                        :class="{ 'transform rotate-180': isOpen.experience }">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6"
                                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </span>
                                </div>

                                <div v-show="isOpen.experience" class="p-3 sm:p-4 transition-all duration-500">
                                    <div
                                        class="mb-6 p-3 sm:p-4 border-l-4 border-LMBlue dark:border-DMyellow bg-gray-50 dark:bg-gray-700 rounded-r-lg">
                                        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                            <h3
                                                class="font-lemonmilk text-base sm:text-lg text-gray-800 dark:text-white">
                                                Pick and Buy Ltd
                                            </h3>
                                            <span
                                                class="px-2 py-1 bg-LMBlue/10 dark:bg-DMyellow/10 text-LMBlue dark:text-DMyellow rounded-full text-xs sm:text-sm font-medium mt-1 sm:mt-0 inline-block">
                                                May 2024 - August 2024
                                            </span>
                                        </div>
                                        <ul
                                            class="mt-3 list-disc pl-4 sm:pl-6 text-gray-700 dark:text-gray-300 space-y-1 sm:space-y-2 text-sm sm:text-base">
                                            <li class="leading-relaxed">Engaged with stakeholders to gather requirements and identify relevant data sources.</li>
                                            <li class="leading-relaxed">Used SQL to query, clean, and transform data for BI dashboards.</li>
                                            <li class="leading-relaxed">Created ETL pipelines to extract, transform, and load data using Talend.</li>
                                            <li class="leading-relaxed">Developed Power BI dashboards based on stakeholder requirements.</li>
                                            <li class="leading-relaxed">Optimised Power BI dashboards to reduce load time and make them more efficient.</li>
                                            <li class="leading-relaxed">Trained in data warehousing concepts and worked on data warehouse project using Snowflake.</li>
                                            <li class="leading-relaxed">Debugged existing Java code and improved performance of Talend scripts.</li>
                                            <li class="leading-relaxed">Optimised and troubleshooted existing ETL processes by refactoring Java code to improve performance and reliability.</li>
                                        </ul>
                                    </div>

                                    <div
                                        class="p-3 sm:p-4 border-l-4 border-LMBlue dark:border-DMyellow bg-gray-50 dark:bg-gray-700 rounded-r-lg">
                                        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                            <h3
                                                class="font-lemonmilk text-base sm:text-lg text-gray-800 dark:text-white">
                                                IDP Education Ltd
                                            </h3>
                                            <span
                                                class="px-2 py-1 bg-LMBlue/10 dark:bg-DMyellow/10 text-LMBlue dark:text-DMyellow rounded-full text-xs sm:text-sm font-medium mt-1 sm:mt-0 inline-block">
                                                2022-2023 | Part time
                                            </span>
                                        </div>
                                        <ul
                                            class="mt-3 list-disc pl-4 sm:pl-6 text-gray-700 dark:text-gray-300 space-y-1 sm:space-y-2 text-sm sm:text-base">
                                            <li class="leading-relaxed">Helped students choose their ideal study abroad
                                                destinations based on their goals.</li>
                                            <li class="leading-relaxed">Followed up regularly to keep students informed
                                                and on track during the application process.</li>
                                            <li class="leading-relaxed">Managed the organisation's social media
                                                accounts.</li>

                                            <li class="leading-relaxed">Analysed social media data to enhance audience
                                                engagement.</li>
                                            <li class="leading-relaxed">Participated in educational fairs, assisting
                                                with registration and cleaning data for analysis.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <!-- Education Section -->
                            <div
                                class="mb-6 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300">
                                <div @click="toggleSection('education')"
                                    class="cursor-pointer flex items-center justify-between p-3 sm:p-4 bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-700">
                                    <div class="flex items-center">
                                        <div class="w-1 h-6 bg-LMBlue dark:bg-DMyellow rounded-full mr-2 sm:mr-3"></div>
                                        <h2
                                            class="font-lemonmilk font-medium text-base sm:text-xl text-gray-800 dark:text-white">
                                            Education</h2>
                                    </div>
                                    <span
                                        class="text-LMBlue dark:text-DMyellow text-xl sm:text-2xl mr-2 sm:mr-4 transition-transform duration-300"
                                        :class="{ 'transform rotate-180': isOpen.education }">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6"
                                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </span>
                                </div>

                                <div v-show="isOpen.education" class="p-3 sm:p-4 transition-all duration-500">
                                    <div
                                        class="p-3 sm:p-4 border-l-4 border-LMBlue dark:border-DMyellow bg-gray-50 dark:bg-gray-700 rounded-r-lg mb-4 sm:mb-6">
                                        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                                            <h3
                                                class="font-lemonmilk text-base sm:text-lg text-gray-800 dark:text-white">
                                                Middlesex University Mauritius
                                            </h3>
                                            <span
                                                class="px-2 py-1 bg-LMBlue/10 dark:bg-DMyellow/10 text-LMBlue dark:text-DMyellow rounded-full text-xs sm:text-sm font-medium mt-1 sm:mt-0 inline-block">
                                                2023-Present
                                            </span>
                                        </div>
                                        <p class="mt-2 text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                                            BSc Computer Science
                                        </p>
                                    </div>

                                    <div
                                        class="p-3 sm:p-4 border-l-4 border-LMBlue dark:border-DMyellow bg-gray-50 dark:bg-gray-700 rounded-r-lg">
                                        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                                            <h3
                                                class="font-lemonmilk text-base sm:text-lg text-gray-800 dark:text-white">
                                                Queen Elizabeth College
                                            </h3>
                                            <span
                                                class="px-2 py-1 bg-LMBlue/10 dark:bg-DMyellow/10 text-LMBlue dark:text-DMyellow rounded-full text-xs sm:text-sm font-medium mt-1 sm:mt-0 inline-block">
                                                2015-2022
                                            </span>
                                        </div>
                                        <p class="mt-2 text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                                            High School 
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
            class="border-t-2 border-x-0 mt-16 border-gray-300 dark:border-gray-700 bg-white dark:bg-DMdarkGray flex flex-row items-center justify-center relative z-10">
            <div class="w-full max-w-[1200px] flex my-2 flex-row items-center justify-between p-2">
                <div class="mx-4 sm:mx-8">
                    <span class="text-gray-600 dark:text-gray-300 text-sm sm:text-base">© 2024 HAFSAH JOOMUN</span>
                </div>
                <div class="mx-4 sm:mx-8 flex flex-row">
                    <router-link to="/aboutme">
                        <a class="text-LMBlue dark:text-DMyellow font-light hover:underline text-sm sm:text-base">About
                            me</a>
                    </router-link>
                    <span class="text-gray-500 dark:text-gray-400 font-light mx-2">|</span>
                    <router-link to="/blogs">
                        <a
                            class="text-LMBlue dark:text-DMyellow font-light hover:underline text-sm sm:text-base">Blogs</a>
                    </router-link>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Header from "../components/Header.vue";

const openCV = () => {
    const cvPath = 'hafsah_joomun_cv.pdf';
    window.open(cvPath, '_blank');
};

const isOpen = ref({
    skills: true,
    tools: true,
    experience: true,
    education: true
});

const toggleSection = (section) => {
    isOpen.value[section] = !isOpen.value[section];
};
</script>

<style>
/* Background pattern */
.bg-grid-pattern {
    background-image:
        linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
    background-size: 20px 20px;
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
</style>