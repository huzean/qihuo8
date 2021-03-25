<template>
<view>
	<view class='Popup' :hidden="isHidden">
	   <image :src='logo_url'></image>
	   <view class='title'>授权提醒</view>
	   <view class='tip'>请授权头像等信息，以便为更好的使用服务</view>
	   <view class='bottom flex'>
		   <view class='item' @tap='close'>拒绝授权</view>
	      <button class='item grant'  type="primary" open-type="getUserInfo" @getuserinfo="getUserInfo">确认授权</button>
	   </view>
	</view>
	<view class='mask' :hidden="isHidden" @click="close"></view>
</view>
</template>

<script>
	import {XcxToken} from '@/common/xcx_token.js'
	var xcxtoken = new XcxToken();
	export default {
		data() {
			return {
				isHidden: true,
				//是否自动登录
				isAuto: true,
				isGoIndex:true,
			    cloneIner: null,
			    loading:false,
			    errorSum:0,
			    errorNum:3,
			}
		},
		onLoad(){
			console.log("wechat auth")
			this.isHidden = false
		},
		methods: {
			close(){
				console.log("refused")
				this.isHidden = true
				uni.setStorageSync('wechat_auth','refused')
				uni.navigateBack({
					
				})
			},
			getUserInfo(e){
				console.log("log in")
			    xcxtoken.verify()
				uni.navigateBack({
					
				})
			}
		},
    }
</script>

<style>
	.Popup{width:500rpx;background-color:#fff;position:fixed;top:50%;left:50%;margin-left:-250rpx;transform:translateY(-50%);z-index:320;}
	.Popup image{width:150rpx;height:150rpx;margin:-67rpx auto 0 auto;display:block;border: 8rpx solid #fff;border-radius: 50%}
	.Popup .title{font-size:28rpx;color:#000;text-align:center;margin-top: 30rpx}
	.Popup .tip{font-size:22rpx;color:#555;padding:0 24rpx;margin-top:25rpx;}
	.Popup .bottom .item{width:50%;height:80rpx;background-color:#eeeeee;text-align:center;line-height:80rpx;font-size:24rpx;color:#666;margin-top:54rpx;}
	.Popup .bottom .item.on{width: 100%}
	.flex{display:flex;}
	.Popup .bottom .item.grant{font-size:28rpx;color:#fff;font-weight:bold;background-color:#e93323;border-radius:0;padding:0;}
	.mask{position:fixed;top:0;right:0;left:0;bottom:0;background-color:rgba(0,0,0,0.3);z-index:310;}
</style>
