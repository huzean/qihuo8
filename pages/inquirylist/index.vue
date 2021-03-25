<template>
  <view class="content_box">
    <view class="title_search">
      <view class="input" @tap="search">
        <text class="iconfont icon-jiahao">
          <text class="name">请输入产品名</text>
        </text>
      </view>
    </view>
    <view class="cart">
    <view class="cart-list">
			<block v-for="(item, k) in cartList" :key="item.id">
				<view class="cart-item">
					<view class="image-wrappers">
						<view class="yticon icon-xuanzhong2 checkbox-left" :class="{checkeds: item.radio}" @click="_select_item('item', k)"></view>
            <view class="image">
						<img  :src="((item.product_attr_unique=='')?item.productInfo.image:item.productInfo.attrInfo.image)" @click="jump_detail(item.product_id)" ></img>
            </view>
					</view>
					<view class="item-right">
						<text class="clamp title" @click="jump_detail(item.product_id)">{{item.productInfo.store_name}}</text>
						<!-- <text class="attr">{{item.productInfo.attrInfo.suk}}</text> -->
						<text class="price">¥{{item.truePrice}}</text>
            <view class="quantity">
              <view>
                <text>数量:</text>
                  <tui-numberbox :max="item.trueStock" :min="1" :value="item.cart_num" @change="numberChange($event,k, item.id)"></tui-numberbox> 
              </view>
                <!-- 积分 -->
     <view class="popup_overlay" @click="hideDiv()">
        <text class="iconfont icon-jifen">
            <text >{{ item.costPrice}}</text>
            <!-- <text>{{ integralnumber }}</text> -->
        <!-- <text>20</text> -->
        </text>
        <text class="iconfont icon-winfo-icon-xiajiantou" style="font-size:12px;"></text>
        </view>
            </view>
            	<text class="del-btn yticon icon-fork" @click="deleteCartItem(k)"></text>
					</view>

          <!-- 积分弹窗 -->
				</view>
         <view v-if="isfolse"  class="popup_content">
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
    <!-- 时间 -->
    <view class="time">
     <picker 
     class="start_time" 
      mode="date"
        :value="start_date"
        :start="startDate"
        :end="nowDate"
        @change="bindDateChange">
     <view class="date">
         <view>交货时间:</view>
         <view>{{start_date}}</view>
         </view>
    </picker>
    </view>
    <view class="time">
     <picker 
     class="en_time"
       mode="date"
      :value="start_date"
      :start="endDate"
      @change="bindDateChange2">
     <view class="date">
         <view>截止时间:</view>
         <view>{{ end_date}}</view>
         </view>
    </picker>
    </view>
    <!-- 位置 -->
    <view class="citelist">
	<view class="citelocation">
			<text class="tit">选择地址:</text>
			<view class="result" @click="toggleTab">{{resultInfo.result}}</view>
			<w-picker mode="region" :defaultVal="['北京市','市辖区','东城区']" @confirm="onConfirm" ref="region"></w-picker>
		</view>
    <view class="detailedaddress">
      <text>详细地址:</text>
      <view>
			<input class="input" type="text" v-model="form.detail" placeholder="街道、小区、门牌" placeholder-class="placeholder" />
      </view>
    </view>
    <!-- 备注 -->
    <view class="remark">
        <text>备注:</text>
        <view>
			<input class="input" type="text" v-model="form.door_name" placeholder="" placeholder-class="placeholder" />
        </view>
      </view>
       <view class="subit"  @click="getData">提交</view>
    </view>
     
    <!--  -->
  </view>
</template>
<script>
import wPicker from "@/components/w-picker/w-picker.vue";
import tuiNumberbox from "@/components/numberbox/numberbox";
import tuiIcon from "@/components/icon/icon";
import tuiBadge from "@/components/badge/badge";
export default {
  components: {
    tuiNumberbox,
    tuiIcon,
    tuiBadge,
    wPicker,
  },
  data() {
    const currentDate = this.getDate({
      format: true,
    });
    return {
      isfolse: false, // 默认隐藏
      integralinput: "", // 输入数量
      costPrice: "", //选择积分数量
      //时间
      date: currentDate,
      start_date: "",
      end_date: "",
      //cart
      getimg: this.$getimg,
      allChecked: false, //全选状态  true|false
      empty: false, //空白页现实  true|false
      img_url: this.$img_url,
      cartList: [],
      cart_item_num: 0, //购物车中商品种类
      resultInfo: {
        result: "省、市、区",
      },
    };
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
          // total += item.truePrice *item.cart_num;
          total += item.cart_num;
        }
      });
      total = Number(total.toFixed(2));
      return total;
    },
  },
  methods: {
    toggleTab() {
      this.$refs["region"].show();
    },
    onConfirm(val) {
      console.log(val);
      this.resultInfo = val;
      this.form.province = val.checkArr[0];
      this.form.city = val.checkArr[1];
      this.form.district = val.checkArr[2];
      console.log(this.form);
    },
    search: function () {
      uni.navigateTo({
        url: "../extend-view/news-search/news-search", //分类
      });
      console.log("点击了");
    },
    hideDiv() {
      // 隐藏输入弹出框
      this.isfolse = true;
      console.log("点击了");
    },
    submitFeedback: function () {
      // 提交
      if (this.integralinput == "") {
        uni.showToast({
          title: "填写积分",
          icon: "none",
          duration: 1000,
        });
      } else {
        this.costPrice = this.integralinput;
        this.isfolse = false;
      }
    },
    unhide() {
      this.isfolse = false;
    },
    // 选择日期
    bindDateChange: function (e) {
      //下面这行解决支付宝小程序时间分割格式由yy/mm/dd变为yy-mm-dd
      //这是我的后端要求格式,如果你的后端要求传参为yy/mm/dd就去掉.replace(/\//g, "-"
      this.start_date = e.target.value.replace(/\//g, "-");
    },
    bindDateChange2: function (e) {
      this.end_date = e.target.value.replace(/\//g, "-");
    },
    // 搜索按钮
    getData() {
      if (this.start_date == "") {
        uni.showToast({
          title: "请输入交货时间",
        });
      }
      if (this.end_date == "") {
        uni.showToast({
          title: "请输入交货时间",
        });
      }
      if (this.start_date > this.end_date) {
        uni.showToast({
          title: "结束时间不能小于开始时间",
        });
      } else {
        console.log("开始", this.start_date, "结束", this.end_date);
        //这里写请求接口
      }
    },
    // 获取当前时间
    getDate(type) {
      const date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();

      if (type === "start") {
        year = year - 60;
      } else if (type === "end") {
        //开始时间this.start_date选中后,slice(0, 4)限制结束时间截取年份
        if (this.start_date) {
          let starts = this.start_date.replace(/-/g, "");
          year = Number(starts.slice(0, 4));
          month = Number(starts.slice(4, 6)); //截取月
          day = Number(starts.slice(6, 8)); //截取日
        }
        year = year;
        month = month;
        day = day;
      } else if (type === "now") {
        year = year;
      }
      month = month > 9 ? month : "0" + month;
      day = day > 9 ? day : "0" + day;
      return `${year}-${month}-${day}`;
    },

    //  cart
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
  },
  onPullDownRefresh() {
    this._load();
    setTimeout(function () {
      uni.stopPullDownRefresh();
    }, 2000);
  },
};
</script>

<style lang="scss">
page {
  // background: #f4f4f4;
  background: #f0f2f5;
  font-family: "PingFangSC-Medium, sans-serif";
}
.tui-numbox-icon {
  color: #fff;
  font-family: none;
}
.title_search {
  width: 94.6%;
  height: 50px;
  margin: 10px auto;
  background: #fff;
  // border:solid red 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  .input {
    width: 650rpx;
    height: 60rpx;
    border: 1.5px solid #c33d9d;
    border-radius: 3px;
    text {
      color: #862b6e;
      font-size: 18px;
      line-height: 50rpx;
      margin-left: 16px;
      display: flex;
      align-items: center;
      .name {
        font-size: 12px;
        color: #999999;
      }
    }
  }
}
// 时间
.time {
  width: 94.6%;
  height: 35px;
  margin: 10px auto;
  background: #fff;
  display: flex;
  align-items: center;
  border-radius: 4px;
  font-size: 12px;
  .date {
    width: 100%;
    display: flex;
    align-items: center;
    // border: solid red 1px;
    justify-content: space-around;
    view:nth-child(1) {
      width: 100px;
      margin-left: 10px;
      font-size: 14px;
      justify-content: center;
      // border: solid blue 1px;
    }
    view:nth-child(2) {
      width: 191px;
      height: 35px;
      font-size: 14px;
      color: #999999;
      // border-bottom:solid red 1px;
      display: flex;
      align-items: center;
    }
  }
}
// 城市位置
.citelist {
  width: 94.6%;
  height: 130px;
  // border: solid red 1px;
  display: flex;
  background: #fff;
  margin: 0px auto;
  flex-direction: column;
  font-size: 14px;
  border-radius: 4px;

  .citelocation {
    width: 94.6%;
    height: 55px;
    margin: 0px auto;
    margin-top: 5px;
    display: flex;
    border-bottom: solid #666666 1px;
    .tit {
      display: flex;
      flex: 3;
    }
    .result {
      display: flex;
      flex: 7;
      padding: 0px 0px 0 30px;
      color: #999999;
    }
  }
  .detailedaddress {
    display: flex;
    padding-top: 5px;
    width: 94.6%;
    height: 55px;
    margin: 0 auto;
    border-bottom: solid #666666 1px;
    text {
      display: flex;
      flex: 3;
    }
    view {
      display: flex;
      flex: 7;
      padding: 0px 0px 0 30px;
    }
  }
  .remark {
    width: 100%;
    padding: 10px 0px;
    margin-top: 20px;
    background: #fff;
    display: flex;
    border-radius: 4px;
    text {
      margin: 0px 10px;
    }
  }
  .subit {
    width: 65%;
    padding: 10px 0px;
    margin: 20px auto;
    background: #862b6e;
    text-align: center;
    color: #fff;
    border-radius: 8px;
  }
}
// cart
.cart {
  // padding-bottom: 134upx;
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
    width: 94%;
    height: 100px;
    display: flex;
    // border: solid red 1px;
    margin: 10px auto;
    background: #fff;
    border-radius: 10px;
    .image-wrappers {
      display: flex;
      flex: 2;
      text-align: center;
      // flex-shrink: 0;
      // border: solid red 1px;
      .image {
        display: flex;
        align-items: center;
        img {
          display: flex;
          align-items: center;
          width: 60px !important;
          height: 60px !important;
          border-radius: 8upx;
          margin: 0 auto;
        }
      }
    }

    .checkbox-left {
      font-size: 20px;
      z-index: 8;
      color: $font-color-disabled;
      background: #fff;
      border-radius: 50px;
      // border:solid red 1px;
    }

    .item-right {
      display: flex;
      flex-direction: column;
      flex: 5;
      overflow: hidden;
      position: relative;
      padding-left: 30upx;
      // border: solid yellow 1px;
      .title,
      .price {
        font-size: $font-base + 2upx;
        color: $font-color-dark;
        height: 28px;
        // line-height: 40upx;
      }

      .attr {
        font-size: $font-sm + 2upx;
        color: $font-color-light;
        // height: 50upx;
        line-height: 50upx;
      }
      .price {
        height: 50upx;
        line-height: 50upx;
      }
      .quantity {
        display: flex;
        justify-content: space-between;
        // border:solid red 1px;
        view:nth-child(1) {
          text {
            font-size: 14px;
          }
          display: flex;
          align-items: center;
        }
        .icon-jifen {
          text {
            margin-left: 3px;
            font-size: 13px;
          }
        }
        .popup_overlay {
          width: 60px;
          height: 22px;
          display: flex;
          justify-content: space-around;
          line-height: 20px;
          background: linear-gradient(140deg, #c33d9d, #862b6e);
          border-radius: 10px 0 0 10px;
          .iconfont {
            color: #fff;
          }
        }
      }
    }
    .del-btn {
      position: absolute;
      top: 5px;
      right: 10px;
      // padding: 4upx 10upx;
      font-size: 34upx;
      // height: 50upx;
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
  .cart-item .checkbox .checked {
    color: $uni-color-primary !important;
  }
  .checkeds {
    color: $uni-color-primary !important;
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
  // 弹窗
  .popup_content {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 280px;
    height: 180px;
    // padding:30px;
    border: 1px solid #f4f4f4;
    background-color: #fff;
    overflow: auto;
    // border:solid red 1px;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    z-index: 99;
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