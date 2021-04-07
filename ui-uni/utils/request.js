import Request from './luch-request/index.js'
const http = new Request()

http.config.baseURL = 'http://localhost:8096'
http.config.timeout = 5000

http.interceptors.request.use(config=>{
	config.header['X-Client'] = 'manage-web'
	// console.log('request config',config);
	return config
},error=>{
	console.log('request error',error);
	throw error
})

http.interceptors.response.use(response=>{
	// console.log('response',response);
	return response.data
},error=>{
	console.log('response error',error);
	throw error
})

export default function request(config){
	return http.request(config)
}
