<template>
    <div class="border rounded-xl border-lightGray h-96 overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105">
        <!-- Image Section -->
        <div class="h-1/2 bg-cover bg-center">
            <img :src="imgpath" alt="blog image" class="w-full h-full object-cover" />
        </div>

        
        <!-- Content Section -->
        <div class="p-4 h-1/2 flex flex-col justify-between">
            <div>
                <h2 class="font-bold text-lg text-gray-800 dark:text-white mb-2">{{title}}</h2>
                <p class="text-sm text-gray-600 dark:text-gray-300">
                    {{body}}
                </p>
            </div>
            <router-link :to="page" class="text-blue-500 hover:underline">
                Read More &rarr;
            </router-link>
        </div>
    </div>
</template>
  

<script setup>
    defineProps({
        title: String,
        imgpath: String,
        body:String,
        page: String
    });
</script>

