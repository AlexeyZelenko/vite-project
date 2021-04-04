import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/product/:title',
    name: 'product',
    props: true,
    component: () => import('../views/InfoProduct.vue')
  }
]
const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router