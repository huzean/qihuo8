<template>
	<view class="j">
	</view>
</template>

<script>
	import uniIcon from "@/components/uni/uni-icon/uni-icon.vue"
	export default {
		data() {
			return {
				xz:'3',
				list:[1,2,3]
			};
		},
		components: {uniIcon},
		methods:{
			xuan(e){
				this.xz=e
			}
		},
		onPullDownRefresh() {
			//this._load()
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 2000);
		}
	}
</script>

<style lang="scss">

</style>
