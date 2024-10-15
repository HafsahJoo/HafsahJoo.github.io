<template>
    <div>
      <div class="mb-14 sm:mb-40">
        <Header />
      </div>
      <div class="flex flex-col items-center min-h-screen">
        <div class="mx-10 md:mx-40 max-w-[1200px]">
          <div class="flex flex-row items-center justify-between ">
            <div class="flex flex-col justify-center sm:mb-40">
              <h1 class="font-lemonmilk font-bold text-xl sm:text-40px mb-4 dark:text-white">
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
                  <img v-if="isDarkMode" src="../assets/icons/darkmail.svg" alt="mail"
                    class="w-12 h-12 sm:inline-block" />
                  <img v-else src="../assets/icons/lightmail.svg" alt="mail" class="w-12 h-12 sm:inline-block" />
                </a>
  
              </div>
            </div>
            <div class="hidden sm:block mr-20">
              <img v-if="isDarkMode" src="../assets/icons/lightprofile.svg" alt="profile" />
              <img v-else src="../assets/icons/darkprofile.svg" alt="profile" />
            </div>
          </div>
  
          <div class="my-20 p-8 rounded-xl flex flex-col items-center justify-center border-lighterGray border shadow-xl">
            <h1 class="font-lemonmilk font-medium text-lg dark:text-white mb-2">About me</h1>
            <p class="font-inter text-center dark:text-lightGray">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis quod recusandae ab libero.
              Aut voluptas modi quaerat optio nobis iure non illo, maiores suscipit. Perferendis fugit rem voluptates
              possimus cupiditate amet quam cumque, ab at facilis ipsam laboriosam? Ex corrupti officia, sed beatae nisi
              et ab nulla adipisci sunt sint similique aliquam. Deleniti, dolorem nobis? Consequuntur, mollitia quis
              facere beatae placeat ipsum libero molestiae tenetur commodi. Asperiores quis voluptatibus quae ratione
              distinctio voluptatem. Odit voluptate nemo perspiciatis modi eos asperiores velit, exercitationem fugiat
              accusantium perferendis
              adipisci illo libero tempora fuga a mollitia maxime consequatur temporibus, reprehenderit minima commodi.
              Id, numquam!
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
            <h1 class="font-lemonmilk font-medium text-lg">Blogs</h1>
            <div>
                
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { inject } from "vue";
  import Header from "../components/Header.vue";
  const isDarkMode = inject("isDarkMode");
  
  
  
  </script>
  