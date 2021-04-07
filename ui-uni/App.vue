<script>
	export default {
		onLaunch: function() {
			console.log('应用打开了')
		},
		onShow: function() {
			console.log('应用显示了')
		},
		onHide: function() {
			console.log('应用隐藏了')
		},
		onError: function(error) {
			console.log('应用加载失败了',error);
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
