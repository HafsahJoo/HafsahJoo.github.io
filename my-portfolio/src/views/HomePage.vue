<template>
  <div class="min-h-screen bg-LMveryLightBeige dark:bg-black transition-colors duration-500">
    <Header />
    
    <!-- Enhanced background with subtle patterns for both light and dark modes -->
    <div class="fixed inset-0 bg-gradient-to-br from-LMlightBeige/20 via-transparent to-LMbeige/10 dark:from-gray-800/30 dark:via-transparent dark:to-gray-700/10 pointer-events-none"></div>
    <div class="fixed inset-0 bg-grid-pattern-light dark:bg-grid-pattern-dark opacity-3 dark:opacity-20 pointer-events-none"></div>
    
    
    <!-- Main content with enhanced visual elements -->
    <div class="max-w-[1200px] px-8 sm:px-28 mx-auto w-full grid min-h-screen place-items-start relative z-10">
      <div class="grid grid-cols-1 gap-12 mt-14 sm:mt-28">
        
        <!-- Profile section with full width like terminals -->
        <div class="col-span-1 grid grid-cols-1 sm:grid-cols-3 gap-8 items-center">
          <!-- Text content -->
          <div class="col-span-1 sm:col-span-2 relative">
          <!-- Enhanced name with better typography -->
          <div class="relative">
              <h1 class="font-pixel font-normal text-2xl sm:text-3xl mb-6 text-mocha dark:text-DMyellow drop-shadow-lg relative z-10 uppercase">
              Hafsah joomun
            </h1>
          </div>
          
          <!-- Enhanced description with better styling -->
          <div class="relative">
              <p class="font-inter text-text-secondary text-md sm:text-lg leading-relaxed mb-4 relative z-10">
              A curious mind from Mauritius, passionate about technology, coding, and mathematics.
            </p>
              <p class="font-inter text-text-secondary text-md sm:text-lg leading-relaxed relative z-10">
              This is my space to share my work and discoveries.
            </p>
            <!-- Decorative underline -->
              <div class="w-24 h-0.5 bg-gradient-to-r from-mocha dark:from-DMyellow to-sage dark:to-purple-900 mt-4 rounded-full"></div>
          </div>
          
            <!-- Clean social media icons -->
            <div class="flex flex-row mt-8 space-x-8">
            <a href="https://www.linkedin.com/in/hafsah-joomun/" 
                 class="group transform transition-all duration-300 hover:scale-125">
                <img v-if="isDarkMode" src="../assets/icons/darklinkedin.svg" alt="linkedin" class="w-12 h-12 transition-transform duration-300" />
                <img v-else src="../assets/icons/lightlinkedin.svg" alt="linkedin" class="w-12 h-12 transition-transform duration-300" />
            </a>
            <a href="#" 
                 class="group transform transition-all duration-300 hover:scale-125">
                <img v-if="isDarkMode" src="../assets/icons/darkgithub.svg" alt="github" class="w-12 h-12 transition-transform duration-300" />
                <img v-else src="../assets/icons/lightgithub.svg" alt="github" class="w-12 h-12 transition-transform duration-300" />
            </a>
            <a href="mailto:hafsah260103@gmail.com" 
                 class="group transform transition-all duration-300 hover:scale-125">
                <img v-if="isDarkMode" src="../assets/icons/darkmail.svg" alt="mail" class="w-12 h-12 transition-transform duration-300" />
                <img v-else src="../assets/icons/lightmail.svg" alt="mail" class="w-12 h-12 transition-transform duration-300" />
            </a>
          </div>
        </div>
        
          <!-- Profile picture -->
          <div class="col-span-1 hidden sm:block">
          <div v-if="isDarkMode" class="transition-transform hover:scale-105">
            <img src="../assets/icons/lightprofile.svg" alt="Dark Mode" class="w-full h-auto" />
          </div>
          <div v-else class="transition-transform hover:scale-105">
            <img src="../assets/icons/darkprofile.svg" alt="Light Mode" class="w-full h-auto" />
            </div>
          </div>
        </div>
        
        <!-- Clean Terminal About Me Section -->
        <div class="col-span-1 my-10">
          <div>
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
                    <span class="font-pixel text-white dark:text-DMyellow text-xs uppercase">ABOUT_ME.EXE</span>
                  </div>
                  <div class="font-mono text-xs text-white/70 dark:text-gray-300 hidden sm:block">
                    hafsah@portfolio:~/about
                  </div>
                </div>
              </div>
              
              <!-- Terminal Content -->
              <div class="p-8 bg-charcoal dark:bg-gray-900 min-h-[400px]">
                <div class="font-mono text-sm space-y-3">
                  <!-- ASCII Art Header -->
                  <div class="text-sand dark:text-amber-400 mb-6">
                    <pre class="text-center hidden sm:block text-xs">
                      ⠀⠀⠀⠀⠀⢀⡀⠀⠀⠀⠀
⠀⠀⠀⠀⢀⡴⣆⠀⠀⠀⠀⠀⣠⡀ ᶻ 𝗓 𐰁 .ᐟ ⣼⣿⡗⠀⠀⠀⠀
⠀⠀⠀⣠⠟⠀⠘⠷⠶⠶⠶⠾⠉⢳⡄⠀⠀⠀⠀⠀⣧⣿⠀⠀⠀⠀⠀
⠀⠀⣰⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣤⣤⣤⣤⣤⣿⢿⣄⠀⠀⠀⠀
⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣧⠀⠀⠀⠀⠀⠀⠙⣷⡴⠶⣦
⠀⠀⢱⡀⠀⠉⠉⠀⠀⠀⠀⠛⠃⠀⢠⡟⠀⠀⠀⢀⣀⣠⣤⠿⠞⠛⠋
⣠⠾⠋⠙⣶⣤⣤⣤⣤⣤⣀⣠⣤⣾⣿⠴⠶⠚⠋⠉⠁⠀⠀⠀⠀⠀⠀
⠛⠒⠛⠉⠉⠀⠀⠀⣴⠟⢃⡴⠛⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                    </pre>
                    <!-- Mobile ASCII Art -->
                    <pre class="text-center block sm:hidden text-xs">
                      ⠀⠀⠀⠀⠀⢀⡀⠀⠀⠀⠀
⠀⠀⠀⠀⢀⡴⣆⠀⠀⠀⠀⠀⣠⡀ ᶻ 𝗓 𐰁 .ᐟ ⣼⣿⡗⠀⠀⠀⠀
⠀⠀⠀⣠⠟⠀⠘⠷⠶⠶⠶⠾⠉⢳⡄⠀⠀⠀⠀⠀⣧⣿⠀⠀⠀⠀⠀
⠀⠀⣰⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣤⣤⣤⣤⣤⣿⢿⣄⠀⠀⠀⠀
⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣧⠀⠀⠀⠀⠀⠀⠙⣷⡴⠶⣦
⠀⠀⢱⡀⠀⠉⠉⠀⠀⠀⠀⠛⠃⠀⢠⡟⠀⠀⠀⢀⣀⣠⣤⠿⠞⠛⠋
⣠⠾⠋⠙⣶⣤⣤⣤⣤⣤⣀⣠⣤⣾⣿⠴⠶⠚⠋⠉⠁⠀⠀⠀⠀⠀⠀
⠛⠒⠛⠉⠉⠀⠀⠀⣴⠟⢃⡴⠛
                    </pre>
                  </div>
                  
                   <!-- Animated terminal lines -->
                   <div v-for="(line, index) in aboutTerminalLines" :key="index" class="terminal-line" :class="{ 'typing': line.typing, 'visible': line.visible }">
                     <div v-if="line.type === 'prompt'" class="flex flex-wrap items-center break-all">
                       <span class="text-sage dark:text-DMyellow">user@portfolio</span>
                       <span class="text-white">:</span>
                       <span class="text-sand dark:text-amber-400">~/about</span>
                       <span class="text-white">$ </span>
                       <span class="typed-text text-white">{{ line.displayText }}</span>
                       <span v-if="line.showCursor" class="animate-pulse text-white bg-white w-2 h-4 ml-1"></span>
                    </div>
                     <div v-else-if="line.type === 'output'" class="ml-2 sm:ml-4 break-words" :class="line.class" style="white-space: pre-line;">
                       {{ line.displayText }}
                    </div>
                  </div>
                  
                   <!-- Learn More Button - only show after animation completes -->
                   <div v-if="aboutAnimationComplete" class="flex justify-end pt-6 fade-in">
                    <router-link to="/aboutme" 
                       class="font-pixel text-xs uppercase tracking-wider group inline-flex items-center px-4 py-2 bg-mocha hover:bg-sage dark:bg-gray-800 dark:hover:bg-DMyellow border-2 border-mocha dark:border-gray-600 text-white dark:text-DMyellow hover:text-charcoal dark:hover:text-black transition-all duration-300 hover:shadow-lg">
                      <span class="mr-2">></span>
                      LEARN_MORE.EXE
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Revamped Projects Section with Pixel Theme -->
        <div class="col-span-1 mb-16 relative">
          <div class="relative z-10">
            <!-- Pixel-styled section header -->
            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 sm:mb-12 space-y-4 sm:space-y-0">
              <div class="relative">
                <h1 class="font-pixel font-normal text-xl text-mocha dark:text-DMyellow uppercase tracking-wider">Projects</h1>
                <div class="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-mocha to-sage dark:from-DMyellow dark:to-purple-900"></div>
              </div>
              <router-link to="/projects" 
                class="font-pixel text-xs uppercase tracking-wider group inline-flex items-center px-4 py-2 bg-mocha hover:bg-sage dark:bg-gray-800 dark:hover:bg-DMyellow border-2 border-mocha dark:border-gray-600 text-white dark:text-DMyellow hover:text-charcoal dark:hover:text-black transition-all duration-300 hover:shadow-lg self-start sm:self-auto">
                <span class="mr-2">></span>
                VIEW_ALL
              </router-link>
            </div>
            
            <!-- Pixel-themed projects carousel/grid -->
            <div class="overflow-x-auto sm:overflow-visible">
              <div class="flex space-x-6 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-x-0 pb-4 sm:pb-0">
              <!-- Project 1: OIA ROBOT -->
              <div class="group relative bg-gradient-to-br from-cream/30 to-sand/20 dark:from-gray-800/50 dark:to-gray-700/30 border-2 border-sand/60 dark:border-gray-600 hover:border-mocha dark:hover:border-DMyellow transition-all duration-500 overflow-hidden flex-shrink-0 w-80 sm:w-auto">
                <div class="aspect-video bg-gradient-to-br from-LMBlue/10 to-LMbeige/20 dark:from-gray-700 dark:to-gray-600 relative overflow-hidden">
                  <img src="/assets/oia2.jpg" alt="OIA ROBOT" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div class="p-6">
                  <h3 class="font-pixel text-sm text-mocha dark:text-DMyellow uppercase mb-3 tracking-wide">OIA ROBOT</h3>
                  <p class="font-inter text-sm text-text-secondary dark:text-gray-300 leading-relaxed mb-4">
                    Robotic arm playing rock paper scissors using gesture detection from MediaPipe and Python
                  </p>
                  <router-link to="/project1" 
                    class="font-pixel text-xs uppercase tracking-wider inline-flex items-center text-mocha dark:text-DMyellow hover:text-sage dark:hover:text-amber-300 transition-colors duration-300">
                    <span class="mr-2">></span>
                    EXPLORE
                  </router-link>
                </div>
              </div>

              <!-- Project 2: Vending Machine -->
              <div class="group relative bg-gradient-to-br from-cream/30 to-sand/20 dark:from-gray-800/50 dark:to-gray-700/30 border-2 border-sand/60 dark:border-gray-600 hover:border-mocha dark:hover:border-DMyellow transition-all duration-500 overflow-hidden flex-shrink-0 w-80 sm:w-auto">
                <div class="aspect-video bg-gradient-to-br from-LMBlue/10 to-LMbeige/20 dark:from-gray-700 dark:to-gray-600 relative overflow-hidden">
                  <img src="/assets/vm.jpg" alt="Vending Machine Robot" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div class="p-6">
                  <h3 class="font-pixel text-sm text-mocha dark:text-DMyellow uppercase mb-3 tracking-wide">Vending Machine</h3>
                  <p class="font-inter text-sm text-text-secondary dark:text-gray-300 leading-relaxed mb-4">
                    Smart vending machine built using Arduino, ESP32 cam with QR code detection technology
                  </p>
                  <router-link to="/project2" 
                    class="font-pixel text-xs uppercase tracking-wider inline-flex items-center text-mocha dark:text-DMyellow hover:text-sage dark:hover:text-amber-300 transition-colors duration-300">
                    <span class="mr-2">></span>
                    EXPLORE
                  </router-link>
                </div>
              </div>

              <!-- Project 3: Pacman Game -->
              <div class="group relative bg-gradient-to-br from-cream/30 to-sand/20 dark:from-gray-800/50 dark:to-gray-700/30 border-2 border-sand/60 dark:border-gray-600 hover:border-mocha dark:hover:border-DMyellow transition-all duration-500 overflow-hidden flex-shrink-0 w-80 sm:w-auto">
                <div class="aspect-video bg-gradient-to-br from-LMBlue/10 to-LMbeige/20 dark:from-gray-700 dark:to-gray-600 relative overflow-hidden">
                  <img src="/assets/pacman4.png" alt="Pacman Game" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div class="p-6">
                  <h3 class="font-pixel text-sm text-mocha dark:text-DMyellow uppercase mb-3 tracking-wide">Pacman Game</h3>
                  <p class="font-inter text-sm text-text-secondary dark:text-gray-300 leading-relaxed mb-4">
                    Classic Pacman game recreation built using Python with modern gameplay mechanics
                  </p>
                  <router-link to="/project3" 
                    class="font-pixel text-xs uppercase tracking-wider inline-flex items-center text-mocha dark:text-DMyellow hover:text-sage dark:hover:text-amber-300 transition-colors duration-300">
                    <span class="mr-2">></span>
                    EXPLORE
                  </router-link>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Revamped Blogs Section with Pixel Theme -->
        <div class="col-span-1 mb-16 relative">
          <div class="relative z-10">
            <!-- Pixel-styled section header -->
            <div class="flex items-center justify-between mb-12">
              <div class="relative">
                <h1 class="font-pixel font-normal text-xl text-mocha dark:text-DMyellow uppercase tracking-wider">Blogs</h1>
                <div class="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-mocha to-sage dark:from-DMyellow dark:to-purple-900"></div>
              </div>
              <!-- <router-link to="/blogs" 
                class="font-pixel text-xs uppercase tracking-wider group inline-flex items-center px-4 py-2 bg-mocha hover:bg-sage dark:bg-gray-800 dark:hover:bg-DMyellow border-2 border-mocha dark:border-gray-600 text-white dark:text-DMyellow hover:text-charcoal dark:hover:text-black transition-all duration-300 hover:shadow-lg">
                <span class="mr-2">></span>
                VIEW_ALL
              </router-link> -->
            </div>
            
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
                  <div class="font-mono text-xs text-white/70 dark:text-gray-300 hidden sm:block">
                    hafsah@portfolio:~/blogs
                  </div>
                </div>
              </div>
              
              <!-- Terminal Content -->
              <div class="p-8 bg-charcoal dark:bg-gray-900 min-h-[300px]">
                <div class="font-mono text-sm space-y-3">
                  <!-- Welcome message -->
                  <div class="text-sand dark:text-amber-400 mb-6">
                    <div class="flex items-center mb-2">
                      <span class="text-green-400">✓</span>
                      <span class="ml-2">Initializing blog system...</span>
                    </div>
                    <div class="flex items-center mb-2">
                      <span class="text-green-400">✓</span>
                      <span class="ml-2">Loading content management...</span>
                    </div>
                    <div class="flex items-center mb-4">
                      <span class="text-red-400">⚠</span>
                      <span class="ml-2 text-red-400">Blog posts not found</span>
                    </div>
                  </div>
                  
                  <!-- Command line interaction -->
                  <div class="space-y-2">
                    <div class="flex flex-wrap items-center break-all">
                      <span class="text-sage dark:text-DMyellow">user@portfolio</span>
                      <span class="text-white">:</span>
                      <span class="text-sand dark:text-amber-400">~/blogs</span>
                      <span class="text-white">$ ls -la</span>
                    </div>
                    <div class="text-gray-400 ml-2 sm:ml-4 break-words">
                      <div class="break-all">total 0</div>
                      <div class="break-all">drwxr-xr-x 2 user user 4096 Oct  2 2025 .</div>
                      <div class="break-all">drwxr-xr-x 8 user user 4096 Oct  2 2025 ..</div>
                      <div class="break-all">-rw-r--r-- 1 user user   42 Oct  2 2025 .gitkeep</div>
                    </div>
                  </div>
                  
                  <div class="space-y-2 mt-6">
                    <div class="flex flex-wrap items-center break-all">
                      <span class="text-sage dark:text-DMyellow">user@portfolio</span>
                      <span class="text-white">:</span>
                      <span class="text-sand dark:text-amber-400">~/blogs</span>
                      <span class="text-white">$ cat .gitkeep</span>
                    </div>
                    <div class="text-sand ml-2 sm:ml-4 break-words">
                      <div class="break-words"># Blog posts coming soon!</div>
                      <div class="break-words"># Stay tuned for updates...</div>
                    </div>
                </div>
                
                  <div class="space-y-2 mt-6">
                    <div class="flex flex-wrap items-center break-all">
                      <span class="text-sage dark:text-DMyellow">user@portfolio</span>
                      <span class="text-white">:</span>
                      <span class="text-sand dark:text-amber-400">~/blogs</span>
                      <span class="text-white">$ echo "Status: In Development"</span>
                    </div>
                    <div class="text-green-400 ml-2 sm:ml-4 mb-4 break-words">
                      Status: In Development
                    </div>
                  </div>
                  
                  <!-- Current command line with cursor -->
                  <div class="flex flex-wrap items-center mt-8 break-all">
                    <span class="text-sage dark:text-DMyellow">user@portfolio</span>
                    <span class="text-white">:</span>
                    <span class="text-sand dark:text-amber-400">~/blogs</span>
                    <span class="text-white">$ </span>
                    <span class="animate-pulse text-white bg-white w-2 h-4 ml-1"></span>
                  </div>
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
import Blog from "../components/BlogCard.vue";

const isDarkMode = inject("isDarkMode");
const aboutTerminalLines = ref([]);
const aboutAnimationComplete = ref(false);

// About terminal animation sequence
const aboutSequence = [
  { type: 'prompt', delay: 1000 },
  { type: 'command', text: 'whoami', class: 'text-white', delay: 0 },
  { type: 'output', text: 'Hafsah Joomun - Computer Science Student', class: 'text-mocha dark:text-cyan-400', delay: 400 },
  { type: 'prompt', delay: 1200 },
  { type: 'command', text: 'cat about.txt', class: 'text-white', delay: 0 },
  { type: 'output', text: 'Hi, I\'m Joomun hafsah, a Computer Science student\nwho loves solving logical problems and exploring technology.\nFrom the beautiful island of Mauritius 🇲🇺', class: 'text-gray-400 dark:text-yellow-300', delay: 600 },
  { type: 'prompt', delay: 1000 },
  { type: 'command', text: 'ls skills/', class: 'text-white', delay: 0 },
  { type: 'output', text: 'programming/  mathematics/  robotics/  problem-solving/', class: 'text-LMbeige dark:text-magenta-400', delay: 500 }
];

const typeText = (text, speed = 80) => {
  return new Promise((resolve) => {
    let i = 0;
    const currentLine = aboutTerminalLines.value[aboutTerminalLines.value.length - 1];
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

const addAboutLine = (lineData) => {
  const line = {
    type: lineData.type,
    displayText: '',
    fullText: lineData.text,
    class: lineData.class,
    visible: true,
    typing: false,
    showCursor: false
  };
  
  aboutTerminalLines.value.push(line);
  return line;
};

const runAboutAnimation = async () => {
  let currentPromptLine = null;
  
  for (let i = 0; i < aboutSequence.length; i++) {
    const step = aboutSequence[i];
    
    await new Promise(resolve => setTimeout(resolve, step.delay));
    
    if (step.type === 'prompt') {
      currentPromptLine = addAboutLine(step);
      currentPromptLine.type = 'prompt';
      currentPromptLine.displayText = '';
      currentPromptLine.showCursor = true;
    } else if (step.type === 'command') {
      if (currentPromptLine) {
        await typeText(step.text, 80);
        currentPromptLine.showCursor = false;
        currentPromptLine = null;
      }
    } else if (step.type === 'output') {
      const outputLine = addAboutLine(step);
      outputLine.displayText = step.text;
    }
  }
  
  setTimeout(() => {
    const finalLine = {
      type: 'prompt',
      displayText: '',
      visible: true,
      showCursor: true
    };
    aboutTerminalLines.value.push(finalLine);
    aboutAnimationComplete.value = true;
  }, 1000);
};

onMounted(() => {
  setTimeout(() => {
    runAboutAnimation();
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
