<template>
	<view class="container">
		<view class="tui-rate-container">
			<view class="tui-title"> 整体评分</view>
			<tui-rate :current="total_rate" @change="changeTotal"></tui-rate>
		</view>
		<view class="tui-rate-container">
			<view class="tui-title"> 信息真实性</view>
			<tui-rate :current="info_rate" @change="changeInfo"></tui-rate>
		</view>
		<view class="tui-rate-container">
			<textarea :value="note" maxlength="2000" placeholder="有什么想说的,说说吧..." placeholder-class="placeholder" />
		</view>
		<button class="tui-btn tui-btn-block tui-fillet btn-color" hover-class="tui-white-hover" @click="submit_rate">
		  提交
		</button>
	</view>
</template>

<script>
	import tuiRate from "@/components/rate/rate"
	export default {
		components:{
			tuiRate
		},
		data() {
			return {
				loadding: false,
				show: false,
				total_rate: 5,
				info_rate:5,
				note:'',
			}
		},
		onLoad() {
		},
		methods: {
			changeTotal: function(e) {
				this.total_rate = e.index
			},
			changeInfo: function(e){
				this.info_rate = e.index
			},
			submit_rate:function(e){
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
	  background: #f0f2f5;
	}
	.container {
		padding: 20rpx 0 120rpx 0;
		box-sizing: border-box;
		background: #f0f2f5;
	}

	.header {
		padding: 80rpx 90rpx 60rpx 90rpx;
		box-sizing: border-box;
	}

	.title {
		font-size: 34rpx;
		color: #333;
		font-weight: 500;
	}

	.sub-title {
		font-size: 24rpx;
		color: #7a7a7a;
		padding-top: 18rpx;
	}

	.tui-rate-container {
		padding: 40rpx;
		box-sizing: border-box;
		margin-bottom: 30rpx;
		background: #fff;
		font-size: 30rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.tui-title {
		font-size: 30rpx;
	}
	.input {
		flex: 1;
		font-size: 30rpx;
		color: $font-color-dark;
		height: 50px;
	}
	.btn-color {
	  width: 60%;
	  height: 25px;
	  font-size: 12px;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  background: linear-gradient(0deg, #c33d9d 0%, #862b6e 100%);
	  color: #fff;
	}
</style>
