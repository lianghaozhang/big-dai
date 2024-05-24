import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import "@/style/base.css"
import "./mock/index.js"
import store from './store'
// axios.defaults.baseURL = 'http://localhost:8080'
Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(ElementUI, axios, router)
import Bus from '@/BUS/bus.js'
Vue.prototype.$bus = Bus
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
