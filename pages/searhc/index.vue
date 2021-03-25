<template>
  <view class="container">
    <view class="tui-searchbox">
      <view class="tui-search-input">
        <icon type="search" :size="13" color="#333"></icon>
        <input
          confirm-type="search"
          placeholder="搜索"
          :focus="true"
          auto-focus
          placeholder-class="tui-input-plholder"
          class="tui-input"
          v-model.trim="key"
          @confirm="sub"
        />
        <icon
          type="clear"
          :size="13"
          color="#bcbcbc"
          @tap="cleanKey"
          v-show="key"
        ></icon>
      </view>
      <view class="tui-cancle" @tap="sub">搜索</view>
    </view>
  </view>
</template>

<script>
import tuiIcon from "@/components/icon/icon";
import tuiTag from "@/components/tag/tag";
import tuiActionsheet from "@/components/actionsheet/actionsheet";
export default {
  components: {
    tuiIcon,
    tuiTag,
    tuiActionsheet,
  },
  data() {
    return {
      key: "",
    };
  },
  onLoad() {},
  methods: {
    sub() {
      uni.redirectTo({
        url: "./searchlist",
      });
    },
    to_search(item) {
      this.key = item;
      this.sub();
    },

    cleanKey: function () {
      this.key = "";
    },
  },
};
</script>

<style>
page {
  color: #333;
  background: #fff;
}

.container {
  padding: 0 30upx 30upx 30upx;
  box-sizing: border-box;
}

.tui-searchbox {
  padding: 30upx 0;
  box-sizing: border-box;
  display: flex;
  align-items: center;
}

.tui-search-input {
  width: 100%;
  height: 66upx;
  border-radius: 35upx;
  padding: 0 30upx;
  box-sizing: border-box;
  background: #f2f2f2;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
}

.tui-input {
  flex: 1;
  color: #333;
  padding: 0 16upx;
  font-size: 28upx;
}

.tui-input-plholder {
  font-size: 28upx;
  color: #b2b2b2;
}

.tui-cancle {
  color: #888;
  font-size: 28upx;
  padding-left: 30upx;
  flex-shrink: 0;
}

.tui-history-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30upx 0;
}

.tui-icon-delete {
  padding: 10upx;
}

.tui-search-title {
  font-size: 28upx;
  font-weight: bold;
}

.tui-hot-header {
  padding: 30upx 0;
}

.tui-tag-class {
  display: inline-block;
  margin-bottom: 20upx;
  margin-right: 20upx;
  font-size: 26upx !important;
}
</style>
