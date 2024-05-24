import axios from 'axios'
//使用axios下面的create([config])方法创建axios实例，其中config参数为axios最基本的配置信息。
const httpInstance = axios.create({
	// baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net', //请求后端数据的基本地址，自定义
	baseURL:'https://soft.yiqibazi.com', //请求后端数据的基本地址，自定义
	timeout: 5000,                   //请求超时设置，单位ms
	headers: {
		"Content-Type": "application/json;charest=utf-8"
	}
})


// console.log(httpInstance,'httpInstance')
//请求拦截
httpInstance.interceptors.request.use((config: any) => {
	// console.log(config, 1)
	config.headers = config.headers || {}
	if (config.headType) {
		config.headers = { "Content-Type": "aapplication/x-www-form-urlencoded" }
	}
	if (localStorage.getItem('token')) {
		config.headers.token = localStorage.getItem('token') || ''
	}
	return config
})
//响应拦截
httpInstance.interceptors.response.use((res: any) => {
	const code: number = res.status
	if (code != 200) {
		return Promise.reject(res.data)
	}
	return res.data
}), (err: string) => {
	console.log(err, 2)
}
export default httpInstance

