<template>
	<view>
		<!-- 不传递参数 -->
		<button type="primary" @click="buttonClick1">按钮1</button>
		<!-- 传递参数 -->
		<button type="primary" @click="buttonClick2(20,$event)">按钮2</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			buttonClick1(e){
				console.log('点击按钮1',e);
			},
			buttonClick2(number,$event){
				console.log('点击按钮2',number,$event);
			}
		}
	}
</script>

<style>

</style>
