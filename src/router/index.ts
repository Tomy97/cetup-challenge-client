import { createRouter, createWebHistory, type Router } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router: Router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/create-person',
      name: 'CreatPerson',
      component: () => import('../views/CreatePerson.vue')
    },
    {
      path: '/create-province',
      name: 'CreatProvince',
      component: () => import('../views/CreateProvince.vue')
    }
  ]
})

export default router
