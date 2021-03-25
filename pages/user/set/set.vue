<template>
	<view class="tui-set-box">
		<tui-list-cell padding="0" :lineLeft="false" :arrow="true">
			<view class="tui-list-cell tui-info-box">
				<image :src="current_user.avatar" class="tui-avatar"></image>
				<view>{{current_user.nickname}}</view>
			</view>
		</tui-list-cell>
		<tui-list-cell padding="0" :lineLeft="false" :arrow="true" @click="href(1)">
			<view class="tui-list-cell">
				实名认证
			</view>
		</tui-list-cell>
		<view class="tui-mtop">
			<tui-list-cell padding="0" :lineLeft="false" :arrow="true" @click="href(2)">
				<view class="tui-list-cell">
					关于我们
				</view>
			</tui-list-cell>
			<tui-list-cell padding="0" :lineLeft="false" :arrow="true" @click="href(3)">
				<view class="tui-list-cell">
					意见反馈
				</view>
			</tui-list-cell>
		</view>

		<view class="tui-exit">
			<tui-button type="danger" height="88rpx" @click="href(4)">退出登录</tui-button>
		</view>
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
	.tui-set-box {
		padding-bottom: 20rpx;
		color: #333;
	}

	.tui-list-cell {
		display: flex;
		align-items: center;
		padding: 24rpx 30rpx;
		font-size: 30rpx;
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
