<template>
	<view class="record">
		<view class="head">
			<view class="head_l">
				<view class="head_l_1">余额（元）</view>
				<view class="head_l_2">{{commissionCount}}</view>
			</view>
			<view class="head_r" @click="jump_cash">提现</view>
		</view>
		<block v-for="(item,index) of cash_list" :key="index">
			<view class="list">
				<view class="list_01">
					<view class="list_01_l" v-if="item.extract_type=='bank'">银行卡提现</view>
					<view class="list_01_r">{{item.extract_price}}</view>
				</view>
				<view class="list_02">
					<view class="list_01_l">{{item.add_time}}</view>
					<view class="list_01_r" v-if="item.status==0">审核中</view>
					<view class="list_01_r"  v-if="item.status==1">提现成功</view>
					<view class="list_01_r"  v-if="item.status==-1">提现失败</view>
				</view>
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				commissionCount:0,
				cash_list:[],
				current_page:1,
				pullUpOn:true,
				limit:20,
			};
		},
		onLoad() {
			this.load_data()
		},
		methods:{
			load_data(){
				this.$api.CC_request.get_user().then(res => {
				 	this.commissionCount = res.extractPrice
				}) 
				this.$api.CC_request.user_cash_list({page:this.current_page, limit:this.limit}).then(res => {
					this.cash_list = res.list
					if(res.list.length < limit){
						this.pullUpOn = false
					}
				})
			},
			jump_cash(){
				uni.navigateTo({
					url: '/pages/user/cash/cash',
				});
			}
		},
		onReachBottom() {
			if(this.pullUpOn == false){
			    return
			}
			this.pageIndex = this.pageIndex + 1
			this.get_order_data()
		},
	}
</script>

<style lang="scss">
.record{font-size: 14px;
	.head{background-color: #FF4D4D;padding:20px 10px;display: flex;justify-content: space-between;
		.head_l{color: #fff;
			.head_l_2{font-size: 22px;padding-top: 10px;}
		}
		.head_r{background-color: #fff;color: #FD6766;height: 30px;line-height: 30px;width: 90px;text-align: center;
		border-radius: 20px;margin-top: 15px;}
	}
	.list{margin:15px 10px;box-shadow: 0px 0px 10px #EDEDED;border-radius: 5px;padding:15px 10px;
		.list_01{display: flex;justify-content: space-between;font-size: 16px;font-weight: 600;padding-bottom: 10px;}
		.list_02{display: flex;justify-content: space-between;color: #9A9A9A;
			.list_01_r{color: #FC4F50;}
		}
	}
}
</style>
