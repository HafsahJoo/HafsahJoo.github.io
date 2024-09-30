<template>
  <div>
    <div class="mb-14 sm:mb-40">
      <Header />
    </div>
    <div class="flex flex-col items-center min-h-screen">
      <div class="mx-10 md:mx-40 max-w-[1200px]">
        <div class="flex flex-row items-center justify-between ">
          <div class="flex flex-col justify-center sm:mb-40">
            <h1
              class="font-lemonmilk font-bold text-xl sm:text-40px mb-4 dark:text-white"
            >
              hafsah joomun
            </h1>
            <p class="font-inter text-lighterGray">
              3rd-year Computer science student passionate about technology and
              bla bla bla.<br />
              Please hire me!
            </p>
            <div class="flex flex-row mt-4">
              <!-- links to social media icons -->
              <a href="https://www.linkedin.com/in/hafsah-joomun/">
                <!-- Use v-if to toggle between dark and light icons -->
                <img
                  v-if="isDarkMode"
                  src="@/assets/icons/darklinkedin.svg"
                  alt="linkedin"
                  class="w-12 h-12 sm:inline-block mr-4"
                />
                <img
                  v-else
                  src="@/assets/icons/lightlinkedin.svg"
                  alt="linkedin"
                  class="w-12 h-12 sm:inline-block mr-4"
                />
              </a>
              <a href="#">
                <img
                  v-if="isDarkMode"
                  src="@/assets/icons/darkgithub.svg"
                  alt="github"
                  class="w-12 h-12 sm:inline-block mr-4"
                />
                <img
                  v-else
                  src="@/assets/icons/lightgithub.svg"
                  alt="github"
                  class="w-12 h-12 sm:inline-block mr-4"
                />
              </a>
              <a href="mailto:hafsah260103@gmail.com">
                <img
                  v-if="isDarkMode"
                  src="@/assets/icons/darkmail.svg"
                  alt="mail"
                  class="w-12 h-12 sm:inline-block"
                />
                <img
                  v-else
                  src="@/assets/icons/lightmail.svg"
                  alt="mail"
                  class="w-12 h-12 sm:inline-block"
                />
              </a>

            </div>
          </div>
          <div class="hidden sm:block mr-20">
            <img
              v-if="isDarkMode"
              src="@/assets/icons/lightprofile.svg"
              alt="profile"
            />
            <img v-else src="@/assets/icons/darkprofile.svg" alt="profile" />
          </div>
        </div>

        <div
          class="my-20 p-8 rounded-xl flex flex-col items-center justify-center border-lighterGray border shadow-xl"
        >
          <h1 class="font-lemonmilk font-medium text-lg dark:text-white mb-2">About me</h1>
          <p class="font-inter text-center dark:text-lightGray">
            I am a passionate computer science student in my third year at
            Middlesex University, with a keen interest in data science,
            artificial intelligence, and innovative web development. My journey
            into technology began with a fascination for how things work, and it
            has evolved into a commitment to solve real-world problems through
            code.
          </p>
          <div class="flex flex-row w-full justify-end items-end">
            <!-- Use router-link for navigation -->
            <router-link to="/aboutme" class="mt-4 p-2 rounded-xl border-2 border-lighterGray dark:bg-gray-600">
              <img v-if="isDarkMode" src="../assets/icons/darkmore.svg" alt="arrow" class="w-6" />
              <img v-else src="../assets/icons/lightmore.svg" alt="arrow" class="w-6" />
            </router-link>
          </div>
        </div>

        <div class="flex flex-row items-center justify-center">
          <h1 class="font-lemonmilk font-medium text-lg" >Blogs</h1>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject } from "vue";
import Header from "./Header.vue";
const isDarkMode = inject("isDarkMode");



</script>
