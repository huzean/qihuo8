import Vue from 'vue'
import App from './App'  
import http from './common/axios.js'
import CC_request from './common/ccapi.js'
import {Api_url} from './common/config'	//去这里修改API域名
import {img_url} from './common/config'	//去这里修改图片服务器
import {Shop_app_key} from './common/config'	//店铺KEY
import {shop_name} from './common/config'
import {Map_App_key} from './common/config'//地图key
import "./static/style/icon/iconfont.css";//全局阿里字体图标


App.mpType = 'app'
uni.getSystemInfo({
	success: function (res) {
	  let modelmes = res.model;
	  console.log("手机型号-------", res.model);
	  if (
		modelmes.indexOf("iPhone X") >= 0 ||
		modelmes.indexOf("iPhone XR") >= 0 ||
		modelmes.indexOf("iPhone XS") >= 0 ||
		modelmes.indexOf("iPhone 12") >= 0 ||
		modelmes.indexOf("iPhone 11") >= 0 ||
		modelmes.indexOf("iPhone11") >= 0 ||
		modelmes.indexOf("iPhone12") >= 0 ||
		modelmes.indexOf("iPhoneXR") >= 0 ||
		modelmes.indexOf("iPhoneX") >= 0
	  ) 
	  {
		Vue.prototype.$is_bang = true;
	  } else {
		Vue.prototype.$is_bang = false;
	  }
	},
  });

const msg = (title, duration=1500, mask=false, icon='none')=>{
	//统一提示方便全局修改
	if(Boolean(title) === false){
		return;
	}
	uni.showToast({
		title,
		duration,
		mask,
		icon
	});
}
const prePage = ()=>{
	let pages = getCurrentPages();
	let prePage = pages[pages.length - 2];
	// #ifdef H5
	return prePage;
	// #endif
	return prePage.$vm;
}
Vue.prototype.$api = {msg,http,prePage,CC_request};
Vue.prototype.$api_url = Api_url;
Vue.prototype.$shop_app_key = Shop_app_key;
Vue.prototype.$img_url = img_url;
Vue.prototype.$shop_name = shop_name;
Vue.prototype.$Map_App_key = Map_App_key;
 
   					 		


App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()


