<template>
	<view class="container">
		<view class="tui-box">
			<tui-list-cell :arrow="true" :last="true" :radius="true" @click="chooseAddr">
				<view class="tui-address">
					<view class="tui-none-addr" v-if="!address">
						<image src="/static/images/index/map.png" class="tui-addr-img" mode="widthFix"></image>
						<text>选择收货地址</text>
					</view>
					<view v-else>
						<view class="tui-userinfo">
							<text class="tui-name">{{address.real_name}}</text> {{address.phone}}
						</view>
						<view class="tui-addr">
							<view class="tui-addr-tag">{{address.door_name}}</view>
							<text>{{address.province}}{{address.city}}{{address.district}}{{address.detail}}</text>
						</view>
					</view>
				</view>
				<view class="tui-bg-img"></view>
			</tui-list-cell>
			<view class="tui-top tui-goods-info">
				<tui-list-cell :hover="false" :lineLeft="false">
					<view class="tui-goods-title">
						商品信息
					</view>
				</tui-list-cell>
				<block v-for="(item,index) in cart_info" :key="index">
					<tui-list-cell :hover="false" padding="0">
						<view class="tui-goods-item">
							<image :src="(item.product_attr_unique==''?item.productInfo.image:item.productInfo.attrInfo.image)" class="tui-goods-img"></image>
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
				<tui-list-cell :hover="false">
					<view class="tui-padding tui-flex">
						<view>商品总额</view>
						<view>￥{{priceGroup.total_price}}</view>
					</view>
				</tui-list-cell>
				<tui-list-cell :arrow="hasCoupon" :hover="hasCoupon" @tap="show_coupon()">
					<view class="tui-padding tui-flex">
						<view>优惠券</view>
						<view :class="{'tui-color-red':hasCoupon}">{{select_coupon_text}}</view>
					</view>
				</tui-list-cell>
				<tui-list-cell :hover="false">
					<view class="tui-padding tui-flex">
						<view>配送费</view>
						<view>￥{{priceGroup.pay_postage}}</view>
					</view>
				</tui-list-cell>
				<tui-list-cell :hover="false" :lineLeft="false" padding="0">
					<view class="tui-remark-box tui-padding tui-flex">
						<view>订单备注</view>
						<input type="text" class="tui-remark" placeholder="选填: 请先和商家协商一致" placeholder-class="tui-phcolor" v-model="mark"></input>
					</view>
				</tui-list-cell>
				<tui-list-cell :hover="false" :last="true">
					<view class="tui-padding tui-flex tui-total-flex">
						<view class="tui-flex-end tui-color-red">
							<view class="tui-black">合计： </view>
							<view class="tui-size-26">￥</view>
							<view class="tui-price-large">{{priceGroup.pay_price}}</view>
						</view>
					</view>
				</tui-list-cell>
			</view>

			<view class="tui-top">
				<tui-list-cell :last="true" :hover="false" :radius="true" :arrow="false">
					<view class="tui-flex">
						<view class="tui-balance">{{is_pay_now == false?'货到付款':'线上支付'}}<text class="tui-gray"></text></view>
						<switch color="#30CC67" class="tui-scale-small" v-show="true" @change="switchChange"/>
					</view>
				</tui-list-cell>
			</view>
		</view>
		<view class="tui-safe-area"></view>
		<view class="tui-tabbar">
			<view class="tui-flex-end tui-color-red tui-pr-20">
				<view class="tui-black">实付金额: </view>
				<view class="tui-size-26">￥</view>
				<view class="tui-price-large">{{priceGroup.pay_price}}</view>
			</view>
			<view class="tui-pr25">
				<tui-button width="200rpx" height="70rpx" type="danger" shape="circle" @click="submit_order">提交订单</tui-button>
			</view>
		</view>

        <view class="mask" :class="maskState===0 ? 'none' : maskState===1 ? 'show' : ''" @click="toggleMask">
        	<view class="mask-content">
        		<!-- 优惠券页面，仿mt -->
        		<scroll-view  class="scroll" scroll-y >
        		     <view class="coupon-item" v-for="(item,index) in coupon_list" :key="index">
        		     	<block v-if="item.status == 0">
        		     		<view class="con">
        		     			<view class="left">
        		     				<text class="title">满{{item.use_min_price}}减{{item.coupon_price}}</text>
        		     			</view>
        		     			<view class="right">
        		     				<text class="price">{{item.coupon_price}}</text>
        		     			</view>
        		     
        		     			<view class="circle l"></view>
        		     			<view class="circle r"></view>
        		     		</view>
        		     		<view class="use" style="display: flex;justify-content: space-between;">
        		     			<text class="tips">有效期至{{item.end_time}}</text>
        		     			<view class="tips2" @click="to_use(index)">去使用</view>
        		     		</view>
        		     	</block>
        		     </view>
        		</scroll-view>
        		<view class="btn" @click="cancel_use">不使用优惠券</view>
        	</view>
        </view>
       
	</view>
</template>

<script>
	import tuiButton from "@/components/extend/button/button"
	import tuiListCell from "@/components/list-cell/list-cell"
	import tuiBottomPopup from "@/components/bottom-popup/bottom-popup"
	export default {
		components: {
			tuiButton,
			tuiListCell,
			tuiBottomPopup
		},
		data() {
			return {
				img_url:this.$img_url,
				maskState: 0, //优惠券面板显示状态
				hasCoupon: false,
				is_pay_now: false,
				total_cart_info:{},//接口返回的所有信息
				coupon_list:[],//优惠券列表
				select_coupon_id:'',//用户选择的优惠券id
				select_coupon_money:0,//用户选择的优惠券优惠金额
				select_coupon_text:'选择优惠券',//用户选择的优惠券显示文字
				address:0, //收货地址信息
				cart_info:{},//购物信息
				priceGroup:{},//价格金额信息
				cache_order_key:'',//订单缓存key
				mark:'',//订单备注
				order_id:0,//订单号
			}
		},
		onLoad(option) {
			let order_cart_id = uni.getStorageSync('order_cart_id')
			this.$api.CC_request.order_confirm(order_cart_id).then(res => {
				this.cart_info = res.cartInfo
				this.address = res.addressInfo
				this.cache_order_key = res.orderKey
				this.total_Cart_info = res
				this.coupon_list = res.usableCoupon
				this.priceGroup.total_price = res.priceGroup.totalPrice
				this.priceGroup.pay_postage = res.priceGroup.storePostage
				this.priceGroup.pay_price = res.priceGroup.totalPrice
				if(!this.addAddress  && this.address != null){
					this.compute_order_amount()
				}
			})
		},
		onShow() {
			
		},
		methods: {
			chooseAddr() {
				uni.navigateTo({
					url: "../address/address?source=1"
				})
			},
			//是否货到付款
			switchChange(e){
				this.is_pay_now = e.target.value
			},
			//提交订单
			submit_order() {
				var pay_method = ''
				if(!this.is_pay_now){
					pay_method = 'offline'
				}else{
					pay_method='weixin'
				}
				if(this.address == null){
					this.$api.msg("请选择收货地址");
					return;
				}
				this.$api.CC_request.order_create(this.cache_order_key,
				        {payType:pay_method,addressId:this.address.id,couponId:this.select_coupon_id, mark:this.mark,from:'routine'}).then(res => {
					var order_id = res.result.orderId
					var jsConfig = res.result.jsConfig
					this.order_id = order_id
					if(pay_method == 'weixin'){
					   this.pay(jsConfig)
					}else{
						uni.navigateTo({
							url: "/pages/order/success?order_id="+order_id
						})
				    }
				})
			},
			//计算订单金额
			compute_order_amount(){
				var pay_method = ''
				if(!this.is_pay_now){
					pay_method = 'offline'
				}else{
					pay_method='weixin'
				}
				this.$api.CC_request.order_compute_amount(this.cache_order_key,
				    {payType:pay_method,addressId:this.address.id,couponId:this.select_coupon_id}).then(res => {
					this.priceGroup = res.result
				})
			},
			//显示优惠券面板
			toggleMask(is_show) {
				let timer = is_show === 'show' ? 10 : 300
				let state = is_show === 'show' ? 1 : 0
				this.maskState = 2
				setTimeout(() => {
					this.maskState = state
				}, timer)
			},
			//显示优惠券面板
			show_coupon() {
				this.maskState = 1
			},
			//使用优惠券
			to_use(index) {
				this.maskState = 0
				this.select_coupon_id=this.coupon_list[index].id?this.coupon_list[index].id:0
				const reduce=this.coupon_list[index].coupon_price
				this.select_coupon_money=reduce
				this.select_coupon_text = '已优惠' + reduce + '元'
				this.compute_order_amount()
			},
			//取消使用优惠券
			cancel_use() {
				this.maskState = 0
				this.select_coupon_id=0
				this.select_coupon_money=0
				this.select_coupon_text = '选择优惠券'
				this.compute_order_amount()
			},
			//小程序支付订单
			pay(data) {
				const order_id = this.order_id
			    uni.requestPayment({
			    	provider:"wxpay", 
			    	timeStamp: data.timestamp,
			    	nonceStr: data.nonceStr,
			    	package: data.package,
			    	signType: data.signType,
			    	paySign: data.paySign,
			    	success: function (res) {  
			    		uni.navigateTo({
			    			url: "/pages/order/success?order_id="+order_id
			    		})
			    	},
			    	fail: function (err) { 						
			    		uni.redirectTo({
			    			url:'/pages/user/myorder/myorder?id='+order_id
			    		})
			    	}
			    });
			},
		}
	}
</script>

<style>
	.container {
		padding-bottom: 98rpx;
	}

	.tui-box {
		padding: 20rpx 0 118rpx;
		box-sizing: border-box;
	}

	.tui-address {
		min-height: 80rpx;
		padding: 10rpx 0;
		box-sizing: border-box;
		position: relative;
	}

	.tui-userinfo {
		font-size: 30rpx;
		font-weight: 500;
		line-height: 30rpx;
		padding-bottom: 12rpx;
	}

	.tui-name {
		padding-right: 40rpx;
	}

	.tui-addr {
		font-size: 24rpx;
		word-break: break-all;
		padding-right: 25rpx;
	}

	.tui-addr-tag {
		padding: 5rpx 8rpx;
		flex-shrink: 0;
		background: #EB0909;
		color: #fff;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		font-size: 25rpx;
		line-height: 25rpx;
		transform: scale(0.8);
		transform-origin: 0 center;
		border-radius: 6rpx;
	}

	.tui-bg-img {
		position: absolute;
		width: 100%;
		height: 8rpx;
		left: 0;
		bottom: 0;
		background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL0AAAAECAMAAADszM6/AAAAOVBMVEUAAAAVqfH/fp//vWH/vWEVqfH/fp8VqfH/fp//vWEVqfH/fp8VqfH/fp//vWH/vWEVqfH/fp//vWHpE7b6AAAAEHRSTlMA6urqqlVVFRUVq6upqVZUDT4vVAAAAEZJREFUKM/t0CcOACAQRFF6r3v/w6IQJGwyDsPT882IQzQE0E3chToByjG5LwMgLZN3TQATmdypCciBya0cgOT3/h//9PgF49kd+6lTSIIAAAAASUVORK5CYII=") repeat;
	}

	.tui-top {
		margin-top: 20rpx;
		overflow: hidden;
	}

	.tui-goods-title {
		font-size: 28rpx;
		display: flex;
		align-items: center;
	}

	.tui-padding {
		box-sizing: border-box;
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

	.tui-flex {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 26rpx;
	}
	.tui-total-flex{
		justify-content: flex-end;
	}

	.tui-color-red,
	.tui-invoice-text {
		color: #E41F19;
		padding-right: 30rpx;
	}

	.tui-balance {
		font-size: 28rpx;
		font-weight: 500;
	}

	.tui-black {
		color: #222;
		line-height: 30rpx;
	}

	.tui-gray {
		color: #888888;
		font-weight: 400;
	}

	.tui-light-dark {
		color: #666;
	}

	.tui-goods-price {
		display: flex;
		align-items: center;
		padding-top: 20rpx;
	}

	.tui-size-26 {
		font-size: 26rpx;
		line-height: 26rpx;
	}

	.tui-price-large {
		font-size: 34rpx;
		line-height: 32rpx;
		font-weight: 600;
	}

	.tui-flex-end {
		display: flex;
		align-items: flex-end;
		padding-right: 0;
	}

	.tui-phcolor {
		color: #B3B3B3;
		font-size: 26rpx;
	}

	/* #ifndef H5 */
	.tui-remark-box {
		padding: 22rpx 30rpx;
	}

	/* #endif */
	/* #ifdef H5 */
	.tui-remark-box {
		padding: 26rpx 30rpx;
	}

	/* #endif */

	.tui-remark {
		flex: 1;
		font-size: 26rpx;
		padding-left: 64rpx;
	}

	.tui-scale-small {
		transform: scale(0.8);
		transform-origin: 100% center;
	}

	.tui-scale-small .wx-switch-input {
		margin: 0 !important;
	}

	/* #ifdef H5 */
uni-switch .uni-switch-input {
		margin-right: 0 !important;
	}

	/* #endif */
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

	.tui-pr-30 {
		padding-right: 30rpx;
	}

	.tui-pr-20 {
		padding-right: 20rpx;
	}

	.tui-none-addr {
		height: 80rpx;
		padding-left: 5rpx;
		display: flex;
		align-items: center;
	}

	.tui-addr-img {
		width: 36rpx;
		height: 46rpx;
		display: block;
		margin-right: 15rpx;
	}


	.tui-pr25 {
		padding-right: 25rpx;
	}

	.tui-safe-area {
		height: 1rpx;
		padding-bottom: env(safe-area-inset-bottom);
	}
	/* 优惠券面板 */
	.mask {
		display: flex;
		align-items: flex-end;
		position: fixed;
		left: 0;
		top: var(--window-top);
		bottom: 0;
		width: 100%;
		background: rgba(0, 0, 0, 0);
		z-index: 9995;
		transition: .3s;
	    }
		.mask-content {
			width: 100%;
			min-height: 30vh;
			max-height: 70vh;padding: 20px 0px 60px;
			background: #f3f3f3;
			transform: translateY(100%);
			transition: .3s;
			overflow-y: scroll;
			transform: translateY(0);
		}
	
		.btn {
			position: fixed;
			bottom: 0;
			width: 95%;
			text-align: center;
			border: 1px solid #FA436A;
			background-color: #FA436A;
			color: #FFFFFF;
			border-radius: 20px;
			margin: 10px;
			padding: 5px;
		}
	
	
		.none {
			display: none;
		}
	
		.show {
			background: rgba(0, 0, 0, .4);
		}
		
/* 优惠券列表 */
	.coupon-item {
		display: flex;
		flex-direction: column;
		margin: 3upx 24upx;
		background: #fff;
		}

		.con {
			display: flex;
			align-items: center;
			position: relative;
			height: 120upx;
			padding: 0 30upx;
		}

		.left {
			display: flex;
			flex-direction: column;
			justify-content: center;
			flex: 1;
			overflow: hidden;
			height: 100upx;
		}

		.title {
			font-size: 32upx;
			color: $font-color-dark;
			margin-bottom: 10upx;
		}

		.time {
			font-size: 24upx;
			color: $font-color-light;
		}

		.right {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			font-size: 26upx;
			color: $font-color-base;
			height: 100upx;
		}

		.price {
			font-size: 44upx;
			color: $base-color;
		}

		.tips {
			font-size: 24upx;
			color: $font-color-light;
			line-height: 60upx;white-space: nowrap;
			padding-left: 30upx;
		}

		.tips2 {
			font-size: 24upx;
			color: $font-color-light;
			line-height: 50upx;;height: 50upx;;
			text-align: center;margin:5upx 10px 0 0;
			width: 80px;
			border: 1px solid #FA436A;
			background-color: #FA436A;
			color: #FFFFFF;
			border-radius: 25px;
		}

		.circle {
			position: absolute;
			left: -6upx;
			bottom: -10upx;
			z-index: 10;
			width: 20upx;
			height: 20upx;
			background: #f3f3f3;
			border-radius: 100px;
		}
		.r {
			left: auto;
			right: -6upx;
		}
</style>
