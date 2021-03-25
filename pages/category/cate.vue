<template>
  <view class="container">
    <!--tabbar-->
    <!-- <view class="tui-tabbar" :style="{ height: is_lhp ? '144rpx' : '99rpx' }">
      <block v-for="(item, index) in tabbar" :key="index">
        <view
          class="tui-tabbar-item"
          :class="[current == index ? 'tui-item-active' : '']"
          :data-index="index"
          @tap="tabbarSwitch"
        >
          <view :class="[index == 0 ? 'tui-ptop-4' : '']">
            <tui-icon
              :name="current == index ? item.icon + '-fill' : item.icon"
              :color="current == index ? '#E41F19' : '#666'"
              :size="item.size"
            ></tui-icon>
            <view
              class="tui-badge tui-badge-red"
              v-if="index == 2 && cart_item_num > 0"
              >{{ cart_item_num }}</view
            >
          </view>
          <view class="tui-scale">{{ item.text }}</view>
        </view>
      </block>
    </view> -->
    <!--tabbar-->
    <!--header-->
    <view class="tui-header">
      <view class="tui-category" hover-class="opcity" :hover-stay-time="150">
        <!-- <tui-icon name="manage-fill" color="#fff" :size="22"></tui-icon> -->
        <!-- <view class="tui-category-scale">搜索</view> -->
      </view>
      <view class="tui-rolling-search">
        <!-- #ifdef APP-PLUS || MP -->
        <icon type="search" :size="13" color="#999"></icon>
        <!-- #endif -->
        <!-- #ifdef H5 -->
        <view>
          <tui-icon name="search" :size="16" color="#999"></tui-icon>
        </view>
        <!-- #endif -->
        <swiper vertical autoplay circular interval="5000" class="tui-swiper">
          <swiper-item
            v-for="(item, index) in hotSearch"
            :key="index"
            class="tui-swiper-item"
            @tap="search"
          >
            <view class="tui-hot-item">{{ item }}</view>
          </swiper-item>
        </swiper>
      </view>
    </view>
    <view class="content main">
      <scroll-view
        scroll-y
        class="left-aside"
        @scroll="asideScroll"
        :scroll-top="tabScrollTop"
      >
        <view
          v-for="(item, index) in flist"
          :key="item.id"
          class="f-item b-b"
          :class="{ active: index === currentId }"
          @click="tabtap(index)"
        >
          {{ item.cate_name }}
        </view>
      </scroll-view>
      <scroll-view
        scroll-with-animation
        scroll-y
        class="right-aside"
        @scroll="asideScroll"
        :scroll-top="tabScrollTop"
        @scrolltolower="reachBottom"
      >
        <view class="tui-product-list" style="margin-top: 10px">
          <view class="tui-product-container">
            <view class="" hover-class="hover" :hover-start-time="150">
              <view class="tui-search-history">
                <view class="tui-history-content">
                  <tui-tag
                    :type="currentSindex == -1 ? 'danger' : 'gray'"
                    shape="circle"
                    @click="choose_scate(-1)"
                    >全部</tui-tag
                  >
                  <block v-for="(item, index) in slist" :key="index">
                    <view class="chose-scate" @click="choose_scate(index)">
                      {{ item.cate_name }}
                    </view>
                    <!-- <tui-tag :type="index==currentSindex?'danger':'gray'" shape="circle" @click='choose_scate(index)'>{{item.cate_name}}</tui-tag> -->
                  </block>
                </view>
              </view>
            </view>
            <block v-for="(item, index) in productList" :key="index">
              <!--商品列表-->
              <view
                class="tui-pro-item tui-flex-list"
                hover-class="hover"
                :hover-start-time="150"
              >
                <image
                  :src="item.image"
                  class="tui-pro-img tui-proimg-list"
                  @tap="detail(item.id)"
                />
                <view class="tui-pro-content">
                  <view class="tui-pro-tit">{{ item.store_name }}</view>
                  <view>
                    <!-- <view class="tui-pro-price">
                      <text
                        class="tui-sale-price"
                        v-if="item.vip_price != undefined"
                        >￥{{ item.vip_price }}</text
                      >
                      <text class="tui-sale-price" v-else
                        >￥{{ item.price }}</text
                      >
                      <text class="tui-factory-price"
                        >￥{{ item.ot_price }}</text
                      >
                    </view> -->
                  </view>
                  <!-- <tui-numberbox class="numberbox" :max="item.stock" :value="item.cart_num" min="0" @change="numberChange($event,index,item)"></tui-numberbox> -->
                </view>
              </view>
              <!--商品列表-->
            </block>
          </view>
        </view>
        <tui-nomore
          :visible="!pullUpOn"
          bgcolor="#f88176"
          color="#000000"
        ></tui-nomore>
      </scroll-view>
    </view>
  </view>
</template>

<script>
import tuiNumberbox from "@/components/numberbox/numberbox";
import tuiIcon from "@/components/icon/icon";
import tuiBadge from "@/components/badge/badge";
import tuiTag from "@/components/tag/tag";
import tuiLoadmore from "@/components/loadmore/loadmore";
import tuiNomore from "@/components/nomore/nomore";
export default {
  components: {
    tuiNumberbox,
    tuiIcon,
    tuiBadge,
    tuiTag,
    tuiLoadmore,
    tuiNomore,
  },
  data() {
    return {
		 // 判断手机类型
      is_lhp: false,
      current: 1,
    //   tabbar: [
    //     {
    //       icon: "home",
    //       text: "首页",
    //       size: 21,
    //     },
    //     {
    //       icon: "category",
    //       text: "分类",
    //       size: 24,
    //     },
    //     {
    //       icon: "cart",
    //       text: "购物车",
    //       size: 22,
    //     },
    //     {
    //       icon: "people",
    //       text: "我的",
    //       size: 24,
    //     },
    //   ],
      hotSearch: ["输入您要搜索的", "加多宝套餐", "加多宝罐装", "加多宝盒装"],
      img_url: this.$img_url,
      sizeCalcState: false,
      tabScrollTop: 0,
      currentId: 0, //当前选择父分类索引
      currentSindex: -1, //当前选择子分类索引
      currentName: "",
      flist: [], //父分类列表
      slist: [], //子分类列表
      productList: [],
      pageIndex: 1,
      page_limit: 10,
      cart_num: [], //购物车选中商品数量key:product_id,value:cart_num
      cart_item_num: 0, //购物车中商品种类
      pullUpOn: true,
      banner: [],
      touchData: {},
    };
  },
  onLoad() {
	//    let _this = this;
    // this.is_lhp = this.$is_bang;
    // console.log("是否为刘海屏", this.is_lhp);
  },
  onShow() {
    uni.setNavigationBarTitle({
      title: this.$shop_name,
    });
    this.cart_num = [];
    this.pullUpOn = true;
    this.pageIndex = 1;
    this.productList = [];
    this.$api.CC_request.get_fcategory_list().then((res) => {
      console.log("1111", res);
      this.flist = [];
      let list = res;
      list.forEach((item) => {
        this.flist.push(item);
      });
      this.currentId = 0;
      this.currentName = list[0].cate_name;
      this.tabtap(0);
      console.log(this.slist[this.currentSindex]);
      this.loadProductDataByCateId(0);
    });
  },
  onShareAppMessage(res) {
    return {
      title: this.$shop_name,
      path: "/pages/index/index",
    };
  },
  methods: {
    loadProductData() {
      if (this.pullUpOn == false) {
        return;
      }
      this.$api.CC_request.get_products({
        sid: this.flist[this.currentId].id,
        cid: this.flist[this.currentId].pid,
        page: this.pageIndex,
        limit: this.page_limit,
      }).then((res) => {
        if (res.length < this.page_limit) {
          this.pullUpOn = false;
        }
        let product_list = res;
        this.$api.CC_request.get_cart_list().then((res) => {
          if (res == 401) {
            this.productList = this.productList.concat(product_list);
          } else {
            var cart_list = res.valid;
            this.cart_item_num = cart_list.length;
            product_list.forEach((item) => {
              item.cart_num = 0;
              this.cart_num[item.id] = { cart_id: 0, num: 0 };
              cart_list.forEach((cart) => {
                if (item.id == cart.product_id) {
                  item.cart_num = cart.cart_num;
                  this.cart_num[item.id] = {
                    cart_id: cart.id,
                    num: cart.cart_num,
                  };
                }
              });
            });
            this.productList = this.productList.concat(product_list);
          }
        });
      });
    },
    loadProductDataByCateId() {
      var cate_id = 0;
      if (this.currentSindex != -1) {
        cate_id = this.slist[this.currentSindex].id;
      }

      if (this.pullUpOn == false) {
        return;
      }
      this.$api.CC_request.get_products({
        sid: cate_id,
        cid: this.flist[this.currentId].id,
        page: this.pageIndex,
        limit: this.page_limit,
      }).then((res) => {
        if (res.length < this.page_limit) {
          this.pullUpOn = false;
        }
        let product_list = res;
        this.$api.CC_request.get_cart_list().then((res) => {
          if (res == 401) {
            this.productList = this.productList.concat(product_list);
          } else {
            var cart_list = res.valid;
            this.cart_item_num = cart_list.length;
            product_list.forEach((item) => {
              item.cart_num = 0;
              this.cart_num[item.id] = { cart_id: 0, num: 0 };
              cart_list.forEach((cart) => {
                if (item.id == cart.product_id) {
                  item.cart_num = cart.cart_num;
                  this.cart_num[item.id] = {
                    cart_id: cart.id,
                    num: cart.cart_num,
                  };
                }
              });
            });
            this.productList = this.productList.concat(product_list);
          }
        });
      });
    },
    //一级分类点击
    tabtap(index) {
      this.currentName = this.flist[index].cate_name;
      this.currentId = index;
      this.currentSindex = -1;
      this.pageIndex = 1;
      this.pullUpOn = true;
      this.slist = this.flist[index].children;
      this.productList = [];
      this.loadProductDataByCateId();
    },
    //点击二级分类
    choose_scate(index) {
      this.currentSindex = index;
      this.productList = [];
      this.pageIndex = 1;
      this.pullUpOn = true;
      this.loadProductDataByCateId();
    },
    reachBottom() {
      if (this.pullUpOn == false) {
        return;
      }
      this.pageIndex = this.pageIndex + 1;
      this.loadProductDataByCateId();
    },
    //右侧栏滚动
    asideScroll(e) {
      let that = this;
      let scrollTop = Math.round(e.detail.scrollTop);
    },
    detail(id) {
      uni.navigateTo({
        url: "/pages/extend-view/productDetail/productDetail?id=" + id,
      });
    },
    gotoPage(url) {
      uni.navigateTo({
        url: url,
      });
    },
    search: function () {
      uni.navigateTo({
        url: "/pages/extend-view/news-search/news-search",
      });
    },
    search_key: function (key) {
      uni.navigateTo({
        url: "/pages/extend-view/productList/productList?searchKey=" + key,
      });
    },
    //数量
    numberChange(e, index, product) {
      var is_login = uni.getStorageSync("is_login");
      if (is_login == 0) {
        uni.showModal({
          title: "温馨提示",
          content: "选择登录，更多服务",
          success: function (res) {
            if (res.confirm) {
              uni.navigateTo({
                url: "/pages/user/user",
              });
            } else if (res.cancel) {
              return;
            }
          },
        });
      }

      var current_cart_num = e.value;
      this.productList[index].cart_num = e.value;
      if (current_cart_num == 0) {
        this.$api.CC_request.cart_del({
          ids: this.cart_num[product.id].cart_id,
        }).then((res) => {
          this.cart_num[product.id] = { cart_id: 0, num: 0 };
          this.update_cart_item_num();
        });

        return;
      }
      if (this.cart_num[product.id].num > 0) {
        this.$api.CC_request.cart_update({
          id: this.cart_num[product.id].cart_id,
          number: e.value,
        }).then((res) => {
          this.update_cart_item_num();
        });
      } else {
        this.$api.CC_request.cart_add({
          productId: product.id,
          cartNum: e.value,
          new: 0,
        }).then((res) => {
          this.cart_num[product.id] = {
            cart_id: res.cartId,
            num: current_cart_num,
          };
          this.update_cart_item_num();
        });
      }
    },
    update_cart_item_num() {
      let num = 0;
      this.cart_num.forEach((item) => {
        if (item.num > 0) {
          num += 1;
        }
      });
      this.cart_item_num = num;
    },
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
          url = "/pages/cart/cart";
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

<style lang='scss'>
page {
  background: #f7f7f7;
}

.container {
  padding-bottom: 100rpx;
  color: #333;
}
.content {
  padding: 80rpx 0rpx 0rpx 0rpx;
  height: 100%;
  background-color: #f4f4f4;
}
.main {
  position: absolute;
  display: flex;
  width: 100%;
}
.nav-title {
  text-align: center;
  padding: 20px 0;
}
.left-aside {
  flex-shrink: 0;
  width: 24%;
  height: 100%;
  background-color: #fff;
  padding-bottom: 100rpx;
}
.f-item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100upx;
  font-size: 28upx;
  color: $font-color-base;
  position: relative;
  &.active {
    color: #550266;
    background: #f8f8f8;
	font-weight: bold;
    &:before {
      content: "";
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      height: 36upx;
      width: 8upx;
      background-color: #550266;
      border-radius: 0 4px 4px 0;
      opacity: 0.8;
    }
  }
}

.right-aside {
  flex: 1;
  overflow: hidden;
  padding-left: 1upx;
  width: 76%;
//   padding-bottom: 100rpx;
}
.s-item {
  display: flex;
  align-items: center;
  height: 70upx;
  padding-top: 8upx;
  font-size: 28upx;
  color: $font-color-dark;
}
.s-list {
  width: 100%;
  background: #fff;
}
.t-list {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  background: #fff;
  padding-top: 12upx;
  &:after {
    content: "";
    flex: 99;
    height: 0;
  }
}
.t-item {
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 176upx;
  font-size: 26upx;
  color: #666;
  padding-bottom: 20upx;

  image {
    width: 140upx;
    height: 140upx;
  }
}

/* 商品列表*/

.tui-product-list {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  box-sizing: border-box;
}

.tui-product-container {
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  margin-right: 10rpx;
}

.tui-product-container:last-child {
  margin-right: 0;
}
.tui-tag-fillet {
  border-radius: 10px !important;
  font-size: 13px;
}
.tui-tag {
  margin-top: 3px;
  padding: 8px 15px !important;
}
.tui-pro-item {
  width: 30%;
  height: 140px;
  display: flex;
  margin: 5px;
  padding: 5px;
  background: #fff;
  box-sizing: border-box;
  border-radius: 12rpx;
  overflow: hidden;
  // border:solid red 1px;
  transition: all 0.15s ease-in-out;
}
.tui-history-content {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  background: #f2f2f2;
  margin-bottom: 5px;
  // justify-content: space-around;
  .chose-scate {
    display: flex;
    align-items: center;
    // margin:0 10px;
    padding: 2px 8px;
    font-size: 14px;
    background: #fff;
    border-radius: 8px;
    border: solid #f2f2f2 2px;
  }
}
.tui-flex-list {
  display: flex;
  flex-direction: column;
  // width: 99%;
  margin: 4px 4px 0px 4px;
  // padding: 2px 0px 0 2px;
}

.tui-pro-img {
  width: 100%;
  height: 150px;
  display: block;
}

.tui-proimg-list {
  // width: 160rpx;
  height: 160rpx !important;
  flex-shrink: 0;
  border-radius: 12rpx;
}

// .tui-pro-content {
// 	display: flex;
// 	flex-direction: column;
// 	justify-content: space-between;
// 	box-sizing: border-box;
// 	padding: 10rpx;
// }

.tui-pro-tit {
  color: #2e2e2e;
  font-size: 24rpx;
  line-height: 18px;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.tui-pro-price {
  padding-top: 0rpx;
}

.tui-sale-price {
  font-size: 28rpx;
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
  font-size: 20rpx;
  color: #656565;
}
/* 商品列表*/
.tui-header {
  width: 100%;
  height: 100rpx;
  padding: 0 30rpx 0 20rpx;
  box-sizing: border-box;
  background: #550266;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  /* #ifdef H5 */
  top: 44px;
  /* #endif */
  z-index: 999;
}
.tui-category {
  font-size: 24rpx;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0;
  margin-right: 22rpx;
  flex-shrink: 0;
}

.tui-category-scale {
  transform: scale(0.7);
  line-height: 24rpx;
}

.tui-icon-category {
  line-height: 20px !important;
  margin-bottom: 0 !important;
}

.tui-swiper {
  font-size: 26rpx;
  height: 60rpx;
  flex: 1;
  padding-left: 12rpx;
}

.tui-swiper-item {
  display: flex;
  align-items: center;
}

.tui-hot-item {
  line-height: 26rpx;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.tui-header-banner {
  padding-top: 100rpx;
  box-sizing: border-box;
  background: #e41f19;
}

.tui-hot-search {
  color: #fff;
  font-size: 24rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20rpx;
  box-sizing: border-box;
  position: relative;
  z-index: 2;
}

.tui-hot-tag {
  background: rgba(255, 255, 255, 0.15);
  padding: 10rpx 24rpx;
  border-radius: 30rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 24rpx;
  /* margin-left: 20rpx; */
}

.tui-banner-bg {
  display: flex;
  height: 180rpx;
  background: #e41f19;
  position: relative;
}
.tui-primary-bg {
  width: 50%;
  display: inline-block;
  height: 224rpx;
  border: 1px solid transparent;
  position: relative;
  z-index: 1;
  background: #e41f19;
}

.tui-route-left {
  transform: skewY(8deg);
}

.tui-route-right {
  transform: skewY(-8deg);
}

.tui-banner-box {
  width: 100%;
  padding: 0 20rpx;
  box-sizing: border-box;
  position: absolute;
  /* overflow: hidden; */
  z-index: 99;
  bottom: -80rpx;
  left: 0;
}

.tui-banner-swiper {
  width: 100%;
  height: 240rpx;
  border-radius: 12rpx;
  overflow: hidden;
  transform: translateY(0);
}

.tui-slide-image {
  width: 100%;
  height: 240rpx;
  display: block;
}

/* #ifdef APP-PLUS || MP */
.tui-banner-swiper .wx-swiper-dot {
  width: 8rpx;
  height: 8rpx;
  display: inline-flex;
  background: none;
  justify-content: space-between;
}

.tui-banner-swiper .wx-swiper-dot::before {
  content: "";
  flex-grow: 1;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 16rpx;
  overflow: hidden;
}

.tui-banner-swiper .wx-swiper-dot-active::before {
  background: #fff;
}

.tui-banner-swiper .wx-swiper-dot.wx-swiper-dot-active {
  width: 16rpx;
}

/* #endif */

/* #ifdef H5 */
.tui-banner-swiper .uni-swiper-dot {
  width: 8rpx;
  height: 8rpx;
  display: inline-flex;
  background: none;
  justify-content: space-between;
}

.tui-banner-swiper .uni-swiper-dot::before {
  content: "";
  flex-grow: 1;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 16rpx;
  overflow: hidden;
}

.tui-banner-swiper .uni-swiper-dot-active::before {
  background: #fff;
}

.tui-banner-swiper .uni-swiper-dot.uni-swiper-dot-active {
  width: 16rpx;
}
/* #endif */
.tui-rolling-search {
  width: 85%;
  height: 60rpx;
  border-radius: 35rpx;
  padding: 0 40rpx 0 30rpx;
  box-sizing: border-box;
  background: #fff;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  color: #999;
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
  height: 80rpx;
}

.tui-ptop-4 {
  padding-top: 4rpx;
}

.tui-scale {
  transform: scale(0.8);
  transform-origin: center 100%;
  line-height: 30rpx;
}

.tui-item-active {
  color: #e41f19 !important;
}
/*tabbar*/
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

.tui-badge-red {
  background: #f74d54;
  color: #fff;
}
.tui-tag-class {
  display: inline-block;
  margin-bottom: 12upx;
  margin-right: 10upx;
  font-size: 26upx !important;
}
</style>
