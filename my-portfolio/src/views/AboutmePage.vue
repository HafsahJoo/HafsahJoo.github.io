<template>
    <div>
        <div class="mb-14 sm:mb-30">
            <Header />
        </div>
        <div class="flex flex-col items-start min-h-screen">
            <div class="mx-10 sm:ml-auto sm:mr-auto sm:w-full max-w-[1200px] sm:px-10">
                <div>
                    <div class="flex flex-col items-start mb-8">
                        <h2 class="font-tommy font-medium text-2xl sm:text-4xl mb-8 sm:mb-14 dark:text-white">Who I
                            Am...</h2>
                        <h1 class="font-lemonmilk font-medium text-xl sm:text-3xl mb-4 dark:text-white">Hafsah Joomun
                        </h1>
                        <p class="mb-3 dark:text-lightGray">
                            Hi! I'm a 3rd year Computer Science student who loves exploring creative and practical tech
                            solutions. I enjoy learning new things, following established practices, and adding my own
                            creative touch.
                            <br>I worked on projects like software design, robotics, and game development, always
                            looking for challenges that make me think differently.
                        </p>
                        <p class="mb-5 dark:text-lightGray">
                            When I’m not coding, I’m either building with Legos or playing video games.
                        </p>
                        <div class="mt-2">
                            <button @click="openCV"
                                class="rounded-lg border-red-600 bg-red-600 border p-2 dark:border-red-500 dark:bg-red-500">
                                <span class="text-white font-inter">View my CV</span>
                            </button>
                        </div>

                        <!-- Collapsible Sections -->
                        <div class="mt-16 w-full">
                            <div @click="toggleSection('skills')"
                                class="cursor-pointer flex items-center justify-between mb-4">
                                <h2 class="font-tommy font-medium text-lg sm:text-2xl dark:text-white">Skills</h2>
                                <span class="text-red-600 dark:text-red-500 text-3xl mr-4">{{ isOpen.skills ? '-' : '+'
                                    }}</span>
                            </div>
                            <div v-show="isOpen.skills" class="overflow-hidden">
                                <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                    <!-- Problem-Solving -->
                                    <div
                                        class="flex items-center space-x-2 p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
                                        <svg class="w-6 h-6 text-red-600 dark:text-red-500" fill="none"
                                            stroke="currentColor" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2">
                                            </path>
                                        </svg>
                                        <span class="dark:text-lighterGray">Problem-Solving</span>
                                    </div>

                                    <!-- Web Development -->
                                    <div
                                        class="flex items-center space-x-2 p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
                                        <svg class="w-6 h-6 text-red-600 dark:text-red-500" fill="none"
                                            stroke="currentColor" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                                        </svg>
                                        <span class="dark:text-lighterGray">Web Development</span>
                                    </div>

                                    <!-- Collaboration & Teamwork -->
                                    <div
                                        class="flex items-center space-x-2 p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
                                        <svg class="w-6 h-6 text-red-600 dark:text-red-500" fill="none"
                                            stroke="currentColor" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z">
                                            </path>
                                        </svg>
                                        <span class="dark:text-lighterGray">Collaboration & Teamwork</span>
                                    </div>

                                    <!-- Version Control (Git) -->
                                    <div
                                        class="flex items-center space-x-2 p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
                                        <svg class="w-6 h-6 text-red-600 dark:text-red-500" fill="none"
                                            stroke="currentColor" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.699-2.782.603-3.369-1.341-3.369-1.341-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.682-.103-.253-.446-1.27.098-2.646 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.747-1.026 2.747-1.026.546 1.376.202 2.394.1 2.646.64.698 1.028 1.591 1.028 2.682 0 3.841-2.337 4.687-4.565 4.929.359.309.678.919.678 1.852 0 1.335-.012 2.415-.012 2.741 0 .267.18.577.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z">
                                            </path>
                                        </svg>
                                        <span class="dark:text-lighterGray">Version Control (Git)</span>
                                    </div>

                                    <!-- Project Management -->
                                    <div
                                        class="flex items-center space-x-2 p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
                                        <svg class="w-6 h-6 text-red-600 dark:text-red-500" fill="none"
                                            stroke="currentColor" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z">
                                            </path>
                                        </svg>
                                        <span class="dark:text-lighterGray">Project Management</span>
                                    </div>
                                </div>
                            </div>

                            <!-- Technologies & Tools -->
                            <div @click="toggleSection('tools')"
                                class="cursor-pointer flex items-center justify-between mb-4 mt-10">
                                <h2 class="font-tommy font-medium text-lg sm:text-2xl dark:text-white">Technologies &
                                    Tools I've Used</h2>
                                <span class="text-red-600 dark:text-red-500 text-3xl mr-4">{{ isOpen.tools ? '-' : '+'
                                    }}</span>
                            </div>
                            <div v-show="isOpen.tools" class="overflow-hidden">
                                <div class="mb-4 p-4">
                                    <table class="hidden sm:table w-full border-collapse">
                                        <tbody>
                                            <tr>
                                                <td class="border-r border-b border-gray-300 p-4">
                                                    <span
                                                        class="font-lemonmilk font-light text-lg dark:text-white">Programming
                                                        languages:</span>
                                                </td>
                                                <td class="p-4 border-b border-gray-300">
                                                    <span class="font-bold dark:text-lighterGray">JavaScript, Python,
                                                        Java, C++</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="border-r border-b border-gray-300 p-4">
                                                    <span
                                                        class="font-lemonmilk font-light text-lg dark:text-white">Frameworks
                                                        & Libraries:</span>
                                                </td>
                                                <td class="p-4 border-b border-gray-300">
                                                    <span class="font-bold dark:text-lighterGray">Vue, TailwindCSS,
                                                        Bootstrap</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="border-r border-b border-gray-300 p-4">
                                                    <span
                                                        class="font-lemonmilk font-light text-lg dark:text-white">Tools:</span>
                                                </td>
                                                <td class="p-4 border-b border-gray-300">
                                                    <span class="font-bold dark:text-lighterGray">Git, GitHub, Figma,
                                                        Postman</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="border-r border-gray-300 p-4">
                                                    <span
                                                        class="font-lemonmilk font-light text-lg dark:text-white">Databases:</span>
                                                </td>
                                                <td class="p-4">
                                                    <span class="font-bold dark:text-lighterGray">MySQL, SQLite,
                                                        MongoDB</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div class="sm:hidden">
                                        <div>
                                            <span
                                                class="font-lemonmilk font-light text-normal mb-2 dark:text-white">Programming
                                                languages:</span>
                                            <p class="font-bold text-sm mb-4 text-lighterGray">JavaScript, Python, Java,
                                                C++</p>
                                        </div>
                                        <div>
                                            <span
                                                class="font-lemonmilk font-light text-normal mb-2 dark:text-white">Frameworks
                                                & Libraries:</span>
                                            <p class="font-bold text-sm mb-4 text-lighterGray">Vue, TailwindCSS,
                                                Bootstrap</p>
                                        </div>
                                        <div>
                                            <span
                                                class="font-lemonmilk font-light text-normal mb-2 dark:text-white">Tools:</span>
                                            <p class="font-bold text-sm mb-4 text-lighterGray">Git, GitHub, Figma,
                                                Postman</p>
                                        </div>
                                        <div>
                                            <span
                                                class="font-lemonmilk font-light text-normal mb-2 dark:text-white">Databases:</span>
                                            <p class="font-bold text-sm mb-4 text-lighterGray">MySQL, SQLite, MongoDB
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Experience -->
                            <div @click="toggleSection('experience')"
                                class="cursor-pointer flex items-center justify-between mb-4 mt-10">
                                <h2 class="font-tommy font-medium text-lg sm:text-2xl dark:text-white">Experience</h2>
                                <span class="text-red-600 dark:text-red-500 text-3xl mr-4">{{ isOpen.experience ? '-' :
                                    '+' }}</span>
                            </div>
                            <div v-show="isOpen.experience" class="overflow-hidden">
                                <div class="mb-4 p-4">
                                    <h3
                                        class="font-lemonmilk font-medium text-normal sm:text-xl text-gray-700 dark:text-white">
                                        Pick and Buy Ltd</h3>
                                    <p class="text-red-600 dark:text-red-500 mb-4">May 2024 - August 2024</p>
                                    <ul class="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                                        <li class="text-md sm:text-lg leading-relaxed">Trained in data warehousing
                                            concepts and best practices.</li>
                                        <li class="text-md sm:text-lg leading-relaxed">Created BI dashboards using Power
                                            BI for various departments.</li>
                                        <li class="text-md sm:text-lg leading-relaxed">Used SQL to query and then
                                            cleaned, and transformed data for BI dashboards.</li>
                                        <li class="text-md sm:text-lg leading-relaxed">Used Talend to automate data
                                            extraction, transformation, and loading (ETL) processes.</li>
                                        <li class="text-md sm:text-lg leading-relaxed">Wrote custom Talend scripts to
                                            improve data processing and automation.</li>
                                        <li class="text-md sm:text-lg leading-relaxed">Debug existing Java code and
                                            improve performance of talend scripts.</li>
                                        <li class="text-md sm:text-lg leading-relaxed">Ensured dashboards were
                                            user-friendly and aligned with business goals.</li>

                                    </ul>
                                </div>
                                <div class="mb-4 p-4">
                                    <h3
                                        class="font-lemonmilk font-medium text-normal sm:text-xl text-gray-700 dark:text-white">
                                        IDP Education ltd</h3>
                                    <p class="text-red-600 dark:text-red-500 mb-4">2022-2023 | Part time</p>
                                    <ul class="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                                        <li class="text-md sm:text-lg leading-relaxed">Helped students choose their
                                            ideal study abroad destinations based on their goals.</li>
                                        <li class="text-md sm:text-lg leading-relaxed">Followed up regularly to keep
                                            students informed and on track during the application process.</li>
                                        <li class="text-md sm:text-lg leading-relaxed">Managed the organization’s social
                                            media accounts.</li>
                                        <li class="text-md sm:text-lg leading-relaxed">Analyzed social media data to
                                            enhance audience engagement.</li>
                                        <li class="text-md sm:text-lg leading-relaxed">Participated in educational
                                            fairs, assisting with registration and cleaning data for analysis.</li>
                                    </ul>
                                </div>

                            </div>


                            <!-- Education -->
                            <div @click="toggleSection('education')"
                                class="cursor-pointer flex items-center justify-between mb-4 mt-10">
                                <h2 class="font-tommy font-medium text-lg sm:text-2xl dark:text-white">Education</h2>
                                <span class="text-red-600 dark:text-red-500 text-3xl mr-4">{{ isOpen.education ? '-' :
                                    '+' }}</span>
                            </div>
                            <div v-show="isOpen.education" class="overflow-hidden">
                                <div class="mb-4 p-4">
                                    <div class="mb-4">
                                        <h3 class="font-lemonmilk font-medium text-normal sm:text-lg text-gray-700 dark:text-white">
                                            Middlesex University Mauritius</h3>
                                        <p class="text-red-600 dark:text-red-500">2023-Present</p>
                                    </div>
                                    <div>
                                        <h3 class="font-lemonmilk font-medium text-normal sm:text-lg text-gray-700 dark:text-white">Queen
                                            Elizabeth College</h3>
                                        <p class="text-red-600 dark:text-red-500">2015-2022</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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

<style scoped>
/* No transition styles needed */
</style>