import {
  createRouter,
  createWebHistory
} from 'vue-router'
import HomePage from '../views/HomePage'
import AboutPage from '../views/AboutPage'
import ProductLocatePage from '../views/Product/ProductLocatePage'
import ProductTerminalPage from '../views/Product/ProductTerminalPage'
import ProductPlatformPage from '../views/Product/ProductPlatformPage'


const routes = [{
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: AboutPage
  },
  {
    path: '/product/locate',
    name: 'ProductLocatePage',
    component: ProductLocatePage
  }, 
  {
    path: '/product/terminal',
    name: 'ProductTerminalPage',
    component: ProductTerminalPage
  }, 
  {
    path: '/product/platform',
    name: 'ProductPlatformPage',
    component: ProductPlatformPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router