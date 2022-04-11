import {
  createRouter,
  createWebHistory
} from 'vue-router'
import HomePage from '../views/HomePage'
import AboutPage from '../views/AboutPage'
import ProductLocatePage from '../views/product/ProductLocatePage'
import ProductTerminalPage from '../views/product/ProductTerminalPage'
import ProductPlatformPage from '../views/product/ProductPlatformPage'
import SolutionIndustryPage from '../views/solution/SolutionIndustryPage'
import SolutionMedicalPage from '../views/solution/SolutionMedicalPage'
import SolutionJudicialPage from '../views/solution/SolutionJudicialPage'
import SolutionCommercePage from '../views/solution/SolutionCommercePage'


const routes = [
  // 主页
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  // 关于我们
  {
    path: '/about',
    name: 'AboutPage',
    component: AboutPage
  },
  // 产品中心 - 高精度定位
  {
    path: '/product/locate',
    name: 'ProductLocatePage',
    component: ProductLocatePage
  }, 
  // 产品中心 - 高感知终端
  {
    path: '/product/terminal',
    name: 'ProductTerminalPage',
    component: ProductTerminalPage
  }, 
  // 产品中心 - 高可用平台
  {
    path: '/product/platform',
    name: 'ProductPlatformPage',
    component: ProductPlatformPage
  },
  // 解决方案 - 智慧工业
  {
    path: '/solution/industry',
    name: 'SolutionIndustryPage',
    component: SolutionIndustryPage
  },
  // 解决方案 - 智慧医疗
  {
    path: '/solution/medical',
    name: 'SolutionMedicalPage',
    component: SolutionMedicalPage
  },
  // 解决方案 - 智慧司法
  {
    path: '/solution/judicial',
    name: 'SolutionJudicialPage',
    component: SolutionJudicialPage
  },
  // 解决方案 - 智慧商超
  {
    path: '/solution/commerce',
    name: 'SolutionCommercePage',
    component: SolutionCommercePage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router