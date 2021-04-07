<template>
	<view>
		<h2>详情页</h2>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad(params) {
			let id = params.id
			let name = params.name
			console.log('id->',id)
			console.log('name->',name)
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
