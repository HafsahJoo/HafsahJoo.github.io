import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import ProjectPage from "../views/ProjectPage.vue";
    // import BlogPage from "../views/BlogPage.vue";
import BlogPage1 from "../views/BlogPage1.vue";
import AboutmePage from "../views/AboutmePage.vue";
import ProjectPage1 from "../views/ProjectPage1.vue";   
import ProjectPage2 from "../views/ProjectPage2.vue";
import ProjectPage3 from "../views/ProjectPage3.vue";
import ProjectPage4 from "../views/ProjectPage4.vue";
import GamingPage from "../views/GamingPage.vue";

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
        path:"/project1",
        component: ProjectPage1,
    },
    {
        path:"/project2",
        component: ProjectPage2,
    },
    {
        path:"/project3",
        component: ProjectPage3,
    },
    {
        path:"/project4",
        component: ProjectPage4,
    },
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
    },
    {
        path: "/gaming",
        component: GamingPage,

    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router
