<template>
  <view class="cash" >
	  <view class='khh'>姓名 &emsp;<input type="text" v-model="agent_info.real_name" /></view>
      <view class='khh'>联系电话 &emsp;<input type="number" v-model="agent_info.phone"/></view>
      <view class='khh'>店铺名称 &emsp;<input type="text" v-model="agent_info.door_name" /></view>
      <view class='btn' @tap="confim">确认</view>
  </view>
</template>

<script>
export default {
	  data() {
		return {
		  agent_info:{},
		  uid:0,
		};
	  },
	  onLoad(options) {
		  this.uid = options.uid
	  	  this.load_data()
	  },
	  computed: {
		
	  },
	  components: {},
	  methods: {
		  load_data(){
			this.$api.CC_request.get_spread_user(this.uid).then(res => {
			 	this.agent_info = res.spread_user
			}) 
		  },
		  confim(){
			this.$api.CC_request.edit_spread_user(this.agent_info).then(res => {
			 	this.$api.msg('更新成功');
			})
		  }
	  }
};
</script>

<style lang="less">
.cash {
  background-color: #f5f5f5; height: 100vh;font-size:14px;
  .txz{padding: 15px 10px;background-color: #fff;}
  .money{background-color: #fff;padding: 10px;}
  .ktx{font-size: 12px;color: #949398;}
  .jine{display: flex;background-color: #fff;padding:9px 10px;border-bottom: 1px solid #F8F8F8;border-top: 1px solid #F8F8F8;}
  .jine_01{padding: 7px 10px 0 0;}
  .kg{background-color: #fff;display: flex;justify-content: space-between;padding: 9px 0px 7px 10px;}
  .kg_l{padding-top: 8px;}
  .khh{background-color: #fff;border-top: 1px solid #F8F8F8;padding: 17px 15px 12px;}
  .txfy{background-color: #fff;padding:5px 10px;font-size: 12px;}
  .txfy_01{display: flex;justify-content: space-between;border-top: 1px solid #F8F8F8;padding: 10px 0 5px;}
  .txfy_02{display: flex;justify-content: space-between;color: #B8B8BC;padding-bottom: 10px;}
  .btn{margin: 30px 10px 10px;background-color: #FF976A;height: 43px;line-height: 43px;text-align: center;border-radius: 20px;
  color: #fff;}
}
</style>
