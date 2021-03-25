<template>
  <view class="container">
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
            <text class="iconfont" style="font-size:18px; font-weight:400; margin-bottom:5px;">{{item.icon}} </text>
            <!-- <tui-icon
              :name="current == index ? item.icon + '-fill' : item.icon"
              :color="current == index ? '#5e017a' : '#666'"
              :size="item.size"
            ></tui-icon> -->
            <!-- <view
              class="tui-badge tui-badge-red"
              v-if="index == 2 && cart_item_num > 0"
              >{{ cart_item_num }}</view> -->
          </view>
          <view class="tui-scale">{{ item.text }}</view>
        </view>
      </block>
    </view>
    <view>
      <!-- nav -->
      <view class="nav">
        <view
          v-for="(item, index) in navList"
          :key="index"
          @tap="lun_bo(index)"
        >
          {{ item.name }}
        </view>
      </view>
      <view class="nav_center"></view>
      <view class="plan1" v-if="navactive == 0">
        <view class="nav_bottom">
          <!-- 询价 -->
          <view
            class="nav_item"
            v-for="(item, index) in navListnoe"
            :key="index"
            :class="index == navactive1 ? 'active' : ''"
            @tap="lun_bonoe(index)"
          >
            {{ item.name }}
            <view :class="navactive1 == index ? 'change' : ''"></view>
          </view>
        </view>
        <view class="plan2" v-if="navactive1 == 0">
          <view>2-1</view>
        </view>
        <view class="plan2" v-if="navactive1 == 1">
          <view>2-2</view>
        </view>
        <view class="plan2" v-if="navactive1 == 2">
          <view>2-3</view>
        </view>
      </view>
      <!-- 报价 -->
      <view class="plan1" v-if="navactive == 1">
        <view class="nav_bottom">
          <view
            class="nav_item"
            v-for="(item, index) in navListtop"
            :key="index"
            :class="index == navactive2 ? 'active' : ''"
            @tap="lun_botop(index)"
          >
            {{ item.name }}
            <view :class="navactive2 == index ? 'change' : ''"></view>
          </view>
        </view>
        <view class="plan2" v-if="navactive2 == 0">
          <view>2-1</view>
        </view>
        <view class="plan2" v-if="navactive2 == 1">
          <view>2-2</view>
        </view>
        <view class="plan2" v-if="navactive2 == 2">
          <view>2-3</view>
        </view>
      </view>
      <!--  -->
    </view>
  </view>
</template>

<script>
// var QQMapWX = require('../../static/sdk/qqmap-wx-jssdk.min.js');
import tuiIcon from "@/components/icon/icon";
import Search from "@/components/search/index";
export default {
  components: {
    tuiIcon,
    Search,
  },
  data() {
    return {
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
      navList: [{ name: "询价" }, { name: "报价" }],
      navListnoe: [
        { name: "全部询价" },
        { name: "我的询价" },
        { name: "历史询价" },
      ],
      navListtop: [
        { name: "全部报价" },
        { name: "我的报价" },
        { name: "历史报价" },
      ],
      current: 1,
      navactive: 0,
      navactive1: 0,
      navactive2: 0,
    };
  },

  onLoad() {
    // 判断手机机型
    let _this = this;
    this.is_lhp = this.$is_bang;
    console.log("是否为刘海屏", this.is_lhp);
  },
  methods: {
    // nav
    lun_bo(e) {
      this.navactive = e;
    },
    lun_bonoe(e) {
      this.navactive1 = e;
    },
    lun_botop(e) {
      this.navactive2 = e;
    },
    //   tabbar切换
    tabbarSwitch: function (e) {
      let index = e.currentTarget.dataset.index;
      let url = "";
      switch (index) {
        case 0:
          url = "/pages/index/index";
          break;
        case 1:
          break;
        case 2:
          url = "/pages/makeoffers/make";
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
  },
};
</script>

<style lang="scss">
page {
  background: #fafafa;
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
   font-size:20px;

}
// header_nav
.nav {
  display: flex;
  width: 100%;
  height: 90rpx;
  background: #550266;
  line-height: 80rpx;
  font-size: 30rpx;
  font-weight: bold;
  justify-content: space-around;
  color: #fff;
  position: absolute;
}

.plan1 {
  width: 100%;
  height: 100%;
  // border:solid red 1px;
  margin-top: 28px;
}
.nav_center {
  position: relative;
  left: 50%;
  top: 13px;
  width: 2px;
  height: 18px;
  font-weight: bold;
  border-left: solid #999999 2px;
}
.active {
  color: #550266;
  border-width: 30px;
  // border:solid red 1px;
}
.change {
  width: 30px;
  border-bottom: solid 4px rgba(149, 108, 222, 1);
  border-radius: 4px;
  margin: 0 auto;
  margin-top: -5px;
}
.nav_bottom {
  display: flex;
  width: 100%;
  height: 90rpx;
  // margin-top:28px;
  // margin: 8rpx 0px;
  background: #fff;
  line-height: 80rpx;
  font-size: 30rpx;
  // font-weight: bold;
  // border:solid red 1px;
  justify-content: space-around;
}

</style>