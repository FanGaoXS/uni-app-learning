<template>
	<view>
		<view>
			<text>唱跳rap</text><!-- 文字默认是无法被选中的 -->
			</view>
		<view>
			<text selectable>唱跳rap</text><!-- 文字可以被选中 -->
		</view>
		<view>
			<text space="ensp">唱    跳rap</text><!-- 四个空格被解析成了四个中文字符的一半 -->
		</view>
		<view>
			<text space="emsp">唱    跳rap</text><!-- 四个空格被解析成了四个中文字符 -->
		</view>
		<view>
			<text space="nbsp" style="font-size: 30px;">唱    跳rap</text><!-- 四个空格被解析成了一个30px的字符 -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	
</style>
