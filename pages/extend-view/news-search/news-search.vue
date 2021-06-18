<template>
  <view class="container">
    <view class="tui-searchbox">
      <view class="tui-search-input">
        <!-- #ifdef APP-PLUS || MP -->
        <icon type="search" :size="13" color="#333"></icon>
        <!-- #endif -->
        <!-- #ifdef H5 -->
        <view><tui-icon name="search" :size="16" color="#333"></tui-icon></view>
        <!-- #endif -->
        <input
          confirm-type="search"
          placeholder="搜索"
          :focus="true"
          auto-focus
          placeholder-class="tui-input-plholder"
          class="tui-input"
          v-model.trim="key"
          @confirm="sub"
		    @input="set"
        />
        <!-- #ifdef APP-PLUS || MP -->
        <icon
          type="clear"
          :size="13"
          color="#bcbcbc"
          @tap="cleanKey"
          v-show="key"
        ></icon>
        <!-- #endif -->
        <!-- #ifdef H5 -->
        <view @tap="cleanKey" v-show="key"
          ><tui-icon name="close-fill" :size="16" color="#bcbcbc"></tui-icon
        ></view>
        <!-- #endif -->
      </view>
      <view class="tui-cancle" @tap="sub">搜索</view>
    </view>
    <!-- <view class="tui-search-history" v-if="history.length > 0">
      <view class="tui-history-header">
        <view class="tui-search-title">搜索历史</view>
        <tui-icon
          name="delete"
          :size="14"
          color="#333"
          @tap="openActionSheet"
          class="tui-icon-delete"
        ></tui-icon>
      </view>
      <view class="tui-history-content">
        <block v-for="(item, index) in history" :key="index">
          <tui-tag type="gray" shape="circle" @click="to_search(item)">{{
            item
          }}</tui-tag>
        </block>
      </view>
    </view> -->
<view class="list">
        <view class="text" v-for="(item, index) in filterList" :key="index" @tap="search_key(item)" >
          <view class="iconfont icon-sousuo"></view>
          <rich-text type="text" class="font-size" :nodes="item"  ></rich-text>
          <!-- <text class="font-size">{{item}}</text> -->
        </view>
      </view>
    <view class="tui-search-hot">
      <view class="tui-hot-header">
        <view class="tui-search-title" >大家正在搜</view>
        <view
          class="history_box"
          v-for="(item, index) in historyList"
          :key="index"
        >
          <view class="history_item" @tap="search_key(item)">{{ item }}</view>
        </view>
        
      </view>
      <!-- <view class="tui-hot-content">
        <block v-for="(item, index) in hot" :key="index">
          <tui-tag type="gray" shape="circle" @click="to_search(item)">
            {{item}}</tui-tag>
        </block>
      </view> -->
    </view>
    <tui-actionsheet
      :show="showActionSheet"
      :tips="tips"
      @click="itemClick"
      @cancel="closeActionSheet"
    ></tui-actionsheet>
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
      record_list: [],
      history: [],
      hot: [],
      historyList: [],
	   list: [
        "王老吉","王老吉250ml", "可乐330ml迷你","可乐250ml罐装","可乐680ml瓶装","怡宝550ml","怡宝1.5L","怡宝250ml","加多宝250ml","冰红茶550ml",
        "农夫山泉550ml", "20椰汁椰国1.25L", "红牛150ml",  "珠江0度",  "雀巢咖啡",  "百岁山550ml",  "5L农夫山泉",
        '康师傅拉卤牛肉面(五连包)',
        '康师傅卤香牛肉',
        '康师傅鲜虾鱼板',
        '康师傅大食袋香菇炖鸡(1箱*30袋)',
      ],
      filterList: [],
      key: "",
      showActionSheet: false,
      tips: "确认清空搜索历史吗？",
    };
  },
  onLoad() {
    this.get_record();
    this.get_hotSearch();
    this. historylist();
	//  this.fuzzysearch();
  },
  methods: {
// 	  fuzzysearch(){
// 		    this.$api.CC_request.get_serach_keys().then((res) => {
//    this.list=res
//    console.log("搜索",res)
//    });
	//   },
historylist(){
   this.$api.CC_request.get_serach_keys().then((res) => {
   this.historyList=res
   console.log("搜索",res)
   });
},
    get_record() {},
    get_hotSearch() {},
	set(e){
  let value = e.detail.value;
  let valuek=this.key
  // console.log("mm",this.key)
      if (!value=="") {
        this.filterList = this.list;
      }
      if (value == "" ) {
        this.filterList = "";
        return
      }
      let filterArr = [];
      // 过滤出符合条件的值
      this.list.forEach((item, index) => {
        if (item.includes(value)) {
          filterArr.push(this.join(item, value));
        }
      });
      this.filterList = filterArr;
	},
	 join(str, key) {
      var reg = new RegExp(`(${key})`, "gm");
      // var replace = '<span style="color:rgb(236, 145, 7);margin-left:10px;"> $1 </span>';
	  var replace ="$1";
	  // var replace = str.replace(/<.*?>+/g, "");
      return str.replace(reg, replace);
    },

    sub(e) {
		// console.log("0001111",e)
      uni.redirectTo({
        url: "../productList/productList?searchKey=" + this.key,
      });
    },
	
    search_key: function (key) {
      uni.navigateTo({
        url: "/pages/extend-view/productList/productList?searchKey=" + key,
      });
    },
    to_search(item) {
      this.key = item;
      this.sub();
    },
    back: function () {
      uni.navigateBack();
    },
    cleanKey: function () {
      this.key = "";
    },
    closeActionSheet: function () {
      this.showActionSheet = false;
    },
    openActionSheet: function () {
      this.showActionSheet = true;
    },
    itemClick: function (e) {
      let index = e.index;
      if (index == 0) {
        this.showActionSheet = false;
        this.history = [];
      }
    },
    // 
    // 
  },
};
</script>

<style lang="scss">
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
// 模糊搜索
.list {
  & > view {
    padding: 20rpx;
      background:#fff;

    & + view {
      // background:#fff;
      border-top: #e5e5e5 solid 1px;
      border-bottom: #e5e5e5 solid 1px;
    }
  }
  .text{ 
  display: flex;
  align-items: center;
.iconfont{
  font-size:18px;
  margin-right:5px;
  }
  }
}
.font-size{
  font-size:13px;
}
/* 大家正在搜 */
.history_box {
  margin: 0 8px;
  margin-top: 10px;
  float: left;
  .history_item {
    background: #f5f5f5;
    border-radius: 5px;
    padding: 5px 15px;
    text-align: center;
  }
}
</style>
