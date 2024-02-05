import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    { 
        path: '/', 
        component: () => import( /* webpackChunkName:"ListPage" */ '@/modules/pokemon/pages/ListPage.vue') 
    },
    { 
        path: '/about', 
        component: () => import( /* webpackChunkName:"AboutPage" */ '@/modules/pokemon/pages/AboutPage')
    },
    { 
        path: '/id', 
        component: () => import( /* webpackChunkName:"PokemonPage" */ '@/modules/pokemon/pages/PokemonPage.vue')
    },
    { 
        path: '/:pathMatch(.*)*', 
        component: () => import( /* webpackChunckName:"NoPageFound" */ '@/modules/shared/pages/NoPageFound')
    },
]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

export default router