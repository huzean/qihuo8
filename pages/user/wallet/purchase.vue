<template>
	<view class="tui-set-box">
		<tui-list-cell padding="0" :lineLeft="false" :arrow="true">
			<view class="tui-list-cell tui-info-box">
				<view>账户余额</view>
				<view>20</view>
			</view>
		</tui-list-cell>
		<tui-list-cell padding="0" :lineLeft="false">
			<view class="tui-list-cell">
				50
			</view>
			<button class="tui-btn tui-btn-block tui-danger tui-fillet" hover-class="tui-danger-hover">¥5</button>
		</tui-list-cell>
		<tui-list-cell padding="0" :lineLeft="false">
			<view class="tui-list-cell">
				300
			</view>
			<button class="tui-btn tui-btn-block tui-danger tui-fillet" hover-class="tui-danger-hover">¥30</button>
		</tui-list-cell>
		<tui-list-cell padding="0" :lineLeft="false">
			<view class="tui-list-cell">
				680
			</view>
			<button class="tui-btn tui-btn-block tui-danger tui-fillet" hover-class="tui-danger-hover">¥68</button>
		</tui-list-cell>
		<tui-list-cell padding="0" :lineLeft="false">
			<view class="tui-list-cell">
				980
			</view>
			<button class="tui-btn tui-btn-block tui-danger tui-fillet" hover-class="tui-danger-hover">¥98</button>
		</tui-list-cell>
		<tui-list-cell padding="0" :lineLeft="false">
			<view class="tui-list-cell">
				1980
			</view>
			<button class="tui-btn tui-btn-block tui-danger tui-fillet" hover-class="tui-danger-hover">¥198</button>
		</tui-list-cell>
	</view>
</template>

<script>
	import tuiListCell from "@/components/list-cell/list-cell"
	import tuiButton from "@/components/extend/button/button"
	export default {
		components: {
			tuiListCell,
			tuiButton
		},
		data() {
			return {
                current_user:{}
			}
		},
		onLoad() {
			this.$api.CC_request.get_user().then(res => {
				if(res != 401){
				    this.current_user = res
				}
			})
		},
		methods: {
			href(page) {
				let url = "";
				switch (page) {
					case 1:
						url = "/pages/user/verify/verify"
						break;
					case 2:
						url = "../address/address"
						break;
					default:
						break;
				}
				uni.navigateTo({
					url: url
				})
			}
		}
	}
</script>

<style>
	@import '../../../static/style/thorui.css';
	.tui-set-box {
		padding-bottom: 20rpx;
		color: #333;
	}

	.tui-list-cell {
		display: flex;
		align-items: center;
		padding: 24rpx 30rpx;
		font-size: 32rpx;
	}

	.tui-info-box {
		font-size: 34rpx;
	}

	.tui-avatar {
		width: 140rpx;
		height: 140rpx;
		margin-right: 20rpx;
	}

	.tui-mtop {
		margin-top: 20rpx;
	}

	.tui-exit {
		padding: 100rpx 24rpx;
	}
</style>
