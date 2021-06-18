<!--实名认证-->
<template>
  <view class="content">
    <view class="agent">
      <view class="head"> 认证状态:{{ verify_status }} </view>
    </view>
    <view class="row b-b">
      <text class="tit">姓名</text>
      <input
        class="input"
        :disabled="can_not_edit"
        type="text"
        v-model="form.cname"
        placeholder="请填写真实姓名"
        placeholder-class="placeholder"
      />
    </view>
    <view class="row b-b">
      <text class="tit">联系手机</text>
      <input
        class="input"
        type="number"
        :disabled="can_not_edit"
        v-model="form.cphone"
        placeholder="请填写手机号码"
        placeholder-class="placeholder"
      />
    </view>
    <view class="row b-b">
      <text class="tit">公司名称</text>
      <input
        class="input"
        type="text"
        :disabled="can_not_edit"
        v-model="form.ccorpname"
        placeholder="请填写企业名称"
        placeholder-class="placeholder"
      />
    </view>
	<view class="row b-b">
	  <text class="tit">地区</text>
	  <view class="result" @click="showRegion">{{ resultInfo.result }}</view>
	  <w-picker
	    mode="region"
	    :defaultVal="['广东省', '广州市', '荔湾区']"
	    @confirm="onConfirm"
	    ref="region"
	  ></w-picker>
	</view>
    <view class="row b-b">
      <text class="tit">详细地址</text>
      <input
        class="input"
        type="text"
        :disabled="can_not_edit"
        v-model="form.caddress"
        placeholder="请填写详细地址"
        placeholder-class="placeholder"
      />
    </view>
    <view class="btn">
      <button class="add-btn" @click="sub_verify">提交认证</button>
    </view>
  </view>
</template>
<script>
import tuiUpload from "@/components/tui-upload/tui-upload.vue";
import wPicker from "@/components/w-picker/w-picker.vue";
export default {
  components: {
    tuiUpload,
	wPicker
  },
  data() {
    return {
      form: {
        cname: "",
        cphone: "",
        ccorpname: "",
        caddress: "",
		province:'',
		city:'',
		district:'',
      },
      verify_status: "未提交认证",
      serverUrl: this.$api_url + "upload/image",
      can_not_edit: false, //是否可以修改
	  resultInfo: {
	    result: "请选择地区",
	  },
	  cust:{},
    };
  },
  onLoad(option) {},
  onShow() {
	  this.getCustInfo();
  },
  methods: {
    sub_verify: function () {
		if(this.can_not_edit == true){
			this.$api.msg("认证信息已提交不可以修改，有任何疑问请联系业务员");
			return
		}
      if (this.form.cname == "") {
        this.$api.msg("姓名不能为空");
        return;
      }
      if (this.form.cphone == "") {
        this.$api.msg("联系电话不能为空");
        return;
      }
      if (this.form.ccorpname == "") {
        this.$api.msg("公司名称不能为空");
        return;
      }
      if (this.form.caddress == "") {
        this.$api.msg("详细地址不能为空");
        return;
      }
	  if(this.form.province == ""){
		this.$api.msg("所在地省份不能为空");
		return;
	  }

      this.$api.CC_request.user_auth_apply(this.form).then((res) => {
        this.$api.msg("提交成功");
      });
    },
	showRegion:function() {
		if(this.can_not_edit == true) return;
	    this.$refs["region"].show();
	},
	onConfirm(val) {
		console.log(val);
	  this.resultInfo = val;
	  this.form.province = val.checkArr[0];
	  this.form.city = val.checkArr[1];
	  this.form.district = val.checkArr[2];
	},
	getCustInfo:function(){
	  this.$api.CC_request.get_cust_info().then((res) => {
	    this.cust = res;
		switch(this.cust.status)
		{
			case "1":
			    this.verify_status="已提交认证";
				this.can_not_edit = true;
				break;
			case "2":
			    this.verify_status="已认证";
				this.can_not_edit = true;
				break;
			case "3":
			    this.verify_status="认证失败";
				this.can_not_edit = false;
				break;
			default:
			    break;
		}
		this.form.cname = this.cust.cname;
		this.form.cphone = this.cust.cphone;
		this.form.ccorpname = this.cust.ccorpname;
		this.form.caddress = this.cust.caddress;
		this.resultInfo.result = this.cust.province+this.cust.city+this.cust.district;
		this.form.province = this.cust.province;
		this.form.city = this.cust.city;
		this.form.district = this.cust.district;
	  });
	}
  },
};
</script>

<style lang="scss">
page {
  background: $page-color-base;
  // padding-top: 16upx;
}
.head {
  background-color: #5e017a;
  color: #fff;
  text-align: center;
  padding: 10px 10px 10px;
}
.head span {
  font-size: 25px;
  padding: 0 5px;
  font-size: 18px;
}

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
  .picker_row {
    height: 22.4px;
  }

  .icon-shouhuodizhi {
    font-size: 36upx;
    color: $font-color-light;
  }
}
.img-row {
  height: 220upx;
}

.default-row {
  margin-top: 16upx;

  .tit {
    flex: 1;
  }

  switch {
    transform: translateX(16upx) scale(0.9);
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
    background-color: #5e017a;
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
  margin-right: 5%;
  width: 100%;
  font-size: 32upx;
}
</style>
