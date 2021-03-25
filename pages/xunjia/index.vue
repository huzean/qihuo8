<template>
  <view class="container">
    <!--  -->
    <scroll-view scroll-y="true" style="height: 600px">
      <!--  -->
      <view class="input_box">
        <view class="input_add">
          <view @click="btnClick()">添加</view>
        </view>
        <!-- 品牌 -->
        <view class="brand">
          <view class="brand_item1">品牌: </view>
          <view class="brand_item2">
            <!-- <input type="text" placeholder="请填写品牌" v-model="placeholder" /> -->
            <picker @change="bindplaceholder" :range="arrbrand">
              <view class="brand_item3"
                >{{ arrbrand[indexa] }}
                <!-- <uni-icons type="arrowleft" size="18" color="#000"></uni-icons>  -->
              </view>
              <view class="arrows"></view>
            </picker>
          </view>
        </view>
        <!-- 产品 -->
        <view class="product">
          <view class="brand_item1">产品:</view>
          <view class="brand_item2">
            <!-- <input type="text" placeholder="请填写产品" v-model="inputproduct"/> -->
            <picker @change="bindproduct" :range="arrproduct">
              <view class="brand_item3">{{ arrproduct[indexb] }} </view>
              <view class="arrows"></view>
            </picker>
          </view>
        </view>
        <!-- 数量 -->
        <view class="amount">
          <view class="brand_item1">数量:</view>
          <view class="brand_item2">
            <input   placeholder="请填写数量" v-model="inputamount"  />
          </view>
        </view>
        <!-- 地址信息 -->
        <view class="site_box" @click="btnsite">
        <view class="brand_item1">请填写收货地址:</view>
          <view class="brand_item2">  </view>
        </view>
      </view>
      <!-- 添加信息 -->
      <view class="add_msg" v-for="(item, index) in list" :key="index">
        <view class="add_text_msg"> 添加信息 </view>
        <view class="add_nth2">
          <view class="left"
            >品牌:
            <view>{{ item.placeholder }}</view>
          </view>
          <view class="right"
            >产品:
            <view>{{ item.inputproduct }}</view>
          </view>
          <view class="ending"
            >数量：
            <view>{{ item.inputamount }}</view>
          
          </view>
        </view>
        <view class="time">
          <view>时间:</view>
          <view>{{ item.ctime }}</view>
        </view>
        <!-- 倒计时 -->
        <view class="countdown"> 
          <tui-countdown class="box" :time="timeList[1]" :entime="entime"></tui-countdown>
            <!-- <tui-countdown :time="timeList[4]" :scale="true" :isColon="false"></tui-countdown> -->
        </view>
        <view class="time_delae" @click="delClick(item.placeholder)">X</view>
      </view>
       <button v-show="isshow" class="add-btn"  type="primary" @click="sub">提交 </button>
    </scroll-view>
  </view>
</template>
<script>
import tuiIcon from "@/components/icon/icon";
import tuiCountdown from "@/components/countdown/countdown";
export default {
  components: {
    tuiIcon,
    tuiCountdown,
  },
  data() {
    return {
      entime:"结束时间",
       placeholder: "",
       inputproduct: "",
       inputamount: "",
       isshow:false,
      	// timeList: [100, 2000, 3000, 20, 240000,60],
      	timeList: [1000,1800],
      arrbrand: ["请选择", "康师傅", "农夫山泉", "3", "4"],
      indexa: 0,
      arrproduct: ["请选择", "冰红茶", "红牛", "可乐", "脉动", "王老吉"],
      indexb: 0,
      list: [
      //   {
      //     placeholder: "",
      //  inputproduct: "",
      //  inputamount: "",
      // }
      ],
    };
  },
  methods: {
    bindplaceholder: function (e) {
      this.indexa = e.target.value; 
      this.placeholder = this.arrbrand[this.indexa]; 
      console.log("我选的是：", this.placeholder);
    },
    bindproduct: function (e) {
      this.indexb = e.target.value; 
      this.inputproduct = this.arrproduct[this.indexb];
    },
  
    btnClick() {
    let amount=this.inputamount;
      if(amount==""){
        // this.isshow=false
        uni.showToast({
        title: "请选择产品和数量",
        icon: "none",
        duration: 3000,
      });
      }else{
        this.isshow=true
      let flag = true;
      this.list.forEach((item, index) => {
        if (item.placeholder == parseInt(this.placeholder)) {
          flag = false;
          item.inputproduct = this.inputproduct;
          item.inputamount = this.inputamount;
        }
      });
      if (flag) {
        var car = {
          placeholder: this.placeholder,
          inputproduct: this.inputproduct,
          inputamount: this.inputamount,
          ctime: new Date(),
        };
            this.list.push(car);
      }
      this.placeholder = this.inputproduct = "";
      this.placeholder = this.inputamount = "";
      }
    },
    // 删除
    delClick(placeholder) {
      this.list.splice(placeholder - 1, 1);
      let empty =this.list
      if(empty==""){
        this.isshow=false
      }
    },
    // 地址填写
    btnsite:function(){
        uni.navigateTo({
          url: "../address/address",
        });
    },
    // 提交
    sub() {
      let data =this.list;
      console.log(JSON.stringify(data))
      uni.showToast({
        title: "提交成功",
        icon: "success",
        duration: 2000,
      });
      setTimeout(() => {
        uni.navigateTo({
          url: "../enquirydetails/index",
        });
      }, 2000);
    },
  },
};
</script>

<style lang="scss">
page {
  background: #f4f4f4;
  width: 100%;
  height: 100%;
}
.container {
  width: 100%;
}
.input_box {
  width: 90%;
  // height: 150px;
  margin: 15px auto;
  border: solid #f4f4f4 1px;
  background: #fff;
  border-radius: 10px;
}
// 品牌
.brand {
  width: 100%;
  height: 35px;
  border-bottom: solid #f4f4f4 1px;
  // margin: 28px 0 0 0;
  display: flex;
  line-height: 35px;
  .arrows {
    width: 0px;
    height: 0px;
    border-top: 6px solid #e4e4e4;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    position: relative;
    top: 15px;
    left: 200px;
  }
  .brand_item1 {
    width: 50px;
    height: 100%;
    margin: 0 50px 0 10px;
    line-height: 35px;
    font-size: 28rpx;
    color: #333;
  }
  // .brand_item2 {
  //   input {
  //     width: 224px;
  //     height: 100%;
  //     font-size: 26rpx;
  //   }
  //   .input-placeholder {
  //     color: #d9d9d9;
  //     font-size: 11px;
  //   }
  // }
  .brand_item3 {
    font-size: 22rpx;
    width: 224px;
    position: absolute;
  }
}
// 新增
.input_add {
  height: 30px;
  view {
    margin: 5px 10px 0 0;
    padding: 3px 8px;
    width: 55px;
    text-align: center;
    font-size: 12px;
    color: #f68004;
    border: solid #f68004 0.8px;
    float: right;
    border-radius: 5px;
  }
}
// 产品
.product {
  width: 100%;
  height: 35px;
  border-bottom: solid #f4f4f4 1px;
  // margin: 5px 0px;
  display: flex;
  line-height: 35px;
  .arrows {
    width: 0px;
    height: 0px;
    border-top: 6px solid #e4e4e4;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    position: relative;
    top: 15px;
    left: 200px;
  }
  .brand_item1 {
    width: 50px;
    height: 100%;
    margin: 0 50px 0 10px;
    line-height: 35px;
    font-size: 28rpx;
    color: #333;
  }
  // .brand_item2 {
  //   input {
  //     width: 224px;
  //     height: 100%;
  //     font-size: 26rpx;
  //   }
  //   .input-placeholder {
  //     color: #d9d9d9;
  //     font-size: 11px;
  //     font-weight: bolder;
  //   }
  // }
  .brand_item3 {
    font-size: 22rpx;
    width: 224px;
    position: absolute;
  }
}
// 数量
.amount {
  width: 100%;
  height: 35px;
  border-bottom: solid #f4f4f4 1px;
  // margin: 5px 0px;
  display: flex;
  line-height: 35px;
  .brand_item1 {
    width: 50px;
    height: 100%;
    margin: 0 50px 0 10px;
    line-height: 35px;
    font-size: 28rpx;
    color: #333;
  }
  .brand_item2 {
    input {
      width: 224px;
      height: 100%;
      font-size: 26rpx;
    }
    .input-placeholder {
      color: #d9d9d9;
      font-size: 11px;
    }
  }
  
}
// 地址
.site_box{
  width:100%;
  height:35px;
  display: flex;
  justify-content: space-between;
  border-bottom: solid #f4f4f4 1px;
  // margin:10px 0px;
  line-height: 35px;
    .brand_item1 {
      padding:0px 10px;
    font-size: 25rpx;
    color: #333;
  }
   .brand_item2{
     padding-right:5px;
     margin-top:10px;
      background-color:transparent;
               width:0px;
               height:0px;
               font-weight: bold;
               border:7px solid transparent;
               border-left-color: #e4e4e4;
            
   }
  }
// 添加的信息
.add_msg {
  width: 90%;
  height: 150px;
  margin: 15px auto;
  border: solid #f4f4f4 1px;
  background: #fff;
  border-radius: 10px;
  position: relative;
  .add_text_msg {
    width: 100%;
    padding: 5px 0 5px 10px;
    padding-bottom: 5px;
    color: #333;
    font-size: 14px;
    font-weight: bold;
    border-bottom: solid 1px #f4f4f4;
  }
  .add_nth2 {
    width: 100%;
    display: flex;
    // border-top: solid #f4f4f4 1px;
    border-bottom: solid #f4f4f4 1px;
    color: #333;
    justify-content: space-between;
    margin-top: 10px;
    .left {
      display: flex;
      font-size: 11px;
      font-weight: bold;
      padding-left: 10px;
      view:nth-child(1) {
        margin-left: 20px;
        color: #b3b3b3;
      }
    }
    .right {
      display: flex;
      font-size: 11px;
      font-weight: bold;

      view:nth-child(1) {
        margin-left: 20px;
        color: #b3b3b3;
      }
    }
    .ending {
      display: flex;
      font-size: 11px;
      font-weight: bold;
      padding-right: 10px;
      view:nth-child(1) {
        margin-left: 20px;
        color: #b3b3b3;
      }
    }
  }
  .time {
    display: flex;
    margin-top: 10px;
    view:nth-child(1) {
      padding: 0 20px 0 10px;
      font-size: 11px;
      font-weight: bold;
    }
    view:nth-child(2) {
      font-size: 12px;
      text-align: center;
    }
    .countdown{
  display: flex;
      
    }
  }
  .time_delae {
    width: 25px;
    color: #f68004;
    border: solid #f68004 0.8px;
    padding: 1px;
    text-align: center;
    border-radius: 25px;
    position: absolute;
    top: 2px;
    right: 10px;
  }
}
// 提交按钮
.add-btn{
  width:80%;
  font-size:15px;
}
</style>