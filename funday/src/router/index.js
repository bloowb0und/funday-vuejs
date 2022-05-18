import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '*',
        name: 'NotFound',
        component: () => import(/* webpackChunkName: "NotFound" */ '../views/404.vue')
    },
    {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/catalog',
        name: 'Catalog',
        component: () => import(/* webpackChunkName: "catalog" */ '../views/Catalog.vue')
    },
    {
        path: '/place/:id',
        name: 'PlaceDetails',
        component: () => import(/* webpackChunkName: "place" */ '../views/PlaceDetails.vue')
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
    },
    {
        path: '/admin/:id',
        name: 'Admin',
        component: () => import('../views/AdminPanel.vue')
    },
    {
        path: '/admin/data/:id',
        name: 'AdminData',
        component: () => import('../views/AdminData.vue')
    },
    {
        path: '/admin/requests/:id',
        name: 'AdminRequests',
        component: () => import('../views/AdminRequests.vue')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior() {
        return { x: 0, y: 0 };
    }
})

export default router
