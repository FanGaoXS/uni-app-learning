<template>
	<view>
		<button @click="buttonClick">发送请求</button>
		<view v-for="item in list">
			{{item}}
		</view>
	</view>
</template>

<script>
	import {
		getEngineerList,
		deleteVehicle
	} from '@/api/engineer.js'
	export default {
		data() {
			return {
				list: []
			}
		},
		methods: {
			buttonClick(){
				this.getData1()
				this.getData2()
			},
			getData1(){
				getEngineerList().then(res=>{
					console.log(res);
				}).catch(error=>{
					console.log(error);
				})
			},
			getData2(){
				deleteVehicle(10).then(res=>{
					console.log(res);
				}).catch(error=>{
					console.log(error);
				})
			}
		}
	}
</script>

<style>

</style>
