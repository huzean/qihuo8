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
						<!-- <view class="yticon icon-xuanzhong2 checkbox-left" :class="{checkeds: item.radio}" @click="_select_item('item', k)"></view> -->
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
            	<text class="del-btn yticon icon-fork" @click="deleteCartItem(k)"></text>
					</view>
          </view>
				</view>
			</block>
		</view> 
		<!-- 底部菜单栏 -->
    </view>
    <!-- 积分 -->
     <view class="integral_box">
        <text>积分:</text>
        <view class="integra_item">
			<input class="input" placeholder-style="font-size:12px;" type="number" pattern="\d*" v-model="integral "  placeholder="请选择" placeholder-class="placeholder" />
            <text @click="iptrue"  class="iconfont icon-winfo-icon-xiajiantou"></text>
      </view>
        </view>
      <view class="drop_down_box" v-if="!ipshow">
         <view class="down" 
          @click="dropdown_list(item)" 
           v-for="(item, index) in integrallist" :key="index">{{item}}</view>
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
         <view>
           <text class="hint" v-show="isshow">请选择</text>
           {{deliverytime.start_date}}</view>
         </view>
    </picker>
    </view>
   <!-- 截止时间 -->
   <view class="time_end">
     <text>截止时间：</text>
     <picker style="color:#999; font-size:12px;" @change="bindchange"  :value="index" :range="array">
     <view class="item_array" style="width:350rpx;">{{array[index]}}</view>
     </picker>
   </view>
    <!-- 位置 -->
    <view class="citelist">
      <tui-list-cell :arrow="true" :last="true" :radius="true" @click="chooseAddr">
				<view class="tui-address">
					<view class="tui-none-addr" v-if="!address">
						<!-- <image src="/static/images/index/map.png" class="tui-addr-img" mode="widthFix"></image> -->
						<text style="font-size:14px">选择收货地址</text>
					</view>
					<view v-else>
						<view class="tui-userinfo">
							<text class="tui-name ">收货人:</text>
              <text>{{address.real_name}}{{address.phone}}</text>
						</view>
						<view class="tui-addr">
							<!-- <view class="tui-addr-tag"></view> -->
              <text>收货地址:</text>
							<text>{{address.province}}{{address.city}}{{address.district}}{{address.detail}}{{address.door_name}} </text>
						</view>
					</view>
				</view>
				<view class="tui-bg-img"></view>
			</tui-list-cell>
    <!-- 备注 -->
    <view class="remark">
        <view>
           <text>备注:</text>
          <textarea v-model="remark"
          class="textare" 
          maxlength="-1"
           ></textarea>
        </view>
      </view>
       <view class="subit"  @click="getData">提交</view>
    </view>
    <!--  -->
  <view type="primary" class="no-border" @confirm-btm="jisnhucesh"></view>
    <!--  -->
  </view>
</template>
<script>
import tuiListCell from "@/components/list-cell/list-cell";
import wPicker from "@/components/w-picker/w-picker.vue";
import tuiNumberbox from "@/components/numberbox/numberbox";
import tuiIcon from "@/components/icon/icon";
import tuiBadge from "@/components/badge/badge";
export default {
  components: {
    tuiListCell,
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
      integrallist: [2, 5, 8, 10],
      ipshow: true,
      //时间
      isshow: true,
      date: currentDate,
      array: ["请选择", "12小时", "24小时", "72小时"],
      index: "0",
      //cart
      getimg: this.$getimg,
      allChecked: false, //全选状态  true|false
      empty: false, //空白页现实  true|false
      img_url: this.$img_url,
      cartList: [],
      cart_item_num: 0, //购物车中商品种类
      deliverytime: {
        start_date: "", //交货时间
      },
      productid_list: "", //商品ID
      integral: "2", //积分
      remark: "", //备注
      address: 0, //地址
    };
  },
  onShow() {
    this._load();
  },
  create() {
    this._load();
  },
  methods: {
    dropdown_list: function (item) {
      this.integral = item;
      this.ipshow = !this.ipshow;
      console.log("aaaaaa", item);
    },
    iptrue() {
      this.ipshow = !this.ipshow;
    },
    bindchange: function (e) {
      this.index = e.target.value;
      console.log("携带", this.index);
    },
    chooseAddr() {
      uni.navigateTo({
        url: "../address/address?source=1",
      });
    },
    search: function () {
      uni.navigateTo({
        url: "../extend-view/news-search/news-search", //分类
      });
      console.log("点击了");
    },
    // 选择日期
    bindDateChange: function (e) {
      //yy/mm/dd变为yy-mm-dd
      //后端要求格式,yy/mm/dd就去掉.replace(/\//g, "-"
      // this.deliverytime.start_date = e.target.value.replace(/\//g, "-");
      this.deliverytime.start_date = e.target.value.replace(/\//g, "-");
      if (this.deliverytime.start_date == "") {
        this.isshow = true;
      } else {
        this.isshow = false;
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
    // 搜索按钮
    getData() {
      //提交求接
      if (this.index == 0) {
        uni.showToast({
          title: "请输入截止时间",
        });
        if (this.deliverytime.start_date == "") {
          uni.showToast({
            title: "请输入交货时间",
          });
        }
        if (this.address === "") {
          uni.showToast({
            title: "请输地址",
          });
        }
      } else {
        uni.showToast({
          title: "提交成功",
          duration: 3000,
        });
        this.$api.CC_request.submit_enquiry(
          this.productid_list, //商品
          this.deliverytime.start_date, //交货
          this.index, //截至
          this.address.id, //地址
          this.integral, //积分
          this.remark //备注
        ).then((res) => {
          console.log("提交", msg);
        });
        setTimeout(function () {
          uni.navigateTo({
            url: "../enquirylist/enquiry?state=1",
          });
        }, 1500);
        // console.log("开始", this.deliverytime.start_date);
      }
    },
    //  cart
    _load() {
      this.$api.CC_request.get_cart_list().then((res) => {
        console.log("44444444444", res.valid);
        if (res != 401) {
          let list = res.valid;
          let reslistdata = [];
          list.forEach((item) => {
            // if (item) {
            // const tradindata = `${item.product_id}-${item.cart_num}`;
            // reslistdata.push(tradindata);
            reslistdata.push(`${item.product_id}-${item.cart_num}`);
            // }
            console.log("商品商品", item);
          });
          this.productid_list = reslistdata.join(",");
          // console.log("001", this.productid_list);
          this.cartList = list;
          this.cart_item_num = this.cartList.length;
        }
      });
    },
    // 1001
    jump_detail(id) {
      uni.navigateTo({
        url: "../extend-view/productDetail/productDetail?id=" + id, //详情
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
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 60rpx;
  border-radius: 2px;
  .input {
    width: 650rpx;
    height: 70rpx;
    border: 1.5px solid #c33d9d;
    border-radius: 3px;
    text {
      color: #862b6e;
      margin-left: 20rpx;
    }
  }
  .name {
    font-size: 13px;
    margin-left: 20rpx;
  }
}
.drop_down_box {
  width: 94.6%;
  height: 80px;
  margin: 0 auto;
  background: #fff;
  display: flex;
  align-items: center;
  border-radius: 4px;
  display: flex;
  justify-content: space-around;
  .down {
    padding: 15px;
    border-radius: 10px;
    background: #f6f6f6;
  }
}
// 积分
.integral_box {
  position: relative;
  .integra_item {
    display: flex;
    justify-content: space-between;
    text {
      position: absolute;
      top: 8px;
      right: 5px;
      padding: 0 0px 0 20px;
      font-size: 15px;
    }
  }
  input {
    width: 200px;
    display: flex;
    font-size: 12px;
  }
  width: 94.6%;
  height: 40px;
  margin: 0px auto;
  background: #fff;
  display: flex;
  align-items: center;
  border-radius: 4px;
  text {
    margin: 0px 10px;
    font-size: 14px;
  }
  .icon-winfo-icon-xiajiantou {
    color: #5e017a;
    font-weight: bold;
  }
}
.time_end {
  width: 94.6%;
  height: 40px;
  margin: 10px auto;
  background: #fff;
  display: flex;
  align-items: center;
  border-radius: 4px;
  text {
    font-size: 14px;
    margin: 0 10px;
  }
  .item_array {
    margin-left: 30px;
    width: 100%;
  }
}
// 时间
.time {
  width: 94.6%;
  height: 40px;
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
    justify-content: space-around;
    view:nth-child(1) {
      width: 100px;
      margin-left: 10px;
      font-size: 14px;
      justify-content: center;
    }
    view:nth-child(2) {
      width: 191px;
      height: 35px;
      font-size: 14px;
      color: #999999;
      display: flex;
      align-items: center;
    }
    .hint {
      font-size: 12px;
      margin-left: 10px;
    }
  }
}
// 城市位置
.tui-userinfo {
  text:nth-child(1) {
    margin: 0 10px 0 14px;
    font-size: 14px;
  }
  text:nth-child(2) {
    font-size: 12px;
    color: #999;
  }
}
.tui-addr {
  text:nth-child(1) {
    margin-right: 10px;
    font-size: 14px;
  }
  text:nth-child(2) {
    font-size: 12px;
    color: #999;
  }
}
.citelist {
  width: 94.6%;
  height: 130px;
  margin-bottom: 10px;
  display: flex;
  // background: #fff;
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
      padding: 0px 0px 0 10px;
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
    margin-top: 20px;
    margin-bottom: 20px;
    background: #fff;
    display: flex;
    border-radius: 4px;
    flex-direction: column;
    .textare {
      margin: 0 auto;
      height: 100px;
    }
    text {
      margin-left: 10px;
    }
  }
  .subit {
    width: 65%;
    height: 50px;
    padding: 10px 0px;
    margin: 20px auto;
    background: #5e017a;
    text-align: center;
    color: #fff;
    border-radius: 8px;
  }
}
// cart
.cart {
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
    height: 230rpx;
    display: flex;
    margin: 10px auto;
    background: #fff;
    border-radius: 10px;
    // border:solid red 1px;
    .image-wrappers {
      display: flex;
      flex: 2;
      text-align: center;
      justify-content: center;
      .image {
        display: flex;
        align-items: center;
        img {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 80px !important;
          height: 80px !important;
          border-radius: 8upx;
        }
      }
    }
    .checkbox-left {
      font-size: 20px;
      z-index: 8;
      color: $font-color-disabled;
      background: #fff;
      border-radius: 50px;
    }
    .item-right {
      display: flex;
      flex-direction: column;
      flex: 5;
      overflow: hidden;
      position: relative;
      padding-left: 10px;
      .title,
      .price {
        margin-top: 10px;
        font-size: 13px;
        color: $font-color-dark;
        height: 28px;
      }
      .attr {
        font-size: $font-sm + 2upx;
        color: $font-color-light;
        line-height: 50upx;
      }
      .price {
        height: 50upx;
        line-height: 50upx;
      }
      .quantity {
        display: flex;
        justify-content: space-between;
        view:nth-child(1) {
          text {
            font-size: 14px;
          }
          display: flex;
          align-items: center;
        }
        .del-btn {
          font-size: 18px !important;
          color: #6a0098;
          position: absolute;
          top: 10px;
          right: 10px;
        }
      }
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
  .popup_button {
    color: #f4f4f4;
  }
  .popup_overlay {
    width: 40px;
    border: solid red 1px;
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
}
</style>