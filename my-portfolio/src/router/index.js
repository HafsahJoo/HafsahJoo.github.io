import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AboutmePage from '../views/AboutmePage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/about', component: AboutmePage },
  ],
  scrollBehavior(to, from, saved) {
    if (to.hash) return { el: to.hash, top: 24, behavior: 'smooth' }
    return saved || { top: 0 }
  },
})

export default router
