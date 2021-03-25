<template>
  <view class="box">
    <!-- <scroll-view scroll-y="true" style="height: 600px"> -->
      <view class="enquirt_box">
        <!-- <view class="message">
          <text>采购信息</text>
        </view> -->
        <view class="nav">
          <view
            class="nav_item"
            v-for="(item, index) in navList"
            :key="index"
            :class="index == navactive ? 'active' : ''"
            @tap="lun_bo(index)"
          >
            {{ item.name }}
          </view>
        </view>
        </view>
        <view class="plan1" v-if="navactive == 0">
          <view
            class="enquirt_item"
            v-for="(item, index) in enquirtlist"
            :key="index"
          >
            <view class="item_image">
              <view class="imgs"
                >
                <!-- <image src="/static/images/mall/product/1.jpg"/> -->
              </view>
              <!--  :src="'/static/images/mall/product/' + item.img + '.jpg'" -->
              <view>{{ item.product }}</view>
              <view>{{ item.proceed }}</view>
            </view>
            <view class="item_time">
              <text>下单时间:</text>
              <text>{{ item.time }}</text>
            </view>
            <view class="item_quantity">
              <text>采购数量</text>
              <text>{{ item.quantity }}</text>
              <view class="itwm_price">
                <view>
                  结束时间
          <tui-countdown class="box" :time="timeList[1]" ></tui-countdown>
                </view>
                <text>￥<text>{{ item.price }}</text></text
                >
              </view>
            </view>
          </view>
        </view>
           <!-- 报价信息 -->
        <view class="plan1" v-if="navactive == 1">
          <!-- <text class="font_color">报价信息</text> -->
          <view
            class="msg_box"
            v-for="(item, index) in locationlist"
            :key="index"
          >
            <view class="location">
              <text class="location_item">{{ item.location }}</text>
              <text class="prage_item">{{ item.prage }}元</text>
              <text class="grade_item">
                <text class="grade"> 评分: </text>
                {{ item.grade }}
              </text>
              <view class="handclick">
                 <text  @click="sub">开牌</text>
              </view>
          </view>
            <!-- 开牌信息 -->
            <view class="hacking" v-show="isShow">
              <view class="shut" @click="handleShut">X</view>
            </view>
        </view>
         <view class="hint">开牌需要消耗15个币</view>
      </view>
     
    <!-- </scroll-view> -->
  </view>
 
</template>

<script>
import tuiCountdown from "@/components/countdown/countdown";
export default {
  components:{
     tuiCountdown,
  },
  data() {
    return {
      navactive: 0,
      enquirtlist: [
        {
          proceed: "进行中",
          product: "可口可乐",
          proceed: "进行中",
          time: "2020-12-4-10:23",
          quantity: "100",
          price: "68",
        },
          {
          proceed: "进行中",
          product: "可口可乐",
          proceed: "进行中",
          time: "2020-12-4-10:23",
          quantity: "100",
          price: "68",
        },
      ],
      navList: [{ name: "询价信息" }, { name: "报价信息" }],
      locationlist: [
        { location: "广东番禺", prage: "5000", grade: "5.0" },
      ],
         timeList: [1000,1800],
         isShow:false,
    };
  },
  methods: {
    // nav
    lun_bo(e) {
      this.navactive = e;
    },
    sub() {
      this.isShow=true
      uni.showToast({
        title: "开牌需要15个币",
        icon: "none",
        duration: 2000,
      });
      setTimeout(() => {
        // uni.navigateTo({
        //   url: "../address/address",
        // });
      }, 2000);
    },
    // 开牌关闭
    handleShut(){
      this.isShow=false
    }
  },
};
</script>

<style lang="scss">
page {
  background: #f7f7f7;
}
.enquirt_box {
  width: 100%;
  // height: 130px;
  margin: 0 auto;
  //   margin-top:30px;
  //   border: solid red 1px;
  //   background:#5c5c5c;
  //   border-radius: 15px;
  // .message {
  //   flex: 1;
  //   display: flex;
  //   justify-content: space-between;
  //   padding: 10px;
  //   color: #000;
  //   font-size: 35rpx;
  //   font-weight: 500px;
  // }
  .nav {
    display: flex;
    width: 100%;
    height: 80rpx;
    margin: 8rpx 0px;
    background: #fff;
    line-height: 80rpx;
    font-size: 28rpx;
    font-weight: bold;
    justify-content: space-around;
    .nav_item {
      display: flex;
      justify-content: space-around;
    }
    .active {
      color: rgb(228, 31, 25);
      border-bottom: solid red 1px;
    }
  }
}
.enquirt_item {
  width: 90%;
  height: 140px;
  margin: 20rpx auto;
  background: #fff;
  border-radius: 15rpx;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  .item_image {
    width: 95%;
    display: flex;
    justify-content: space-between;
    line-height: 45px;
    height: 50px;
    .imgs {
      width: 45px;
      height: 45px;
      background: #eaeaea;
      margin-top: 10px;
      image {
        width: 35px;
        height: 35px;
        text-align: center;
        margin: 10rpx 10rpx;
      }
    }
    view:nth-child(2) {
      width: 200px;
      font-size: 23rpx;
      color: #333;
      font-weight: bold;
    }
    view:nth-child(3) {
      color: #69abf4;
      font-size: 20rpx;
      font-weight: bold;
    }
  }
  .item_time {
    width: 260px;
    height: 25px;
    //  border:solid red 1px;
    color: #737373;
    position: relative;
    font-size: 23rpx;
    top: -25px;
    left: 31px;
    text:nth-child(1) {
      margin-right: 15rpx;
    }
  }
  .item_quantity {
    width: 260px;
    height: 25px;
    //  border:solid red 1px;
    color: #737373;
    position: relative;
    font-size: 23rpx;
    top: -40px;
    left: 31px;
    text:nth-child(1) {
      margin-right: 15rpx;
    }
  }
  .itwm_price {
    color: #fe6d2a;
    font-size: 35rpx;
    font-weight: bold;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    view{
display: flex;
font-size:23rpx;
.box{margin-top:-5px;}
.entime_font{
  padding-left:10px;
}
    }
  }
}

.font_color {
  margin: 10px 0 10px 10px;
}
.msg_box {
  .location {
    width: 95%;
    height: 70px;
    // border: solid red 1px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    margin-top:15px;
    background: #fff;
    position: relative;
 .handclick {
     width:70px;
    height:25px;
    border:solid rgb(243, 157, 29) 1px;
    color:rgb(243, 157, 29) ;
    border-radius: 25px;
    font-size: 13px;
    text-align: center;
    text{
      line-height: 25px;
    }
  }
  }
  button {
    width: 30px;
    height: 40px;
  }
  .location_item {
    color: #000;
  }
  .prage_item {
    color: rgb(23, 218, 218);
  }
  .grade_item {
    color: rgb(243, 157, 29);
    .grade {
      color: red;
    }
  }
 .hacking{
   width:95%;
   margin:0 auto;
   height:100px;
   background: #fff;
   border:solid red 1px;
   .shut{
     width:20px;
     height:20px;
     margin:5px 5px 0 0;
     border-radius: 20px;
     color:red;
     float:right;
     border: solid red 1px;
     text-align: center;
     font-size: 15px;
    //  padding:2px;
   }
 }
 }
  .hint {
   color:#333;
   margin:0 auto;
   text-align: center;
   position: absolute;
   left:34%;
   top:570px;
   font-size:13px;


}

</style>