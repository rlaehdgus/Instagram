import { createWebHistory, createRouter } from 'vue-router'
//import MainView from '@/components/main/MainView.vue'
//import TestPage from '@/components/test/TestPage.vue'
//import HelloWorld from '@/components/HelloWorld.vue'

const routes = [
    {
        path: '/',
        name: 'MainView',
        component: () => import('../components/main/MainView.vue')
    },
    {
        path: '/test/page1',
        name: 'TestPage',
        component: () => import('../components/test/TestPage.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;