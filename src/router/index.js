import { createWebHistory, createRouter } from 'vue-router';
import IndexPage from '@/pages/index.vue';
import LoginPage from '@/pages/login.vue';
import ManagePage from '@/pages/manage.vue';
const routes = [
    { path: '/', component: IndexPage, name: 'IndexPage' },
    {
        path: '/manage',
        component: ManagePage,
        name: 'ManagePage',
        beforeEnter: (to, from, next) => {
            const isAuthenticated = JSON.parse(localStorage.getItem('is_authenticated') || 'false');
            isAuthenticated ? next() : next({ path: '/login' });
        }
    },
    {
        path: '/login',
        component: LoginPage,
        name: 'LoginPage',
        beforeEnter: (to, from, next) => {
            const isAuthenticated = JSON.parse(localStorage.getItem('is_authenticated') || 'false');
            isAuthenticated ? next({ path: '/' }) : next();
        }
    },
];
export const router = createRouter({
    history: createWebHistory(),
    routes,
});
