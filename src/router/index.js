import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'
import Product from '../views/Product'
import About from '../views/About'
import Solution from '../views/Solution'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/product',
    name: 'Product',
    component: Product
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/solution',
    name: 'Solution',
    component: Solution
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
