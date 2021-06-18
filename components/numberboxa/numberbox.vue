<template>
  <view>
    <view @tap="plus" class="name">加入询价</view>
  </view>
</template>
<script>
export default {
  name: "tuiNumberbox",
  props: {
    value: {
      type: Number,
      default: 1,
    },
    step: {
      type: Number,
      default: 1,
    },
    //是否禁用操作
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    val() {
      return this.value;
    },
  },
  data() {
    return {};
  },
  methods: {
    px(num) {
      return uni.upx2px(num) + "px";
    },
    getScale() {
      let scale = 1;
      //浮点型
      if (!Number.isInteger(this.step)) {
        scale = Math.pow(10, (this.step + "").split(".")[1].length);
      }
      return scale;
    },
    calcNum: function (type) {
      if (this.disabled) {
        return;
      }
      const scale = this.getScale();
      let num = this.value * scale;
      let step = this.step * scale;
      if (type === "reduce") {
        num -= step;
      } else if (type === "plus") {
        num += step;
      }
      let value = num / scale;
      if (value < this.min || value > this.max) {
        return;
      }

      this.handleChange(value, type);
    },
    plus: function () {
      this.calcNum("plus");
      var is_login = uni.getStorageSync("is_login");
      if (is_login == 0) {
        uni.showModal({
          title: "温馨提示",
          content: "选择登录，更多服务",
          success: function (res) {
            if (res.confirm) {
              uni.navigateTo({
                url: "/pages/user/user",
              });
            } else if (res.cancel) {
              return;
            }
          },
        });
      }else{
            uni.navigateTo({
                url: "/pages/inquirylist/index",
              });
      }
          
    },
    reduce: function () {
      this.calcNum("reduce");
    },
    blur: function (e) {
      let value = e.detail.value;
      if (value) {
        value = +value;
        if (value > this.max) {
          value = this.max;
        } else if (value < this.min) {
          value = this.min;
        }
      } else {
        value = this.min;
      }
      this.handleChange(value, "blur");
    },
    handleChange(value, type) {
      if (this.disabled) {
        return;
      }
      this.$emit("change", {
        value: value,
        type: type,
      });
    },
  },
};
</script>
<style>
.name{
  display: flex;
  justify-content: center;
  font-size:13px;
  float:right;
  padding:5px 8px;
  border-radius: 10px;
  border:solid #f4f4f4 1px;
  background:#f0f2f5;

}
</style>
