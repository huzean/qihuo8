<template>
  <view class="container">
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
    <tui-tabs
      :tabs="tabs"
      :isFixed="scrollTop >= 0"
      :currentTab="currentTab"
      selectedColor="#ff0188"
      sliderBgColor="#ff0188"
      @change="change"
    ></tui-tabs>
    <!--选项卡逻辑自己实现即可，此处未做处理-->
    <view :class="{ 'tui-order-list': scrollTop >= 0 }">
      <view
        class="tui-order-item"
        v-for="(enquiry, order_index) in enquiry_list"
        :key="enquiry.id"
      >
        <tui-list-cell :hover="false" :lineLeft="false">
          <view class="tui-goods-title">
            <view>询价单号：{{ enquiry.eid }}</view>
            <view class="tui-order-status">进行中</view>
          </view>
        </tui-list-cell>
        <tui-list-cell padding="0" @click="detail(enquiry.eid)">
          <view class="tui-goods-item">
            <image
              :src="img_url + enquiry.product_info[0].image"
              class="tui-goods-img"
            ></image>
            <view class="tui-goods-center">
              <view class="tui-goods-name">{{
                enquiry.product_info[0].store_name
              }}</view>
              <view class="tui-goods-attr"
                >交货时间：{{ enquiry.delivery_deadline }}</view
              >
              <view class="tui-goods-attr"
                >报价供应商：{{ enquiry.quote_no }}家</view
              >
              <view class="tui-goods-attr" v-if="enquiry.is_quoted == 1"
                >我的报价：{{ enquiry.my_quote.e_quote }}元</view
              >
              <!-- <view class="tui-goods-attr" v-if="enquiry.is_quoted==1"  
                >我的报价：{{ enquiry.my_quote.e_quote }}元</view
              > -->
              <view
                style="font-size: 13px; color: #ff0188; font-weight: bold"
                class="tui-goods-attr"
                v-if="enquiry.my_quote.rank > 0"
                >{{ enquiry.my_quote.rank_time }}排名：第{{
                  enquiry.my_quote.rank
                }}名</view
              >
            </view>
            <view class="tui-price-right">
              <view
                style="font-size: 13px; color: #ff0188; font-weight: bold"
                >{{ enquiry.product_info[0].product_num }}</view
              >
              <view>{{ enquiry.product_info[0].unit_name }}</view>
            </view>
          </view>
          <image
            class="askfor"
            src="../../static/images/mall/nav/qgou.png"
            mode="widthFix"
          />
        </tui-list-cell>
        <view class="tui-order-btn">
          <view class="tui-btn-ml" v-if="current_enquiry_type == 1">
            <button
              class="tui-btn tui-btn-block btn-color tui-fillet"
              hover-class="tui-white-hover"
              @click="btnranking(enquiry)"
            >
              查看排名
            </button>
          </view>
          <view class="tui-btn-ml" v-if="current_enquiry_type == 1">
            <button
              class="tui-btn tui-btn-block btn-color tui-fillet"
              hover-class="tui-white-hover"
              @click="btnquote(enquiry)"
            >
              修改报价
            </button>
          </view>
          <view class="tui-btn-ml" v-if="current_enquiry_type == 3">
            <button
              class="tui-btn tui-btn-block btn-color tui-fillet"
              hover-class="tui-white-hover"
              @click="navto(enquiry)"
            >
              {{ !enquiry.is_quoted ? "立即报价" : "已报价" }}
            </button>
          </view>
          <view class="tui-btn-ml" v-if="current_enquiry_type == 3">
            <button
              class="tui-btn tui-btn-block btn-color tui-fillet"
              hover-class="tui-white-hover"
              @click="canceloncern(enquiry)"
            >
              取消关注
            </button>
          </view>
          <view class="tui-btn-ml">
            <button
              class="tui-btn tui-btn-block btn-color tui-fillet"
              hover-class="tui-white-hover"
              @click="detail(enquiry.eid)"
            >
              查看详情
            </button>
          </view>
		  <view class="tui-btn-ml" v-if="currentTab == 3">
		    <button
		      class="tui-btn tui-btn-block btn-color tui-fillet"
		      hover-class="tui-white-hover"
		      @click="goto_rate(enquiry.eid)"
		    >
		      评价评分
		    </button>
		  </view>
        </view>
      </view>
    </view>
    <!-- 报价底部弹窗-->
    <tui-bottom-popup
      :show="popupShow"
      @close="hidePopup"
      v-for="(item, index) in product_ordl"
      :key="index"
    >
      <view class="tui-popup-box">
        <view class="tui-product-popup-box">
          <view class="popuo_item_box">
            <view class="item_left">
              <image
                :src="img_url + item.product_info[0].image"
                mode="widthFix"
              ></image>
            </view>
            <view class="item_right">
              <view class="top_left">
                <view class="top_left_name">{{
                  item.product_info[0].store_name
                }}</view>
              </view>
              <view class="top_right">
                <view class="superstratum_item"
                  >{{ item.product_info[0].product_num }}
                  {{ item.product_info[0].unit_name }}
                </view>
                <view class="substratum_item">
                  <text>{{ item.credit_amount }}</text>
                  <text>积分</text>
                </view>
              </view>
            </view>
          </view>
        </view>
        <!--  -->
        <scroll-view scroll-y class="tui-popup-scroll-detailpage">
          <view class="tui-scrollview-box">
            <view class="bid_amount" v-if="item.is_quoted == 0">
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
            <view class="bid_amount" v-if="item.is_quoted == 1">
              <view class="bid_amout_view">
                <text class="iconfont icon-jiageguanli"></text>
                <text class="original">原来价格</text>
              </view>
              <view class="monetary_unit">{{ item.my_quote.e_quote }}元</view>
            </view>
            <!--  icon-jiageguanli-->
            <!-- 修改报价 -->
            <view class="bid_amount" v-if="item.is_quoted == 1">
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
          <!-- 我的积分 -->
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
          <!-- <view>{{ item.eid }}</view> -->
        </scroll-view>
        <view class="name_rule" v-if="rule" @click="checlruleclose"
          >积分的使用规则如下1</view
        >
        <view
          :style="{ height: is_lhp ? '70px' : '50px' }"
          class="tui-operation tui-operation-right tui-right-flex tui-popup-btn"
        >
          <view class="tui_button">
            <view
              @click="submitquotation(item)"
              class="nth-child"
              v-if="item.is_quoted == 0"
              >确定</view
            >
            <view
              @click="revampquote(item)"
              class="nth-child"
              v-if="item.is_quoted == 1"
              >确定</view
            >
            <view class="nth_solide"></view>
            <view class="nth-child" @tap="hidePopup">取消</view>
          </view>
        </view>
      </view>
    </tui-bottom-popup>
    <!--加载loadding-->
    <tui-loadmore :visible="loadding" :index="3" type="red"></tui-loadmore>
    <tui-nomore :visible="!pullUpOn" bgcolor="#fafafa"></tui-nomore>
    <!--加载loadding-->
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
import tuiTabs from "@/components/tui-tabs/tui-tabs";
import tuiIcon from "@/components/icon/icon";
import tuiTag from "@/components/tag/tag";
import tuiButton from "@/components/extend/button/button";
import tuiLoadmore from "@/components/loadmore/loadmore";
import tuiNomore from "@/components/nomore/nomore";
import tuiListCell from "@/components/list-cell/list-cell";
import tuiSticky from "@/components/sticky/sticky";
import tuiBottomPopup from "@/components/bottom-popup/bottom-popup";
import myprompt from "@/components/myprompt/myprompt";

export default {
  components: {
    tuiIcon,
    tuiTag,
    tuiTabs,
    tuiButton,
    tuiLoadmore,
    tuiNomore,
    tuiListCell,
    tuiSticky,
    tuiBottomPopup,
    myprompt,
  },
  data() {
    return {
      img_url: this.$img_url,
      product_ordl: [],
      tabs: [
        {
          name: "已报价",
        },
        {
          name: "我的询价",
        },
        {
          name: "我的关注",
        },
        {
          name: "历史询价",
        },
      ],
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
      current: 1,
      currentTab: 0,
      is_lhp: false, // 判断手机类型
      current_enquiry_type: 1, //已报价
      pageIndex: 1,
      loadding: false,
      pullUpOn: true,
      scrollTop: 0,
      enquiry_list: [], //询价列表
      // concealranking:false,//隐藏排名
      rule: false, //积分规则
      enquiry: "",
      page_limit: 3,
      show: false, //弹窗组件
      popupShow: false, //底部弹窗
      myquotation: "", //修改报价金额
      bidamount: "", //报价
      iseeshow: false, //我知道了
      confirmshow: false, //去修改
      titlename: "",
      isee: "确定",
      amendquote: "去修改",
    };
  },
  onLoad(option) {
    this.is_lhp = this.$is_bang; // 判断手机机型
    var type = option.state;
    this.current_enquiry_type = parseInt(type);
    this.currentTab = this.current_enquiry_type - 1;
    this.get_enquiry_data();
  },
  methods: {
    navto: function (enquiry) {
      if (enquiry.is_quoted == 1) {
        this.popupShow = false;
        uni.showToast({
          title: "不能重复报价",
          duration: 1000,
        });
      } else {
        this.popupShow = true;
      }
      var datalist = [];
      if (enquiry) {
        datalist.push(enquiry);
      }
      this.product_ordl = datalist;
      console.log("每个弹窗数据", enquiry);
    },
    // 提交报价金额
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
        this.$api.CC_request.quote(item.eid, this.bidamount).then((res) => {});
        this.popupShow = false;
        this.bidamount = "";
        setTimeout(function () {
          uni.navigateTo({
            url: "../enquirylist/enquiry?state=1",
          });
        }, 1500);
      }
      console.log("*******", item.eid);
    },

    // 去修改
    xiougaiquote: function () {
      this.popupShow = true;
      this.show = false;
      console.log("xiougaiquote");
    },
    btnquote(enquiry) {
      // 控制弹窗组件
      this.show = true;
      this.titlename = "修改报价需要消耗";
      this.confirmshow = true;
      this.iseeshow = false;
      // 
      var datalist = [];
      if (enquiry) {
        // const tradindata = enquiry;
        datalist.push(enquiry);
      }
      this.product_ordl = datalist;
      console.log("每个弹窗数据", this.product_ordl);
    },
    revampquote(item) {
      console.log("xxxxxxxxxxx", item);
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
          item.eid, //询价id
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
    // 取消底部
    hidePopup: function () {
      this.popupShow = false;
      // this.rule = false;
      this.myquotation = "";
      this.bidamount = "";
    },
    // 积分规则
    checlrule() {
      // this.rule = true;
    },
    //积分规则
    checlruleclose() {
      this.rule = false;
    },
    change(e) {
      this.currentTab = e.index;
      this.pageIndex = 1;
      this.current_enquiry_type = e.index + 1;
      this.enquiry_list = [];
      this.pullUpOn = true;
      this.loadding = false;
      this.get_enquiry_data();
    },
    // 取消关注
    canceloncern(enquiry) {
      // console.log(enquiry.id)
      // console.log(enquiry_list)
      const that = this;
      let cancel_type = 1; //取消关注
      uni.showModal({
        title: "提示",
        content: "确定取消？",
        success: function (res) {
          if (res.confirm) {
            that.$api.CC_request.cancel_en_relation(
              enquiry.eid,
              enquiry.cid,
              cancel_type //取消关注
            ).then((res) => {});
              that.enquiry_list.splice(0,1)
          } else if (res.cancel) {
          }
        },
      });
    },
    //跳转详情页
    detail(eid) {
      if (this.current_enquiry_type == 1 || this.current_enquiry_type == 3) {
        uni.navigateTo({
          url: "../extend-view/detailpage/index?eid=" + eid,
        });
      } else {
        uni.navigateTo({
          url: "../extend-view/detailpage/myenquirydetail?eid=" + eid,
        });
      }
    },	
	goto_rate(eid){
		uni.navigateTo({
		  url: "../extend-view/detailpage/rate",
		});
	},
    // 查看排名 我知道了
    handbtn: function () {
      this.show = false;
      console.log("handbtn");
      console.log(this.enquiry.eid);
      this.$api.CC_request.quote_rank(this.enquiry.eid).then((res) => {
        this.enquiry.my_quote.rank = res.rank;
        this.enquiry.my_quote.rank_time = res.rank_time;
      });
    },
    //查看报价排名
    btnranking(enquiry) {
      this.show = true;
      this.titlename = "查看排名需要消耗";
      this.iseeshow = true;
      this.confirmshow = false;
      this.enquiry = enquiry;
      console.log("0000000000", enquiry);
      // console.log(enquiry.eid)
      // this.$api.CC_request.quote_rank(enquiry.eid).then((res) => {
      //     enquiry.my_quote.rank = res.rank;
      //     enquiry.my_quote.rank_time = res.rank_time;
      //   });
    },
    //获取询价列表
    get_enquiry_data() {
      if (this.pullUpOn == false) {
        return;
      }
      this.loadding = true;
      this.$api.CC_request.enquiry_list(
        this.current_enquiry_type,
        this.pageIndex,
        this.page_limit
      ).then((res) => {
        var data_list = res;
        if (res.length > 0) {
          this.enquiry_list = this.enquiry_list.concat(data_list);
        }
        //数据已加载完
        if (data_list.length < this.page_limit) {
          this.loadding = false;
          this.pullUpOn = false;
        }
        this.loadding = false;
      });
    },
    tabbarSwitch: function (e) {
      let index = e.currentTarget.dataset.index;
      let url = "";
      switch (index) {
        case 0:
          url = "/pages/index/index";
          break;
        case 1:
          // url = "/pages/enquirylist/enquiry?state=1";
          break;
        case 2:
          url = "/pages/inquirylist/index";
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
    setTimeout(() => {
      uni.stopPullDownRefresh();
    }, 200);
  },
  onReachBottom() {
    if (this.pullUpOn == false) {
      return;
    }
    this.pageIndex = this.pageIndex + 1;
    this.get_enquiry_data();
  },
  onPageScroll(e) {
    this.scrollTop = e.scrollTop;
  },
};
</script>

<style lang="scss">
page {
  background: #f0f2f5;
}
.container {
  padding-bottom: env(safe-area-inset-bottom);
}
.tui-order-list {
  margin-top: 80rpx;
}
.tui-order-item {
  margin-top: 20rpx;
  border-radius: 10rpx;
  overflow: hidden;
}
.tui-goods-title {
  width: 100%;
  font-size: 28rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.tui-order-status {
  color: #888;
  font-size: 26rpx;
}
.tui-goods-item {
  width: 100%;
  padding: 20rpx 30rpx;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}
.tui-goods-img {
  width: 180rpx;
  height: 180rpx;
  display: block;
  flex-shrink: 0;
}
.tui-goods-center {
  flex: 1;
  padding: 20rpx 8rpx;
  box-sizing: border-box;
}

.tui-goods-name {
  max-width: 310rpx;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  font-size: 26rpx;
  line-height: 32rpx;
}

.tui-goods-attr {
  font-size: 26rpx;
  color: #888888;
  line-height: 32rpx;
  padding-top: 20rpx;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.tui-price-right {
  text-align: right;
  font-size: 24rpx;
  color: #888888;
  line-height: 30rpx;
  padding-top: 20rpx;
}

.tui-color-red {
  color: #e41f19;
  padding-right: 30rpx;
}

.tui-goods-price {
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  font-size: 24rpx;
}

.tui-size-24 {
  font-size: 24rpx;
  line-height: 24rpx;
}

.tui-price-large {
  font-size: 32rpx;
  line-height: 30rpx;
  font-weight: 500;
}

.tui-order-btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background: #fff;
  padding: 10rpx 30rpx 20rpx;
  box-sizing: border-box;
}

.tui-btn-ml {
  margin-left: 20rpx;
}

.askfor {
  width: 20px;
  height: 19.5px;
  position: absolute;
  top: 0;
  left: 5px;
}
.btn-color {
  width: 80px;
  height: 25px;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(0deg, #c33d9d 0%, #862b6e 100%);
  color: #fff;
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
