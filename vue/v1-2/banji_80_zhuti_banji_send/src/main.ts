import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// import * as echarts from 'echarts';

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(ElementPlus)

app.mount('#app')
app.config.globalProperties.$axios=axios; 
