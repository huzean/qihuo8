<template>
	<view class="container">
		<tui-tabs :tabs="tabs" :isFixed="scrollTop>=0" :currentTab="currentTab" selectedColor="#E41F19" sliderBgColor="#E41F19"
		 @change="change"></tui-tabs>
		<view class="agent">
			<view class="head">
				订单总数:<span>{{order_sum.order_count}}</span>
			</view>
		</view>
		<view :class="{'tui-order-list':scrollTop>=0}">
			<view class="tui-order-item" v-for="(order,order_index) in order_list" :key="order.id">
				<tui-list-cell :hover="false" :lineLeft="false">
					<view class="tui-goods-title" @click="showMap(order)">
						<view>订单号：{{order.order_id}}</view>
					</view>
				</tui-list-cell>
				<!--<block v-for="(item,index) in order.cartInfo" :key="item.id">
					<tui-list-cell padding="0" @click="showMap(order)">
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
				</block>-->
				<tui-list-cell :hover="false" :last="true">
					<view class="tui-goods-item">
						<view>{{order.real_name}}:{{order.user_address}}</view>
					</view>
				</tui-list-cell>
				<tui-list-cell :hover="false" :last="true">
					<view class="tui-goods-price">
						<view>共{{order.total_num}}件商品 合计：</view>
						<view class="tui-size-24">￥</view>
						<view class="tui-price-large">{{order.total_price}}</view>
					</view>
				</tui-list-cell>
			</view>

		</view>
		<!--加载loadding-->
		<tui-loadmore :visible="loadding" :index="3" type="red"></tui-loadmore>
		<tui-nomore :visible="!pullUpOn" bgcolor="#fafafa"></tui-nomore>
		<!--加载loadding-->

	</view>
</template>

<script>
	import tuiTabs from "@/components/tui-tabs/tui-tabs"
	import tuiButton from "@/components/extend/button/button"
	import tuiLoadmore from "@/components/loadmore/loadmore"
	import tuiNomore from "@/components/nomore/nomore"
	import tuiListCell from "@/components/list-cell/list-cell"
	import tuiSticky from "@/components/sticky/sticky"
	import QQMapWX from "../../../common/qqmap-wx-jssdk.js"
	export default {
		components: {
			tuiTabs,
			tuiButton,
			tuiLoadmore,
			tuiNomore,
			tuiListCell,
			tuiSticky
		},
		data() {
			return {
				img_url:this.$img_url,
				tabs: [{
					name: "全部"
				}, {
					name: "今天"
				}, {
					name: "昨天"
				}, {
					name: "本月"
				}, {
					name: "本年"
				}],
				currentTab: 0,
				current_order_type:1,
				pageIndex: 1,
				loadding: false,
				pullUpOn: true,
				scrollTop: 0,
				order_list:[],//订单列表
				page_limit:5,
				order_sum:{},//订单总数
			}
		},
		onLoad() {
			this.get_order_data()
			this.$api.CC_request.order_shippping_data({type:this.current_order_type}).then(res =>{
				this.order_sum = res
			})
		},
		methods: {
			/*uni.navigateTo({
				url: '/pages/user/myorder/myorder?id='+order_id
			})*/
			showMap(order) {
				var qqmapsdk = new QQMapWX({
                        key: this.$Map_App_key
                });
				var _this = this;
				    //调用地址解析接口
				    qqmapsdk.geocoder({
				      //获取表单传入地址
				      address: order.user_address, //地址参数，例：固定地址，address: '北京市海淀区彩和坊路海淀西大街74号'
				      success: function(res) {//成功后的回调
				        console.log(res);
				        var res = res.result;
				        var latitude = res.location.lat;
				        var longitude = res.location.lng;
				        
						let plugin = requirePlugin('routePlan');
				        let key = _this.$Map_App_key;  //使用在腾讯位置服务申请的key
				        let referer = _this.$shop_name;   //调用插件的app的名称
				        let endPoint = JSON.stringify({  //终点
				            'name': order.real_name,
				            'latitude': latitude,
				            'longitude': longitude
				        });
				        uni.navigateTo({
				            url: 'plugin://routePlan/index?key=' + key + '&referer=' + referer + '&endPoint=' + endPoint
				        });
				      },
				      fail: function(error) {
				        console.error(error);
				      },
				      complete: function(res) {
				        console.log(res);
				      }
				    })
			},
			get_order_data(){
				if(this.pullUpOn == false){
					return
				}
				var data = {type:this.current_order_type, limit:this.page_limit, page:this.pageIndex}
				this.loadding = true
				this.$api.CC_request.order_shipping_list(data).then(res => {
				    var data_list = res
					if(res.length > 0){
						this.order_list = this.order_list.concat(data_list)
					}
					
					//数据已加载完
					if(data_list.length < this.page_limit){
						this.loadding = false
						this.pullUpOn = false
					}
					
					this.loadding = false;
				})
			},
			change(e) {
				this.currentTab = e.index
				this.pageIndex = 1
				switch(e.index){
					case 0:
					    this.current_order_type = 1
						break
					case 1:
					    this.current_order_type = 'today'
						break
					case 2:
					    this.current_order_type = 'yesterday'
						break
					case 3:
					    this.current_order_type = 'month'
						break
					case 4:
					    this.current_order_type = 'year'
						break
					default:
					    break
				}
				this.order_list=[]
				this.pullUpOn = true
				this.loadding = false
				this.get_order_data()
				this.$api.CC_request.order_shippping_data({type:this.current_order_type}).then(res =>{
					this.order_sum = res
				})
			},
		},
		onPullDownRefresh() {
			setTimeout(() => {
				uni.stopPullDownRefresh()
			}, 200);
		},
		onReachBottom() {
			if(this.pullUpOn == false){
			    return
			}
			this.pageIndex = this.pageIndex + 1
			this.get_order_data()
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		}
	}
</script>

<style>
	
	.container {
		padding-bottom: env(safe-area-inset-bottom);
	}
    .head{background-color: #E0451D;color: #fff;text-align: center;padding: 40px 10px 10px;}
    .head span{font-size: 25px;padding: 0 5px;font-size: 18px}
	.tui-order-list {
		margin-top: 0rpx;
	}

	.tui-order-item {
		margin-top: 20rpx;
		border-radius: 10rpx;
		overflow: hidden;
	}

	.tui-goods-title {
		width: 100%;
		font-size: 28rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.tui-order-status {
		color: #888;
		font-size: 26rpx;
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
		font-weight: 500;
	}

	.tui-order-btn {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		background: #fff;
		padding: 10rpx 30rpx 20rpx;
		box-sizing: border-box;
	}

	.tui-btn-ml {
		margin-left: 20rpx;
	}
</style>
