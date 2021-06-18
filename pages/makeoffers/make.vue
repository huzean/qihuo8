<template>
  <view class="container">
      <!--tabbar-->
      <view
        class="tui-tabbar"
        :style="{ height: is_lhp ? '130rpx' : '105rpx' }"
      >
        <block v-for="(item, index) in tabbar" :key="index">
          <view
            :style="{ padding: is_lhp ? '20rpx 0 0 0' : '0rpx 0 0 0' }"
            class="tui-tabbar-item"
            :class="[currents == index ? 'tui-item-active' : '']"
            :data-index="index"
            @tap="tabbarSwitch"
          >
            <view :class="[index == 0 ? 'tui-ptop-4' : '']">
              <text
                class="iconfont"
                style="font-size: 18px; font-weight: 400; margin-bottom: 5px"
                >{{ item.icon }}
              </text>
            </view>
            <view class="tui-scale">{{ item.text }}</view>
          </view>
        </block>
      </view>
      <!-- tabbar -->
<view class="home-banner">
		<swiper
			class="swiper" 
			circular 
			autoplay 
			interval="5000"
			previous-margin="50rpx"
			next-margin="50rpx"
			@change="onSwiperChange"
		>
			<swiper-item class="item" v-for="(item, index) in list" :key="index" >
				<image 
					class="pic" 
					:class="{current: current === index}"
					:src="item.image" 
					mode="aspectFill"
					@click="navTo(item.link)"
				></image>
			</swiper-item>
		</swiper>
		<view class="dots row center">
			<view class="dot" :class="{current: current === index}" v-for="(item, index) in list" :key="index"></view>
		</view>
<!--  -->
  </view>
  </view>
</template>
<script>
import tuiIcon from "@/components/icon/icon";
export default {
  components: {
    tuiIcon,
  },
  data() {
    return {
      is_lhp: false,
      // tab切换
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
          icon: "\ue630",
          text: "联系",
        },
        {
           icon: "\ue63f",
          text: "我的",
        },
      ],
      current: 2,
      current: 0,
      list: [
        {
          image:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1571489269,4043804085&fm=26&gp=0.jpg",
        },
        {
          image:
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2544696267,4055569904&fm=26&gp=0.jpg",
        },
        {
          image:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2573133749,533767849&fm=26&gp=0.jpg",
        },
      ],
    };
  },
  onLoad() {
    // 判断手机机型
    let _this = this;
    this.is_lhp = this.$is_bang;
    console.log("是否为刘海屏", this.is_lhp);
  },
  methods: {
    btn() {
      //      var eid ="e161820164666688271";
      // this.$api.CC_request.my_enquiry_detail(eid).then((res) => {
      //  console.log("bbbbbb",11)
      // })
    },
    //
    onSwiperChange(e) {
      this.current = e.detail.current;
    },
    //
    tabbarSwitch: function (e) {
      let index = e.currentTarget.dataset.index;
      console.log(e);
      let url = "";
      switch (index) {
        case 0:
          url = "/pages/index/index";
          break;
        case 1:
          url = "/pages/enquirylist/enquiry";
          break;
        case 2:
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

    // nav
    lun_bo(e) {
      this.navactive = e;
    },
    navto: function (e) {
      uni.navigateTo({
        url: "../makeoffers/detailpage",
      });
    },
    //
  },
};
</script>
<style scoped lang="scss">
.textare {
  width: 100%;
  border: solid red;
}
.cu-form-group .title {
  min-width: calc(4em + 15px);
}
.btn-submit {
  background-color: #1c2a86;
  margin: 100upx 20upx;
  color: #fff;
}
page {
  background: #f4f4f4;
}
.demolist {
  display: flex;
  justify-content: space-around;
}
// tabbar切换
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
  //
  .tui-tabbar-item {
    flex: 1;
    width: 25%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    font-size: 32upx;
    color: #666;
    // height: 80rpx;
  }
  .tui-item-active {
    color: #b13b8f !important;
  }
  .tui-ptop-4 {
    padding-top: 4rpx;
  }
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
  .tui-badge-red {
    background: #f74d54;
    color: #fff;
  }
}

.tc_box {
  display: flex;
  justify-content: center;
  .tc_border {
    width: 420rpx;
    height: 340px;
    view:nth-child(1) {
      border-radius: 8px 8px 0px 0px;
      height: 100px;
      background: linear-gradient(0deg, #6a0098, #51025b);
    }
    view:nth-child(2) {
      flex: 2;
      background: #fff;
      height: 150px;
      border-radius: 0px 0px 8px 8px;
    }
  }
}
// 轮播
.home-banner {
  position: relative;
  background-color: #fff;
}
.swiper {
  width: 750rpx;
  height: 280rpx;
  padding-top: 10rpx;
}
.pic {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 16rpx;
  transform: scale(0.94, 0.88);
  transition: transform 0.36s;

  &.current {
    transform: scale(1);
  }
}
.dots {
  position: absolute;
  left: 0;
  bottom: 12rpx;
  width: 100%;
  display: flex;
  justify-content: center;
}
.dot {
  width: 32rpx;
  height: 8rpx;
  margin: 0 6rpx;
  background-color: #fff;
  border-radius: 10px;

  &.current {
    background-color: $base-color;
  }
}
//
</style>