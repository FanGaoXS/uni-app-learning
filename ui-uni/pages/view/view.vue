<template>
	<view>
		<view class="box-big" hover-class="box-big-hover">
			<view 
			class="box-small" 
			hover-class="box-small-hover" 
			hover-stop-propagation 
			:hover-start-time="2000"
			:hover-stay-time="3000">内盒子</view>
		</view>
	</view>
</template>

<script>

</script>

<style>
	
	.box-big {
		height: 200px;
		width: 200px;
		background: green;
	}
	
	.box-big-hover {
		background-color: #999999;
	}
	
	.box-small {
		height: 100px;
		width: 100px;
		background: #007AFF;
	}
	
	.box-small-hover {
		background-color: #008000;
	}
</style>
