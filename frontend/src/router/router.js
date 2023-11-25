import {createRouter, createWebHistory} from "vue-router";
import cityPage from "../pages/cityPage.vue";
import mainPage from "../pages/mainPage.vue";
import signInPage from "../pages/signInPage.vue";
import signUpPage from "../pages/signUpPage.vue";
import portalNews from "../pages/portalNews.vue";

const routes = [
    {
        path: '/',
        name: 'mainPage',
        component: mainPage
    },
    {
        path: '/city/:cityId',
        name: 'cityPage',
        component: cityPage,
    },
    {
        path: '/signin',
        name: 'signin',
        component: signInPage
    },
    {
        path: '/signup',
        name: 'signup',
        component: signUpPage
    },
    {
        path: '/news',
        name: 'news',
        component: portalNews
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;