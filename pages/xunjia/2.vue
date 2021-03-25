<template>
  <view class="container">
    <!--  -->
    <scroll-view scroll-y="true" style="height: 600px">
      <form>
        <view class="inputbox">
          <view class="product">
            <text>选择品牌:</text>
            <!-- <input type="text" :value="n.apples" /> -->
            <picker @change="product" :value="indexs" :range="pickerproduct">
              <view class="picker">
                {{ indexs > -1 ? pickerproduct[indexs] : "百事可乐" }}
              </view>
            </picker>
          </view>
          <view class="select_roduct">
            <text>采购数量:</text>
            <input type="text" />
          </view>
          <view class="quantity">
            <!-- <text>{{ item.quantity }}</text>
          <input type="text" /> -->
            <text>选择产品:</text>
            <picker @change="quantity" :value="indexa" :range="pickerquantity">
              <view class="picker">
                {{ indexa > -1 ? pickerquantity[indexa] : "王老吉" }}
              </view>
            </picker>
          </view>
        </view>
        <!-- <view class="add_button">
        <button @click="clickTest">增加</button>
      </view> -->
        <!-- </scroll-view> -->
        <view
          class="inputbox"
          v-for="(item, index) in productList"
          :key="index"
        >
          <view class="product">
            <text>选择品牌:</text>
            <!-- <input type="text" :value="n.apples" /> -->
            <picker @change="product" :value="indexs" :range="pickerproduct">
              <view class="picker">
                {{ indexs > -1 ? pickerproduct[indexs] : "百事可乐" }}
              </view>
            </picker>
          </view>
          <view class="select_roduct">
            <text>采购数量:</text>
            <input type="text" />
          </view>
          <view class="quantity">
            <!-- <text>{{ item.quantity }}</text>
          <input type="text" /> -->
            <text>选择产品:</text>
            <picker @change="quantity" :value="indexa" :range="pickerquantity">
              <view class="picker">
                {{ indexa > -1 ? pickerquantity[indexa] : "王老吉" }}
              </view>
            </picker>
          </view>
        </view>
      </form>
      <view class="add_button">
        <button @click="clickTest">增加</button>
      </view>
      <view class="cu-form-group">
        <view class="title"
          >日期选择:
          <picker
            mode="date"
            :value="date"
            start="2015-09-01"
            end="2020-09-01"
            @change="DateChange"
          >
            <view class="picker">
              {{ date }}
            </view>
          </picker>
        </view>

        <view class="title"
          >截止时间:
          <picker
            mode="time"
            :value="time"
            start="09:01"
            end="21:01"
            @change="TimeChange"
          >
            <view class="picker_left">
              {{ time }}
            </view>
          </picker>
        </view>
      </view>
      <view class="tui-picker-content">
        <view class="tui-picker-name">收货地址</view>
        <picker bindchange="changeRegin" mode="region" value="region">
          <view class="tui-picker-detail"
            >{{ region[0] }} - {{ region[1] }} - {{ region[2] }}</view
          >
        </picker>
      </view>
      <!-- 详细 -->
      <view class="align-start">
        <view class="title">详细说明</view>
        <textarea
          maxlength="-1"
          :disabled="modalName != null"
          @input="textareaBInput"
          placeholder="多行文本输入框"
        ></textarea>
      </view>
      <button class="add-btn" formType="submit" type="primary" @click="sub">
        提交
      </button>
    </scroll-view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      indexs: -1,
      indexa: -1,
      time: "12:01",
      date: "2018-12-25",
      modalName: null,
      pickerproduct: ["百事可乐", "可口可乐", "农夫山泉", "汇泉"],
      pickerquantity: ["王老吉", "红牛", "可乐", "脉动", "冰红茶", "奶茶"],
      region: ["广东省", "广州市", "天河区"],
      textareaBValue: "",
      productList: [
        // {
        //   // product: "产品名称",
        //   // selectroduct: "选择名称",
        //   // quantity: "输入数量",
        // },
      ],
    };
  },
  methods: {
    deletenum: function () {},
    // 选择品牌
    product(e) {
      this.indexs = e.detail.value;
    },
    // 选择产品
    quantity(e) {
      this.indexa = e.detail.value;
    },
    // 选择时间
    TimeChange(e) {
      this.time = e.detail.value;
    },
    // 详情
    textareaBInput(e) {
      this.textareaBValue = e.detail.value;
    },
    sub() {
      uni.showToast({
        title: "上传成功",
        icon: "success",
        duration: 1000,
      });
      setTimeout(() => {
        uni.navigateTo({
          url: "../enquirydetails/index",
        });
      }, 2000);
    },
    textareaBInput(e) {
      this.textareaBValue = e.detail.value;
    },
    clickTest: function (e) {
      console.log(e);
      console.log("click");
      let listcard = {
        // product: "产品名称",
        // selectroduct: "选择名称",
        // quantity: "输入数量",
      };
      this.productList.push(listcard);
    },
  },
};
</script>

<style lang="scss">
page {
  background: #fafafa;
  width: 100%;
  height: 100%;
}

.container {
  width: 100%;
  // display: flex;
  .picker {
    width: 200px;
    height: 50rpx;
    color: #c9bfbf;
    font-size: 28rpx;
    // border:solid red 1px;
  }
}
.inputbox {
  width: 90%;
  // height:250rpx;
  padding: 25rpx 25rpx 20rpx 25rpx;
  margin: 40rpx auto 0 auto;
  background: #fff;
  border-radius: 15rpx;

  input {
    border-bottom: solid #f4f4f4 1px;
    margin: 0 25rpx;
    height: 45rpx;
  }
  text {
    margin: 0 15rpx;
  }
  .product {
    padding: 25rpx 0;
    display: flex;
    flex: 2;
    border-bottom: solid #f4f4f4 1px;
    input {
      flex: 4;
    }
    .picker {
      margin-left: 20px;
    }
  }
  .select_roduct {
    padding: 25rpx 0;
    display: flex;
    flex: 2;
    input {
      flex: 5;
      margin-left: 20rpx;
    }
  }
  .quantity {
    padding: 20rpx 0;
    display: flex;
    flex: 2;
    border-bottom: solid #f4f4f4 1px;

    input {
      flex: 5;
      margin-left: 20rpx;
    }
    .picker {
      margin-left: 20px;
    }
  }
}
.add_button {
  width: 100%;
  // border:solid red 1px;
  width: 90%;
  // height:250rpx;
  // padding: 25rpx 0;
  margin: 15rpx auto;
  button {
    padding: 0;
    width: 110rpx;
    margin-right: 0px;
    font-size: 26rpx;
  }
}
// 时间
.cu-form-group {
  width: 100%;
  // height:100px;
  padding: 35rpx;
  display: flex;
  justify-content: space-between;
  border-bottom: solid #1f9dc4 1px;
  .picker {
    width: 100px;
    display: flex;
    // justify-content: space-around;
    font-size: 32rpx;
    padding-left: 10rpx;
  }
  .picker_left {
    width: 87px;
    padding-left: 18rpx;
    color: #c9bfbf;
  }
  .title {
    display: flex;
    margin-left: 8px;
    //  justify-content: space-around;
  }
}
.tui-picker-content {
  width: 100%;
  margin: 0 auto;
  border-bottom: solid #1f9dc4 2px;
  padding: 50rpx 0;
  display: flex;
  .tui-picker-name {
    width: 180rpx;
    margin-left: 60rpx;
  }
  .tui-picker-detail {
    flex: 5;
  }
}
.align-start {
  textarea {
    width: 100%;
    height: 100rpx;
  }
}
</style>