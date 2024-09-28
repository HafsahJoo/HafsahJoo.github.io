
<template>
    <div>
      <div class="mb-14 sm:mb-40">
        <Header />
      </div>
      <div class=" mx-10 md:mx-40">
        <div class="flex flex-row items-center justify-center">
          <div class="flex flex-col justify-center  sm:mb-20">
            <h1 class="font-lemonmilk font-bold text-xl sm:text-40px mb-4 dark:text-white">hafsah joomun</h1>
            <p class="font-inter text-lighterGray ">
              3rd-year Computer science student passionate about technology and bla bla bla.<br>
              Please hire me!
            </p>
            <div class="flex flex-row mt-4">
              <!-- links to social media icons -->
              <a href="https://www.linkedin.com/in/hafsah-joomun/">
                <!-- Use v-if to toggle between dark and light icons -->
                <img v-if="isDarkMode" src="../assets/icons/darklinkedin.svg" alt="linkedin" class="w-12 h-12 sm:inline-block mr-4">
                <img v-else src="../assets/icons/lightlinkedin.svg" alt="linkedin" class="w-12 h-12 sm:inline-block mr-4">
              </a>
              <a href="#">
                <img v-if="isDarkMode" src="../assets/icons/darkfacebook.svg" alt="facebook" class="w-12 h-12 sm:inline-block mr-4">
                <img v-else src="../assets/icons/lightfacebook.svg" alt="facebook" class="w-12 h-12 sm:inline-block mr-4">
              </a>
              <a href="#">
                <img v-if="isDarkMode" src="../assets/icons/darkgithub.svg" alt="github" class="w-12 h-12 sm:inline-block mr-4">
                <img v-else src="../assets/icons/lightgithub.svg" alt="github" class="w-12 h-12 sm:inline-block mr-4">
              </a>
            </div>
          </div>

          <div class="hidden sm:block ">
            <img v-if="isDarkMode" src="../assets/icons/lightprofile.svg" alt="profile" >
            <img v-else src="../assets/icons/darkprofile.svg" alt="profile" >
          </div>
        </div>

        <div class=" my-20 p-6 rounded-xl flex flex-col items-center justify-center border-lighterGray border-2">
          <h1 class=" font-lemonmilk font-medium dark:text-white " >About me</h1>
          <p class="font-inter dark:text-lightGray">
            Hellow! I am Hafsah Joomun, a 3rd-year Computer Science student at the University of Mauritius. I am passionate about technology and bla bla bla.
            I am a ssfs sfsf sSFJSHFSJ BSCV
            JHJH jhjhjhj I am Hafsah Joomun, a 3rd-year Computer Science student at the University of Mauritius. I am passionate about technology and bla bla bla.
            I am a ssfs sfsf sSFJSHFSJ BSCV
          </p>
        </div>

        <div class="flex flex-row items-center justify-center">
          <h1>Blogs</h1>
          <div>

          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
import { inject } from 'vue';
import Header from './Header.vue'
  const isDarkMode = inject('isDarkMode');
</script>