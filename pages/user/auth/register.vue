<template>
	<view class="content">
		<view class="row b-b">
			<text class="tit">用户名</text>
			<input class="input" type="text" v-model="form.username" placeholder="请输入用户名" placeholder-class="placeholder" />
		</view>
		<view class="row b-b">
			<text class="tit">密码</text>
			<input class="input" type="number" v-model="form.password" placeholder="请输入密码" placeholder-class="placeholder" />
		</view>
		<view class="row b-b">
			<text class="tit">确认密码</text>
			<input class="input" type="text" v-model="form.confimrpsw" placeholder="请输入确认密码" placeholder-class="placeholder" />
		</view>
		<view class="btn"> 
			<button class="add-btn" @click="sub_register">注册</button>
		</view>
	</view>
</template>
<script>
	import wPicker from "@/components/w-picker/w-picker.vue";
	export default {
		data() {
			return {
				type: '',
				del_id:'',
				form: {
					name: '',
					password: '',
					confirmpsw: '',
				},
			}
		},
		onLoad(option) {
		},
		components: {
		},
		onShow() {

		},
		methods: {
			sub_register() {
				const data = this.form
				this.$api.CC_request.register(data).then(res => {
					this.$api.msg('注册成功');
					uni.navigateTo({
						url: '../login'
					})
				})
			}

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
</style>
