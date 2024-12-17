<template>
    <footer
        class="border-t-2 border-x-0 mt-20 border-gray-300  dark:bg-DMdarkGray flex flex-row items-center justify-center">
        <div class=" w-full max-w-[1200px] flex my-2 flex-row items-center justify-between p-2">
            <div class="mx-8">
                <span class="dark:text-gray-300">© 2024 HAFSAH JOOMUN</span>
            </div>
            <div class="mx-8 flex flex-row">
                <router-link to="/aboutme">
                    <a class=" dark:text-white font-light">About me</a>
                </router-link>
                <span class="dark:text-white font-light mx-2">|</span>
                <router-link to="/blogs">
                    <a class=" dark:text-white font-light">Blogs</a>
                </router-link>
            </div>

        </div>
    </footer>
</template>


<script setup>

import AboutmePage from "../views/AboutmePage.vue";
import Blogs from "../views/BlogPage.vue";


</script>