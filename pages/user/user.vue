<template>
  <view>
    <!--tabbar-->
    <view class="tui-tabbar" :style="{ height: is_lhp ? '130rpx' : '105rpx' }">
      <block v-for="(item, index) in tabbar" :key="index">
        <view
          class="tui-tabbar-item"
          :style="{ padding: is_lhp ? '20rpx 0 0 0' : '0rpx 0 0 0' }"
          :class="[current == index ? 'tui-item-active' : '']"
          :data-index="index"
          @tap="tabbarSwitch"
        >
          <view class="icon-size" :class="[index == 0 ? 'tui-ptop-4' : '']">
            <text class="iconfont" :class="index == 2 ? 's3' : ''"
              >{{ item.icon }}
            </text>
          </view>
          <view class="tui-scale" :class="'s' + (index + 1)">{{
            item.text
          }}</view>
        </view>
      </block>
    </view>
    <!--tabbar-->
    <!--header-->
    <view
      class="tui-header-box"
      :style="{
        height: height + 'px',
        background: 'rgba(255,255,255,' + opcity + ')',
      }"
    >
      <view
        class="tui-header"
        :style="{ paddingTop: top + 'px', opacity: opcity }"
      >
      </view>
      <!-- #ifndef MP -->
      <view
        class="tui-header-icon"
        :style="{ marginTop: top + 'px' }"
        @tap="href(1)"
      >
        <view class="tui-icon-box tui-icon-message">
          <tui-icon
            name="message"
            :color="opcity > 0.02 ? `rgba(85,85,85,${opcity})` : '#fff'"
            :size="26"
          ></tui-icon>
          <view
            class="tui-badge"
            :class="[opcity > 0.05 ? 'tui-badge-red' : 'tui-badge-white']"
            >1</view
          >
        </view>
        <view class="tui-icon-box tui-icon-setup" @tap="href(2)">
          <tui-icon
            name="setup"
            :color="opcity > 0.02 ? `rgba(85,85,85,${opcity})` : '#fff'"
            :size="26"
          ></tui-icon>
        </view>
      </view>
      <!-- #endif -->
    </view>
    <!--header-->
    <view class="tui-mybg-box">
      <view class="tui-header-center">
        <image
          :src="current_user.avatar"
          class="tui-avatar"
          @tap="href(3)"
        ></image>
        <view class="tui-info">
          <view class="tui-nickname">{{ current_user.nickname }}</view>
          <button
            class="bt_auth"
            v-if="current_user == null"
            @click="wechat_auth"
          >
            点击授权登录
          </button>
        </view>
        <!-- #ifndef MP -->
        <view class="tui-btn-edit">
          <tui-button
            type="white"
            :plain="true"
            shape="circle"
            width="92rpx"
            height="40rpx"
            :size="22"
            @click="href(3)"
            >编辑</tui-button
          >
        </view>
        <!-- #endif -->
        <!-- #ifdef MP -->
        <view class="tui-set-box">
          <view class="tui-icon-box tui-icon-message" @tap="href(1)">
            <tui-icon name="message" color="#fff" :size="26"></tui-icon>
            <!--<view class="tui-badge tui-badge-white">1</view>-->
          </view>
          <!-- 设置 -->
          <view class="tui-icon-box tui-icon-setup" @tap="href(2)">
            <tui-icon name="setup" color="#fff" :size="26"></tui-icon>
          </view>
        </view>
        <!-- #endif -->
      </view>
    </view>
    <view class="tui-content-box">
      <view class="tui-box tui-assets-box">
        <tui-list-cell padding="0" :last="true" :hover="false">
          <view class="tui-cell-header">
            <view class="tui-cell-title color_text">我的资产</view>
          </view>
        </tui-list-cell>
        <view class="tui-order-list tui-assets-list">
          <view class="tui-order-item" @tap="href(61)">
            <view class="tui-assets-num">
              <text>{{ current_cust.wallet.coin_amount }}</text>
              <view class="tui-badge-dot"></view>
            </view>
            <view class="tui-assets-text color_text">销币</view>
          </view>
          <view class="tui-order-item">
            <view class="tui-assets-num">
              <text>{{ current_cust.wallet.gift_amount }}</text>
              <view class="tui-badge-dot"></view>
            </view>
            <view class="tui-assets-text color_text">黄钻</view>
          </view>
          <view class="tui-order-item" @tap="href(63)">
            <view class="tui-assets-num">
              <text>{{ current_user.like }}</text>
              <view class="tui-badge-dot"></view>
            </view>
            <view class="tui-assets-text color_text">收藏</view>
          </view>
        </view>
      </view>
      <view class="tui-box tui-tool-box">
        <tui-list-cell :arrow="true" padding="0" :lineLeft="false">
          <view class="tui-cell-header">
            <view class="tui-cell-title color_text">实名认证</view>
            <!-- <view class="tui-cell-sub color_text" @tap="href(8)">{{current_cust.status == 2?'已认证':'未认证'}}</view> -->
            <view class="tui-cell-sub color_text tui-flex" @tap="href(8)">
              <tui-icon
                :name="current_cust.status == 2 ? 'circle-selected' : 'edit'"
                :size="17"
                :color="current_cust.status == 2 ? '#ff0188' : '#5e017a'"
              ></tui-icon>
                <view class="tui-cell-sub color_text">{{
                current_cust.status == 2 ? "已认证" : "未认证"
              }}</view>
            </view>
          </view>
        </tui-list-cell>
        <tui-list-cell :arrow="true" padding="0" :lineLeft="false">
          <view class="tui-cell-header">
            <view class="tui-cell-title color_text">实名认证</view>
         <view class="tui-cell-sub color_text tui-flex" @tap="href(7)">
           <tui-icon name="edit" color="#5e017a" :size="17"></tui-icon>
              <view class="tui-cell-sub color_text">未认证</view>
            </view>
          </view>
        </tui-list-cell>
      </view>
      <view class="tui-box tui-tool-box">
        <tui-list-cell :arrow="true" padding="0" :lineLeft="false">
          <view class="tui-cell-header">
            <view class="tui-cell-title color_text">常用工具</view>
            <view class="tui-cell-sub color_text" @tap="href(7)">查看更多</view>
          </view>
        </tui-list-cell>
        <view class="tui-order-list tui-flex-wrap">
          <button class="tui-tool-item" open-type="contact" hover-class="none">
            <view class="tui-icon-box">
              <image
                src="../../static/images/mall/my/icon_kefu_3x.png"
                class="tui-tool-icon"
              ></image>
            </view>
            <view class="tui-tool-text">客服服务</view>
          </button>
          <view
            class="tui-tool-item"
            @tap="go_page('/pages/user/wallet/mywallet')"
          >
            <view class="tui-icon-box">
              <image
                src="../../static/images/mall/my/icon_purse_3x.png"
                class="tui-tool-icon"
              ></image>
            </view>
            <view class="tui-tool-text">我的钱包</view>
          </view>
          <block v-for="(item, index) in user_menus" :key="index">
            <view class="tui-tool-item" @tap="go_page(item.url)">
              <view class="tui-icon-box">
                <image :src="item.pic" class="tui-tool-icon"></image>
              </view>
              <view class="tui-tool-text">{{ item.name }}</view>
            </view>
          </block>
        </view>
      </view>
    </view>
    <view>
      <view class="Popup" :hidden="isHidden">
        <image :src="logo_url"></image>
        <view class="title">授权提醒</view>
        <view class="tip">请授权头像等信息，以便更好的使用服务</view>
        <view class="bottom flex">
          <view class="item" @tap="close">拒绝授权</view>
          <button
            class="item grant"
            type="primary"
            open-type="getUserInfo"
            @getuserinfo="getUserInfo"
          >
            确认授权
          </button>
        </view>
      </view>
      <view class="mask" :hidden="isHidden" @click="close"></view>
    </view>
    <view>
      <view class="Popup" :hidden="isAuthHidden">
        <view class="title">提交信息，审核通过后，可享受优惠价格</view>
        <view class="tips">
          <text class="tit">店铺名</text>
          <input
            class="input"
            type="text"
            v-model="form.door_name"
            placeholder="请填写门头名称"
            placeholder-class="placeholder"
          />
        </view>
        <view class="tips">
          <text class="tit">手机号</text>
          <input
            class="input"
            type="number"
            v-model="form.phone"
            placeholder="收货人手机号码"
            placeholder-class="placeholder"
          />
        </view>
        <view class="tips">
          <text class="tit">详细</text>
          <input
            class="input"
            type="text"
            v-model="form.address"
            placeholder="填写到门牌号"
            placeholder-class="placeholder"
          />
        </view>
        <view class="bottom flex">
          <view class="item" @tap="close">拒绝授权</view>
          <button class="item grant" type="primary" @tap="submit_auth">
            提交授权申请
          </button>
        </view>
      </view>
      <view class="mask" :hidden="isAuthHidden" @click="close"></view>
    </view>
  </view>
</template>
<script>
import tuiIcon from "@/components/icon/icon";
import tuiButton from "@/components/extend/button/button";
import tuiListCell from "@/components/list-cell/list-cell";
import tuiDivider from "@/components/divider/divider";
import tuiLoadmore from "@/components/loadmore/loadmore";
import { XcxToken } from "@/common/xcx_token.js";
var xcxtoken = new XcxToken();
export default {
  components: {
    tuiIcon,
    tuiButton,
    tuiListCell,
    tuiDivider,
    tuiLoadmore,
  },
  onLoad: function (options) {
    let obj = {};
    // #ifdef MP-WEIXIN
    obj = wx.getMenuButtonBoundingClientRect();
    // #endif
    // #ifdef MP-BAIDU
    obj = swan.getMenuButtonBoundingClientRect();
    // #endif
    // #ifdef MP-ALIPAY
    my.hideAddToDesktopMenu();
    // #endif
    uni.getSystemInfo({
      success: (res) => {
        this.width = obj.left || res.windowWidth;
        this.height = obj.top
          ? obj.top + obj.height + 8
          : res.statusBarHeight + 44;
        this.top = obj.top
          ? obj.top + (obj.height - 32) / 2
          : res.statusBarHeight + 6;
        this.scrollH = res.windowWidth * 0.6;
      },
    });
  },
  data() {
    return {
      // 判断手机类型
      is_lhp: false,
      current: 4,
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
          icon: "\ue621",
          text: "求购",
        },
        {
           icon: "\ue630",
          text: "联系",
        },
        {
          icon: "\ue63f",
          text: "我的",
        },
      ],
      img_url: this.$img_url,
      height: 64, //header高度
      top: 0, //标题图标距离顶部距离
      scrollH: 0, //滚动总高度
      opcity: 0,
      iconOpcity: 0.5,
      pageIndex: 1,
      loadding: false,
      pullUpOn: true,

      userInfo: {},
      current_user: null,
      current_cust: null,
      user_menus: [],
      isHidden: true,
      isAuthHidden: true,

      form: {
        door_name: "",
        phone: "",
        address: "",
      },
    };
  },
  onLoad() {
    // 判断手机机型
    let _this = this;
    this.is_lhp = this.$is_bang;
    console.log("是否为刘海屏", this.is_lhp);
    var is_login = uni.getStorageSync("is_login");
    if (is_login == 0) {
      return;
    }
  },
  onShow() {
    var is_login = uni.getStorageSync("is_login");
    if (is_login == 0) {
      return;
    }
    this.load_user_info();
  },
  methods: {
    load_user_info() {
      this.$api.CC_request.get_user_menu().then((res) => {
        console.log("USER", res);
        if (res != 401) {
          this.user_menus = res.routine_my_menus;
        }
      });

      this.$api.CC_request.get_user().then((res) => {
        if (res != 401) {
          this.current_user = res;
          var is_user_auth = uni.getStorageSync("is_user_auth");
          console.log(is_user_auth);
          if (is_user_auth == 1 && this.current_user.is_auth == 0) {
            this.isAuthHidden = false;
          }

          this.$api.CC_request.get_cust_info().then((res) => {
            this.current_cust = res;
          });
        }
      });
    },
    href(page) {
      var is_login = uni.getStorageSync("is_login");
      if (is_login == 0) {
        uni.showToast({
          title: "请先点击授权登录",
          icon: "none",
          duration: 2000,
        });
        return;
      }
      let url = "";
      switch (page) {
        case 1:
          break;
        case 2:
          url = "/pages/user/set/set";
          break;
        case 3:
          url = "../userInfo/userInfo";
          break;
        case 4:
          url = "../myOrder/myOrder";
          break;
        case 8:
          url = "/pages/user/verify/verify";
          break;
        case 61:
          url = "/pages/user/mycoupon/mycoupon";
          break;
        case 63:
          url = "/pages/user/like/like";
          break;
        default:
          break;
      }
      if (url) {
        uni.navigateTo({
          url: url,
        });
      } else {
        this.$api.msg("更多请联系商家");
      }
    },
    go_page: function (url) {
      uni.navigateTo({
        url: url,
      });
    },
    wechat_auth() {
      this.isHidden = false;
    },
    close() {
      this.isHidden = true;
      this.isAuthHidden = true;
    },
    submit_auth() {
      this.$api.CC_request.submit_auth_user(this.form).then((res) => {
        this.isAuthHidden = true;
        console.log("000001", res);
      });
    },
    getUserInfo(e) {
      this.isHidden = true;
      xcxtoken.verify(this);
    },
    tabbarSwitch: function (e) {
      let index = e.currentTarget.dataset.index;
      let url = "";
      switch (index) {
        case 0:
          url = "/pages/index/index";
          break;
        case 1:
          url = "/pages/enquirylist/enquiry?state=1";
          break;
        case 2:
          url = "/pages/inquirylist/index";
          break;
        case 3:
          break;
        default:
          break;
      }
      if (url) {
        uni.redirectTo({
          url: url,
        });
      } else {
        this.$api.msg("更多请联系商家");
      }
    },
  },
  onPageScroll(e) {
    let scroll = e.scrollTop <= 0 ? 0 : e.scrollTop;
    let opcity = scroll / this.scrollH;
    if (this.opcity >= 1 && opcity >= 1) {
      return;
    }
    this.opcity = opcity;
    this.iconOpcity = 0.5 * (1 - opcity < 0 ? 0 : 1 - opcity);
  },
  onPullDownRefresh() {
    setTimeout(() => {
      uni.stopPullDownRefresh();
    }, 200);
  },
};
</script>

<style lang="scss">
.tui-header-box {
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9998;
}

.tui-header {
  width: 100%;
  font-size: 18px;
  line-height: 18px;
  font-weight: 500;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* #ifndef MP */
.tui-header-icon {
  position: fixed;
  top: 0;
  right: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 32px;
  transform: translateZ(0);
  z-index: 99999;
}

/* #endif */
/* #ifdef MP */
.tui-set-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* #endif */
.tui-icon-box {
  position: relative;
}

.tui-icon-setup {
  margin-left: 8rpx;
}

.tui-badge {
  position: absolute;
  font-size: 24rpx;
  height: 32rpx;
  min-width: 20rpx;
  padding: 0 6rpx;
  border-radius: 40rpx;
  right: 10rpx;
  top: -5rpx;
  transform: scale(0.8) translateX(60%);
  transform-origin: center center;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}

.tui-badge-red {
  background: #f74d54;
  color: #fff;
}

.tui-badge-white {
  background: #fff;
  color: #f74d54;
}
.tui-badge-dot {
  position: absolute;
  height: 12rpx;
  width: 12rpx;
  border-radius: 50%;
  right: -12rpx;
  top: 0;
  background: #f74d54;
}

.tui-mybg-box {
  width: 100%;
  height: 350rpx;
  position: relative;
  background: #5e017a;
  border-radius: 0px 0px 8px 8px;
}
.color_text {
  color: #5e017a !important;
}
.tui-my-bg {
  width: 100%;
  height: 464rpx;
  display: block;
}

.tui-header-center {
  position: absolute;
  width: 100%;
  height: 128rpx;
  left: 0;
  top: 120rpx;
  padding: 0 30rpx;
  box-sizing: border-box;
  display: flex;
  align-items: center;
}

.tui-avatar {
  flex-shrink: 0;
  width: 128rpx;
  height: 128rpx;
  display: block;
}

.tui-info {
  width: 60%;
  padding-left: 30rpx;
}

.tui-nickname {
  font-size: 30rpx;
  font-weight: 500;
  color: #fff;
  display: flex;
  align-items: center;
}

.tui-img-vip {
  width: 56rpx;
  height: 24rpx;
  margin-left: 18rpx;
}

.tui-explain {
  width: 80%;
  font-size: 24rpx;
  font-weight: 400;
  color: #fff;
  opacity: 0.75;
  padding-top: 8rpx;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.tui-btn-edit {
  flex-shrink: 0;
  padding-right: 22rpx;
}

.tui-header-btm {
  width: 100%;
  padding: 0 30rpx;
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 280rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
}

.tui-btm-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.tui-btm-num {
  font-size: 32rpx;
  font-weight: 600;
  position: relative;
}

.tui-btm-text {
  font-size: 24rpx;
  opacity: 0.85;
  padding-top: 4rpx;
}

.tui-content-box {
  width: 100%;
  padding: 0 30rpx;
  box-sizing: border-box;
  position: relative;
  top: -72rpx;
  z-index: 10;
}

.tui-box {
  width: 100%;
  background: #fff;
  box-shadow: 0 3rpx 20rpx rgba(183, 183, 183, 0.1);
  border-radius: 10rpx;
  overflow: hidden;
}

.tui-order-box {
  height: 208rpx;
}

.tui-cell-header {
  width: 100%;
  height: 74rpx;
  padding: 0 26rpx;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.tui-cell-title {
  font-size: 30rpx;
  line-height: 30rpx;
  font-weight: 600;
  color: #333;
}

.tui-cell-sub {
  font-size: 26rpx;
  font-weight: 400;
  color: #999;
  padding-right: 28rpx;
}
.tui-flex {
  display: flex;
  align-items: center;
}

.tui-order-list {
  width: 100%;
  height: 134rpx;
  padding: 0 30rpx;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.tui-order-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.tui-order-text,
.tui-tool-text {
  font-size: 26rpx;
  font-weight: 400;
  color: #5e017a;
  padding-top: 4rpx;
}

.tui-tool-text {
  font-size: 24rpx;
}

.tui-order-icon {
  width: 56rpx;
  height: 56rpx;
  display: block;
}

.tui-assets-box {
  height: 178rpx;
  margin-top: 20rpx;
}

.tui-assets-list {
  height: 84rpx;
}

.tui-assets-num {
  font-size: 32rpx;
  font-weight: 500;
  color: #333;
  position: relative;
}

.tui-assets-text {
  font-size: 24rpx;
  font-weight: 400;
  color: #666;
  padding-top: 6rpx;
}

.tui-tool-box {
  margin-top: 20rpx;
}

.tui-flex-wrap {
  flex-wrap: wrap;
  height: auto;
  padding-bottom: 30rpx;
}

.tui-tool-item {
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 30rpx;
}

.tui-tool-icon {
  width: 64rpx;
  height: 64rpx;
  display: block;
  color: red;
}

.tui-badge-icon {
  width: 66rpx;
  height: 30rpx;
  position: absolute;
  right: 0;
  transform: translateX(88%);
  top: -15rpx;
}

/*为你推荐*/
.tui-product-list {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  box-sizing: border-box;
}

.tui-product-container {
  flex: 1;
  margin-right: 2%;
}

.tui-product-container:last-child {
  margin-right: 0;
}

.tui-pro-item {
  width: 100%;
  margin-bottom: 4%;
  background: #fff;
  box-sizing: border-box;
  border-radius: 12rpx;
  overflow: hidden;
}

.tui-pro-img {
  width: 100%;
  display: block;
}

.tui-pro-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 20rpx;
}

.tui-pro-tit {
  color: #2e2e2e;
  font-size: 26rpx;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.tui-pro-price {
  padding-top: 18rpx;
}

.tui-sale-price {
  font-size: 34rpx;
  font-weight: 500;
  color: #e41f19;
}

.tui-factory-price {
  font-size: 24rpx;
  color: #a0a0a0;
  text-decoration: line-through;
  padding-left: 12rpx;
}

.tui-pro-pay {
  padding-top: 10rpx;
  font-size: 24rpx;
  color: #656565;
}

.Popup {
  width: 500rpx;
  background-color: #fff;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-left: -250rpx;
  transform: translateY(-50%);
  z-index: 320;
}
.Popup image {
  width: 150rpx;
  height: 150rpx;
  margin: -67rpx auto 0 auto;
  display: block;
  border: 8rpx solid #fff;
  border-radius: 50%;
}
.Popup .title {
  font-size: 28rpx;
  color: #000;
  text-align: center;
  margin-top: 30rpx;
}
.Popup .tip {
  font-size: 22rpx;
  color: #555;
  padding: 0 24rpx;
  margin-top: 25rpx;
}
.Popup .tips {
  font-size: 30rpx;
  color: #555;
  padding: 0 24rpx;
  margin-top: 25rpx;
}
.Popup .bottom .item {
  width: 50%;
  height: 80rpx;
  background-color: #eeeeee;
  text-align: center;
  line-height: 80rpx;
  font-size: 24rpx;
  color: #666;
  margin-top: 54rpx;
}
.Popup .bottom .item.on {
  width: 100%;
}
.flex {
  display: flex;
}
.Popup .bottom .item.grant {
  font-size: 28rpx;
  color: #fff;
  font-weight: bold;
  background-color: #e93323;
  border-radius: 0;
  padding: 0;
}
.mask {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 310;
}

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

.tui-safearea-bottom {
  width: 100%;
  height: env(safe-area-inset-bottom);
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

.tui-tabbar-item {
  flex: 1;
  width: 25%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  font-size: 32upx;
  color: #666;
  /* height: 80rpx; */
}

.tui-ptop-4 {
  padding-top: 4rpx;
}

.tui-item-active {
  color:#b13b8f !important;
}
.tui-badge-tabbar {
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
/*tabbar*/
.bt_auth {
  margin-left: -20rpx;
  width: 300rpx;
  background-color: #ff6682;
  color: #ffffff;
}
button {
  padding: 0;
  margin: 0;
  line-height: normal;
  background-color: #fff;
  height: auto;
}
button::after {
  border: 0;
}
.s3 {
  position: relative;
  top: -30rpx;
}
.icon-size {
  .s3 {
    font-size: 90rpx;
    position: relative;
    background: linear-gradient(0deg, #c33d9d 0%, #862b6e 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    top: -10px;
  }
  .si.s2.s4.s5 {
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 5px;
  }
}
</style>
