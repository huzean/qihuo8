<template>
	<view class="content b-t">
		<view class="list b-b" v-for="(item, index) in addressList" :key="index" @click="checkAddress(item)">
			<view class="wrapper">
				<view class="address-box">
					<text v-if="item.is_default" class="tag">默认</text>
					<text v-if="!item.is_default" class="tag" @click="set_default(item.id)">设默认</text>
					<text class="address">{{item.province}} {{item.city}}{{item.district}}</text>
				</view>
				<view class="u-box">
					<text class="name">{{item.real_name}}</text>
					<text class="mobile">{{item.phone}}</text>
				</view>
			</view>
			<text class="yticon icon-bianji" @click.stop="addAddress('edit', item)"></text>
		</view>
		<view class="add-btn">
			<button type="warn" style="width: 45%;"  @click="addAddressA('add')">&emsp;新增地址</button>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				source: 0,
				addressList: [],
				type_add:'add'
			}
		},
		onLoad(option){
			this.source = option.source;
			this._load()
		},
		onShow() {
			this._load()
		},
		methods: {
			
			_load(){
				this.$api.CC_request.get_address_list().then(res => {
					this.addressList = res
				})
			},
			//设置默认地址
			set_default(id){
				this.$api.CC_request.set_default_address(id).then(res=>{
					this.$api.msg('成功更改默认地址')
					this._load()
				})
			},
			//选择地址
			checkAddress(item){
				if(this.source == 1){
					this.$api.prePage().address = item; 
					uni.navigateBack()
				}
			},
			addAddress(type, item){
				uni.setStorageSync('edit_data',item)
				uni.navigateTo({
					url: `/pages/address/addressManage?type=`+type
				})
			},
			//添加或修改成功之后回调
			refreshList(data, type){
				//添加或修改后事件，这里直接在最前面添加了一条数据，实际应用中直接刷新地址列表即可
				this.addressList.unshift(data);
			}
		},
		onPullDownRefresh() {
			this._load()
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 2000);
		}
	}
</script>

<style lang='scss'>
	page{
		padding-bottom: 120upx;
	}
	.content{
		position: relative;
	}
	.list{
		display: flex;
		align-items: center;
		padding: 20upx 30upx;;
		background: #fff;
		position: relative;
	}
	.wrapper{
		display: flex;
		flex-direction: column;
		flex: 1;
	}
	.address-box{
		display: flex;
		align-items: center;
		.tag{
			font-size: 24upx;
			color: $base-color;
			margin-right: 10upx;
			background: #fffafb;
			border: 1px solid #ffb4c7;
			border-radius: 4upx;
			padding: 4upx 10upx;
			line-height: 1;
		}
		.address{
			font-size: 30upx;
			color: $font-color-dark;
		}
	}
	.u-box{
		font-size: 28upx;
		color: $font-color-light;
		margin-top: 16upx;
		.name{
			margin-right: 30upx;
		}
	}
	.icon-bianji{
		display: flex;
		align-items: center;
		height: 80upx;
		font-size: 40upx;
		color: $font-color-light;
		padding-left: 30upx;
	}
	.add-btn{
		position: fixed;
		left: 30upx;
		right: 30upx;
		bottom: 16upx;
		z-index: 95;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 690upx;
		height: 80upx;
		font-size: 32upx;
		color: #fff;
		border-radius: 10upx;
	}
</style>
