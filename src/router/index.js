import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/shop',
      name: 'shop',
      component: () => import('../views/ShopView.vue')
    },
    {
      path: '/shop/:id',
      name: 'detail',
      component: () => import('../views/DetailView.vue')
    },
    {
      path: '/multiple',
      name: 'multiple',
      component: () => import('../views/MultipleView.vue')
    },
    {
      path: '/tier',
      name: 'tier',
      component: () => import('../views/TierView.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/CartView.vue')
    },
  ]
})

export default router
