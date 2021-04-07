<template>
	<view>
		<h2>{{title}}</h2>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '首页'
			}
		},
		onLoad(options) {
			console.log(this.title+'加载了，上个页面传递来的参数：',options);
		},
		onShow() {
			console.log(this.title+'显示了');
		},
		onReady() {
			console.log(this.title+'初次渲染完成了');
		},
		onHide() {
			console.log(this.title+'隐藏了');
		},
		onUnload() {
			console.log(this.title+'被销毁了');
		}
	}
</script>

<style>

</style>
