import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShopView from '../views/ShopView.vue'
import NotFound from '../views/NotFound.vue'
import DetailView from '../views/DetailView.vue'
import TermView from '../views/TermView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/shop/page/:page',
      name: 'shopPage',
      component: ShopView,
    },
    {
      path: '/product/:id',
      name: 'detail',
      component: DetailView,
      props: true
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/term',
      name: 'term',
      component: TermView
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
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFound
    }
  ]
})

export default router
