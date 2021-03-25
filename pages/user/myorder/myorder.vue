<template>
	<view class="container">
		<view class="tui-order-header">
			<image :src="webURL+'img_detail_bg.png'" mode="widthFix" class="tui-img-bg"></image>
			<view class="tui-header-content">
				<view>
					<view class="tui-status-text">{{getStatusText(status)}}</view>
					<view class="tui-reason"><text class="tui-reason-text">{{getReason(status)}}</text>
						<tui-countdown :time="86400" color="rgba(254,254,254,0.75)" colonColor="rgba(254,254,254,0.75)" bcolor="transparent"
						 bgcolor="transparent" v-if="status===1"></tui-countdown>
					</view>
				</view>
				<image :src="getImg(status)" class="tui-status-img" mode="widthFix"></image>
			</view>
		</view>
		<tui-list-cell :arrow="true" bgcolor="#fefefe" v-if="current_order.delivery_type == 'send'">
			<view class="tui-flex-box">
				<image :src="webURL+'img_order_logistics3x.png'" class="tui-icon-img"></image>
				<view class="tui-logistics">
					<view class="tui-logistics-text">您好，{{current_order._status._msg}}, 配送员：{{current_order.delivery_name}}, 联系电话：{{current_order.delivery_id}}</view>
				</view>
			</view>
		</tui-list-cell>
		<tui-list-cell :arrow="true" bgcolor="#fefefe" v-if="current_order.delivery_type == 'express'">
			<view class="tui-flex-box">
				<image :src="webURL+'img_order_logistics3x.png'" class="tui-icon-img"></image>
				<view class="tui-logistics">
					<view class="tui-logistics-text">您好，{{current_order._status._msg}}.快递公司：{{current_order.delivery_name}}, 快递单号：{{current_order.delivery_id}}</view>
				</view>
			</view>
		</tui-list-cell>
		<tui-list-cell :last="true" :hover="false">
			<view class="tui-flex-box">
				<image :src="webURL+'img_order_address3x.png'" class="tui-icon-img"></image>
				<view class="tui-addr">
					<view class="tui-addr-userinfo">{{current_order.real_name}}<text class="tui-addr-tel">{{current_order.user_phone}}</text></view>
					<view class="tui-addr-text">{{current_order.user_address}}</view>
				</view>
			</view>
		</tui-list-cell>

		<view class="tui-order-item">
			<tui-list-cell :hover="false" :lineLeft="false">
				<view class="tui-goods-title">
					商品信息
				</view>
			</tui-list-cell>
			<block v-for="(item,index) in current_order.cartInfo" :key="item.id">
				<tui-list-cell padding="0">
					<view class="tui-goods-item">
						<image :src="((item.product_attr_unique=='')?item.productInfo.image:item.productInfo.attrInfo.image)" class="tui-goods-img"></image>
						<view class="tui-goods-center">
							<view class="tui-goods-name">{{item.productInfo.store_name}}</view>
							<view class="tui-goods-attr">{{item.productInfo.attrInfo.suk}}</view>
						</view>
						<view class="tui-price-right">
							<view>￥{{item.truePrice}}</view>
							<view>x{{item.cart_num}}</view>
						</view>
					</view>
				</tui-list-cell>
			</block>
			<view class="tui-goods-info">
				<view class="tui-price-flex tui-size24">
					<view>商品总额</view>
					<view>￥{{current_order.total_price}}</view>
				</view>
				<view class="tui-price-flex  tui-size24">
					<view>优惠券</view>
					<view>￥{{current_order.coupon_price}}</view>
				</view>
				<view class="tui-price-flex  tui-size24">
					<view>配送费</view>
					<view>￥{{current_order.pay_postage}}</view>
				</view>
				<view class="tui-price-flex tui-size32 tui-pbtm20">
					<view class="tui-flex-shrink">合计</view>
					<view class="tui-goods-price">
						<view class="tui-size-24">￥</view>
						<view class="tui-price-large">{{current_order.pay_price}}</view>
					</view>
				</view>
				<view class="tui-price-flex tui-size32">
					<view class="tui-flex-shrink">实付款</view>
					<view class="tui-goods-price tui-primary-color">
						<view class="tui-size-24">￥</view>
						<view class="tui-price-large">{{current_order.pay_price}}</view>
					</view>
				</view>
			</view>
		</view>

		<view class="tui-order-info">
			<tui-list-cell :hover="false">
				<view class="tui-order-title">
					订单信息
				</view>
			</tui-list-cell>
			<view class="tui-order-content">
				<view class="tui-order-flex">
					<view class="tui-item-title">订单号:</view>
					<view class="tui-item-content">{{current_order.order_id}}</view>
				</view>
				<view class="tui-order-flex">
					<view class="tui-item-title">创建时间:</view>
					<view class="tui-item-content">{{current_order._add_time}}</view>
				</view>
				<view class="tui-order-flex">
					<view class="tui-item-title">付款时间:</view>
					<view class="tui-item-content">{{current_order._pay_time}}</view>
				</view>
				<view class="tui-order-flex">
					<view class="tui-item-title">订单备注:</view>
					<view class="tui-item-content" v-if="current_order.mark != null">{{current_order.mark}}</view>
					<view class="tui-item-content" v-else>无</view>
				</view>
			</view>
		</view>
		<view class="tui-safe-area"></view>
		<view class="tui-tabbar tui-order-btn">
			<view class="tui-btn-mr" v-if="current_order.status > 0">
				<tui-button type="black" :plain="true" width="148rpx" height="56rpx" :size="26" shape="circle" @click='del_order'>删除订单</tui-button>
			</view>
			<view class="tui-btn-mr" v-if='current_order.status == 0'>
				<tui-button type="danger" :plain="true" width="148rpx" height="56rpx" :size="26" shape="circle" @click='cancel_order'>取消订单</tui-button>
			</view>
			<view class="tui-btn-mr">
				<tui-button type="danger" :plain="true" width="148rpx" height="56rpx" :size="26" shape="circle" @click="pay_now">立即支付</tui-button>
			</view>
		</view>
	</view>
</template>

<script>
	import tuiIcon from '@/components/icon/icon'
	import tuiButton from "@/components/extend/button/button"
	import tuiCountdown from "@/components/countdown/countdown"
	import tuiListCell from "@/components/list-cell/list-cell"
	export default {
		components: {
			tuiIcon,
			tuiButton,
			tuiCountdown,
			tuiListCell
		},
		data() {
			return {
				img_url:this.$img_url,
				webURL: "https://www.thorui.cn/wx/static/images/mall/order/",
				//1-待付款 2-付款成功 3-待收货 4-订单已完成 5-交易关闭
				status: 1,
				current_order:{},
			}
		},
		onLoad(option) {
			var order_id = option.id
			this.$api.CC_request.order_get_detail(order_id).then(res => {
				this.current_order = res
				this.status = res.status + 1
				if(this.current_order.offlinePayStatus == 1 && res.status == 1){
					this.status = this.status + 1
				}
			})
			
		},
		methods: {
			getImg: function(status) {
				return this.webURL + ["img_order_payment3x.png", "img_order_send3x.png", "img_order_received3x.png",
					"img_order_signed3x.png", "img_order_closed3x.png"
				][status - 1]
			},
			getStatusText: function(status) {
				return ["等待您付款", "付款成功", "待收货", "订单已完成", "交易关闭"][status - 1]
			},
			getReason: function(status) {
				return ["剩余时间", "等待卖家发货", "签收后，请确认收货", "", "超时未付款，订单自动取消"][status - 1]
			},
			del_order(){
				this.$api.msg("暂不支持删除订单")
			},
			cancel_order(){
				var order_id = this.current_order.order_id
				this.$api.CC_request.order_cancel(order_id).then(res => {
					this.$api.msg("取消订单成功")
					uni.navigateTo({
						url: '/pages/order/order?state=999'
					})
				})
			},
			pay_now(){
				this.$api.msg("请在签收时付款")
			}
		}
	}
</script>

<style>
	.container {
		padding-bottom: 118rpx;
	}

	.tui-order-header {
		width: 100%;
		height: 160rpx;
		position: relative;
	}

	.tui-img-bg {
		width: 100%;
		height: 160rpx;
	}

	.tui-header-content {
		width: 100%;
		height: 160rpx;
		position: absolute;
		z-index: 10;
		left: 0;
		top: 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 70rpx;
		box-sizing: border-box;
	}

	.tui-status-text {
		font-size: 36rpx;
		line-height: 36rpx;
		color: #FEFEFE;
	}

	.tui-reason {
		font-size: 24rpx;
		line-height: 24rpx;
		color: rgba(254, 254, 254, 0.75);
		padding-top: 15rpx;
		display: flex;
		align-items: center;
	}

	.tui-reason-text {
		padding-right: 12rpx;
	}

	.tui-status-img {
		width: 80rpx;
		height: 80rpx;
		display: block;
	}

	.tui-flex-box {
		width: 100%;
		display: flex;
		align-items: center;
	}

	.tui-icon-img {
		width: 44rpx;
		height: 44rpx;
		flex-shrink: 0;
	}

	.tui-logistics {
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 0 24rpx 0 20rpx;
		box-sizing: border-box;
	}

	.tui-logistics-text {
		font-size: 28rpx;
		line-height: 32rpx;
	}

	.tui-logistics-time {
		font-size: 24rpx;
		line-height: 24rpx;
		padding-top: 16rpx;
		color: #666;
	}

	.tui-addr {
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding-left: 20rpx;
		box-sizing: border-box;
	}

	.tui-addr-userinfo {
		font-size: 30rpx;
		line-height: 30rpx;
		font-weight: bold;
	}

	.tui-addr-text {
		font-size: 24rpx;
		line-height: 30rpx;
		padding-top: 16rpx;
	}

	.tui-addr-tel {
		padding-left: 40rpx;
	}

	.tui-order-item {
		margin-top: 20rpx;
		border-radius: 10rpx;
		overflow: hidden;
	}

	.tui-goods-title {
		width: 100%;
		font-size: 28rpx;
		line-height: 28rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}


	.tui-goods-item {
		width: 100%;
		padding: 20rpx 30rpx;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
	}

	.tui-goods-img {
		width: 180rpx;
		height: 180rpx;
		display: block;
		flex-shrink: 0;
	}

	.tui-goods-center {
		flex: 1;
		padding: 20rpx 8rpx;
		box-sizing: border-box;
	}

	.tui-goods-name {
		max-width: 310rpx;
		word-break: break-all;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		font-size: 26rpx;
		line-height: 32rpx;
	}

	.tui-goods-attr {
		font-size: 22rpx;
		color: #888888;
		line-height: 32rpx;
		padding-top: 20rpx;
		word-break: break-all;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}

	.tui-price-right {
		text-align: right;
		font-size: 24rpx;
		color: #888888;
		line-height: 30rpx;
		padding-top: 20rpx;
	}

	.tui-color-red {
		color: #E41F19;
		padding-right: 30rpx;
	}

	.tui-goods-price {
		width: 100%;
		display: flex;
		align-items: flex-end;
		justify-content: flex-end;
		font-size: 24rpx;
	}

	.tui-size-24 {
		font-size: 24rpx;
		line-height: 24rpx;
	}

	.tui-price-large {
		font-size: 32rpx;
		line-height: 30rpx;
	}

	.tui-goods-info {
		width: 100%;
		padding: 30rpx;
		box-sizing: border-box;
		background: #fff;
	}

	.tui-price-flex {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.tui-size24 {
		padding-bottom: 20rpx;
		font-size: 24rpx;
		line-height: 24rpx;
		color: #888;
	}

	.tui-size32 {
		font-size: 32rpx;
		line-height: 32rpx;
		font-weight: 500;
	}

	.tui-pbtm20 {
		padding-bottom: 20rpx;
	}

	.tui-flex-shrink {
		flex-shrink: 0;
	}

	.tui-primary-color {
		color: #EB0909;
	}

	.tui-order-info {
		margin-top: 20rpx;
	}

	.tui-order-title {
		position: relative;
		font-size: 28rpx;
		line-height: 28rpx;
		padding-left: 12rpx;
		box-sizing: border-box;
	}

	.tui-order-title::before {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		border-left: 4rpx solid #EB0909;
		height: 100%;
	}

	.tui-order-content {
		width: 100%;
		padding: 24rpx 30rpx;
		box-sizing: border-box;
		background: #fff;
		font-size: 24rpx;
		line-height: 30rpx;
	}

	.tui-order-flex {
		display: flex;
		padding-top: 18rpx;
	}

	.tui-order-flex:first-child {
		padding-top: 0
	}

	.tui-item-title {
		width: 132rpx;
		flex-shrink: 0;
	}

	.tui-item-content {
		color: #666;
	}

	.tui-safe-area {
		height: 1rpx;
		padding-bottom: env(safe-area-inset-bottom);
	}

	.tui-tabbar {
		width: 100%;
		height: 98rpx;
		background: #fff;
		position: fixed;
		left: 0;
		bottom: 0;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		font-size: 26rpx;
		box-shadow: 0 0 1px rgba(0, 0, 0, .3);
		padding-bottom: env(safe-area-inset-bottom);
		z-index: 999;
	}
	
	.tui-btn-mr {
		margin-right: 30rpx;
	}
</style>
