import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import Signal from '@/views/Signal.vue'
import Error from '@/views/Error.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path : "/",
      name: "home",
      component: HomePage
    },
    {
      path: "/signal",
      name: "signal",
      component: Signal
    },
    {
      path: '/:catchAll(.*)*',
      name : 'PageNotFound',
      component : Error
    }
  ]
})

export default router
