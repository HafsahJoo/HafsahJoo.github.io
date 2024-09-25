import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/HomePage.vue";
import ProjectPage from "../components/ProjectPage.vue";
import BlogPage from "../components/BlogPage.vue";


const routes = [
    {
        path: "/",
        component: HomePage,
    }
    ,
    {
        path: "/projects",
        component: ProjectPage,
    }
    ,
    {
        path: "/blogs",
        component: BlogPage,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router
