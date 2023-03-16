import { createWebHistory, createRouter } from "vue-router";
//import MainView from '@/components/main/MainView.vue'
//import TestPage from '@/components/test/TestPage.vue'
//import HelloWorld from '@/components/HelloWorld.vue'

const routes = [
    {
        path: "/ExplorePage",
        name: "ExplorePage",
        component: () => import("../components/main/ExplorePage.vue"),
    },
    {
        path: "/ReelsPage",
        name: "ReelsPage",
        component: () => import("../components/main/ReelsPage.vue"),
    },
    {
        path: "/DirectMessenger",
        name: "DirectMessenger",
        component: () => import("../components/main/DirectMessenger.vue"),
    },
    {
        path: "/MyPage",
        name: "MyPage",
        component: () => import("../components/main/MyPage.vue"),
    },
    {
        path: "/",
        name: "MainView",
        component: () => import("../components/main/MainView.vue"),
    },
    {
        path: "/test/page1",
        name: "TestPage",
        component: () => import("../components/test/TestPage.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
