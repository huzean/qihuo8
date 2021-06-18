<template>
  <view class="modal-bg" v-show="show">
    <view class="modal-container">
      <view class="modal-header">
        <image
          style="width: 60rpx"
          src="../../static/images/mall/nav/hint.png"
          mode="widthFix"
        />
        <text class="title_name">温馨提示</text>
      </view>
      <view class="modal-main">
        <view class="name_consume">{{ parentmsg }}</view>
        <view class="name_num">
          <text>-2</text>
          <text>积分</text>
        </view>
      </view>
      <view class="modal-footer">
        <!-- 我知道了 -->
        <view class="btn" v-show="iseeshow" @click="close()">{{ isee }}</view>
        <!--  去修改-->
        <view class="btn" v-show="confirmshow" @click="xiiougai()">{{ amendquote }}</view>
        <view class="btn_cancel"  @click="confirm">取消</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      currentShow: false,
    };
  },
  props: {
    value: Boolean,
    show: Boolean,
    iseeshow:Boolean,
    confirmshow:Boolean,
    parentmsg: { type: String },
    amendquote: { type: String },
    isee: { type: String },
  },

  watch: {
    value(newVal, lodVal) {
      this.currentShow = newVal;
    },
    show(newVal, lodVal) {
      this.currentShow = newVal;
    },
   
  },
  methods: {
    confirm() {
      this.$emit("confirm");
      this.$emit("", true);
    },
    close() {
      this.$emit("close");
    },
    xiiougai() {
      this.$emit("xiiougai");
    },
  },
};
</script>

<style lang="less">
//弹窗111
.modal-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
  // display: none;
}
.modal-container {
  width: 520rpx;
  background: #fff;
  border-radius: 9px;
  overflow: hidden;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #5e017a;
}
.modal-header {
  height: 140rpx;
  font-size: 18px;
  color: #000;
  display: flex;
  justify-content: center;
  margin-top: 30rpxpx;
  flex-direction: column;
  align-items: center;
  .title_name {
    font-size: 12px;
    margin-top: 20rpx;
    font-weight: bold;
    color: #5e017a;
  }
}
.modal-footer {
  height: 175rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid #5e017a;
  justify-content: space-around;
  // height: 50px;
  .btn_cancel {
    margin: 20rpx 0;
  }
  .btn {
    margin-top: 20rpx;
    font-size: 13px;
    background: #5e017a;
    padding: 8px 50rpx;
    border-radius: 20px;
    color: #fff;
  }
}
.modal-footer button {
  // width: 100px;
}
.modal-main {
  height: 120rpx;
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .name_consume {
    font-size: 13px;
  }
  .name_num {
    text:nth-child(1) {
      font-size: 15px;
      margin-top: 20rpx;
      font-weight: bold;
    }
    text:nth-child(2) {
      font-size: 12px;
      margin-left: 5px;
    }
  }
}
</style>