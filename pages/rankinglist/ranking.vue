<template>
  <view>
    <view class="ranking_box">
      <view class="ranking_list">
        <view
          class="nav_item_noe"
          v-for="(item, index) in navList"
          :key="index"
          :class="index == navactive ? 'actives' : ''"
          @tap="lun_bo(index)"
        >
          {{ item.name }}
        </view>
      </view>
      <!-- 时间段 -->
      <view class="stime_box">
        <view class="stime_left">--选择时间段--</view>
        <view class="stime_right">
          <view @click="handclick_pop"
            >{{ rankinglist }}
            <text class="iconfont icon-winfo-icon-xiajiantou"></text>
          </view>
        </view>
      </view>
      <view class="pop_up" v-if="!isshow">
        <view>
          <scroll-view scroll-y style="height: 120px">
            <text
              v-for="(item, index) in npopuplist"
              :key="index"
              :class="index == npopuplist ? 'active_pup' : ''"
              @tap="lun_popup(index, item.name)"
              >{{ item.name }}</text
            >
          </scroll-view>
        </view>
      </view>
      <!--  -->
      <view class="center_box">
        <view class="plan1" v-if="navactive == 0">
          <view class="rankinglist">
            <view class="rankinglist_noe">1</view>
            <view class="center">
              <view class="center_head">
                <view class="head">
                  <image
                    src="../../static/images/mall/nav/rankingr.png"
                    mode="widthFix"
                  />
                </view>
              </view>
              <view class="center_name">
                <text>昵称</text>
                <text>累计签到时间</text>
              </view>
            </view>
            <view>
              <view class="attention">
                <!-- <text></text> -->
                <text>关注</text>
              </view>
            </view>
          </view>
          <!--  -->
            <view class="rankinglist">
            <view class="rankinglist_noe">2</view>
            <view class="center">
              <view class="center_head">
                <view class="head">
                  <image
                    src="../../static/images/mall/nav/rankingr.png"
                    mode="widthFix"
                  />
                </view>
              </view>
              <view class="center_name">
                <text>昵称</text>
                <text>累计签到时间</text>
              </view>
            </view>
            <view>
              <view class="attention">
                <!-- <text></text> -->
                <text>关注</text>
              </view>
            </view>
          </view>
          <!--  -->
              <!--  -->
            <view class="rankinglist">
            <view class="rankinglist_noe">3</view>
            <view class="center">
              <view class="center_head">
                <view class="head">
                  <image
                    src="../../static/images/mall/nav/rankingr.png"
                    mode="widthFix"
                  />
                </view>
              </view>
              <view class="center_name">
                <text>昵称</text>
                <text>累计签到时间</text>
              </view>
            </view>
            <view>
              <view class="attention">
                <!-- <text></text> -->
                <text>关注</text>
              </view>
            </view>
          </view>
          <!--  -->
             <!--  -->
            <view class="rankinglist">
            <view class="rankinglist_noe">4</view>
            <view class="center">
              <view class="center_head">
                <view class="head">
                  <image
                    src="../../static/images/mall/nav/rankingr.png"
                    mode="widthFix"
                  />
                </view>
              </view>
              <view class="center_name">
                <text>昵称</text>
                <text>累计签到时间</text>
              </view>
            </view>
            <view>
              <view class="attention">
                <!-- <text></text> -->
                <text>关注</text>
              </view>
            </view>
          </view>
          <!--  -->
        </view>

        <!-- <view class="plan1" v-if="navactive == 1">2</view>
        <view class="plan1" v-if="navactive == 2">3</view>
        <view class="plan1" v-if="navactive == 3">4</view> -->
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      navactive: 0,
      navList: [
        { name: "求购" },
        { name: "报价" },
        { name: "开牌" },
        { name: "积分" },
      ],
      npopuplist: [
        { name: "日排行" },
        { name: "周排行" },
        { name: "月排行" },
        { name: "111" },
        { name: "222" },
        { name: "333" },
      ],
      isshow: true,
      rankinglist: "日排行",
    };
  },
  methods: {
    lun_bo(e) {
      this.navactive = e;
      console.log(e);
    },
    handclick_pop() {
      this.isshow = !this.isshow;
    },
    lun_popup(index, name) {
      this.rankinglist = name;
      this.isshow = !this.isshow;
    },
  },
};
</script>
<style lang="scss">
page {
  background: #5e017a;
}
.ranking_box {
  width: 100%;
  padding: 20px 10px;
  .ranking_list {
    display: flex;
    border: solid #5e017a 1px;
    border-radius: 2px;
    background: #fff;
    view {
      height: 38px;
      display: flex;
      flex: 4;
      align-items: center;
      justify-content: center;
      border-right: solid #5e017a 1px;
      font-size: 13px;
    }
    view:last-child {
      border-right: none;
    }
  }
  .actives {
    font-weight: bold;
    background: linear-gradient(121deg, #ff0188 0%, #fe011d 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
// 时间段
.stime_box {
  width: 100%;
  padding: 20px 0px;
  display: flex;
  justify-content: space-between;
  position: relative;
  .stime_left {
    display: flex;
    align-items: center;
    font-size: 13px;
    color: #fff;
  }
  .stime_right {
    color: #fff;
    display: flex;
    font-size: 13px;
    font-weight: bold;
    text {
      font-size: 13px;
      margin-left: 5px;
    }
  }
}
// 弹窗
.pop_up {
  width: 100px;
  height: 120px;
  background: #fff;
  position: absolute;
  top: 100px;
  right: 10px;
  border-radius: 3px;
  view {
    display: flex;
    flex-direction: column;
    text {
      display: flex;
      justify-content: center;
      border-bottom: solid #999 1px;
      padding: 7px 0;
      font-size: 15px;
    }
  }
}
.center_box {
  width: 100%;
  height: 600px;
  background: #f0f2f5;
  //  margin-top:20px;
  border-radius: 6px;
  .plan1 {
    .rankinglist {
      width: 100%;
      display: flex;
      background: #fff;
      height: 140rpx;
      margin-bottom: 15px;
      .rankinglist_noe {
        font-style: italic;
        font-weight: bold;
        font-size: 24px;
        background: linear-gradient(121deg, #ff0188 0%, #fe011d 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      view:nth-child(1) {
        flex: 1;
        display: flex;
        align-items: center;
        padding-left: 10px;
      }
      view:nth-child(2) {
        flex: 6;
      }
      view:nth-child(3) {
        flex: 2;
        display: flex;
      }
      .attention {
        display: flex;
        height: 25px;
        justify-content: center;
        margin: 20px 5px;
        border-radius: 15px;
        background: linear-gradient(0deg, #c33d9d 0%, #862b6e 100%);
        color: #fff;
        font-size: 14px;
      }
      .center {
        display: flex;
        .center_name {
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin-left: 15px;
        }
        .head {
          image {
            width: 46px;
            // border-radius: 50%;
          }
        }
      }
    }
  }
}
</style>