<template>
  <view>
    <view class="detailpage">
      <view style="color: #a1a1a1; font-size: 12px; margin-left: 10px"
        >询价单号：{{ current_enquiry.eid }}</view
      >
      <view class="detail_top">
        <view class="detail_top_left">
          <image
            style="width: 80px; height: 80px"
            :src="img_url + current_enquiry.product_info[0].image"
            mode="widthFix"
          />
        </view>
        <view class="detail_top_right">
          <view class="detail_top_right_box">
            <view class="detail_top_right_left">{{
              current_enquiry.product_info[0].store_name
            }}</view>
            <view class="detail_top_right_right"
              >{{ current_enquiry.product_info[0].product_num
              }}{{ current_enquiry.product_info[0].unit_name }}</view
            >
          </view>
          <view class="detail_top_right_bt">
            <text>报价需要{{ current_enquiry.credit_amount }}齐币</text>
          </view>
          <view class="detail_top_right_bt">
            <text>交货日期:{{ current_enquiry.delivery_deadline }}</text>
          </view>
        </view>
      </view>
      <view class="detail_below">
        <view class="information">
          <text>{{ current_enquiry.pvs }}</text>
          <text>浏览</text>
        </view>
        <view class="information">
          <text>{{ current_enquiry.flop_no }}</text>
          <text>开牌</text>
        </view>
        <view class="information">
          <text>{{ current_enquiry.quote_no }}</text>
          <text>报价</text>
        </view>
        <view class="information">
          <text>{{ current_enquiry.favs }}</text>
          <text>关注</text>
        </view>
      </view>
    </view>
    <view class="left_aside_box"> </view>
    <view class="supplier">
      <text>{{ current_enquiry.quote_no }}</text>
      <text>家供应商报价</text>
      <text class="iconfont icon-gantanhaoyuan"></text>
    </view>
    <scroll-view scroll-y class="left_aside_box" style="height: 500px">
      <!-- <tui-list-view
        class="tui-list-view"
        v-for="quote in current_enquiry.quotes"
      > -->
       <tui-list-view
        class="tui-list-view"
        v-for="(quote, index) in current_enquiry.quotes"
        :key="index"
      >
        <view class="details_list">
          <view class="product_name tui-rate-container">
            <view>{{ quote.city }} 供应商</view>
            <tui-rate
              :current="quote.cust.rating"
              :disabled="true"
              active="#ff0188"
            ></tui-rate>
          </view>
          <view style="padding-left: 10px">报价：{{ quote.e_quote }}元</view>
          <view class="product_price">
            <view class="item_price">
              <text>齐货8平台已做实名认证</text>
            </view>
          </view>
          <view class="product_time">
            <view class="nth_child">
              <text
                >近期：询价{{ quote.cust.total_enquiry_no }}次,报价{{
                  quote.cust.total_quote_no
                }}次,开牌{{ quote.cust.total_open_no }}次</text
              >
            </view>
          </view>
          <view v-if="quote.is_opened == 1" class="product_price">
            <view class="item_price">
              <text
                >供应商联系人:{{ quote.open_name }},联系电话:{{
                  quote.open_phone
                }}</text
              >
            </view>
            <view class="openbt">已开牌</view>
          </view>
          <view v-else class="product_price">
            <button class="openbt" @click="btnclick">开牌</button>
          </view>
        </view>
      </tui-list-view>
    </scroll-view>
  </view>
</template>
<script>
import tuiIcon from "@/components/icon/icon";
import tuiRate from "@/components/rate/rate";
export default {
  components: {
    tuiIcon,
    tuiRate,
  },
  data() {
    return {
      img_url: this.$img_url,
      isshow: false,
      current_enquiry: null,
    };
  },
  onLoad(option) {
    var eid = option.eid;
    this.$api.CC_request.my_enquiry_detail(eid).then((res) => {
      this.current_enquiry = res;
    });
  },
  methods: {
    btnclick() {
      this.isshow = true;
    },
    btnclose() {
      this.isshow = false;
    },
    //     handclick:function(){
    //  this.$api.CC_request.enquiry_detail().then((res) => {
    // console.log(res)
    //  })
    //  console.log(111)
    //     }
  },
};
</script>
<style lang="less">
page {
  // background: #f4f4f4;
  background: #f0f2f5;
  font-family: Source Han Sans CN;
}
.detailpage {
  width: 100%;
  height: 180px;
  margin: 0 auto;
  margin-top: 5px;
  background: #ffffff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
}
.detail_top {
  display: flex;
  .detail_top_left {
    display: flex;
    margin-left: 5px;
    flex: 2;
    align-items: center;
    justify-content: center;
    image {
      width: 80px;
    }
  }
  .detail_top_right {
    display: flex;
    flex: 8;
    flex-direction: column;
    .detail_top_right_box {
      display: flex;
      justify-content: space-between;
    }
    .detail_top_right_bt {
      padding-top: 5px;
      margin-left: 5px;
      color: #8d8d8d;
      font-size: 12px;
      display: flex;
      align-items: center;
      //   justify-content: space-around;
      .right_bt_top_item {
        padding: 0 10px 0 0;
        text:nth-child(1) {
          font-size: 13px;
        }
        text:nth-child(2) {
          font-size: 12px;
          margin-left: 5px;
          color: rgb(214, 59, 59);
        }
      }
    }
    .detail_top_right_left {
      width: 130px;
      margin-top: 3px;
      margin-left: 5px;
      font-size: 13px;
      font-weight: bold;
      line-height: 18px;
    }
    .detail_top_right_right {
      font-size: 20px;
      font-weight: bold;
      // color: #6a0098;
      margin-right: 5px;
      line-height: 35px;
      background: linear-gradient(121deg, #ff0188 0%, #fe011d 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
}
.detail_center {
  display: flex;
  justify-content: space-between;
  align-items: left;
  // border:solid red 1px;
  .detail_center_item {
    display: flex;
    view:nth-child(1) {
      align-items: center;
      display: flex;
      flex-direction: column;
      text:nth-child(2) {
        font-size: 12px;
        margin-top: 2px;
      }
      text:nth-child(1) {
        font-size: 18px;
      }
    }
  }
  view:nth-child(2) {
    display: flex;
    align-items: center;
    margin-left: 25px;
    .icon-weizhi {
      font-size: 18px;
    }
    .weizhi_item {
      font-size: 14px !important;
    }
  }
  .detail_center_item_right {
    display: flex;
    align-items: center;
    margin-right: 10px;
    font-size: 14px;
  }
}
.detail_below {
  margin-top: 15px;
  // border:solid red 1px;
  display: flex;
  justify-content: space-around;
  .information {
    display: flex;
    flex-direction: column;
    align-items: center;
    text:nth-child(1) {
      color: #6a0098;
      font-size: 18px;
      font-weight: bold;
    }
    text:nth-child(2) {
      font-size: 13px;
      font-weight: 400;
      padding-top: 4px;
      color: rgb(139, 139, 139);
    }
    .quotation {
      width: 45px;
      height: 45px;
      margin-top: -20px;
      //    border:solid red 1px;
      border-radius: 50%;
      text-align: center;
      line-height: 45px;
      background: linear-gradient(0deg, #c33d9d 0%, #862b6e 100%);
      color: #fff !important;
    }
    .quotation_name {
      color: #000 !important;
      font-weight: bold !important;
    }
  }
}
//供应商
.supplier {
  padding: 10px;
  font-size: 14px;
  color: #999;
  font-weight: 400;
  display: flex;
  align-items: center;
  text:nth-child(1) {
    font-weight: bold;
    color: #c33d9d;
  }
  text:nth-child(2) {
    padding: 0 5px;
  }
}
.left_aside_box {
  //   border:solid red 1px;
  .details_list {
    width: 95%;
    //   border:solid red 1px;
    // height:130px;
    margin: 10px auto;
    background: #fff;
    border-radius: 5px;
    .product_name {
      display: flex;
      justify-content: space-between;
      padding: 8px 10px 0 10px;
      font-size: 13px;
      font-weight: bold;
      view:nth-child(2) {
        color: #fff;
        padding-right: 7px;
        font-weight: bold;
        border-radius: 5px;
      }
    }
    .product_price {
      display: flex;
      padding: 0 25px;
      // justify-content: flex-start;
      // justify-content: space-between;

      align-items: center;
      .item_price {
        display: flex;
        color: #6a0098;
        text:nth-child(1) {
          font-size: 10px;
          font-weight: bold;
        }
        text:nth-child(2) {
          font-size: 10px;
          background: linear-gradient(121deg, #ff0188 0%, #fe011d 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: bold;
        }
      }
      .integral {
        margin-left: 40px;
        font-size: 14px;
        text:nth-child(2) {
          color: #c33d9d;
        }
      }
    }
    .product_time {
      padding: 4px 10px;
      font-size: 13px;

      .nth_child {
        margin-left: 50rpx;
        color: #a1a1a1;
        font-size: 10px;
      }
    }
    .distribution {
      display: flex;
      justify-content: space-between;
      padding: 0 10px;
      font-size: 13px;
      align-items: center;
      position: relative;
      button {
        width: 80px;
        height: 30px;
        margin-bottom: 10px;
        line-height: 30px;
        font-size: 13px;
        color: #fff;
        background: linear-gradient(0deg, #c33d9d 0%, #862b6e 100%);
      }
    }
    .pull_down {
      width: 100;
      height: 50px;
      // border:solid red 1px;
      margin: 0 auto;
      background: #eeeeee;
      border-radius: 0px 0px 6px 6px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 10px;
      .linkman {
        font-size: 13px;
        font-weight: bold;
        text:nth-child(2) {
          margin-left: 10px;
        }
      }
      .Close {
        button {
          height: 25px;
          background: linear-gradient(0deg, #c33d9d 0%, #862b6e 100%);
          color: #fff;
          font-size: 12px;
          // font-weight:bold;
          line-height: 25px;
        }
      }
    }
  }
}
.tui-rate-container {
  padding: 40rpx;
  box-sizing: border-box;
  margin-bottom: 10rpx;
  background: #fff;
  font-size: 30rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.openbt {
  width: 80px;
  height: 30px;
  position: absolute;
  top: 85;
  margin-top: -20px;
  right: 15px;
  align-items: center;
  display: flex;
  justify-content: space-around;
  background: linear-gradient(0deg, #c33d9d 0%, #862b6e 100%);
  border-radius: 4px;
  color: #fff;
  .line_segment {
    border: solid #f4f4f4 0.5px;
    height: 100%;
  }
}
</style>