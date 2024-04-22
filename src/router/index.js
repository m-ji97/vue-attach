import { createRouter, createWebHistory } from 'vue-router'
import FormView from '@/views/formView.vue'
import resulteView from '@/views/resultView.vue'

const routes = [
  {
    path: '/',
    name: '/',
    component: FormView
  },
  {
    path: '/result',
    name: '/result',
    component: resulteView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
