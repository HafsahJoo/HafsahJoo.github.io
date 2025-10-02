<template>
  <div class="min-h-screen bg-LMveryLightBeige dark:bg-black relative overflow-hidden">
    <!-- Background gradient to match homepage -->
    <div class="absolute inset-0 bg-gradient-to-br from-LMlightBeige/20 via-transparent to-LMbeige/10 dark:from-gray-800/20 dark:via-transparent dark:to-gray-700/10"></div>
    <!-- Background grid pattern -->
    <div class="fixed inset-0 bg-grid-pattern-light dark:bg-grid-pattern-dark opacity-60 dark:opacity-40 pointer-events-none"></div>

    <!-- Header with proper spacing -->
    <div class="mb-10 sm:mb-16 relative z-10">
      <Header />
    </div>

    <!-- Main content with homepage styling -->
    <div class="max-w-[1200px] px-8 sm:px-28 mx-auto w-full relative z-10">
      <div class="flex flex-col items-start">
        <!-- Page title with decorative element -->
        <div class="relative mb-8 sm:mb-12 w-full">
          <h2 class="font-pixel font-medium text-2xl sm:text-4xl mb-2 text-mocha dark:text-DMyellow uppercase">
            Blog Posts
          </h2>
          <div class="w-20 h-1 bg-gradient-to-r from-mocha to-sage dark:from-DMyellow dark:to-purple-900 rounded-full"></div>
        </div>
        
        <!-- Terminal-style Under Construction Content -->
        <div class="w-full">
          <!-- Clean Terminal Interface -->
          <div class="bg-charcoal dark:bg-gray-900 border-2 border-mocha dark:border-DMyellow shadow-2xl overflow-hidden">
            
            <!-- Terminal Title Bar -->
            <div class="bg-mocha dark:bg-gray-700 px-4 py-3 border-b border-sand dark:border-gray-600">
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-3">
                  <!-- Terminal Controls -->
                  <div class="flex space-x-2">
                    <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span class="font-pixel text-white dark:text-DMyellow text-xs uppercase">BLOG_SYSTEM.EXE</span>
                </div>
              </div>
            </div>
            
            <!-- Terminal Content -->
            <div class="p-8 bg-charcoal dark:bg-gray-900 min-h-[400px]">
              <div class="font-mono text-sm space-y-4">
                <!-- Animated terminal lines -->
                <div v-for="(line, index) in terminalLines" :key="index" class="terminal-line" :class="{ 'typing': line.typing, 'visible': line.visible }">
                  <div v-if="line.type === 'prompt'" class="flex items-center">
                    <span class="text-sage dark:text-DMyellow">user@portfolio</span>
                    <span class="text-white">:</span>
                    <span class="text-sand dark:text-amber-400">~/blogs</span>
                    <span class="text-white">$ </span>
                    <span class="typed-text text-white">{{ line.displayText }}</span>
                    <span v-if="line.showCursor" class="animate-pulse text-white bg-white w-2 h-4 ml-1"></span>
                  </div>
                  <div v-else-if="line.type === 'output'" class="ml-4" :class="line.class" style="white-space: pre-line;">
                    {{ line.displayText }}
                  </div>
                  <div v-else-if="line.type === 'status'" class="flex items-center">
                    <span :class="line.iconClass">{{ line.icon }}</span>
                    <span class="ml-2" :class="line.class">{{ line.displayText }}</span>
                  </div>
                </div>
                
                <!-- Action buttons - only show after animation completes -->
                <div v-if="animationComplete" class="flex flex-col sm:flex-row gap-4 pt-6 fade-in">
                  <router-link to="/projects" 
                    class="font-pixel text-xs uppercase tracking-wider group inline-flex items-center px-4 py-2 bg-mocha hover:bg-sage dark:bg-gray-800 dark:hover:bg-DMyellow border-2 border-mocha dark:border-gray-600 text-white dark:text-DMyellow hover:text-charcoal dark:hover:text-black transition-all duration-300 hover:shadow-lg">
                    <span class="mr-2">></span>
                    VIEW_PROJECTS
                  </router-link>
                  <router-link to="/" 
                    class="font-pixel text-xs uppercase tracking-wider group inline-flex items-center px-4 py-2 bg-gray-700 hover:bg-gray-600 dark:bg-gray-600 dark:hover:bg-gray-500 border-2 border-gray-600 dark:border-gray-500 text-white transition-all duration-300 hover:shadow-lg">
                    <span class="mr-2">></span>
                    BACK_HOME
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer class="relative z-10" />
  </div>
</template>

<script setup>
import { inject, ref, onMounted } from "vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

const isDarkMode = inject("isDarkMode");
const terminalLines = ref([]);
const animationComplete = ref(false);

// Terminal animation sequence
const sequence = [
  { type: 'status', text: 'Initializing blog system...', icon: '✓', iconClass: 'text-green-400', class: 'text-sand dark:text-amber-400', delay: 1000 },
  { type: 'status', text: 'Loading content...', icon: '✓', iconClass: 'text-green-400', class: 'text-sand dark:text-amber-400', delay: 800 },
  { type: 'status', text: 'Blog system under development', icon: '⚠', iconClass: 'text-yellow-400', class: 'text-yellow-400', delay: 1000 },
  { type: 'prompt', delay: 1500 },
  { type: 'command', text: 'ls', class: 'text-white', delay: 0 },
  { type: 'output', text: 'README.md  .gitkeep', class: 'text-gray-400', delay: 300 },
  { type: 'prompt', delay: 800 },
  { type: 'command', text: 'cat README.md', class: 'text-white', delay: 0 },
  { type: 'output', text: '# Blog System Status\nStatus: Under Development\nComing Soon!', class: 'text-sand dark:text-amber-400', delay: 400 },
  { type: 'prompt', delay: 1000 },
  { type: 'command', text: 'echo "Stay tuned..."', class: 'text-white', delay: 0 },
  { type: 'output', text: 'Stay tuned...', class: 'text-green-400', delay: 500 }
];

const typeText = (text, speed = 50) => {
  return new Promise((resolve) => {
    let i = 0;
    const currentLine = terminalLines.value[terminalLines.value.length - 1];
    currentLine.showCursor = true;
    
    const typeInterval = setInterval(() => {
      currentLine.displayText = text.substring(0, i + 1);
      i++;
      
      if (i >= text.length) {
        clearInterval(typeInterval);
        currentLine.showCursor = false;
        resolve();
      }
    }, speed);
  });
};

const addLine = (lineData) => {
  const line = {
    type: lineData.type,
    displayText: '',
    fullText: lineData.text,
    class: lineData.class,
    icon: lineData.icon,
    iconClass: lineData.iconClass,
    visible: true,
    typing: false,
    showCursor: false
  };
  
  terminalLines.value.push(line);
  return line;
};

const runAnimation = async () => {
  let currentPromptLine = null;
  
  for (let i = 0; i < sequence.length; i++) {
    const step = sequence[i];
    
    // Add delay before showing the line
    await new Promise(resolve => setTimeout(resolve, step.delay));
    
    if (step.type === 'prompt') {
      // Add prompt line immediately (no animation for the prompt itself)
      currentPromptLine = addLine(step);
      currentPromptLine.type = 'prompt';
      currentPromptLine.displayText = ''; // Start with empty command
      currentPromptLine.showCursor = true; // Show cursor immediately
    } else if (step.type === 'command') {
      // Type the command in the current prompt line
      if (currentPromptLine) {
        await typeText(step.text, 80);
        currentPromptLine.showCursor = false; // Hide cursor after typing
        currentPromptLine = null; // Clear current prompt after typing
      }
    } else if (step.type === 'output') {
      // Show output immediately (no typing animation)
      const outputLine = addLine(step);
      outputLine.displayText = step.text;
    } else {
      // For status lines, show immediately
      const statusLine = addLine(step);
      statusLine.displayText = step.text;
    }
  }
  
  // Show final cursor and buttons
  setTimeout(() => {
    const finalLine = {
      type: 'prompt',
      displayText: '',
      visible: true,
      showCursor: true
    };
    terminalLines.value.push(finalLine);
    animationComplete.value = true;
  }, 1000);
};

onMounted(() => {
  // Start animation after a short delay
  setTimeout(() => {
    runAnimation();
  }, 500);
});
</script>

<style scoped>
.fade-in {
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.terminal-line {
  opacity: 0;
  animation: slideIn 0.3s ease-out forwards;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-10px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
