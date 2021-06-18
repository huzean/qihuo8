<template>
  <view class="tui-set-box">
    <tui-list-cell padding-top="100rpx" :lineLeft="false" :arrow="true">
      <view class="tui-list-cell tui-info-box">
        <view>账户积分余额：</view>
        <view> 20</view>
      </view>
    </tui-list-cell>
    <view
      v-for="(recharge_type, type_index) in recharge_type_list"
      :key="recharge_type.id"
    >
      <tui-list-cell padding="0" :lineLeft="false">
        <view class="tui-list-cell">
          {{ recharge_type.coin }}
          <!-- 01 -->
        </view>
        <button
          class="tui-btn tui-btn-block tui-fillet tui-btn-buy"
          hover-class="tui-danger-hover"
          @click="buy_coin(recharge_type.id)"
        >
          ¥{{ recharge_type.money }}
        </button>
      </tui-list-cell>
    </view>
  </view>
</template>

<script>
import tuiListCell from "@/components/list-cell/list-cell";
import tuiButton from "@/components/extend/button/button";
export default {
  components: {
    tuiListCell,
    tuiButton,
  },
  data() {
    return {
      current_user: {},
      recharge_type_list: [],
    };
  },
  onLoad() {
    this.$api.CC_request.get_user().then((res) => {
      if (res != 401) {
        this.current_user = res;
      }
    });
    this.$api.CC_request.get_recharge_type_list().then((res) => {
      this.recharge_type_list = res;
    });
  },
  methods: {
    href(page) {
      let url = "";
      switch (page) {
        case 1:
          url = "/pages/user/verify/verify";
          break;
        case 2:
          url = "../address/address";
          break;
        default:
          break;
      }
      uni.navigateTo({
        url: url,
      });
    },
    buy_coin(recharge_type_id) {
      this.$api.CC_request.buy_coin(recharge_type_id).then((res) => {
        var order_id = res.result.orderId;
        var jsConfig = res.result.jsConfig;
        this.order_id = order_id;
        this.pay(jsConfig);
      });
    },
    //小程序支付订单
    pay(data) {
      const order_id = this.order_id;
      uni.requestPayment({
        provider: "wxpay",
        timeStamp: data.timestamp,
        nonceStr: data.nonceStr,
        package: data.package,
        signType: data.signType,
        paySign: data.paySign,
        success: function (res) {},
        fail: function (err) {},
      });
    },
  },
};
</script>

<style>
@import "../../../static/style/thorui.css";
.tui-set-box {
  padding-bottom: 20rpx;
  color: #333;
}

.tui-list-cell {
  display: flex;
  align-items: center;
  padding: 24rpx 30rpx;
  margin-right: 10rpx;
  font-size: 32rpx;
}
.tui-btn-buy {
  margin: 10rpx 10rpx 10rpx 10rpx;
  background-color: #5e017a;
  color: #ffffff;
}

.tui-info-box {
  font-size: 34rpx;
}

.tui-avatar {
  width: 140rpx;
  height: 140rpx;
  margin-right: 20rpx;
}

.tui-mtop {
  margin-top: 20rpx;
}

.tui-exit {
  padding: 100rpx 24rpx;
}
</style>
