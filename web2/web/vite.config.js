import {
	defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'


// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		AutoImport({
			resolvers: [ElementPlusResolver()],
		}),
		Components({
			resolvers: [ElementPlusResolver()],
		}),
	],
	server: {
		port: 8080, //它是用来修改你打开后的端口号的
		open: true, //值为 true的话，项目启动时自动打开到浏览器里边， false不会打开
		proxy: {
			'/api': {
				target: 'http://106.54.171.11:9002/api/admin', //跨域请求的公共地址
				changeOrigin: true, //是否开启跨域，值为 true 就是开启， false 不开启
				// rewrite: path => path.replace(/^\/api/, ''),
				pathRewrite:{
				    '^/api':''//注册全局路径， 但是在你请求的时候前面需要加上 /api  
				}
			}
		}
	},
})