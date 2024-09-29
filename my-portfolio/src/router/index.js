import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/HomePage.vue";
import ProjectPage from "../components/ProjectPage.vue";
import BlogPage from "../components/BlogPage.vue";
import AboutmePage from "../components/AboutmePage.vue";

const routes = [
    {
        path: "/",
        component: AboutmePage,
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
    },
    {
        path: "/aboutme",
        component: AboutmePage,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router
