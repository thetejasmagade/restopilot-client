import { createWebHistory, createRouter } from 'vue-router'
import IndexPage from '@/pages/index.vue'
import LoginPage from '@/pages/login.vue'
import ManagePage from '@/pages/manage.vue'
import OrdersPage from '@/pages/orders.vue'
import SettingsPage from '@/pages/settings.vue'

const routes = [
  { path: '/', component: IndexPage, name: 'IndexPage' },
  {
    path: '/manage', 
    component: ManagePage, 
    name: 'ManagePage',
    beforeEnter: (to: any, from: any, next: any) => {
      const isAuthenticated = JSON.parse(localStorage.getItem('is_authenticated') || 'false') && localStorage.getItem('userType') == 'billing';
      isAuthenticated ? next() : next({ path: '/login' })
    }
  },
  {
    path: '/orders', 
    component: OrdersPage, 
    name: 'OrdersPage',
    beforeEnter: (to: any, from: any, next: any) => {
      const isAuthenticated = JSON.parse(localStorage.getItem('is_authenticated') || 'false') && localStorage.getItem('userType') == 'billing';
      isAuthenticated ? next() : next({ path: '/login' })
    }
  },
  {
    path: '/settings', 
    component: SettingsPage, 
    name: 'SettingsPage',
    beforeEnter: (to: any, from: any, next: any) => {
      const isAuthenticated = JSON.parse(localStorage.getItem('is_authenticated') || 'false');
      isAuthenticated ? next() : next({ path: '/login' })
    }
  },
  {
    path: '/login',
    component: LoginPage,
    name: 'LoginPage',
    beforeEnter: (to: any, from: any, next: any) => {
      const isAuthenticated = JSON.parse(localStorage.getItem('is_authenticated') || 'false');
      isAuthenticated ? next({ path: '/' }) : next()
    }
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
