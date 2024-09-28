<script setup>
import { ref, provide, watch } from 'vue';

const isDarkMode = ref(false);
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
};

// Provide the isDarkMode and toggleDarkMode to all child components
provide('isDarkMode', isDarkMode);
provide('toggleDarkMode', toggleDarkMode);

// Update the HTML tag when dark mode is toggled
watch(isDarkMode, (newValue) => {
  if (newValue) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
});
</script>

<template>
  
  <router-view> </router-view>
  
</template>

