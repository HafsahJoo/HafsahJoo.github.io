<template>
    <div>
        <div class="mb-14 sm:mb-30">
            <Header />
        </div>
        <div class="flex flex-col items-start min-h-screen">
            <div class="mx-10 md:mx-40 max-w-[1200px]">
                <div class="flex flex-col items-start">
                    <h1 class="font-lemonmilk font-medium text-4xl mb-4">hafsah joomun </h1>
                    <p class="mb-3">
                        3rd-year Computer science student passionate about technology and bla bla bla.<br />
                        Please hire me!
                    </p>
                    <p class="mb-5">
                        When im free, I like to read books, watch movies and play video games.
                    </p>

                    <h3>
                        contact info
                    </h3>
                    

                </div>
            </div>  
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import Header from "./Header.vue";

</script>