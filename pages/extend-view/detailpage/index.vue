<template>
  <view>
    <view class="detailpage">
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
        <view
          class="information"
          @click="navto()"
          v-if="current_enquiry.is_quoted == 0"
        >
          <text class="quotation">+</text>
          <text class="quotation_name">报价</text>
        </view>
        <view class="information">
          <text>{{ current_enquiry.favs }}</text>
          <text>关注</text>
        </view>
        <view class="information">
          <view class="detail_center">
            <view class="detail_center_item">
              <!-- 1212 -->
              <view @click="liscollet(current_enquiry)">
                <tui-icon
                  :name="current_enquiry.is_fav ? 'star-fill' : 'star'"
                  :size="22"
                  :color="current_enquiry.is_fav ? '#ff0188' : '#333'"
                ></tui-icon>
                <text
                  class="tui-operation-text tui-scale-small"
                  :style="current_enquiry.is_fav ? 'color: #ff0188;' : ''"
                  >{{ !current_enquiry.is_fav ? "关注" : "已关注" }}</text
                >
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
    <view class="left_aside_box">
      <view class="details_list">
        <view class="supplier">
          <text>采购商信息</text>
        </view>
        <view class="product_name tui-rate-container">
          <view
            ><text class="iconfont icon-weizhi"></text
            >{{ current_enquiry.show_address }} 采购商</view
          >
          <tui-rate
            :current="current_enquiry.cust.rating"
            :disabled="true"
            active="#ff0188"
          ></tui-rate>
        </view>
        <view class="product_price">
          <view class="item_price">
            <text>齐货8平台已做实名认证</text>
          </view>
        </view>
        <view class="product_time"
          ><view class="nth_child">
            <text
              >近期：询价{{ current_enquiry.cust.total_enquiry_no }} 次,报价{{
                current_enquiry.cust.total_quote_no
              }}次,开牌{{ current_enquiry.cust.total_open_no }}次</text
            >
          </view></view
        >
      </view>

      <view class="details_list" v-if="current_enquiry.is_quoted == 1">
        <view class="supplier openranking">
          <text>我的报价</text>
          <text v-if="current_enquiry.is_quoted">已开牌</text>
        </view>
        <view class="product_name">
          <view
            ><text>报价: {{ current_enquiry.my_quote.e_quote }}元</text></view
          >
        </view>
        <view class="product_time">
          <view class="nth_child">
            <text
              >开牌信息:联系人:{{
                current_enquiry.my_quote.open_name
              }},联系电话:{{ current_enquiry.my_quote.open_phone }}</text
            >
          </view>
          <!--  -->
          <view
            style="font-size: 13px; color: #ff0188; font-weight: bold"
            class="tui-goods-attr"
            v-if="current_enquiry.my_quote.rank > 0"
            >{{ current_enquiry.my_quote.rank_time }}排名：第{{
              current_enquiry.my_quote.rank
            }}名</view
          >
        </view>
        <view class="product_price">
          <!-- <view class=" openedbt" v-if="current_enquiry.is_quoted">已开牌</view> -->
          <view class="openbt" @click="btnranking">查看排名</view>
          <view class="openbt" @click="btnquote">修改报价</view>
        </view>
      </view>
    </view>
    <view class="supplier">
      <text>{{ current_enquiry.quote_no }}</text>
      <text>家供应商报价</text>
      <text class="iconfont icon-gantanhaoyuan"></text>
    </view>
    <scroll-view scroll-y class="left_aside_box" style="height: 500px">
      <!-- <tui-list-view class="tui-list-view" v-for="quote in current_enquiry.quotes  ">    -->
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
        </view>
      </tui-list-view>
    </scroll-view>
    <!-- 底部弹窗 -->
    <tui-bottom-popup @close="hidePopup" :show="popupShow">
      <view class="tui-popup-box">
        <!--  -->
        <view class="tui-product-popup-box">
          <view class="popuo_item_box">
            <view class="item_left">
              <image
                :src="img_url + current_enquiry.product_info[0].image"
                mode="widthFix"
              />
            </view>
            <view class="item_right">
              <view class="top_left">
                <view class="top_left_name">{{
                  item.product_info[0].store_name
                }}</view>
              </view>
              <view class="top_right">
                <view class="superstratum_item"
                  >{{ current_enquiry.product_info[0].product_num
                  }}{{ current_enquiry.product_info[0].unit_name }}
                </view>
                <view class="substratum_item">
                  <text>{{ current_enquiry.credit_amount }}</text>
                  <text>积分</text>
                </view>
              </view>
            </view>
          </view>
        </view>
        <!--  -->
        <scroll-view scroll-y class="tui-popup-scroll-detailpage">
          <view class="tui-scrollview-box">
            <view class="bid_amount" v-if="current_enquiry.is_quoted == 0">
              <view class="bid_amout_view">
                <text class="iconfont icon-jine"></text>
                <input
                  type="number"
                  pattern="\d*"
                  class="input"
                  v-model="bidamount"
                  placeholder-style="font-size:14px;"
                  placeholder="请输入报价金额"
                  placeholder-class="placeholder"
                />
              </view>
              <view class="monetary_unit">元</view>
            </view>
            <!-- 原来价 -->
            <view class="bid_amount" v-if="current_enquiry.is_quoted == 1">
              <view class="bid_amout_view">
                <text class="iconfont icon-jiageguanli"></text>
                <text class="original">原来价格</text>
              </view>
              <view class="monetary_unit"
                >{{ current_enquiry.my_quote.e_quote }}元</view
              >
            </view>
            <!--  icon-jiageguanli-->
            <!-- 修改报价 -->
            <view class="bid_amount" v-if="current_enquiry.is_quoted == 1">
              <view class="bid_amout_view">
                <text class="iconfont icon-jine"></text>
                <input
                  type="number"
                  pattern="\d*"
                  class="input"
                  v-model="myquotation"
                  placeholder-style="font-size:14px;"
                  placeholder="修改报价"
                  placeholder-class="placeholder"
                />
              </view>
              <view class="monetary_unit">元</view>
              <!-- <view class="monetary_unit">原来价格{{current_enquiry.my_quote.e_quote}}</view> -->
            </view>
            <!-- 修改报价 -->
          </view>

          <view class="my_integral">
            <view class="integral_item iconfont">
              <view class="rule_left">
                <text class="iconfont iconfont icon-jifen"></text>
                <text>我的积分</text>
              </view>
              <view class="rigth_rule" @click="checlrule">
                <text class="iconfont icon-gantanhaoyuan"> </text>
                -积分规则-
              </view>
            </view>
            <view class="center_integral">
              <view>00.00</view>
              <view>立即充值</view>
            </view>
          </view>
          <view>{{ item.eid }}</view>
        </scroll-view>
        <!--  -->
        <view class="name_rule" v-if="rule" @click="checlruleclose"
          >积分的使用规则如下1</view
        >
        <view
          :style="{ height: is_lhp ? '70px' : '50px' }"
          class="tui-operation tui-operation-right tui-right-flex tui-popup-btn"
        >
          <view class="tui_button">
            <!-- 提交报价 0-->
            <view
              v-if="current_enquiry.is_quoted == 0"
              @click="submitquotation(item)"
              class="nth-child"
              >确定</view
            >
            <!-- 修改报价 1 -->
            <view
              v-if="current_enquiry.is_quoted == 1"
              @click="revampquote(item)"
              class="nth-child"
              >确定</view
          >
            <view class="nth_solide"></view>
            <view class="nth-child" @tap="hidePopup">取消</view>
          </view>
        </view>
        <!--  -->
      </view>
    </tui-bottom-popup>
    <!-- 弹窗111 -->
    <myprompt
      :isee="isee"
      :amendquote="amendquote"
      :parentmsg="titlename"
      @xiiougai="xiougaiquote()"
      @close="handbtn()"
      @confirm="show = false"
      :show="show"
      :iseeshow="iseeshow"
      :confirmshow="confirmshow"
    >
    </myprompt>
  </view>
</template>
<script>
import tuiIcon from "@/components/icon/icon";
import tuiRate from "@/components/rate/rate";
import tuiBottomPopup from "@/components/bottom-popup/bottom-popup";
import tuiLoadmore from "@/components/loadmore/loadmore";
import myprompt from "@/components/myprompt/myprompt";
export default {
  components: {
    tuiIcon,
    tuiRate,
    tuiLoadmore,
    tuiBottomPopup,
    myprompt,
  },
  data() {
    return {
      img_url: this.$img_url,
      is_lhp: false, // 判断手机类型
      current_enquiry: "",
      popupShow: false, //底部弹窗
      rule: false, //积分规则
      bidamount: "", //金额
      // eid: "", //报价
      myquotation: "", //修改报价金额
      succeed_type: "1", //已收藏
      cancel_type: "1", //取消收藏
      show: false, //弹窗
      iseeshow: false, //我知道了
      confirmshow: false, //去修改
      titlename: "",
      isee: "确定",
      amendquote: "去修改",
    };
  },
  onLoad(option) {
    this.is_lhp = this.$is_bang; // 判断手机类型
    var eid = option.eid;
    this.$api.CC_request.enquiry_detail(eid).then((res) => {
      this.current_enquiry = res;
      // this.eid = res.eid;
      this.my_quotee_quote = res.my_quote.e_quote;
      console.log("报价金额", res.my_quote.e_quote);
    });
  },
  // 报价
  methods: {
    // 底部弹窗
    navto: function () {
      this.popupShow = true;
      console.log(111);
    },
    // 底部弹窗提交报价
    submitquotation(item) {
      if (this.bidamount == "") {
        uni.showToast({
          title: "请输入金额",
        });
      } else {
        uni.showToast({
          title: "提交成功",
          duration: 3000,
        });
        this.$api.CC_request.quote(
          this.current_enquiry.eid,
          this.bidamount
        ).then((res) => {});
        this.popupShow = false;
        this.bidamount = "";
        setTimeout(function () {
          uni.navigateTo({
            url: "../enquirylist/enquiry?state=1",
          });
        }, 1500);
      }
      console.log("*******", this.current_enquiry.eid);
    },
    // 底部弹窗取消
    hidePopup: function () {
      this.popupShow = false;
      this.rule = false;
      this.myquotation = "";
    },
    //
    // 1212
    liscollet: function (current_enquiry) {
      console.log("121231", current_enquiry);
      if (this.current_enquiry.is_fav) {
        this.$api.CC_request.cancel_en_relation(
          current_enquiry.eid,
          current_enquiry.cid,
          this.cancel_type //取消收藏
        ).then((res) => {});
        uni.showToast({
          title: "取消成功",
        });
      } else {
        this.$api.CC_request.add_en_relation(
          current_enquiry.eid, //询价id
          this.succeed_type //已收藏
        ).then((res) => {});
        uni.showToast({
          title: "收藏成功",
        });
      }
      this.current_enquiry.is_fav = !this.current_enquiry.is_fav;
    },
    // 积分规则
    checlrule() {
      // this.rule = true;
    },
    //积分规则
    checlruleclose() {
      this.rule = false;
    },
    // 1212
    // 查看排名 确定
    handbtn: function () {
      console.log("handbtn");
      this.show = false;
      this.$api.CC_request.quote_rank(this.current_enquiry.eid).then((res) => {
        this.current_enquiry.my_quote.rank = res.rank;
        this.current_enquiry.my_quote.rank_time = res.rank_time;
      });
    },
    // 去修改
    xiougaiquote: function () {
      this.popupShow = true;
      this.show = false;
      console.log("xiougaiquote");
    },
    btnranking: function () {
      this.show = true;
      this.titlename = "查看排名需要消耗";
      this.iseeshow = true;
      this.confirmshow = false;
    },
    //修改报价
    btnquote: function () {
      this.show = true;
      this.titlename = "修改报价需要消耗";
      this.confirmshow = true;
      this.iseeshow = false;
    },
    // 修改报价金额
    revampquote(item) {
      console.log("mmmm", item);
      if (this.myquotation == "") {
        uni.showToast({
          title: "请输入金额",
        });
      } else {
        uni.showToast({
          title: "提交成功",
          duration: 3000,
        });

        this.$api.CC_request.quote_change(
          this.current_enquiry.eid, //询价id
          this.myquotation //修改报价金额
        ).then((res) => {
          this.current_enquiry.my_quote = res;
        });
        this.popupShow = false;
        this.myquotation = "";
        // setTimeout(function () {
        //   uni.navigateTo({
        //     url: "../enquirylist/enquiry?index=1",
        //   });
        // }, 1500);
      }
      console.log("修改报价", this.eid);
    },
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
      color: #ff0188;
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
      width: 30px;
      height: 30px;
      margin-top: -5px;
      //    border:solid red 1px;
      border-radius: 50%;
      text-align: center;
      line-height: 30px;
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
          font-size: 13px;
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
        font-size: 13px;
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
    .openranking {
      display: flex;
      justify-content: space-between;
      font-weight: bold;
      color: #ff0188;
    }
  }
}
.tui-rate-container {
  padding: 40rpx;
  box-sizing: border-box;
  margin-bottom: 30rpx;
  background: #fff;
  font-size: 30rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.openbt {
  width: 60px;
  height: 20px;
  margin-bottom: 5px;
  margin-right: 5px;
  font-size: 12px;

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
.openedbt {
  background: linear-gradient(0deg, #ff0188 0%, #e7007c 100%);
}
</style>