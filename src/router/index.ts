import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [{
    path: '/',
    name: 'home',
    meta: {
        title: '首页'
    },
    component: () => import('@/views/Homepage/index.vue'),
}]

const router = createRouter({ 
    history: createWebHistory(),
    routes: routes,
})

export default router;

