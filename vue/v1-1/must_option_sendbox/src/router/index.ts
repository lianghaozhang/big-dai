import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import TableTestView from '@/views/TableView.vue'
import PinaView from '@/views/PinaView.vue'
import PinaLogin from '@/views/PinaLogin.vue'
import Myapplist from '@/views/myapplist.vue'
import AboutView from '@/views/AboutView.vue'

//ts excise


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    
    {
      path: '/tableTestView',
      name: 'tableTestView',
      component: TableTestView
    },
    {
      path: '/piniaTest',
      name: 'piniaTest',
      component:PinaView
    },
    {
      path: '/pinaLogin',
      name: 'pinaLogin',
      component:PinaLogin,
    },
    {
      path: '/myapplist',
      name: 'myapplist',
      component:Myapplist,
    },
 
    
    // 
  ]
})

export default router
