// createRouter:创建reouter实例对象
// createWebHistory：创建history模式的路由
import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
import subCategory from '@/views/SubCategory/index.vue'
import detail from '@/views/Detail/index.vue'
import CartList from '@/views/CartList/index.vue'
import Checkout from '@/views/Checkout/index.vue'
import Pay from '@/views/Pay/index.vue'
import Member from '@/views/Member/index.vue'
import UserInfo from '@/views/Member/components/UserInfo.vue'
import UserOrder from '@/views/Member/components/UserOrder.vue'

const router = createRouter({
  // import.meta.env.BASE_URL:部署应用时的基本URL。他由base配置项决定。
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        { path: '', component: Home },
        { path: 'category/:id', component: Category },
        { path: 'category/sub/:id', component: subCategory },
        { path: 'detail/:id', component: detail },
        { path: 'cartlist', component: CartList },
        { path: 'checkout', component: Checkout },
        { path: 'pay', component: Pay },
        {
          path: 'member',
          component: Member,
          children: [
            { path: '', component: UserInfo },
            { path: 'order', component: UserOrder },
          ],
        },
      ],
    },
    {
      path: '/login',
      component: Login,
       
    },
  ],
  // 路由滚动行为定制,当切换路由时总是自动的出现在顶部
  scrollBehavior() {
    return {
      top: 0,
    }
  },
})

export default router
