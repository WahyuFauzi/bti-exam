import { createRouter, createWebHistory } from 'vue-router'
import CSSTest from '../views/CSSTest.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'css',
      component: CSSTest
    },
    {
      path: '/api',
      name: 'api',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/APITest.vue')
    }
  ]
})

export default router
