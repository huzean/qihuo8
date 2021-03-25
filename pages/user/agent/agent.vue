<template>
	<view class="agent">
		<view class="head">
			共 <span>{{length}}</span> 人
		</view>
		<view class="t_tou">
			<view class="tou_1">头像</view>
			<view class="tou_2">昵称</view>
			<view class="tou_3">操作</view>
		</view>
		<view class="t">
			<None v-if="list_empty"></None>
			<view class="agent" v-else v-for="(item,index) of agentList" :key="index">
				<li class="t_01" v-if="item">
					<view class="t_01_1"> <img :src="item.avatar"></img> </view>
					<view class="t_01_1">{{item.nickname}}</view>
					<view class="t_01_1 head_r" @click="edit_agent_info(item.uid)">编辑</view>
				</li>
			</view>
		</view>
	</view>
</template>

<script>
	import None from "@/components/qy/none.vue" 
	export default {
		data() {
			return {
				agentList:[],
				length:0,
				list_empty:false,
				current_page:1,
			};
		},
		components: {None},
		onLoad() {
			this._load()
		},
		methods:{
			_load(){
				uni.showLoading({
					title: '加载中'
				})
				this.$api.CC_request.get_user_dis_people({page:1}).then(res => {
					this.agentList = res.list
					this.length = res.total
					uni.hideLoading()
				})
			},
			edit_agent_info(uid){
				uni.navigateTo({
					url: '/pages/user/agent/agent_info?uid=' + uid
				})
			}
			
		},
		onPullDownRefresh() {
			console.log('refresh');
			this._load();
			setTimeout(function () {
				uni.stopPullDownRefresh();
			}, 2000);
		}
	}
</script>

<style lang="less">
.agent{
	.none{padding: 150px 0;text-align: center;color:#00A9F4;line-height:50px;
		img{width: 60px;height: 60px;}
	}
	.head{background-color: #E0451D;color: #fff;text-align: center;padding: 40px 10px 30px;}
	.head span{font-size: 30px;padding: 0 5px;font-size: 18px}
	.t_tou{display: flex;padding: 10px;height: 40px;line-height: 30px;}
	.tou_1{width: 20%;text-align: center;font-size: 14px;font-weight: bold;}
	.tou_2{width: 50%;text-align: center;font-size: 14px;font-weight: bold;}
	.tou_3{width: 30%;text-align: center;font-size: 14px;font-weight: bold;}
	.t_01{display: flex;height: 50px;line-height: 50px; 
	}
	.t_01_1{width: 34%;text-align: center;font-size: 14px}
	.t_01_1 img{ margin-top:8px;width: 35px;height: 35px;border-radius: 35px;}
	.t li:nth-of-type(odd){ background-color: #EEEEEE;} 
	.t li:nth-of-type(even){background-color: #fff;} 
    .head_r{background-color: #fff;color: #FD6766;height: 30px;line-height: 30px;width: 60px;text-align: center;
    border-radius: 10px;margin-top: 15px;margin-left: 30px;}
}
</style>
