import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home"
import Archives from "../views/Archives"
import Project from "../views/Project"
import Link from "../views/Link"
import About from "../views/About"

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/archives",
        name: "Archives",
        component: Archives
    },
    {
        path: "/project",
        name: "Project",
        component: Project
    },
    {
        path: "/link",
        name: "Link",
        component: Link
    },
    {
        path: "/about",
        name: "About",
        component: About
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
})

export default router;