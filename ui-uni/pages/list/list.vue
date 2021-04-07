<template>
	<view>
		<view>{{title}}</view>
		<!-- 按钮模拟下拉刷新 -->
		<button @click="buttonClick">按钮下拉刷新</button>
		<!-- 循环遍历出数组 -->
		<view v-for="(item,index) in movieList">
			{{index}}-{{item.name}}-{{item.id}}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '列表页',
				movieList: [
					{ id: 1, name: '钢铁侠' },
					{ id: 2, name: '美国队长' },
					{ id: 3, name: '复仇者联盟' },
					{ id: 4, name: '雷神' }
				]
			}
		},
		// 生命周期函数监听页面下拉事件
		onPullDownRefresh() {
			console.log('页面下拉了');
			this.addList() //添加元素
		},
		methods: {
			addList(){
				setTimeout(()=>{
					this.movieList.push({ id:5, name:'Agent Of Shiled' }) //往数组中添加元素
					uni.stopPullDownRefresh() //停止下拉刷新的动画
				},1000)
			},
			buttonClick() {
				console.log('手动刷新');
				uni.startPullDownRefresh() //模拟用户下拉页面的操作
			}
		}
	}
</script>

<style>

</style>
