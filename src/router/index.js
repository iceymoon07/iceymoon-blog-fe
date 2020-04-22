import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home"
import Archives from "../views/Archives"
import Project from "../views/Project"
import Link from "../views/Link"
import About from "../views/About"
import Edit from "../views/Edit"
import Post from '../views/Post'
import NewPost from '../views/NewPost'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
 return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

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
    {
        path: "/newpost",
        name: "NewPost",
        component: NewPost
    },
    {
        path: "/edit/:id",
        name: "Edit",
        component: Edit
    },
    {
        path: "/post/:id",
        name: "Post",
        component: Post
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
})

export default router;