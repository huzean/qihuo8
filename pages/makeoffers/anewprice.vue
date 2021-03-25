<template>
  <view>
       <view class="anewprice">
           <view>重新报价:</view>
           <view><input type="number" v-model="price" placeholder="请输入"></view>
       </view>
       <view class="btn_button">
<button @click="bindtipe">提交</button>
       </view>
  </view>
</template>

<script>
export default {
data(){
    return{
price:"",
    }
},
methods:{
bindtipe:function(e){
    let isprice=this.price
    if(!isprice){
      uni.showToast({
        title: "请输入",
        icon: "none",
        duration: 2000,
      });
    }
    console.log("111",this.price)
}
}
}
</script>

<style lang="scss">
.anewprice{
    width:100%;
    margin-top:10px;
    display: flex;
    border-top:solid #f4f4f4 1px;
    border-bottom:solid #f4f4f4 1px;
    line-height: 35px;
    padding:6px 0;
    view:nth-child(1){
        margin-right: 20px;
        margin-left:10px;
        font-size:28rpx;
    }
    view:nth-child(2){
        input{
            margin-top:6px;
        }
        .input-placeholder {
      color: #e4e0e0;
      font-size: 11px;
    }
    }
}
.btn_button{
    margin-top:100rpx;
    button{
        width:85%;
        font-size:30rpx;
        background:rgb(228, 62, 12);
    }
}
</style>