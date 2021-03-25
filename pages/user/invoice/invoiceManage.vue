<template>
	<view class="content">
		<view class="row b-b">
			<text class="tit">名称</text>
			<input class="input" type="text" v-model="form.invoice_name" placeholder="发票抬头" placeholder-class="placeholder" />
		</view>
		<view class="row b-b">
			<text class="tit">纳税人识别号</text>
			<input class="input" type="number" v-model="form.usc_code" placeholder="纳税人识别号" placeholder-class="placeholder" />
		</view>
		<view class="row b-b">
			<text class="tit">开户行</text>
			<input class="input" type="text" v-model="form.bank_name" placeholder="开户行" placeholder-class="placeholder" />
		</view>
		<view class="row b-b">
			<text class="tit">账号</text>
			<input class="input" type="text" v-model="form.bank_code" placeholder="账号" placeholder-class="placeholder" />
		</view>
		<view class="row b-b">
			<text class="tit">地址</text>
			<input class="input" type="text" v-model="form.address" placeholder="地址" placeholder-class="placeholder" />
		</view>
		<view class="row b-b">
			<text class="tit">联系电话</text>
			<input class="input" type="text" v-model="form.phone" placeholder="联系电话" placeholder-class="placeholder" />
		</view>
		<view class="btn"> 
			<button class="add-btn" v-if="type == 'edit'" @click="del">删除</button>
			<button class="add-btn" v-if="type == 'add'" @click="sub_add">提交</button>
			<button class="add-btn" v-if="type == 'edit'" @click="sub_edit">提交</button>
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
					invoice_name: '',
					usc_code: '',
					bank_name: '',
					bank_code: '',
					address: '',
					phone: '',
				}
			}
		},
		onLoad(option) {
			if (option.type == 'edit') {
				let cache = uni.getStorageSync('edit_data')
				this.form = cache
				this.type = 'edit'
				this.del_id = cache.id
			}
			else if (option.type == 'add') {
				this.type = 'add'
			}
		},
		components: {
			wPicker
		},
		onShow() {

		},
		methods: {
			del(){
				this.$api.CC_request.del_address(this.del_id).then(res => {
					this.$api.msg('删除成功')
					setTimeout(() => {
						uni.navigateBack()
					}, 1000)
				})
			},
			sub_edit() {
				const data = this.form
				this.$api.CC_request.edit_invoice(data).then(res => {
					this.$api.msg('修改成功');
					setTimeout(() => {
						uni.navigateBack()
					}, 1000)
				})
			},
			sub_add() {
				const data = this.form
				this.$api.CC_request.edit_invoice(data).then(res => {
					this.$api.msg('添加成功');
					setTimeout(() => {
						uni.navigateBack()
					}, 1000)
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
