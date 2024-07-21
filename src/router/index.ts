import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layout/Layout.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('@/views/HomeView.vue')
        },
        {
          path: 'personas',
          name: 'Personas',
          component: () => import('../views/PersonasViews.vue')
        },
        {
          path: 'provincias',
          name: 'Provincias',
          component: () => import('../views/ProvinciasViews.vue')
        }
      ]
    }
  ]
})

export default router
