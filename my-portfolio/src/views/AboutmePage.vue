<template>
    <div>
        <div class="mb-14 sm:mb-30">
            <Header />
        </div>
        <div class="flex flex-col items-start min-h-screen">
            <div class="mx-10 sm:ml-auto sm:mr-auto sm:w-full max-w-[1200px] sm:px-10">
                <dev>
                    <div class="flex flex-col items-start mb-8">
                        <h2 class="font-tommy font-medium text-2xl sm:text-4xl mb-8 sm:mb-14 dark:text-white">who I am ...</h2>
                        
                        <h1 class="font-lemonmilk font-medium text-xl sm:text-3xl mb-4 dark:text-white">hafsah joomun </h1>
                        <p class="mb-3 dark:text-lightGray">
                            3rd-year Computer science student passionate about technology and bla bla bla.<br />
                            Please hire me MO PENA TRAVAY !
                        </p>
                        <p class="mb-5  dark:text-lightGray">
                            When im free, I like to vey zafr, build legos and play video games.
                        </p>
                        <div class="mt-2">
                            <button @click="openCV" class="rounded-lg  border-red-600 bg-red-600 border p-2  dark:border-red-500 dark:bg-red-500 ">
                                <span class="text-white font-inter">View my CV</span>
                            </button>
                        </div>
                        <!-- <div class="mt-16">
                            <h2 class="font-tommy font-medium text-lg sm:text-2xl mb-8 sm:mb-14 dark:text-white">who I am ...</h2>
                            
                        </div> -->
                        <div class="mt-16">
                            <h2 class="font-tommy font-medium text-lg sm:text-2xl mb-8 sm:mb-14 dark:text-white">Technologies & Tools i've used </h2>
                            <table class="hidden sm:table w-full border-collapse">
                                <tbody>
                                    <tr>
                                        <td class="border-r border-b border-gray-300 p-4">
                                            <span class="font-lemonmilk font-light text-lg dark:text-white">Programming languages:</span>
                                        </td>
                                        <td class="p-4 border-b border-gray-300">
                                            <span class="font-bold dark:text-lighterGray">JavaScript, Python, Java, C++</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="border-r border-b border-gray-300 p-4">
                                            <span class="font-lemonmilk font-light text-lg dark:text-white">Frameworks & Libraries:</span>
                                        </td>
                                        <td class="p-4 border-b border-gray-300">
                                            <span class="font-bold dark:text-lighterGray">Vue, TailwindCSS, Bootstrap</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="border-r border-b border-gray-300 p-4">
                                            <span class="font-lemonmilk font-light text-lg dark:text-white">Tools:</span>
                                        </td>
                                        <td class="p-4 border-b border-gray-300 ">
                                            <span class="font-bold dark:text-lighterGray">Git, GitHub, Figma, Postman</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="border-r  border-gray-300 p-4">
                                            <span class="font-lemonmilk font-light text-lg dark:text-white">Databases:</span>
                                        </td>
                                        <td class="p-4">
                                            <span class="font-bold dark:text-lighterGray">MySQL, SQLite, MongoDB</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="sm:hidden">
                                <div>
                                    <span class="font-lemonmilk font-light text-normal mb-2 dark:text-white">Programming languages:</span>
                                    <p class="font-bold text-sm mb-4 text-lighterGray">JavaScript, Python, Java, C++</p>
                                </div>
                    
                                <div>
                                    <span class="font-lemonmilk font-light text-normal mb-2 dark:text-white">Frameworks & Libraries:</span>
                                    <p class="font-bold text-sm mb-4 text-lighterGray">Vue, TailwindCSS, Bootstrap,</p>
                                </div>
                    
                                <div>
                                    <span class="font-lemonmilk font-light text-normal mb-2 dark:text-white">Tools:</span>
                                    <p class="font-bold text-sm mb-4 text-lighterGray">Git, GitHub, Figma, Postman</p>
                                </div>
                    
                                <div>
                                    <span class="font-lemonmilk font-light text-normal mb-2 dark:text-white">Databases:</span>
                                    <p class="font-bold text-sm mb-4 text-lighterGray">MySQL, SQLite, MongoDB</p>
                                </div>
                            </div>
                        </div>
                        <div class=" mt-10 sm:mt-16">
                            <h2 class="font-tommy font-medium text-lg sm:text-2xl mb-4 sm:mb-8 dark:text-white">Experience</h2>
                            <div class="mb-4">
                                <h3 class="font-lemonmilk font-medium text-normal sm:text-lg dark:text-white">Pick and Buy Ltd</h3>
                                <p class="text-red-600 dark:text-red-500">May 2024 - August 2024</p>
                                
                                
                            </div>
                            <div>
                                <h3 class="font-lemonmilk font-medium text-normal sm:text-lg dark:text-white">IDP Education LTD</h3>
                                <p class="text-red-600 dark:text-red-500">2022-2023</p>
                                
                            </div>
                        </div>
                        <div class="mt-10 sm:mt-16">
                            <h2 class="font-tommy font-medium text-lg sm:text-2xl mb-4 sm:mb-8 dark:text-white">Education</h2>
                            <div class="mb-4">
                                <h3 class="font-lemonmilk font-medium text-normal sm:text-lg dark:text-white">Middlesex university mauritius</h3>
                                <p class="text-red-600 dark:text-red-500">2023-Present</p>
                                
                                
                            </div>
                            <div>
                                <h3 class="font-lemonmilk font-medium text-normal sm:text-lg dark:text-white">Queen elizabeth college</h3>
                                <p class="text-red-600 dark:text-red-500">2015-2022</p>
                                
                            </div>
                            
                        </div>
                        
                    </div>
                </dev>
            </div>  
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import Header from "../components/Header.vue";
    const openCV = () => {
    const cvPath = 'hafsah_joomun_cv.pdf'; // Use relative or absolute path
    window.open(cvPath, '_blank');
    };
</script>