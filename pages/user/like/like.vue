<template>
	<view class="like">
        <view class="content">
			<view v-show="current === 0">
				<view>
					<None v-if="list_empty"></None>
					<view v-for="(item,index) of likeList" :key="index" v-else>
						<view class="des">
							<view class="des_1" @click="jump_toporduct(item.pid)">
								<img :src="img_url + item.image" />
							</view>
							<view class="des_2">
								<view class="msg">
									<view class="name">{{item.store_name}}</view>
									<view class="price">¥{{item.price}}</view>
								</view>
								<view class="btn1">
									<view class="btn" @click="del(item)">取消收藏</view>
									<view class="btn" @click="jump_toporduct(item.pid)">去购买</view>
								</view>
							</view>
						</view>
						<view class="kong"></view>
					</view>
				</view>
			</view>
			<view v-show="current === 1">
				<None v-if="list_empty"></None>
			</view>
		</view>
	</view>
</template>

<script>
	import uniSegmentedControl from "@/components/uni/uni-segmented-control/uni-segmented-control.vue"
	import None from "@/components/qy/none.vue"
	export default {
		data() {
			return {
				img_url:this.$img_url,
				likeList:[],
				list_empty: false,
				items: ['商品', '商店'],
				pageIndex:1,
				current:0,
				pageLimit:10,
				pullUpOn:true,
			}
		},
		components: {
			None,
			uniSegmentedControl
		},
		onLoad() {
			this._load()
		},
		onShow() {
			
		},
		methods: {
			_load() {
				this.$api.CC_request.fac_list_product(this.pageIndex, this.pageLimit).then(res=>{
					if(res.length == 1){
						this.list_empty=true
					}else{
						this.likeList = this.likeList.concat(res)
					}
					
					if(res.length < this.pageLimit){
						this.pullUpOn = false
					}
				})
			},
			del(item) {
				const that = this
				uni.showModal({
					title: '提示',
					content: '确定取消？',
					success: function(res) {
						if (res.confirm) {
							that.$api.CC_request.del_fav_product(item.pid).then(res => {
								that.$api.msg('取消成功')
								that.likeList.pop(item)
								
							})
						} else if (res.cancel) {
						}
					}
				});
			},
			jump_toporduct(id) {
				uni.navigateTo({
					url: '/pages/extend-view/productDetail/productDetail?id=' + id,
				})
			},
		},
		onPullDownRefresh() {
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 2000);
		},
		onReachBottom() {
			if(this.pullUpOn == false){
			    return
			}
			this.pageIndex = this.pageIndex + 1
			this._load()
		},
	}
</script>

<style lang="less">
	.like{background-color: #F0F0F0;min-height: 100vh;}
	.des {
		display: flex;
		padding-top: 10px;
		background-color: #fff;
		padding-bottom: 5px;
		justify-content: space-between
	}

	.des_1 {
		padding: 10px 5px
	}

	.des_1 img {
		width: 30vw;
		height: 30vw;
	}

	.des_2 {
		display: flex;
		flex-direction: column;
		padding-top: 10px;
		width: 63%
	}

	.box {
		display: flex;
		justify-content: space-around;
		background-color: #F8F8FF;
		height: 200px;
		width: 100%
	}

	.msg {
		height: 80px
	}

	.productImg img {
		width: 100px;
		height: 100px;
		padding-left: 10px;
		padding-right: 10px;
	}

	.btn1 {
		height: 30px;
		display: flex;
		justify-content: flex-end;
		padding-right: 10px;
	}

	.btn {
		display: flex;
		font-size: 12px;
		border: 1px solid #C0C0C0;
		height: 25px;
		width: 70px;
		border-radius: 15px;
		justify-content: center;
		align-items: center;
		margin: 5px
	}

	.name {
		font-size: 12px;
	}

	.int {
		font-size: 15px;
		color: #A8A8A8
	}

	.price {
		font-size: 12px;
		color: #FF6600
	}

	.kong {
		height: 5upx
	}
</style>
