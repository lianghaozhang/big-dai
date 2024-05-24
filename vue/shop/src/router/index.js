import VueRouter from "vue-router";
import Vue from "vue"
import Bus from "@/BUS/bus";
Vue.use(VueRouter)
const router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home', },
        {
            path: '/home',
            name: 'Home',
            component: () => import('@/view/home.vue')
        },
        {
            path: '/login',
            naem: 'Login',
            component: () => import('@/view/login.vue')
        },
        {
            path: '/register',
            name: 'Register',
            component: () => import('@/view/register.vue')
        },
        {
            path: '/goods/details',
            name: 'Details',
            component: () => import('@/view/details')
        },
        {
            path: '/shopcar',
            name: 'ShopCar',
            component: () => import('@/view/shopcar.vue'),
            meta: { isAuth: true, title: '购物车' },
        },
        {
            path: '/goods',
            name: 'Goods',
            component: () => import('@/view/goods.vue'),
        },
        {
            path: '/orders',
            name: 'Orders',
            component: () => import('@/view/orders.vue'),
            meta: { isAuth: true, title: '订单页' },
        },
    ]
})
//全局前置路由守卫————初始化的时候被调用、每次路由切换之前被调用
router.beforeEach((to, from, next) => {
    //如果路由需要跳转
    if (to.meta.isAuth) {
        //判断token是否存在，确认是否登录
        if (Bus.token) {
            next()  //放行
        } else {
            alert('请先进行登录！')
        }
    } else {
        // 否则，放行
        next()
    }
})
export default router