<template>
  <div>
    <Header />
    <!-- Main content container with consistent styling from homepage -->
    <div class="max-w-[1200px] px-8 sm:px-28 mx-auto w-full grid min-h-screen place-items-start">
      <div class="grid grid-cols-1 gap-6 w-full mt-14 sm:mt-20">
        
        <!-- Blog navigation and date -->
        <div class="flex justify-between items-center w-full mb-4">
          <router-link to="/" class="text-LMBlue dark:text-DMyellow hover:underline flex items-center">
            <span class="mr-2">←</span> Back to home
          </router-link>
          <span class="text-lighterGray text-sm">Published: June 15, 2023</span>
        </div>
        
        <!-- Blog title -->
        <h1 class="font-lemonmilk font-bold text-26px sm:text-36px mb-4 text-LMBlue dark:text-DMyellow drop-shadow-md">
          Robotic arm playing rock paper scissors
        </h1>
        
        <!-- Featured image with enhanced styling -->
        <div class="w-full h-auto mb-8 overflow-hidden shadow-lg">
          <img src="/assets/blogs/robot.jpg" alt="Robotic arm playing rock paper scissors" 
               class="w-full h-auto object-cover" />
        </div>
        
        <!-- Blog content -->
        <div class="font-inter text-gray-800 dark:text-lightGray leading-relaxed space-y-6">
          <!-- Introduction -->
          <p>
            This is a robotic arm playing rock paper scissors. It uses gesture detection from MediaPipe and Python to recognize hand gestures and respond with its own moves.
          </p>
          
          <!-- Project overview section -->
          <div class="border border-gray-200 dark:border-gray-700 shadow-lg rounded-xl p-8 bg-white dark:bg-gray-800">
            <h2 class="font-lemonmilk text-xl mb-4 text-LMBlue dark:text-DMyellow">Project Overview</h2>
            <p class="mb-4">
              I built this project to explore the intersection of computer vision and robotics. The system uses:
            </p>
            <ul class="list-disc pl-6 space-y-2">
              <li>MediaPipe for real-time hand gesture recognition</li>
              <li>Python for the backend processing and decision logic</li>
              <li>A 3D-printed robotic arm with 5 degrees of freedom</li>
              <li>Arduino for controlling the servos in the robotic arm</li>
            </ul>
          </div>
          
          <!-- How it works section -->
          <h2 class="font-lemonmilk text-xl mt-8 mb-4 text-LMBlue dark:text-DMyellow">How It Works</h2>
          <p>
            The system operates through a simple but effective pipeline:
          </p>
          <ol class="list-decimal pl-6 space-y-2 mt-4">
            <li>A webcam captures video input of the player's hand</li>
            <li>MediaPipe processes the video stream to detect hand landmarks</li>
            <li>Custom Python algorithms classify the hand gesture as rock, paper, or scissors</li>
            <li>The system randomly selects its own move</li>
            <li>The Arduino-controlled robotic arm physically forms the corresponding gesture</li>
            <li>The winner is determined following standard rock-paper-scissors rules</li>
          </ol>
          
          <!-- Technical challenges section -->
          <div class="border border-gray-200 dark:border-gray-700 shadow-lg rounded-xl p-8 bg-white dark:bg-gray-800 mt-8">
            <h2 class="font-lemonmilk text-xl mb-4 text-LMBlue dark:text-DMyellow">Technical Challenges</h2>
            <p class="mb-4">
              Building this system presented several interesting challenges:
            </p>
            <ul class="list-disc pl-6 space-y-2">
              <li>Ensuring reliable gesture recognition under varying lighting conditions</li>
              <li>Programming natural-looking movements for the robotic arm</li>
              <li>Optimizing the processing pipeline to minimize latency</li>
              <li>Designing finger mechanisms that could accurately form all three gestures</li>
            </ul>
          </div>
          
          <!-- Code snippet section -->
          <h2 class="font-lemonmilk text-xl mt-8 mb-4 text-LMBlue dark:text-DMyellow">Code Implementation</h2>
          <p class="mb-4">
            Here's a simplified version of the gesture recognition algorithm:
          </p>
          <div class="bg-gray-100 dark:bg-gray-900 p-4 rounded-md overflow-x-auto">
            <pre class="text-sm"><code>
# Sample Python code for gesture recognition
import mediapipe as mp
import cv2

# Initialize MediaPipe Hands
mp_hands = mp.solutions.hands
hands = mp_hands.Hands(static_image_mode=False, max_num_hands=1, min_detection_confidence=0.7)

def detect_gesture(frame):
    # Convert the BGR image to RGB
    rgb_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
    
    # Process the frame and detect hands
    results = hands.process(rgb_frame)
    
    if results.multi_hand_landmarks:
        landmarks = results.multi_hand_landmarks[0].landmark
        
        # Get finger positions
        thumb_tip = landmarks[mp_hands.HandLandmark.THUMB_TIP]
        index_tip = landmarks[mp_hands.HandLandmark.INDEX_FINGER_TIP]
        middle_tip = landmarks[mp_hands.HandLandmark.MIDDLE_FINGER_TIP]
        ring_tip = landmarks[mp_hands.HandLandmark.RING_FINGER_TIP]
        pinky_tip = landmarks[mp_hands.HandLandmark.PINKY_TIP]
        wrist = landmarks[mp_hands.HandLandmark.WRIST]
        
        # Check for rock (closed fist)
        if all_fingers_closed(thumb_tip, index_tip, middle_tip, ring_tip, pinky_tip, wrist):
            return "rock"
            
        # Check for paper (open hand)
        elif all_fingers_open(thumb_tip, index_tip, middle_tip, ring_tip, pinky_tip, wrist):
            return "paper"
            
        # Check for scissors (index and middle extended)
        elif scissors_position(thumb_tip, index_tip, middle_tip, ring_tip, pinky_tip, wrist):
            return "scissors"
            
    return "unknown"
            </code></pre>
          </div>
          
          <!-- Results and future work -->
          <h2 class="font-lemonmilk text-xl mt-8 mb-4 text-LMBlue dark:text-DMyellow">Results and Future Work</h2>
          <p>
            The current system achieves a gesture recognition accuracy of approximately 95% under good 
            lighting conditions. Response time is approximately 200ms from gesture to robot movement.
          </p>
          <p class="mt-4">
            For future iterations, I'm planning to:
          </p>
          <ul class="list-disc pl-6 space-y-2 mt-2">
            <li>Add a display to show the score and game history</li>
            <li>Improve the arm's movement speed and fluidity</li>
            <li>Add an optional "expert mode" where the system can detect and exploit patterns in human play</li>
            <li>Create a more compact version that could be integrated into educational settings</li>
          </ul>
          
          <!-- Conclusion -->
          <p class="mt-8">
            This project demonstrates how even simple computer vision techniques can create engaging 
            interactive experiences. The combination of MediaPipe's accuracy and the physical presence 
            of the robotic arm creates a unique gameplay experience that bridges the digital and physical worlds.
          </p>
          <p class="mt-4">
            If you're interested in learning more about this project or have suggestions for improvements, 
            feel free to contact me using any of the social links on my homepage!
          </p>
        </div>
        
        <!-- Share and contact section -->
        <div class="border-t border-gray-200 dark:border-gray-700 pt-6 mt-10 w-full">
          <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div>
              <h3 class="font-lemonmilk text-lg text-LMBlue dark:text-DMyellow mb-2">Share this project</h3>
              <div class="flex space-x-4">
                <a href="#" class="text-gray-600 dark:text-gray-300 hover:text-LMBlue dark:hover:text-DMyellow">Twitter</a>
                <a href="#" class="text-gray-600 dark:text-gray-300 hover:text-LMBlue dark:hover:text-DMyellow">LinkedIn</a>
                <a href="#" class="text-gray-600 dark:text-gray-300 hover:text-LMBlue dark:hover:text-DMyellow">Facebook</a>
              </div>
            </div>
            <router-link to="/blogs" class="mt-4 sm:mt-0 text-LMBlue dark:text-DMyellow hover:underline">
              View more blogs →
            </router-link>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Footer added for consistency -->
    <Footer class="mt-16" />
  </div>
</template>

<script setup>
import { inject } from "vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
const isDarkMode = inject("isDarkMode");
</script>