<template>
	<view class="content">
		<view class="row b-b">
			<text class="tit">用户名</text>
			<input class="input" type="text" v-model="form.account" placeholder="请输入用户名" placeholder-class="placeholder" />
		</view>
		<view class="row b-b">
			<text class="tit">密码</text>
			<input class="input" type="password" v-model="form.password" placeholder="请输入密码" placeholder-class="placeholder" />
		</view>
		<view class="btn"> 
			<button class="add-btn" @click="sub_login">登录</button>
		</view>
		<view class="register-section">
			还没有账号?
			<text @click="toRegist">马上注册</text>
		</view>

	</view>
</template>

<script>
	import wPicker from "@/components/w-picker/w-picker.vue";
	export default {
		data() {
			return {
				form: {
					account: '',
					password: '',
				},
			}
		},
		onLoad() {
		},
		onShow() {
		},
		methods: {
			sub_login() {
				const data = this.form
				this.$api.CC_request.log_in(data).then(res => {
					uni.setStorageSync('auth_token', res.token)
					uni.navigateBack()
				})
			},
			toRegist(){
				uni.navigateTo({
					url:'/pages/user/auth/register'
				})
			},

		}
	}
</script>

<style lang="scss">
	page {
		background: $page-color-base;
		padding-top: 16upx;
	}

	.row {
		display: flex;
		align-items: center;
		position: relative;
		padding: 0 30upx;
		height: 110upx;
		background: #fff;

		.tit {
			flex-shrink: 0;
			width: 120upx;
			font-size: 30upx;
			color: $font-color-dark;
		}

		.input {
			flex: 1;
			font-size: 30upx;
			color: $font-color-dark;
		}

		.icon-shouhuodizhi {
			font-size: 36upx;
			color: $font-color-light;
		}
	}

	.default-row {
		margin-top: 16upx;

		.tit {
			flex: 1;
		}

		switch {
			transform: translateX(16upx) scale(.9);
		}
	}

	.btn {

		display: flex;

		.add-btn {
			width: 47%;
			height: 80upx;
			margin: 60upx auto;
			font-size: $font-lg;
			color: #fff;
			background-color: $base-color;
			border-radius: 10upx;
			box-shadow: 1px 2px 5px rgba(219, 63, 96, 0.4);
		}
	}



	.tab {
		color: #f00;
		padding: 20upx 0;
		font-size: 32upx;
	}

	.tab.active {
		color: #999999;
	}

	.result {
		color: #999999;
		margin-right: 5%;width: 100%;
		font-size: 32upx;
	}
	
	.register-section{
		position:absolute;
		left: 0;
		bottom: 50upx;
		width: 100%;
		font-size: $font-sm+2upx;
		color: $font-color-base;
		text-align: center;
		text{
			color: $font-color-spec;
			margin-left: 10upx;
		}
	}
</style>
