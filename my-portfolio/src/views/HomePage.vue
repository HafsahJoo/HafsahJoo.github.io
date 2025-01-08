<template>
  <div>
    <Header />
    <!-- use grid everywhere -->
    <div class="max-w-[1200px] px-8 sm:px-28 mx-auto w-full grid min-h-screen place-items-start">
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-3 mt-14 sm:mt-28">
        <div class="col-span-1 sm:col-span-2">
          <h1 class="font-lemonmilk font-bold text-xl sm:text-40px mb-4 text-LMBlue dark:text-DMyellow">
            Hafsah joomun
          </h1>
          <p class="font-inter text-lighterGray text-md sm:text-lg">
            A curious mind from Mauritius, passionate about technology, coding, and mathematics. 
            <br>This is my space to share my work and discoveries.
          </p>
          <div class="flex flex-row mt-4">
            <!-- links to social media icons -->
            <a href="https://www.linkedin.com/in/hafsah-joomun/">
              <!-- Use v-if to toggle between dark and light icons -->
              <img v-if="isDarkMode" src="../assets/icons/darklinkedin.svg" alt="linkedin"
                class="w-12 h-12 sm:inline-block mr-4" />
              <img v-else src="../assets/icons/lightlinkedin.svg" alt="linkedin"
                class="w-12 h-12 sm:inline-block mr-4" />
            </a>
            <a href="#">
              <img v-if="isDarkMode" src="../assets/icons/darkgithub.svg" alt="github"
                class="w-12 h-12 sm:inline-block mr-4" />
              <img v-else src="../assets/icons/lightgithub.svg" alt="github" class="w-12 h-12 sm:inline-block mr-4" />
            </a>
            <a href="mailto:hafsah260103@gmail.com">
              <img v-if="isDarkMode" src="../assets/icons/darkmail.svg" alt="mail" class="w-12 h-12 sm:inline-block" />
              <img v-else src="../assets/icons/lightmail.svg" alt="mail" class="w-12 h-12 sm:inline-block" />
            </a>

          </div>
        </div>
        <div class="col-span-1 hidden sm:block my-auto">
          <div v-if="isDarkMode">
            <img src="../assets/icons/lightprofile.svg" alt="Dark Mode" />
          </div>
          <div v-else>
            <img src="../assets/icons/darkprofile.svg" alt="Light Mode" />
          </div>
        </div>



        <!-- about me -->
        <div class="sm:col-span-3  my-10 border  shadow-xl rounded-xl p-7">
          <div class="flex flex-col items-center justify-center">
            <h1 class="pb-4 font-lemonmilk font-medium text-lg dark:text-white ">About me</h1>
            <p class="font-inter text-center dark:text-lightGray mb-4">
              Hi, I’m Joomun hafsah, a Computer Science student who loves solving logical problems 
              and exploring how technology works. <br>Click the arrow to know more about me!
              
            </p>

            <div class="flex flex-row w-full justify-end items-end">
              <router-link to="/aboutme" class="p-2">
                <img v-if="isDarkMode" src="../assets/icons/darkmore.svg" alt="arrow" class="w-6" />
                <img v-else src="../assets/icons/lightmore.svg" alt="arrow" class="w-6" />
              </router-link>
            </div>
          </div>


        </div>

        <!-- blogs -->
          
        <div class="sm:col-span-3">
          <h1 class="font-tommy text-2xl  my-6   dark:text-white">Blogs</h1>
          <div class="grid  grid-cols-1 md:grid-cols-3 gap-4 ">
            <Blog title="Robotic arm playing rock paper scissors"
              body="This is a robotic arm playing rock paper scissors , it uses gesture detection from media pipe and python"
              imgpath="/assets/blogs/robot.jpg"  page="/blog1" />
            <Blog />
            <Blog />
            

          </div>
          <a>View all > </a>
        </div>

        <!-- Projects -->
        <div class="sm:col-span-3">
          <h1 class="font-tommy text-2xl mx-auto my-6 text-left  dark:text-white">Projects</h1>
        </div>




      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { inject } from "vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Blog from "../components/BlogCard.vue";
const isDarkMode = inject("isDarkMode");
</script>
