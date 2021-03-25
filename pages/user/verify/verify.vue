<!--实名认证-->
<template>
	<view class="content">
		<view class="agent">
			<view class="head">
				认证状态:{{verify_status}}
			</view>
		</view>
		<view class="row b-b">
			<text class="tit">姓名</text>
			<input class="input" :disabled="can_not_edit" type="text" v-model="form.cust_name" placeholder="请填写姓名" placeholder-class="placeholder" />
		</view>
		<view class="row b-b">
			<text class="tit">联系手机</text>
			<input class="input" type="number"  :disabled="can_not_edit" v-model="form.mobile" placeholder="请填写手机号码" placeholder-class="placeholder" />
		</view>
		<view class="row b-b">
			<text class="tit">身份证号码</text>
			<input class="input" type="number"  :disabled="can_not_edit" v-model="form.id_code" placeholder="请填写身份证号码" placeholder-class="placeholder" />
		</view>
		<view class="row b-b img-row">
			<text class="tit">身份证</text>
			<tui-upload :serverUrl="serverUrl"  :disabled="can_not_edit"  @complete="cert_result" @remove="remove" limit="2"></tui-upload>
		</view>
		<view class="row b-b">
			<text class="tit">身份证有效期开始日期</text>
			<input class="input" type="text"  :disabled="can_not_edit" v-model="form.cert_valid_date" placeholder="请填写身份证有效期开始日期" placeholder-class="placeholder" />
		</view>
		<view class="row b-b">
			<text class="tit">身份证有效期到期日期</text>
			<input class="input" type="text"  :disabled="can_not_edit" v-model="form.cert_expire_date" placeholder="请填写身份证有效期到期日期" placeholder-class="placeholder" />
		</view>
		<view class="row b-b">
			<text class="tit">银行卡开户行</text>
			<input class="input" type="text"  :disabled="can_not_edit" v-model="form.account_bank_name" placeholder="请填写银行卡开户行" placeholder-class="placeholder" />
		</view>
		<view class="row b-b">
			<text class="tit">银行卡号</text>
			<input class="input" type="text"  :disabled="can_not_edit" v-model="form.account_no" placeholder="请填写银行卡号" placeholder-class="placeholder" />
		</view>
		<view class="row b-b">
			<text class="tit">民族</text>
			<!--<input class="input" type="text"  :disabled="can_not_edit" v-model="form.nationality" placeholder="请选择民族" placeholder-class="placeholder" />-->
		    <picker class="input picker_row" @change="bindPickerChange" :value="na_index" :range="nationality_array">
		        <view class="input picker_row">{{form.nationality}}</view>
		    </picker>
		</view>
		<view class="row b-b">
			<text class="tit">身份证地址</text>
			<input class="input" type="text"  :disabled="can_not_edit" v-model="form.native_addr" placeholder="请填写身份证地址" placeholder-class="placeholder" />
		</view>
		<view class="row b-b">
			<text class="tit">个人年收入</text>
			<input class="input" type="number"  :disabled="can_not_edit" v-model="form.year_income" placeholder="请填写个人年收入" placeholder-class="placeholder" />
		</view>
		<view class="row b-b">
			<text class="tit">联系人</text>
			<input class="input" type="text"  :disabled="can_not_edit" v-model="form.brd_mgr" placeholder="请填写联系人姓名" placeholder-class="placeholder" />
		</view>
		<view class="row b-b">
			<text class="tit">联系人电话</text>
			<input class="input" type="number"  :disabled="can_not_edit" v-model="form.brd_mgr_phone" placeholder="请填写联系人电话" placeholder-class="placeholder" />
		</view>
		<view class="row b-b">
			<text class="tit">企业名称</text>
			<input class="input" type="text"  :disabled="can_not_edit" v-model="form.corp_name" placeholder="请填写企业姓名" placeholder-class="placeholder" />
		</view>
		<view class="row b-b">
			<text class="tit">统一社会信用代码</text>
			<input class="input" type="text"  :disabled="can_not_edit" v-model="form.corp_id_code" placeholder="请填写企业统一社会信用代码" placeholder-class="placeholder" />
		</view>
		<view class="row b-b img-row">
			<text class="tit">营业执照</text>
			<tui-upload :serverUrl="serverUrl"  :disabled="can_not_edit"  @complete="corp_result" @remove="remove" limit="1"></tui-upload>
		</view>
		<view class="row b-b">
			<text class="tit">企业注册地址</text>
			<input class="input" type="text"  :disabled="can_not_edit" v-model="form.corp_reg_addr" placeholder="请填写企业注册地址" placeholder-class="placeholder" />
		</view>
		<view class="btn"> 
			<button class="add-btn" @click="sub_verify">提交认证</button>
		</view>
	</view>
</template>

<script>
	import tuiUpload from "@/components/tui-upload/tui-upload.vue"
	export default {
		components: {
			tuiUpload,
		},
		data() {
			return {
				form:{
					cust_name:'',
					mobile:'',
					id_code:'',
					cert_valid_date:'',
					cert_expire_date:'',
					account_bank_name:'',
					account_no:'',
					nationality:'',
					native_addr:'',
					year_income:'',
					brd_mgr:'',
					brd_mgr_phone:'',
					corp_name:'',
					corp_id_code:'',
					corp_reg_addr:'',
					cert_img:[],//身份证照片
					corp_img:[],//营业执照照片
				},	
			    nationality_array:['汉族','少数民族','外国血统中国籍人士','其他'],
				na_index:0,
				verify_status:'未提交认证',
				
				serverUrl:this.$api_url+'upload/image',
				can_not_edit:false,//是否可以修改
			}
		},
		onLoad(option) {
		},
		
		onShow() {
		},
		methods: {
			bindPickerChange:function(e){
				this.na_index = e.target.value 
				this.form.nationality = this.nationality_array[this.na_index]
			},
			//身份证照片上传
			cert_result: function(e) {
				this.form.cert_img = e.imgArr;
			},
			//营业执照上传
			corp_result: function(e) {
				this.form.corp_img = e.imgArr;
			},
			remove: function(e) {
				console.log(e)
				let index = e.index
			},
			sub_verify: function(){
				if(this.form.cust_name == ''){
					this.$api.msg('姓名不能为空');
					return
				}
				if(this.form.mobile == ''){
					this.$api.msg('联系电话不能为空');
					return
				}
				if(this.form.id_code == ''){
					this.$api.msg('身份证号码不能为空');
					return
				}
				if(this.form.cert_img.length < 2){
					this.$api.msg('身份证正反面照片不能为空');
					return
				}
				if(this.form.cert_valid_date == ''){
					this.$api.msg('身份证有效期开始日期不能为空');
					return
				}
				if(this.form.cert_valid_date == ''){
					this.$api.msg('身份证有效期到期日期不能为空');
					return
				}
                if(this.form.account_bank_name == ''){
					this.$api.msg('开户银行名称不能为空');
					return
				}
                if(this.form.account_no == ''){
					this.$api.msg('银行账号不能为空');
					return
				}
				if(this.form.nationality == ''){
					this.$api.msg('银行账号不能为空');
					return
				}
				if(this.form.native_addr == ''){
					this.$api.msg('身份证地址不能为空');
					return
				}
				if(this.form.year_income == ''){
					this.$api.msg('年收入不能为空');
					return
				}
				if(this.form.brd_mgr == ''){
					this.$api.msg('联系人名称不能为空');
					return
				}
				if(this.form.brd_mgr_phone == ''){
					this.$api.msg('联系人电话不能为空');
					return
				}
				if(this.form.corp_name == ''){
					this.$api.msg('公司名称不能为空');
					return
				}
				if(this.form.corp_id_code == ''){
					this.$api.msg('统一社会信用代码不能为空');
					return
				}
				if(this.form.corp_img.length == 0){
					this.$api.msg('营业执照不能为空');
					return
				}
				if(this.form.corp_reg_addr == ''){
					this.$api.msg('公司注册地址不能为空');
					return
				}
				
				this.$api.CC_request.user_auth_apply(this.form).then(res => {
					this.$api.msg('提交成功')
				})
				
			},
	    }
	}
</script>

<style lang="scss">
	page {
		background: $page-color-base;
		padding-top: 16upx;
	}
	.head{background-color: #E0451D;color: #fff;text-align: center;padding: 10px 10px 10px;}
	.head span{font-size: 25px;padding: 0 5px;font-size: 18px}

	.row {
		display: flex;
		align-items: center;
		position: relative;
		padding: 0 30upx;
		height: 110upx;
		background: #fff;

		.tit {
			flex-shrink: 0;
			width: 200upx;
			font-size: 30upx;
			color: $font-color-dark;
		}

		.input {
			flex: 1;
			font-size: 30upx;
			color: $font-color-dark;
		}
		.picker_row{
			height:22.4px;
		}

		.icon-shouhuodizhi {
			font-size: 36upx;
			color: $font-color-light;
		}
	}
	.img-row{
		height:220upx;
	}

	.default-row {
		margin-top: 16upx;

		.tit {
			flex: 1;
		}

		switch {
			transform: translateX(16upx) scale(.9);
		}
	}

	.btn {

		display: flex;

		.add-btn {
			width: 47%;
			height: 80upx;
			margin: 60upx auto;
			font-size: $font-lg;
			color: #fff;
			background-color: $base-color;
			border-radius: 10upx;
			box-shadow: 1px 2px 5px rgba(219, 63, 96, 0.4);
		}
	}



	.tab {
		color: #f00;
		padding: 20upx 0;
		font-size: 32upx;
	}

	.tab.active {
		color: #999999;
	}

	.result {
		color: #999999;
		margin-right: 5%;width: 100%;
		font-size: 32upx;
	}
</style>
