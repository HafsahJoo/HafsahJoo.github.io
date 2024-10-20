<template>
  <div>
    <Header />
    <!-- use grid everywhere -->
    <div
      class="max-w-[1200px] px-8 sm:px-28 mx-auto w-full grid min-h-screen place-items-start"
    >
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-3 mt-14 sm:mt-28">
        <div class="col-span-1 sm:col-span-2">
          <h1
            class="font-lemonmilk font-bold text-xl sm:text-40px mb-4 text-LMBlue dark:text-DMyellow"
          >
            Hafsah joomun
          </h1>
          <p class="font-inter text-lighterGray">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            tempore, neque accusantium placeat numquam a illum odit tempora
            similique omnis.
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
        <div class="col-span-1 hidden sm:block my-auto">
          <div v-if="isDarkMode">
            <img src="../assets/icons/lightprofile.svg" alt="Dark Mode" />
          </div>
          <div v-else>
            <img src="../assets/icons/darkprofile.svg" alt="Light Mode" />
          </div>
        </div>

        

        <!-- about me -->
        <div class="sm:col-span-3  my-10 border border-lighterGray  shadow-xl rounded-xl p-7">
          <div class="flex flex-col items-center justify-center">
            <h1 class="mx-auto pb-4 font-lemonmilk font-medium text-lg dark:text-white ">About me</h1>
            <p class="font-inter text-center dark:text-lightGray mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
              expedita saepe non voluptas consequatur libero rerum, impedit ipsa
              assumenda, dolorem enim tempore explicabo hic voluptatibus mollitia
              commodi magnam vitae nulla! Officiis iure deleniti explicabo maxime
              illo aliquid modi. Illum a veniam velit eaque inventore adipisci
              placeat eum, quos voluptate nihil recusandae consequuntur eligendi,
              harum aspernatur magnam iure porro, nulla sint quo. Facilis
              accusantium recusandae voluptate consequatur assumenda consectetur
              eos! Illum tempora eligendi necessitatibus sapiente rem optio,
              tempore exercitationem ipsum culpa aut laboriosam delectus! Earum
              magni, aspernatur in rerum ab quae voluptate, fugiat nobis
              distinctio fuga ipsa nihil unde? Ipsum, quos.
            </p>
            
            <div class="flex flex-row w-full justify-end items-end">
              <router-link to="/aboutme" class="mt-4 p-2 rounded-xl border-2 border-lighterGray dark:bg-gray-600">
                  <img v-if="isDarkMode" src="../assets/icons/darkmore.svg" alt="arrow" class="w-6" />
                  <img v-else src="../assets/icons/lightmore.svg" alt="arrow" class="w-6" />
              </router-link>
            </div>
          </div>
          

        </div>

        <!-- blogs -->
        <div class="sm:col-span-3">
          <div class="grid  grid-cols-2 md:grid-cols-3 gap-4 ">
            <Blog/>
            <Blog/>
            <Blog/>
            <Blog/>
            <Blog/>
            <Blog/>
          </div>
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
