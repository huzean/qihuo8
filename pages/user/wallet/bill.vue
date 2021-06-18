<template>
	<view class="container">
		<tui-list-view class="tui-list-view" v-for=" bill in bills">
			<tui-list-cell @click="detail" class="tui-msg">
				<view class="tui-msg-box">
					<view class="tui-msg-item">
						<view class="tui-msg-name">充值齐币</view>
						<view class="tui-msg-content">支付单号：</view>
						<view class="tui-msg-content">  {{bill.c_orderid}}</view>
						<view class="tui-msg-content">支付金额：{{bill.recharge_amt}}</view>
						<view class="tui-msg-content">支付状态：{{bill.pay_status}}</view>
					</view>
				</view>
				<view class="tui-msg-right">
					<view class="tui-msg-time">{{bill.created_time}}</view>
					<tui-badge type="danger" class="tui-badge">{{bill.coin_amt}}</tui-badge>
				</view>
			</tui-list-cell>
		</tui-list-view>
		<!--内容部分-->
		<!--加载loadding-->
		<tui-loadmore :visible="loadding" :index="3" type="red"></tui-loadmore>
		<tui-nomore :visible="!pullUpOn" bgcolor="#fafafa"></tui-nomore>
		<!--加载loadding-->
	</view>
</template>

<script>
	import tuiListView from "@/components/list-view/list-view"
	import tuiListCell from "@/components/list-cell/list-cell"
	import tuiIcon from "@/components/icon/icon"
	import tuiTag from "@/components/tag/tag"
	import tuiBadge from "@/components/badge/badge";
	import tuiLoadmore from "@/components/loadmore/loadmore";
	import tuiNomore from "@/components/nomore/nomore";
	export default {
		components: {
			tuiListView,
			tuiListCell,
			tuiIcon,
			tuiTag,
			tuiBadge,
			tuiLoadmore,
			tuiNomore,
		},
		data() {
			return {
                bills:[],
				loadding: false,
				pullUpOn: true,
				pageIndex:1,
				pageLimit:10,
			}
		},
		onLoad() {
		  this.get_bill_data();
		},
		methods: {
			get_bill_data: function(){
				this.$api.CC_request.get_user_bill_log({page:this.pageIndex,limit:this.pageLimit}).then((res) => {
				   if (res.length > 0) {
				     this.bills = this.bills.concat(res);
				   }
				   //数据已加载完
				   if (res.length < this.pageLimit) {
				     this.loadding = false;
				     this.pullUpOn = false;
				   }
				   
				   this.loadding = false;
				});
			},
			detail: function() {
				uni.showToast({
					title: '详情功能尚未完善~',
					icon: "none"
				})
			},
			onReachBottom() {
			  if (this.pullUpOn == false) {
			    return;
			  }
			  this.pageIndex = this.pageIndex + 1;
			  this.get_bill_data();
			},
		}
	}
</script>

<style>
	@import "/static/style/thorui.css";
	@import "/static/style/icon.css";
	.container {
		padding-bottom: env(safe-area-inset-bottom);
	}

	.tui-list-view {
		padding-top: 40upx !important
	}

	.tui-list-cell-name {
		padding-left: 20upx;
		vertical-align: middle;
		line-height: 30upx;
	}

	.tui-list::after {
		left: 94upx !important
	}

	.tui-right {
		margin-left: auto;
		margin-right: 34upx;
		font-size: 26upx;
		line-height: 1;
		color: #999;
	}

	.logo {
		height: 40upx;
		width: 40upx;
	}

	.tui-flex {
		display: flex;
		align-items: center;
	}

	.tui-msg-box {
		display: flex;
		align-items: center;
	}

	.tui-msg-pic {
		width: 100upx;
		height: 100upx;
		border-radius: 50%;
		display: block;
		margin-right: 24upx;
	}

	.tui-msg-item {
		max-width: 500upx;
		min-height: 80upx;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.tui-msg-name {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-size: 34upx;
		line-height: 1;
		color: #262b3a;
	}

	.tui-msg-content {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-size: 26upx;
		line-height: 1.5;
		color: #9397a4;
	}

	.tui-msg-right {
		max-width: 300upx;
		height: 88upx;
		margin-left: auto;
		text-align: right;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-end;
	}

	.tui-msg-right.tui-right-dot {
		height: 76upx;
		padding-bottom: 10upx;

	}

	.tui-msg-time {
		width: 100%;
		font-size: 24upx;
		line-height: 24upx;
		color: #9397a4;
	}

	.tui-badge {
		width: auto
	}

	.tui-msg::after {
		left: 154upx !important
	}
</style>
