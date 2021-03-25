<template>
	<view class="coupon">
		<view class='po'>
			<view class='tab'>
				<view :class="c_index==1?'xz':'bb' " @click="num(1)">未使用</view>
				<view :class="c_index==2?'xz':'bb' " @click="num(2)">使用记录</view>
				<view :class="c_index==3?'xz':'bb' " @click="num(3)">已过期</view>
			</view>
			<None v-if="list_empty"></None>
			<view v-for="(item,index) of list" :key="index" v-else>
				<view class='coupon'>
					<view class='cou_t'>
						<view class='cou_t_l'>
							<view :class='class_name'><span>¥</span> {{item.coupon_price}}</view>
						</view>
						<view class='cou_t_r'>
							<view class='cou_t_r_01'>满{{item.use_min_price}}减{{item.coupon_price}}</view>
							<view class='cou_t_r_02'>有效期：{{item.end_time}}</view>
						</view>
						<view :class='btn_name' v-if="state==0" >
							<view  @tap="jump_to">去使用</view>
						</view>
					</view>
					<view class="ysy" v-if="state==1"><img src="@/imgs/yi.png"></img></view>
					<view class="ysy" v-if="state==2"><img src="@/imgs/late.png"></img></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import None from "@/components/qy/none.vue"
	export default {
		data() {
			return {
				btn_name: 'cou_t_rr',
				c_index: 1,
				list: '',
				class_name: 'cou_t_l_01',
				state: 0,
				list_empty: false,
			};
		},
		components: {
			None,
		},
		onShow() {
			this._load()
		},
		methods: {
			jump_to(){
				uni.redirectTo({
			        url: '/pages/index/index'
				})
			},
			_load() {
				var is_login = uni.getStorageSync('is_login')
				if(is_login == 0){
					uni.showToast({
					    title: '请先点击授权登录',
						icon:'none',
					    duration: 2000
					});
				}
				if(is_login == 1){
				this.$api.CC_request.get_user_coupons(this.c_index).then(res => {
					if(res.length == 0){
						this.list_empty=true
					}else{
						this.list_empty=false
						this.list=res
					uni.stopPullDownRefresh()
					}
				})
				}
			},
			num(index) {
				if (index == 1) {
					this.c_index = index
					this.class_name = "cou_t_l_01"
					this.btn_name = "cou_t_rr"
					this.state = 0
					this.list = []
					this._load()
				}
				if (index == 2) {
					this.c_index = index
					this.class_name = "cou_sss"
					this.btn_name = "btn_grey"
					this.state = 1
					this.list = []
					this._load()
				}
				if (index == 3) {
					this.c_index = index
					this.class_name = "cou_sss"
					this.btn_name = "btn_grey"
					this.state = 2
					this.list = []
					this._load()
				}
			},

		},
		
		onPullDownRefresh() {
			console.log('refresh');
			this._load();
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 2000);
		}
	}
</script>

<style lang="scss">
	.coupon {
		background-color: #F8F8F8;
		min-height: 100vh;padding-bottom: 1px;

		.po {
			z-index: 99;
			width: 100%;
		}

		.tab {
			padding: 10px 10px 0;
			display: flex;
			width: 100%;
			font-size: 14px;
			background-color: #fff;
		}

		.bb {
			padding-bottom: 5px;
			text-align: center;
			width: 50%;
		}

		.xz {
			border-bottom: 2px solid red;
			padding-bottom: 5px;
			width: 50%;
			text-align: center;
		}

		.coupon {
			margin: 15px;
			background-color: #fff;
			border: 1px solid #EEEEEE;
			border-radius: 5px;
			box-shadow: 2px 2px 2px #EEEEEE;
			color: #9FA0A2;
			min-height: 10px;
			position: relative;

			.ysy {
				position: absolute;
				right: 10px;
				top: 0;

				img {
					width: 80px;
					height: 80px;
					z-index: 99;
				}
			}
		}

		.cou_t {
			display: flex;
			padding: 20px 10px 10px;
			justify-content: space-between;
			font-size: 12px;
			width: 100%;
			box-sizing: border-box;
		}

		.cou_t_l {
			width: 20%;
			flex-shrink: 0;
		}

		.cou_t_r {
			width: 55%;
			box-sizing: border-box;
			padding-left: 10px;
			flex-grow: 1;
		}

		.cou_t_rr {
			width: 70px;
			background-color: #EB113E;
			color: #fff;
			height: 25px;
			line-height: 25px;
			font-size: 12px;
			text-align: center;
			margin: 15px 0 0 10px;
			border-radius: 20px;
		}

		.btn_grey {
			width: 70px;
			background-color: #9FA0A2;
			color: #fff;
			height: 25px;
			line-height: 25px;
			font-size: 12px;
			text-align: center;
			margin: 15px 0 0 10px;
			border-radius: 20px;
		}

		.cou_t_l_01 {
			color: #FF4444;
			font-size: 16px;
			padding-top: 8px;
		}

		.cou_t_l_01 span {
			font-size: 12px;
		}

		.cou_sss {
			font-size: 16px;
			padding-top: 8px;
		}

		.cou_sss span {
			font-size: 12px;
		}

		.cou_t_r_01 {
			font-size: 16px;
			color: #323233;
			padding: 3px 0 5px;
		}

		.cou_d {
			background-color: #FAFAFA;
			padding: 6px 15px;
			border-top: 1px dashed #EBEDF0;
			font-size: 12px;
		}

		.H50 {
			height: 50px;
		}

		.btn {
			position: fixed;
			bottom: 0;
			width: 100%;
			height: 45px;
			line-height: 45px;
			text-align: center;
			border-top: 1px solid #EEEEEE;
			z-index: 999;
			font-size: 14px;
			background-color: #fff;
		}
	}
</style>
