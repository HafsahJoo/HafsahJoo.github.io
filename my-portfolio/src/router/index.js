import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import ProjectPage from "../views/ProjectPage.vue";
    // import BlogPage from "../views/BlogPage.vue";
import BlogPage1 from "../views/BlogPage1.vue";
import AboutmePage from "../views/AboutmePage.vue";

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
        component: BlogPage1,
    }
    ,
    {
        path: "/blog1",
        component: BlogPage1,
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
