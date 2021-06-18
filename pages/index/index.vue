<template>
  <view class="container">
    <!--tabbar-->
    <view class="tui-tabbar" :style="{ height: is_lhp ? '130rpx' : '105rpx' }">
      <block v-for="(item, index) in tabbar" :key="index">
        <view
          :style="{ margin: is_lhp ? '0px 0px 20px' : '5px' }"
          class="tui-tabbar-item"
          :class="[current == index ? 'tui-item-active' : '']"
          :data-index="index"
          @tap="tabbarSwitch"
        >
          <view class="icon-size" :class="[index == 0 ? 'tui-ptop-4' : '']">
            <!-- <text class="iconfont" :class="asticonfont[index]">{{ item.icon}}</text> -->
            <text class="iconfont" :class="index == 2 ? 's3' : ''">{{
              item.icon
            }}</text>
          </view>
          <!-- <view :class="size_name[index]" class="tui-scale">{{ item.text }}</view> -->
          <view :class="'s' + (index + 1)" class="tui-scale">{{
            item.text
          }}</view>
        </view>
      </block>
    </view>
    <!--tabbar-->
    <!--header-->
    <view class="tui-header">
      <view class="title">
        <view class="flex_col" :style="{ height: is_lhp ? '58px' : '37px' }">
          <picker
            :style="{ padding: is_lhp ? '25px 0 0 0' : '0px' }"
            class="title_left"
            @change="bindPickerChange"
            :range="array"
          >
            <label>{{ array[indexs] }}</label>
            <text class="iconfont icon-winfo-icon-xiajiantou"></text>
          </picker>
        </view>
      </view>
    </view>
    <!--header-->
    <view class="tui-product-box">
      <view
        class="tui-product-list"
        :style="{ margin: is_lhp ? '50px 0 0 0' : '27px 0 0 0' }"
      >
        <view class="search">
          <view class="left" @tap="search">
            <view> <icon type="search" :size="16" color="#999"></icon> </view>
            <text>搜索</text>
          </view>
          <view class="right iconfont icon-2"></view>
        </view>
      </view>
    </view>
    <!-- 轮播 -->
    <view class="carousel">
      <swiper
        :indicator-dots="true"
        :autoplay="true"
        :interval="3000"
        :duration="2000"
        class="tui-banner-swiper"
        :circular="true"
        indicator-color="rgba(255, 255, 255, 0.8)"
        indicator-active-color="#5e017a"
      >
        <swiper-item
          class="sw_item"
          v-for="(item, index) in banner"
          :key="index"
        >
          <image :src="item.img" class="tui-slide-image" mode="scaleToFill" />
        </swiper-item>
      </swiper>
    </view>
    <!-- 功能区 -->
    <view class="middle_nav">
      <view class="middle_box">
        <view
          class="middle_box_top_item"
          v-for="(item, index) in category"
          :key="index"
          :data-key="item.name"
          @click="clicknavi(index)"
        >
          <image
            :src="'/static/images/mall/nav/' + item.img"
            class="tui-category-img"
            mode="scaleToFill"
          ></image>
          <view class="tui-category-name">{{ item.name }}</view>
        </view>
      </view>
    </view>
    <!-- 列表 -->
    <view
      class="content_list"
      v-for="(item, index) in product_List"
      :key="index"
    >
      <view class="list_left" @click="skip(item.eid)">
        <image
          :src="img_url + item.product_info[0].image"
          class="tui-category-img"
          mode="scaleToFill"
        ></image>
        <view class="list_quantity">
          <view class="list_text">
            <view>
              <!-- <text>5</text> -->
              <text>{{ item.quote_no }}</text>
            </view>
            <view><text>家</text> 供应商报价</view>
          </view>
          <image src="../../static/images/mall/nav/qgou.png" mode="widthFix" />
        </view>
      </view>
      <view class="list_right">
        <view class="right_box">
          <view class="right_text_noe">
            <!-- <view>王老吉</view> -->
            <view>{{ item.product_info[0].store_name }}</view>
            <view>
              <text class="text_quantity">{{
                item.product_info[0].product_num
              }}</text>
              <text class="text">{{ item.product_info[0].unit_name }}</text>
            </view>
          </view>
          <view class="time time_delivery">
            <text>交货时间:</text>
            <!-- <text>{{ formatDateTime(item.deadline) }}</text> -->
            <text>{{ item.deadline }}</text>
          </view>
          <view class="time time_end">
            <text>截止时间:</text>
            <text>{{ item.delivery_deadline }}</text>
          </view>
          <view class="location">
            <view class="location_hole">
              <text class="bg iconfont icon-weizhi"></text>
              <text class="location_text bg">{{ item.address }}</text>
            </view>
            <!-- 报价 -->
            <view class="make">
              <view @click="navto(item, index)">
                {{ !item.is_quoted ? "报价" : "已报价" }}
              </view>
              <text class="line_segment"></text>
              <view class="make_right">
                <text>{{ item.credit_amount }}</text>
                <text class="iconfont icon-jifen"></text>
              </view>
            </view>
            <!-- 收藏 -->
            <view @click="liscollet(index, item)">
              <view class="tui-collection">
                <tui-icon
                  :name="item.is_fav ? 'star-fill' : 'star'"
                  :size="22"
                  :color="item.is_fav ? '#ff0188' : '#333'"
                ></tui-icon>
                <text
                  class="icon_tb"
                  :style="item.is_fav ? 'color: #ff0188;' : ''"
                  >{{ !item.is_fav ? "关注" : "已关注" }}</text
                >
                <!-- {{item.is_fav}} -->
              </view>
            </view>
            <!--  -->
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
              <!-- <image
                src="../../static/images/mall/nav/list.png"
                mode="widthFix"
              /> -->
            </view>
            <view class="item_right">
              <view class="top_left">
                <!-- <view class="top_left_name">35°劲酒125ml（1*24瓶）</view> -->
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
        <scroll-view scroll-y class="tui-popup-scroll-index">
          <view class="tui-scrollview-box">
            <view class="bid_amount">
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
          </view>
          <!-- 我的积分 -->

          <view class="my_integral" style="margin-bottom: 10rpx">
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
            <view @click="submitquotation(item, index)" class="nth-child"
              >确定</view
            >
            <view class="nth_solide"></view>
            <view class="nth-child" @tap="hidePopup">取消</view>
          </view>
        </view>
      </view>
    </tui-bottom-popup>
    <!-- 1 -->

    <!--加载loadding-->
    <tui-loadmore :visible="loadding" :index="3" type="red"></tui-loadmore>
    <tui-nomore :visible="!pullUpOn" bgcolor="#fafafa"></tui-nomore>
    <!--加载loadding-->
  </view>
</template>
<script>
import tuiIcon from "@/components/icon/icon";
import tuiTag from "@/components/tag/tag";
import tuiLoadmore from "@/components/loadmore/loadmore";
import tuiNomore from "@/components/nomore/nomore";
import tuiBottomPopup from "@/components/bottom-popup/bottom-popup";
import { XcxToken } from "@/common/xcx_token.js";
var xcxtoken = new XcxToken();
export default {
  components: {
    tuiIcon,
    tuiTag,
    tuiLoadmore,
    tuiNomore,
    tuiBottomPopup,
    tuiLoadmore,
    tuiNomore,
  },
  data() {
    return {
      img_url: this.$img_url,
      rule: false, //规则
      bidamount: "", //报价金额
      itemb: 1,
      is_lhp: false, // 判断手机类型
      current: 0,
      array: [
        "全部地区",
        "华南地区",
        "湖南地区",
        "湖北地区",
        "江西地区",
        "云南地区",
        "四川地区",
        "江西地区",
      ],
      indexs: 0,
      banner: [
        {
          img: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1571489269,4043804085&fm=26&gp=0.jpg",
        },
        { img: "../../static/images/mall/nav/banner.png" },
        {
          img: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1571489269,4043804085&fm=26&gp=0.jpg",
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
      product_List: [],
      product_ordl: [],
      datalist: [],
      category: [
        {
          img: "01.png",
          name: "求购",
        },
        {
          img: "08.png",
          name: "分类",
        },
        {
          img: "03.png",
          name: "查看排名",
        },
        {
          img: "04.png",
          name: "我的积分",
        },
        {
          img: "05.png",
          name: "开牌",
        },
        {
          img: "06.png",
          name: "联系",
        },
        {
          img: "07.png",
          name: "搜藏",
        },
        {
          img: "02.png",
          name: "其它",
        },
      ],
      popupShow: false,
      // flag: true,
      value: "",
      eidlist: "",
      cidlist: "",
      succeed_type: "1", //已收藏
      cancel_type: "1", //取消收藏
      loadding: false,
      pullUpOn: true,
      pageIndex: 1,
      pageLimit: 10,
    };
  },
  onLoad() {
    // 判断手机机型
    let _this = this;
    this.is_lhp = this.$is_bang;
    console.log("是否为刘海屏", this.is_lhp);
    var is_login = uni.getStorageSync("is_login");
    if (is_login == 0) {
      uni.showLoading({
        title: "登录中",
      });
      xcxtoken.verify(this, 0);
    } else {
      this.listenquiry();
    }
  },
  methods: {
    //积分规则
    checlrule() {
      // this.rule = true;
    },
    checlruleclose() {
      this.rule = false;
    },
    listenquiry() {
      this.$api.CC_request.enquiry_index({
        page: this.pageIndex,
        limit: this.pageLimit,
      }).then((res) => {
        if (res.length > 0) {
          var collect = res;
          this.product_List = this.product_List.concat(res);
          collect.forEach((element) => {
            this.$set(element, "state_collect", false); //收藏
            this.$set(element, "item_baojia", "已报价");
          });
        }
        //数据已加载完
        if (res.length < this.pageLimit) {
          this.loadding = false;
          this.pullUpOn = false;
        }
        this.loadding = false;
      });
    },
    login_finished() {
      uni.hideLoading();
	  var is_login = uni.getStorageSync('is_login');
	  if(is_login == 0){
		  uni.showModal({
		      title: '温馨提示',
		      content: '选择登录，更多服务',
		      success: function (res) {
		          if (res.confirm) {
		              uni.navigateTo({
		              	url:'/pages/user/user'
		              })
		          } else if (res.cancel) {
		              return
		          }
		      }
		  });
	  }
      this.listenquiry();
    },
    search: function () {
      uni.navigateTo({
        url: "../extend-view/news-search/news-search", //分类
      });
    },
    clicknavi(e) {
      if (e == 0) {
        uni.navigateTo({
          url: "/pages/inquirylist/enquiry?state=1",
        });
      }
      if (e == 1) {
        uni.navigateTo({
          url: "/pages/category/cate",
        });
      }
      if (e == 2) {
        uni.navigateTo({
          url: "/pages/rankinglist/ranking",
        });
      }
    },
    hidePopup: function () {
      this.popupShow = false;
      this.rule = false;
      this.bidamount = "";
    },
    // 提交报价
    submitquotation(item, index) {
      console.log("sssssss", item);
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
          item.eid,
          this.bidamount //金额
        ).then((res) => {});
        this.popupShow = false;
        this.bidamount = "";
        setTimeout(function () {
          uni.navigateTo({
            url: "../enquirylist/enquiry?state=1",
          });
        }, 1500);
      }
      console.log(item);
      console.log(index);
    },
    navto: function (item, index) {
      console.log("报价", item);
      if (item.is_quoted == 1) {
        this.popupShow = false;
        uni.showToast({
          title: "不能重复报价",
          duration: 1000,
        });
      } else {
        this.popupShow = true;
      }
      var datalist = [];
      if (item) {
        // const tradindata = item;
        datalist.push(item);
      }
      this.product_ordl = datalist;
      console.log("每个弹窗数据", item.product_info[0]);
    },
    bindPickerChange: function (e) {
      this.indexs = e.target.value; 
      this.city = this.array[this.indexs]; 
      console.log("城市：", this.city); 
    },
    // 收藏
    liscollet: function (index, item) {
      if (this.product_List[index].is_fav) {
        this.$api.CC_request.cancel_en_relation(
          item.eid,
          item.cid,
          this.cancel_type //取消收藏
        ).then((res) => {});
        uni.showToast({
          title: "取消成功",
        });
      } else {
        this.$api.CC_request.add_en_relation(
          item.eid, //询价id
          this.succeed_type //已收藏
        ).then((res) => {});
        uni.showToast({
          title: "收藏成功",
        });
      }
      this.product_List[index].is_fav = !this.product_List[index].is_fav;
    },
    // 跳转详情页
    skip(eid) {
      uni.navigateTo({
        url: "../extend-view/detailpage/index?eid=" + eid,
        // myenquirydetail
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
          url = "/pages/enquirylist/enquiry?state=1";
          break;
        case 2:
          url = "/pages/inquirylist/index";
          break;
        case 3:
          // url = "/pages/makeoffers/make";
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
    // nav
    more: function (e) {
      let key = e.currentTarget.dataset.key || "";
      uni.navigateTo({
        // url: '../makeoffers/make?searchKey=' + key
      });
    },
    onReachBottom() {
      if (this.pullUpOn == false) {
        return;
      }
      this.pageIndex = this.pageIndex + 1;
      this.listenquiry();
    },
  },
};
</script>
<style lang="scss">
@import "/static/style/thorui.css";
@import "/static/style/icon.css";
.icon-iconfenlei {
  color: #fff;
}
.scactive {
  color: #ff0000;
}
.name_rule {
  position: absolute;
  width: 100%;
  height: 110px;
  background: #fff;
  top: 155px !important;
  left: 0;
}
page {
  // background: #f4f4f4;
  background: #f0f2f5;
  // font-family: Source Han Sans CN;
  font-family: Arial, Helvetica, sans-serif !important;
}
// //////
.container {
  padding-bottom: 100rpx;
  color: #333;
}
.down {
  border: solid #ffffff;
  border-width: 0 1px 1px 0;
  display: inline-block;
  padding: 5px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  //
  border: solid #fff;
  border-width: 0 1px 1px 0;
  display: inline-block;
  padding: 5px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}
/*tabbar*/
.title {
  background: #f7f7f7;
}
// header
.active {
  width: 36px;
  color: #fff;
  // border-bottom: solid #fff 3px;
}
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
  font-size: 34upx;
  color: #666;
}
.tui-ptop-4 {
  padding-top: 4rpx;
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
}
.tui-item-active {
  color: #b13b8f !important;
}
/*tabbar*/
.tui-product-box {
  padding-top: 65rpx;
  box-sizing: border-box;
}
.tui-product-list {
  height: 210rpx;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  box-sizing: border-box;
  background: #5e017a;
  color: #fff;
  border-radius: 0 0 15px 15px;
  position: relative;
}
/* 列式弹性盒子 */
.flex_col {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: flex-start;
  line-height: 30px;
}
.title_left {
  color: #ffffff;
  margin-left: 15px;
  font-size: 14px;
  .iconfont {
    width: 15px;
    position: relative;
    left: 5px;
    top: 2px;
  }
}
.title {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding-top: 25px;
  z-index: 10;
  background-color: #5e017a;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.08);
}
// 搜索
.search {
  width: 100%;
  height: 20px;
  display: flex;
  text-align: center;
  padding: 10px 0px;
  .left {
    height: 30px;
    flex: 9;
    background: #fff;
    margin-left: 15px;
    border-radius: 14px;
    line-height: 35px;
    display: flex;
    justify-content: flex-start;
    view {
      margin-left: 10px;
      color: #000;
      vertical-align: center;
    }
    text {
      margin-left: 10px;
      color: #999999;
      font-size: 12px;
      line-height: 32px;
      font-weight: 400;
    }
  }
  .right {
    font-size: 20px;
    font-weight: bold;
    height: 30px;
    flex: 1;
    margin-right: 15px;
    line-height: 30px;
    text-align: right;
  }
}
// 轮播
.carousel {
  width: 90%;
  height: 114px;
  margin: 0 auto;
  position: relative;
  margin-top: -50px;
  border-radius: 8px;
  .tui-banner-swiper {
    width: 100%;
    height: 114px;
    border-radius: 12rpx;
    overflow: hidden;
    transform: translateY(0);
  }
  .sw_item {
    .tui-slide-image {
      width: 100%;
      height: 228rpx;
    }
  }
}
// 功能
.middle_nav {
  width: 95%;
  display: flex;
  margin: 10px auto;
  background: #ffffff;
  border-radius: 8px;
  .middle_box {
    width: 100%;
    height: 80%;
    margin: 15px auto;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    // 111
    .middle_box_top_item {
      width: 25%;
      height: 130rpx;
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-direction: column;
      .tui-category-img {
        height: 45rpx;
        width: 45rpx;
        display: block;
      }
      .tui-category-name {
        color: #6d6d6d;
        font-size: 12px;
        font-weight: 500;
        font-family: Source Han Sans CN;
      }
    }
  }
}
// 内容
.content_list:last-child {
  margin-bottom: 30px;
}
.content_list {
  width: 95%;
  margin: 10px auto;
  background: #ffffff;
  border-radius: 8px;
  display: flex;
  .list_left {
    display: flex;
    flex: 2;
    flex-direction: column;
    align-items: center;
    position: relative;
    image {
      width: 85px;
      height: 75px;
    }
    .list_quantity {
      width: 100%;
      height: 55px;
      display: flex;
      .list_text {
        position: relative;
        margin: 0 auto;
        view:nth-child(1) {
          text-align: center;
          text:nth-child(1) {
            width: 18px;
            height: 29px;
            font-size: 18px;
            margin-left: -15px;
            font-family: Microsoft YaHei;
            color: #3e2a65;
            text-align: center;
            line-height: 18px;
            font-weight: bold;
            background: linear-gradient(
              121deg,
              #f34c73 0.2685546875%,
              #a2266e 100%
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        }
        view:nth-child(2) {
          margin-top: 8px;
          font-size: 12px;
          color: #999999;
          text {
            position: absolute;
            top: 2px;
            left: 35px;
          }
        }
      }
      image {
        width: 20px;
        height: 19.5px;
        position: absolute;
        top: 0;
        left: 5px;
      }
    }
  }
  .list_right {
    display: flex;
    flex: 7;
    position: relative;
    .right_box {
      width: 100%;
      height: 100%;
      .right_text_noe {
        display: flex;
        justify-content: space-between;
        view:nth-child(1) {
          font-size: 13px;
          width: 130px;
          font-family: Microsoft YaHei;
          font-weight: bold;
          color: #333333;
          line-height: 20px;
          display: flex;
          align-items: center;
          letter-spacing: 1.5px;
          display: flex;
          margin-top: 8px;
          flex-wrap: wrap;
        }
        view:nth-child(2) {
          .text_quantity {
            font-size: 20px;
            color: #6a0098;
            font-weight: bold;
            margin-right: 5px;
            line-height: 35px;
            color: #ff0188;
          }
          .text {
            color: #ff0188;
            font-size: 20px;
            font-weight: bold;
            margin-right: 5px;
          }
        }
      }
      .specification {
        font-size: 13px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #666666;
        letter-spacing: 2px;
      }
      .time_delivery {
        margin: 8px 0 5px 0;
      }
      .time {
        font-size: 12px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #999999;
        letter-spacing: 0.5px;
      }

      .location {
        margin-top: 3px;
        .bg {
          background: linear-gradient(0deg, #c33d9d 0%, #862b6e 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: bold;
        }
        .location_hole {
          display: flex;
          align-items: center;
        }
        display: flex;
        align-items: center;
        justify-content: space-between;
        .icon-weizhi {
          font-size: 18px;
        }
        .location_text {
          font-size: 14px;
          float: right;
          white-space: normal;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          width: 90px;
        }
        .make {
          width: 80px;
          height: 30px;
          position: absolute;
          top: 85;
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
          view:nth-child(1) {
            font-size: 29rpx;
            letter-spacing: 3px;
          }
          .make_right {
            display: flex;
            flex-direction: column;
            font-size: 12px;
            text {
              text-align: center;
            }
            .iconfont {
              font-size: 12px;
            }
          }
        }
        // 收藏
        .tui-collection {
          text-align: center;
          position: absolute;
          top: 35px;
          right: 25px;
          display: flex;
          flex-direction: column;
          font-size: 20px;
          .icon_tb {
            font-size: 10px;
          }
        }
      }
    }
  }
}
// .red {
//   color: red;
// }
// .gray {
//   color: #666666;
// }
</style>
