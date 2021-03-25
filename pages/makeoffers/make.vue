<template>
  <view class="container">
    <scroll-view scroll-y="true" style="height: 600px">
      <!--tabbar-->
      <view class="tui-tabbar" :style="{ height: is_lhp ? '136rpx' : '99rpx' }">
        <block v-for="(item, index) in tabbar" :key="index">
          <view
            :style="{ padding: is_lhp ? '20rpx 0 0 0' : '0rpx 0 0 0' }"
            class="tui-tabbar-item"
            :class="[current == index ? 'tui-item-active' : '']"
            :data-index="index"
            @tap="tabbarSwitch"
          >
            <view :class="[index == 0 ? 'tui-ptop-4' : '']">
              <text
                class="iconfont"
                style="font-size: 18px; font-weight: 400; margin-bottom: 5px"
                >{{ item.icon }}
              </text>
            </view>
            <view class="tui-scale">{{ item.text }}</view>
          </view>
        </block>
      </view>
      <!--tabbar-->
      <!-- <view class="search">
        <input type="text" placeholder="请输入搜索内容" @input="set" />
      </view>
      <view class="list">
        <view class="text" v-for="(item, index) in filterList" :key="index" >
          <view class="iconfont icon-sousuo"></view>
          <rich-text class="font-size" :nodes="item"  ></rich-text>
        </view>
      </view> -->
      <!--  -->
      1111
      <text type="default" @tap="choose">地址：{{ads}}</text>

      <view v-show="userFeedbackHidden" class="popup_content">
        <view class="popup_title">积分</view>
        <view class="popup_textarea_item">
          <input
            type="text"
            class="popup_textarea"
            v-model="integralinput"
            placeholder="输入积分数量"
          />
        </view>
        <view class="buttons">
          <text @click="unhide">取消</text>
          <text @click="submitFeedback">确定</text>
        </view>
      </view>
      <view class="popup_overlay" @click="hideDiv()">
        <text class="iconfont"></text>
        <text class="iconfont icon-jifen"></text>
        <text>{{ integralnumber }}</text>
        <text
          class="iconfont icon-winfo-icon-xiajiantou"
          style="font-size: 12px"
        ></text>
      </view>
      <!--  -->
      <view class="cart-item-box">
        <view class="cart-box-left">
          <view class="cart-select yticon icon-xuanzhong2"></view>
          <!-- <img src="" alt=""> -->
          <image src="../../static/images/mall/nav/list.png" mode="widthFix" />
        </view>
        <view class="cart-box-right">
          <view class="cart-right-name">
            <view class="right-name">夫是法国我了五瑟夫九五九年年</view>
            <view class="right-cancel">22</view>
          </view>
          <view class="right-specification">规格 1*24罐/件</view>
          <view class="right-price">
            <text>1</text>
            <text>2</text>
            <text>3</text>
          </view>
        </view>
      </view>

    </scroll-view>
  </view>
</template>

<script>
import tuiIcon from "@/components/icon/icon";
export default {
  components: {
    tuiIcon,
  },
  data() {
    return {
      ads:"",
      userFeedbackHidden: false, // 默认隐藏
      integralinput: "", // 输入数量
      integralnumber: "",
      list: [
        "王老吉",
        "可乐330ml迷你",
        "可乐250ml罐装",
        "可乐680ml瓶装",
        "怡宝550ml",
        "怡宝1.5L",
        "怡宝250ml",
        "加多宝250ml",
        "冰红茶550ml",
        "农夫山泉550ml",
        "20椰汁椰国1.25L",
        "红牛150ml",
        "珠江0度",
        "雀巢咖啡",
        "百岁山550ml",
        "5L农夫山泉",
        "康师傅拉卤牛肉面(五连包)",
        "康师傅卤香牛肉",
        "康师傅鲜虾鱼板",
        "康师傅大食袋香菇炖鸡(1箱*30袋)",
      ],
      filterList: [],
      // 判断手机类型
      is_lhp: false,
      // tab切换
      tabbar: [
        {
          icon: "\ue60d",
          text: "首页",
        },
        {
          icon: "\ue6a0",
          text: "询价",
        },
        {
          icon: "\ue646",
          text: "报价",
        },
        {
          icon: "\ue60a",
          text: "我的",
        },
      ],
      navactive: 0,
      // cart_item_num:0,//购物车中商品种类
      current: 2,
    };
  },
  onLoad() {
    // 判断手机机型
    let _this = this;
    this.is_lhp = this.$is_bang;
    console.log("是否为刘海屏", this.is_lhp);
  },
  methods: {
     	choose(){
				uni.chooseLocation({
					success:(res)=> {
						console.log(res)
						var add = res.address;
						var reg = /.+?(省|市|自治区|自治州|县|区)/g;
						this.ads = add.match(reg).toString().split(",")[1];//[1]对应上面reg相关的省，市......，想要显示多个直接在后面用 “+” 拼接就可以了
						console.log(this.ads)
					}
				})
			},
    // 
    hideDiv() {
      // 隐藏输入弹出框
      this.userFeedbackHidden = true;
    },
    submitFeedback() {
      // 提交
      if (this.integralinput == "") {
        uni.showToast({
          title: "填写积分",
          icon: "none",
          duration: 1000,
        });
      } else {
        this.integralnumber = this.integralinput;
        this.userFeedbackHidden = false;
      }
    },
    unhide() {
      this.userFeedbackHidden = false;
    },
    set(e) {
      let value = e.detail.value;
      if (!value) {
        this.filterList = this.list;
      }
      if (value == "") {
        this.filterList = "";
        return;
      }

      let filterArr = [];
      // 过滤出符合条件的值
      this.list.forEach((item, index) => {
        if (item.includes(value)) {
          filterArr.push(this.join(item, value));
        }
      });
      this.filterList = filterArr;
    },
    // 拼接
    join(str, key) {
      var reg = new RegExp(`(${key})`, "gm");
      var replace =
        '<span style="color:rgb(236, 145, 7);margin-left:10px;">$1</span>';
      return str.replace(reg, replace);
    },

    tabbarSwitch: function (e) {
      let index = e.currentTarget.dataset.index;
      console.log(e);
      let url = "";
      switch (index) {
        case 0:
          url = "/pages/index/index";
          break;
        case 1:
          url = "/pages/enquirylist/enquiry";
          break;
        case 2:
          break;
        case 3:
          url = "/pages/user/user";
          break;
        default:
          break;
      }

      if (url) {
        uni.redirectTo({
          url: url,
        });
      }
    },
    // 搜索
    getSearch: function (e) {
      uni.navigateTo({
        url: "../searhc/index",
      });
    },
    // nav
    lun_bo(e) {
      this.navactive = e;
    },
    navto: function (e) {
      uni.navigateTo({
        url: "../makeoffers/detailpage",
      });
    },
  },
};
</script>

<style lang="scss">
page {
  background: #f4f4f4;
}
// tabbar切换
/*tabbar*/
.tui-tabbar {
  width: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 99999;
  background: #fff;
  height: 100rpx;
  left: 0;
  bottom: 0;
  padding-bottom: env(safe-area-inset-bottom);
}
.tui-tabbar-item {
  flex: 1;
  width: 25%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  font-size: 32upx;
  color: #666;
  // height: 80rpx;
}
.tui-item-active {
  color: #5e017a !important;
}
.tui-ptop-4 {
  padding-top: 4rpx;
}
.tui-badge {
  position: absolute;
  font-size: 24rpx;
  height: 32rpx;
  min-width: 20rpx;
  padding: 0 6rpx;
  border-radius: 40rpx;
  top: 1rpx;
  transform: scale(0.8) translateX(60%);
  transform-origin: center center;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}
.tui-tabbar::before {
  content: "";
  width: 100%;
  border-top: 1rpx solid #d9d9d9;
  position: absolute;
  top: 0;
  left: 0;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
}
.tui-badge-red {
  background: #f74d54;
  color: #fff;
}
.tui-scale {
  transform: scale(0.5);
  transform-origin: center 100%;
  line-height: 24rpx;
  font-size: 20px;
}
//
// cart
.cart-item-box {
  width: 95%;
  height: 100px;
  // border:solid red 1px;
  margin: 0 auto;
  display: flex;
  background: #fff;
  border-radius: 5px;
  .cart-box-left {
    display: flex;
    flex: 2;
    border: solid red 1px;
    .cart-select {
      width: 25px;
      text-align: center;
      border: solid red 1px;
    }
    image {
      width: 83px;
    }
  }
  .cart-box-right {
    display: flex;
    flex: 5;
    border: solid red 1px;
    flex-direction: column;
    .cart-right-name {
      display: flex;
    }
    .right-name {
      height:40px;
      display: flex;
      flex: 4;
      border: solid red 1px;
      flex-wrap: wrap;
      margin:4px 0 0 5px;
      font-size:15px;
    }
    .right-cancel {
      display: flex;
      margin-top:4px;
      flex: 1;
      border: solid red 1px;
      justify-content: center;
    }
    .right-specification{
      padding:5px;

    }
    .right-price{
      display: flex;
      margin-left: 5px;
      view:nth-child(1){
        display: flex;
        flex: 1;
      border: solid red 1px;

        }
      view:nth-child(2){
        display: flex;
       flex:2;
      border: solid red 1px;

        }
      view:nth-child(3){
        display: flex;
       flex:1;
      border: solid red 1px;

        }

    }
  }
}

//
.search {
  padding: 20rpx;
  background-color: #fff;
  border-bottom: #09f solid 1px;

  & > input {
    height: 64rpx;
  }
}
.list {
  & > view {
    padding: 20rpx;
    background: #fff;

    & + view {
      // background:#fff;
      border-top: #e5e5e5 solid 1px;
      border-bottom: #e5e5e5 solid 1px;
    }
  }
  .text {
    display: flex;
    align-items: center;
    .iconfont {
      font-size: 18px;
      margin-right: 5px;
    }
  }
}
.font-size {
  font-size: 13px;
}
// 弹窗
.popup_content {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 280px;
  height: 180px;
  // padding:30px;
  border: 10px solid white;
  background-color: white;
  overflow: auto;
  // border:solid red 1px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
}
.popup_title {
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 30px;
  font-size: 32rpx;
}
.popup_textarea_item {
  padding-top: 5rpx;
  height: 80rpx;
  width: 90%;
  background-color: #f1f1f1;
  margin-top: 20rpx;
  display: flex;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 25px;
  border: solid #dfd8d8 1px;
  border-radius: 4px;
  font-size: 15px;
}
.popup_button {
  color: #f4f4f4;
}
.popup_overlay {
  width: 40px;
  border: solid red 1px;
}
.buttons {
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
  text-align: center;
  font-size: 32rpx;
}
// 11111111
.cart-item-box {
  width: 95%;
  height: 100px;
  // border:solid red 1px;
  margin: 0 auto;
  display: flex;
  background: #fff;
  border-radius: 5px;
  .cart-box-left {
    display: flex;
    flex: 2;
    border: solid red 1px;
    .cart-select {
      width: 25px;
      text-align: center;
      border: solid red 1px;
    }
    image {
      width: 83px;
    }
  }
  .cart-box-right {
    display: flex;
    flex: 5;
    border: solid red 1px;
    flex-direction: column;
    .cart-right-name {
      display: flex;
    }
    .right-name {
      height:40px;
      display: flex;
      flex: 4;
      border: solid red 1px;
      flex-wrap: wrap;
      margin:4px 0 0 5px;
      font-size:15px;
    }
    .right-cancel {
      display: flex;
      margin-top:4px;
      flex: 1;
      border: solid red 1px;
      justify-content: center;
    }
    .right-specification{
      padding:5px;

    }
    .right-price{
      display: flex;
      margin-left: 5px;
      view:nth-child(1){
        display: flex;
        flex: 1;
      border: solid red 1px;

        }
      view:nth-child(2){
        display: flex;
       flex:2;
      border: solid red 1px;

        }
      view:nth-child(3){
        display: flex;
       flex:1;
      border: solid red 1px;

        }

    }
  }
}

</style>