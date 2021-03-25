<template>
  <view class="container">
    <!--tabbar-->
    <view class="tui-tabbar" :style="{ height: is_lhp ? '144rpx' : '99rpx' }">
      <block v-for="(item, index) in tabbar" :key="index">
        <view
          :style="{ margin: is_lhp ? '0px 0px 30px' : '5px' }"
          class="tui-tabbar-item"
          :class="[current == index ? 'tui-item-active' : '']"
          :data-index="index"
          @tap="tabbarSwitch"
        >
          <view class="icon-size" :class="[index == 0 ? 'tui-ptop-4' : '']">
            <text class="iconfont">{{ item.icon }}</text>
            <!-- <tui-icon
              :name="current == index ? item.icon + '-fill' : item.icon"
              :color="current == index ? '#5e017a' : '#666'"
              :size="item.size"
            ></tui-icon> -->
          </view>
          <view class="tui-scale">{{ item.text }}</view>
        </view>
      </block>
    </view>
    <!--tabbar-->
    <!--header-->
    <view class="tui-header">
      <view class="title">
        <view class="flex_col" :style="{ height: is_lhp ? '58px' : '37px' }">
          <!-- <view
            class="title_left"
            :style="{ padding: is_lhp ? '25px 0 0 0' : '0px' }"
            >
            广州
            <image src="../../static/images/mall/nav/jt.png" mode="widthFix" />
          </view> -->
          <picker
            :style="{ padding: is_lhp ? '25px 0 0 0' : '0px' }"
            class="title_left"
            @change="bindPickerChange"
            :range="array"
          >
            <label>{{ array[indexs] }}</label>
            <text class="iconfont icon-winfo-icon-xiajiantou" ></text>
            <!-- <image src="../../static/images/mall/nav/jt.png" mode="widthFix" /> -->
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
        :interval="5000"
        :duration="150"
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
          <!--   @tap.stop="gotoPage(item.url)" -->
          <image :src="item.img" class="tui-slide-image" mode="scaleToFill" />
        </swiper-item>
        <!-- <swiper-item class="sw_item">
          <image
            src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1571489269,4043804085&fm=26&gp=0.jpg"
            class="tui-slide-image"
            mode="widthFix"
          />
        </swiper-item> -->
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
      v-for="(item, index) in productlist"
      :key="index"
    >
      <view class="list_left">
        <image
          :src="'/static/images/mall/nav/' + item.img"
          class="tui-category-img"
          mode="scaleToFill"
        ></image>
        <!-- <image src="../../static/images/mall/nav/list.png" mode="widthFix" /> -->
        <!-- <image :src="item.image" @tap="detail(item.id)" /> -->
        <view class="list_quantity">
          <view class="list_text">
            <view>
              <!-- <text>5</text> -->
              <text>{{ item.amount }}</text>
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
            <view>{{ item.name }}</view>
            <view>
              <text class="text_quantity">{{ item.number }}</text>
              <text class="text">件</text>
            </view>
          </view>
          <view class="specification">{{ item.specification }}</view>
          <view class="time time_delivery">
            <text>交货时间:</text>
            <text>{{ item.delivery }}</text>
          </view>
          <view class="time time_end">
            <text>截止时间:</text>
            <text>{{ item.expirationdate }}</text>
          </view>
          <view class="location">
            <view>
              <text class="bg iconfont icon-weizhi"></text>
              <text class="location_text bg">{{ item.location }}</text>
            </view>
            <view class="make">
              <view @click="navto"> 报价 </view>
              <text class="line_segment"></text>
              <view class="make_right">
                <text>{{ item.integral }}</text>
                <text class="iconfont icon-jifen"></text>
              </view>
            </view>
            <!-- 收藏 -->
            <!-- <view class="tui-collection"  @click="isShow=!isShow"  :class="{red: !isShow,gray: isShow}">
                <text class="iconfont icon-shoucang1"></text>
						  <view class="enshrine " :class="{'tui-icon-red':collected}">收藏</view>
					</view> -->
            <view @click="showImg(index)">
              <view class="tui-collection" v-if="!showSearch">
                <text class="iconfont icon-shoucang1"></text>
                <view class="enshrine">收藏</view>
              </view>
              <view class="tui-collection" v-if="showSearch">
                <image
                  src="../../static/images/mall/nav/07.png"
                  mode="widthFix"
                />
                <view class="enshrine2">收藏</view>
              </view>
            </view>
            <!--  -->
          </view>
        </view>
      </view>
    </view>
    <!-- 1 -->
    <!-- 1 -->
  </view>
</template>
<script>
import tuiIcon from "@/components/icon/icon";
import tuiTag from "@/components/tag/tag";
import tuiLoadmore from "@/components/loadmore/loadmore";
import tuiNomore from "@/components/nomore/nomore";
import tuiBottomPopup from "@/components/bottom-popup/bottom-popup";
export default {
  components: {
    tuiIcon,
    tuiTag,
    tuiLoadmore,
    tuiNomore,
    tuiBottomPopup,
  },
  data() {
    return {
      // 判断手机类型
      is_lhp: false,
      showSearch: false,
      isactive: -1,
      inputTitle: "",
      inputValue: "",
      current: 0,
      isActive: 1,
      array: ["广州", "东莞", "中山"],
      indexs: 0,
      banner: [
        {
          img:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1571489269,4043804085&fm=26&gp=0.jpg",
        },
        { img: "../../static/images/mall/nav/banner.png" },
        {
          img:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1571489269,4043804085&fm=26&gp=0.jpg",
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
          icon: "\ue646",
          text: "报价",
        },
        {
          icon: "\ue60a",
          text: "我的",
        },
      ],
      productlist: [
        {
          id: 1,
          img: "list.png",
          amount: "5",
          name: "王老吉",
          number: "500",
          specification: "1*24灌/件",
          delivery: "2021-3-6-10-23",
          expirationdate: "2021-3-7-10-23",
          location: "广州番禺",
          integral: "2",
        },
        {
          id: 2,
          img: "list.png",
          amount: "5",
          name: "王老吉",
          number: "400",
          specification: "1*24灌/件",
          delivery: "2021-3-6-10-23",
          expirationdate: "2021-3-7-10-23",
          location: "广州番禺",
          integral: "2",
        },
        {
          id: 3,
          img: "list.png",
          amount: "5",
          name: "王老吉",
          number: "300",
          specification: "1*24灌/件",
          delivery: "2021-3-6-10-23",
          expirationdate: "2021-3-7-10-23",
          location: "广州番禺",
          integral: "2",
        },
        {
          id: 4,
          img: "list.png",
          amount: "5",
          name: "王老吉",
          number: "510",
          specification: "1*24灌/件",
          delivery: "2021-3-6-10-23",
          expirationdate: "2021-3-7-10-23",
          location: "广州番禺",
          integral: "2",
        },
      ],
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
          // name: "签到",
        },
        {
          img: "04.png",
          // name: "积分",
        },
        {
          img: "05.png",
          // name: "开牌",
        },
        {
          img: "06.png",
          // name: "拍照",
        },
        {
          img: "07.png",
          // name: "搜藏",
        },
        {
          img: "02.png",
          // name: "分类",
        },
      ],
      pageIndex: 1,
      loadding: false,
      pullUpOn: true,
      popupShow: false,
      flag: true,
      value: "",
    };
  },
  onLoad() {
    // 判断手机机型
    let _this = this;
    this.is_lhp = this.$is_bang;
    console.log("是否为刘海屏", this.is_lhp);
  },
  //     onPageScroll: function(Object) {
  //  console.log(Object.scrollTop);//实时获取到滚动的值

  methods: {
    search: function () {
      uni.navigateTo({
        url: "../extend-view/news-search/news-search", //分类
      });
      console.log("点击了");
    },
    clicknavi(e) {
      if (e == 0) {
        uni.navigateTo({
          url: "/pages/inquirylist/index",
        });
        console.log("点击了");
      }
      if (e == 1) {
        uni.navigateTo({
          url: "/pages/category/cate",
        });
      }
    },
    navto: function (e) {
      console.log("点击了");
      uni.showModal({
        title: '需要消耗积分',
        content: '1234',
        showCancel:false,
        success: function (res) {
            if (res.confirm) {
                console.log('用户点击确定');
            } else if (res.cancel) {
                console.log('用户点击取消');
            }
        },
      })
     
    },
    bindPickerChange: function (e) {
      //改变的事件名
      //console.log('picker发送选择改变，携带值为', e.target.value)   用于输出改变索引值
      this.indexs = e.target.value; //将数组改变索引赋给定义的index变量
      this.city = this.array[this.indexs]; //将array【改变索引】的值赋给定义的变量
      console.log("城市：", this.city); //输出获取的籍贯值，例如：中国
    },

    showImg: function (e) {
      let message = this.productlist;
      console.log(message);
      for (let i in message) {
        if (e == 0) {
          this.showSearch = true;
        }
      }
      // if(e==0){
      //   console.log(0)
      //       this.showSearch = true;

      // }if(e==1)
      // console.log(111)
      // this.showSearch = !this.showSearch;
    },
    lun_bo(e) {
      this.isactive = e;
    },
    handleChange: function (e) {
      this.inputTitle = "";
    },
    change: function (e) {
      var txtTitle = e.detail.value;
      this.inputTitle = txtTitle;
    },
    onKeyInput: function (event) {
      // this.inputValue = event.target.value
      // console.log(  this.inputValue = event.target.value)
    },
    chenked(type) {
      this.isActive = type;
    },

    tabbarSwitch: function (e) {
      let index = e.currentTarget.dataset.index;
      let url = "";
      switch (index) {
        case 0:
          url = "/pages/index/index";
          break;
        case 1:
          url = "/pages/enquirylist/enquiry";
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
  },
};
</script>
<style lang="scss">
@import "/static/style/thorui.css";
@import "/static/style/icon.css";
.icon-iconfenlei {
  color: #fff;
}
page {
  // background: #f4f4f4;
  background: #f0f2f5;
  font-family: Source Han Sans CN;
}
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
  font-size: 30upx;
  color: #666;
  // margin: 0 0 25px 0;
}

.tui-ptop-4 {
  padding-top: 4rpx;
}

.tui-scale {
  transform: scale(0.5);
  transform-origin: center 100%;
  line-height: 24rpx;
  font-size: 20px;
}

.icon-size{
  .iconfont{
  font-size: 18px; 
  // font-weight:bold;
  font-weight: 400;
  margin-bottom: 5px;
  }
  }

.tui-item-active {
  color: #5e017a !important;
  // font-weight: bold;
}

/*tabbar*/

.tui-header {
  width: 100%;
  height: 100rpx;
  padding: 0 30rpx 0 20rpx;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  left: 0;
  top: 0;
  /* #ifdef H5 */
  top: 44px;
  /* #endif */
  z-index: 999;
}

.tui-product-box {
  padding-top: 65rpx;
  box-sizing: border-box;
}

.tui-product-list {
  height: 215rpx;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  box-sizing: border-box;
  // margin-top:106rpx;
  // border:solid red 1px;
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
  // border:solid red 1px;
  // line-height: 45px;
  .iconfont {
    width: 15px;
    // padding:8px 0px 0 3px;
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
  // height: 65px;
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
  // border:solid red 1px;
  // position: absolute;
  .left {
    height: 30px;
    flex: 9;
    // border:solid red 1px;
    background: #fff;
    margin-left: 15px;
    border-radius: 14px;
    line-height: 35px;
    display: flex;
    justify-content: flex-start;
    view {
      margin-left: 10px;
      color: #000;
      // border:solid red 1px;
      vertical-align: center;

      // line-height: 35px;
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
    // border:solid red 1px;
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
    // border:solid red 1px;
  }
  .sw_item {
    .tui-slide-image {
      width: 100%;
      height: 114px;
    }
  }
}

// 功能
.middle_nav {
  width: 95%;
  // height: 162px;
  display: flex;
  margin: 10px auto;
  background: #ffffff;
  border-radius: 8px;
  .middle_box {
    width: 100%;
    height: 80%;
    // border:solid red 1px;
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
      // border:solid red 1px;
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
  // background:#ff0000;
}
.content_list {
  width: 95%;
  height: 130px;
  margin: 10px auto;
  background: #ffffff;
  border-radius: 8px;
  display: flex;
  // border:solid red 1px;
  // padding-bottom:100px;
  // margin-bottom:100px;
  .list_left {
    display: flex;
    flex: 2;
    // border: solid red 1px;
    flex-direction: column;
    align-items: center;
    position: relative;
    // border:solid red 1px;
    // margin-left:20rpx;
    image {
      width: 85px;
      height: 75px;
      // border: solid red 1px;
    }
    .list_quantity {
      width: 100%;
      height: 55px;
      display: flex;
      // border: solid red 1px;
      .list_text {
        // border: solid red 1px;
        position: relative;
        margin: 0 auto;
        view:nth-child(1) {
          text-align: center;
          text:nth-child(1) {
            width: 18px;
            height: 29px;
            font-size: 18px;
            margin-left: -15px;
            // position: absolute;
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
            // color:red;
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
    // border: solid red 1px;
    position: relative;
    .right_box {
      width: 100%;
      height: 100%;
      //  margin-right:20rpx;
      // border: solid red 1px;
      .right_text_noe {
        display: flex;
        justify-content: space-between;
        // flex-direction: column;
        view:nth-child(1) {
          font-size: 13px;
          font-family: Microsoft YaHei;
          font-weight: bold;
          color: #333333;
          display: flex;
          align-items: center;
          letter-spacing: 1.5px;
        }
        view:nth-child(2) {
          .text_quantity {
            font-size: 20px;
            color: #6a0098;
            font-weight: bold;
            // color: #6a0098;
            margin-right: 5px;
            line-height: 35px;
            background: linear-gradient(121deg, #ff0188 0%, #fe011d 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .text {
            color: #fe011d;
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
        margin: 8px 0 3px 0;
      }
      .time {
        font-size: 12px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #999999;
        letter-spacing: 0.5px;
      }

      .location {
        .bg {
          background: linear-gradient(0deg, #c33d9d 0%, #862b6e 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: bold;
        }
        display: flex;
        align-items: center;
        padding-top: 5px;

        justify-content: space-between;
        .icon-weizhi {
          font-size: 18px;
        }
        .location_text {
          font-size: 14px;
        }
        .make {
          width: 80px;
          height: 30px;
          position: absolute;
          top: 85;
          right: 15px;
          // margin-top: -15px;
          align-items: center;
          display: flex;
          // border:solid red 1px;
          justify-content: space-around;
          background: linear-gradient(0deg, #c33d9d 0%, #862b6e 100%);
          border-radius: 4px;
          color: #fff;
          .line_segment {
            border: solid #f4f4f4 0.5px;
            // width:1px;
            height: 100%;
          }
          view:nth-child(1) {
            font-size: 16px;
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
          image {
            width: 18px;
          }
          .iconfont {
            font-size: 18px;
          }
          .enshrine {
            font-size: 10px;
            font-family: Source Han Sans CN;
            font-weight: 400;
            // color: #666666;
            margin-top: 3px;
          }
          .enshrine2 {
            color: red;
            font-size: 10px;
            font-family: Source Han Sans CN;
            font-weight: 400;
            // color: #666666;
            margin-top: 3px;
          }
        }
      }
    }
  }
}
.red {
  color: red;
}
.gray {
  color: #666666;
}
</style>
