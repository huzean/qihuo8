<template>
	<view class="cart">
		<!--tabbar-->
		<!-- <view class="tui-tabbar" :style="{ height: is_lhp ? '136rpx' : '99rpx' }">
			<block v-for="(item,index) in tabbar" :key="index">
				<view class="tui-tabbar-item" :class="[current==index?'tui-item-active':'']" :data-index="index" @tap="tabbarSwitch">
					<view :class="[index==0?'tui-ptop-4':'']">
						<tui-icon :name="current==index?item.icon+'-fill':item.icon" :color="current==index?'#E41F19':'#666'" :size="item.size"></tui-icon>
					    <view :style="{ top: is_lhp ? '8px' : '-3px' }" class="tui-badge tui-badge-red" v-if="(index == 3) && (cart_item_num > 0)">{{cart_item_num}}</view>
					</view>
					<view class="tui-scale">{{item.text}}</view>
				</view>
			</block>
		</view> -->
		<!--tabbar-->
		<!-- 列表 -->
		<view class="cart-list">
			<block v-for="(item, k) in cartList" :key="item.id">
				<view class="cart-item">
					<view class="image-wrappers">
						<img :src="((item.product_attr_unique=='')?item.productInfo.image:item.productInfo.attrInfo.image)" @click="jump_detail(item.product_id)" ></img>
						<view class="yticon icon-xuanzhong2 checkbox" :class="{checked: item.radio}" @click="_select_item('item', k)"></view>
					</view>
					<view class="item-right">
						<text class="clamp title" @click="jump_detail(item.product_id)">{{item.productInfo.store_name}}</text>
						<text class="attr">{{item.productInfo.attrInfo.suk}}</text>
						<text class="price">¥{{item.truePrice}}</text>
						<tui-numberbox :max="item.trueStock" :min="1" :value="item.cart_num" @change="numberChange($event,k, item.id)"></tui-numberbox> 
					</view>
					<text class="del-btn yticon icon-fork" @click="deleteCartItem(k)"></text>
				</view>
			</block>
		</view> 
		<!-- 底部菜单栏 -->
		<view class="action-section" :style="{ bottom: is_lhp ? '130rpx' : '99rpx' }">
			<view class="checkbox">
				<view class="all-btn" v-if="cartList" @click="choose_all">
					全选
				</view>
                <view class="clear-btn" v-if="cartList" @click="clearCart">
					清空
				</view>
			</view>
			<view class="total-box">
				<text class="price">¥{{total}}</text>
			</view>
			<button type="primary" class="no-border confirm-btn" @click="createOrder">去结算</button>
		</view>
	</view>
</template>

<script>
import { mapState } from "vuex";
import tuiNumberbox from "@/components/numberbox/numberbox";
import tuiIcon from "@/components/icon/icon";
import tuiBadge from "@/components/badge/badge";
export default {
  components: {
    tuiNumberbox,
    tuiIcon,
    tuiBadge,
  },
  data() {
    return {
      // 判断手机类型
      is_lhp: false,
      getimg: this.$getimg,
      tabbar: [
        {
          icon: "home",
          text: "首页",
          size: 21,
        },
        {
          icon: "category",
          text: "分类",
          size: 24,
        },
        {
          icon: "manage",
          text: "我常买的",
          size: 22,
        },
        {
          icon: "cart",
          text: "购物车",
          size: 22,
        },
        {
          icon: "people",
          text: "我的",
          size: 24,
        },
      ],
      current: 3,
      allChecked: false, //全选状态  true|false
      empty: false, //空白页现实  true|false
      img_url: this.$img_url,
      cartList: [],
      cart_item_num: 0, //购物车中商品种类
    };
  },
  onLoad() {
    // 判断手机机型
    let _this = this;
    this.is_lhp = this.$is_bang;
    console.log("是否为刘海屏", this.is_lhp);
  },
  onShow() {
    this._load();
  },
  watch: {},
  computed: {
    //计算总价
    total() {
      let total = 0;
      let list = Object.values(this.cartList);
      if (list.length === 0) {
        this.empty = true;
        return total;
      }
      let checked = true;
      list.forEach((item) => {
        if (item.radio === true) {
          total += item.truePrice * item.cart_num;
        }
      });
      total = Number(total.toFixed(2));
      return total;
    },
  },
  methods: {
    _load() {
      this.$api.CC_request.get_cart_list().then((res) => {
        if (res != 401) {
          let list = res.valid;
          list.forEach((item) => {
            item.radio = false;
          });
          this.cartList = list;
          this.cart_item_num = this.cartList.length;
        }
      });
    },
    jump_detail(id) {
      uni.navigateTo({
        url: "../extend-view/productDetail/productDetail?id=" + id,
      });
    },
    //数量
    numberChange(e, index, id) {
      this.$set(this.cartList[index], "cart_num", e.value);
      this.$api.CC_request.cart_update({
        id: id,
        number: e.value,
      }).then((res) => {});
    },
    // 监听image加载完成
    onImageLoad(key, index) {
      this.$set(this[key][index], "loaded", "loaded");
    },
    //监听image加载失败
    onImageError(key, index) {
      this[key][index].image = "/static/errorImage.jpg";
    },
    //选中购物车中的商品
    _select_item(type, index) {
      var cradio = !this.cartList[index].radio;
      this.$set(this.cartList[index], "radio", cradio);
    },

    //选中所有商品
    choose_all(type, index) {
      this.cartList.forEach((item) => {
        this.$set(item, "radio", true);
      });
    },

    //删除
    deleteCartItem(index) {
      let cartList = this.cartList;
      this.$api.CC_request.cart_del({ ids: [cartList[index].id] }).then(
        (res) => {
          cartList.splice(index, 1);
          console.log(cartList);
          this.cartList = cartList;
        }
      );
    },
    //清空
    clearCart() {
      uni.showModal({
        content: "清空购物车？",
        success: (e) => {
          if (e.confirm) {
            this.cartList.forEach((item) => {
              this.$set(item, "radio", false);
            });
          }
        },
      });
    },
    //创建订单
    createOrder() {
      let list = this.cartList;
      var cart_ids = [];
      list.forEach((item) => {
        if (item.radio == true) {
          cart_ids.push(item.id);
        }
      });
      uni.setStorageSync("order_cart_id", cart_ids.join(","));
      if (cart_ids.length > 0) {
        uni.navigateTo({
          url: "/pages/order/createOrder?state=car",
        });
      } else {
        this.$api.msg("请选择产品");
      }
    },
    tabbarSwitch: function (e) {
      let index = e.currentTarget.dataset.index;
      let url = "";
      switch (index) {
        case 0:
          url = "/pages/index/index";
          break;
        case 1:
          url = "/pages/category/cate";
          break;
        case 2:
          url = "/pages/oftengoods/index";
          break;
        case 3:
          break;
        case 4:
          url = "/pages/user/user";
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
  onPullDownRefresh() {
    this._load();
    setTimeout(function () {
      uni.stopPullDownRefresh();
    }, 2000);
  },
};
</script>

<style lang='scss'>
.cart {
  padding-bottom: 134upx;

  /* 空白页 */
  .empty {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    padding-bottom: 100upx;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background: #fff;

    image {
      width: 240upx;
      height: 160upx;
      margin-bottom: 30upx;
    }

    .empty-tips {
      display: flex;
      font-size: $font-sm + 2upx;
      color: $font-color-disabled;

      .navigator {
        color: $uni-color-primary;
        margin-left: 16upx;
      }
    }
  }

  /* 购物车列表项 */
  .cart-item {
    display: flex;
    position: relative;
    padding: 30upx 40upx;
    border:solid red 1px;
    margin-top:1px;

    .image-wrappers {
      width: 230upx !important;
      height: 230upx !important;
      flex-shrink: 0;
      position: relative;

      img {
        width: 230upx !important;
        height: 230upx !important;
        border-radius: 8upx;
      }
    }

    .checkbox {
      position: absolute;
      left: -16upx;
      top: -16upx;
      z-index: 8;
      font-size: 44upx;
      line-height: 1;
      padding: 14upx;
      color: $font-color-disabled;
      background: #fff;
      border-radius: 50px;
    }

    .item-right {
      display: flex;
      flex-direction: column;
      flex: 1;
      overflow: hidden;
      position: relative;
      padding-left: 30upx;
      .title,
      .price {
        font-size: $font-base + 2upx;
        color: $font-color-dark;
        height: 40upx;
        line-height: 40upx;
      }

      .attr {
        font-size: $font-sm + 2upx;
        color: $font-color-light;
        height: 50upx;
        line-height: 50upx;
      }

      .price {
        height: 50upx;
        line-height: 50upx;
      }
    }

    .del-btn {
      padding: 4upx 10upx;
      font-size: 34upx;
      height: 50upx;
      color: $font-color-light;
    }
  }

  /* 底部栏 */
  .action-section {
    /* #ifdef H5 */
    margin-bottom: 100upx;
    /* #endif */
    position: fixed;
    left: 30upx;
    bottom: 110upx;
    z-index: 95;
    display: flex;
    align-items: center;
    width: 690upx;
    height: 100upx;
    padding: 0 30upx;
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0 0 20upx 0 rgba(0, 0, 0, 0.5);
    border-radius: 16upx;

    .checkbox {
      height: 52upx;
      position: relative;

      image {
        width: 52upx;
        height: 100%;
        position: relative;
        z-index: 5;
      }
    }

    .clear-btn {
      position: absolute;
      left: 146upx;
      top: 0;
      z-index: 4;
      width: 110upx;
      height: 52upx;
      line-height: 52upx;
      padding-left: 20upx;
      font-size: $font-base;
      color: #fff;
      background: $font-color-disabled;
      border-radius: 0 50px 50px 0;
    }

    .all-btn {
      position: absolute;
      left: 26upx;
      top: 0;
      z-index: 4;
      width: 110upx;
      height: 52upx;
      line-height: 52upx;
      padding-left: 20upx;
      font-size: $font-base;
      color: #fff;
      background: #ff3e0e;
      border-radius: 0 50px 50px 0;
    }

    .total-box {
      flex: 1;
      display: flex;
      flex-direction: column;
      text-align: right;
      padding-right: 40upx;

      .price {
        font-size: $font-lg;
        color: $font-color-dark;
      }

      .coupon {
        font-size: $font-sm;
        color: $font-color-light;

        text {
          color: $font-color-dark;
        }
      }
    }

    .confirm-btn {
      padding: 0 38upx;
      margin: 0;
      border-radius: 100px;
      height: 76upx;
      line-height: 76upx;
      font-size: $font-base + 2upx;
      background: $uni-color-primary;
      box-shadow: 1px 2px 5px rgba(217, 60, 93, 0.72);
    }
  }

  /* 复选框选中状态 */
  .action-section .checkbox.checked,
  .cart-item .checkbox.checked {
    color: $uni-color-primary;
  }

  /*tabbar*/
  .tui-tabbar {
    z-index: 99999;
    width: 100%;
    background: #fff;
    border-top: 1px solid #e5e5e5;
    position: fixed;
    bottom: 0px;
    left: 0px;
    right: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .tui-tabbar-item {
    flex: 1;
    width: 25%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    font-size: 30upx;
    color: #666;
    margin: 0 0 6px 0;
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
    // top: 1rpx;
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
}
</style>
