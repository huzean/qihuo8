(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/extend-view/productDetail/productDetail"],{"09aa":function(t,n,e){"use strict";var o=e("e676"),i=e.n(o);i.a},4402:function(t,n,e){"use strict";e.r(n);var o=e("625f"),i=e.n(o);for(var u in o)"default"!==u&&function(t){e.d(n,t,(function(){return o[t]}))}(u);n["default"]=i.a},"625f":function(t,n,e){"use strict";(function(t){function o(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function i(t,n){return s(t)||a(t,n)||r(t,n)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(t,n){if(t){if("string"===typeof t)return c(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?c(t,n):void 0}}function c(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,o=new Array(n);e<n;e++)o[e]=t[e];return o}function a(t,n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var e=[],o=!0,i=!1,u=void 0;try{for(var r,c=t[Symbol.iterator]();!(o=(r=c.next()).done);o=!0)if(e.push(r.value),n&&e.length===n)break}catch(a){i=!0,u=a}finally{try{o||null==c["return"]||c["return"]()}finally{if(i)throw u}}return e}}function s(t){if(Array.isArray(t))return t}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var l=function(){e.e("components/uni/uni-countdown/uni-countdown").then(function(){return resolve(e("b53e"))}.bind(null,e)).catch(e.oe)},h=function(){e.e("components/icon/icon").then(function(){return resolve(e("6752"))}.bind(null,e)).catch(e.oe)},p=function(){e.e("components/tag/tag").then(function(){return resolve(e("a60b"))}.bind(null,e)).catch(e.oe)},d=function(){e.e("components/badge/badge").then(function(){return resolve(e("3547"))}.bind(null,e)).catch(e.oe)},f=function(){e.e("components/nomore/nomore").then(function(){return resolve(e("4e51"))}.bind(null,e)).catch(e.oe)},_=function(){e.e("components/button/button").then(function(){return resolve(e("4aec"))}.bind(null,e)).catch(e.oe)},g=function(){e.e("components/top-dropdown/top-dropdown").then(function(){return resolve(e("f352"))}.bind(null,e)).catch(e.oe)},m=function(){e.e("components/bottom-popup/bottom-popup").then(function(){return resolve(e("c417"))}.bind(null,e)).catch(e.oe)},v=function(){e.e("components/numberbox/numberbox").then(function(){return resolve(e("627a"))}.bind(null,e)).catch(e.oe)},b=function(){e.e("components/hch-poster/hch-poster").then(function(){return resolve(e("1095"))}.bind(null,e)).catch(e.oe)},w={components:{tuiIcon:h,tuiTag:p,tuiBadge:d,tuiNomore:f,tuiButton:_,tuiTopDropdown:g,tuiBottomPopup:m,tuiNumberbox:v,uniCountdown:l,hchPoster:b},data:function(){return{discount_start:0,discount_time:{days:"",hours:"",minutes:"",seconds:""},end_time:"",canvasFlag:!0,posterData:{},content:"",xz_sku_name:"",price:"",x:0,sku_index:"",num:1,is_vip:0,shop_car_num:"",vid:0,sku_arr:"",poster:{},qrShow:!1,is_share:!1,detail:!0,couponList:[],maskState:0,height:64,top:0,scrollH:0,opcity:0,iconOpcity:.5,banner:{url:"http://www.thorui.cn/img/product/11.jpg",url1:"http://www.thorui.cn/img/product/33.jpg"},bannerIndex:0,menuShow:!1,popupShow:!1,goods_num:1,id:"",zk_price:"",list:{},applist:[],collected:"",detailData:"",shareList:"",img_url:this.$img_url,product_info:"",sku_attr:[],sku_value:[],select_product:{},select_attr_value:[]}},onLoad:function(n){var e=this;this.id=n.id,this.$api.CC_request.get_product(this.id).then((function(t){e.content=t.storeInfo.description,e.product_info=t.storeInfo,e.sku_value=t.productValue,e.sku_attr=t.productAttr;for(var n=0,o=Object.entries(t.productAttr);n<o.length;n++){var u=i(o[n],2),r=(u[0],u[1]);e.select_attr_value[e.select_attr_value.length]=r.attr_values[0]}e.sku_attr.length>0?e.select_product=e.sku_value[e.select_attr_value.join(",")]:e.select_product=e.product_info,e.collected=e.product_info.userCollect}));var o=t.getStorageSync("is_login");1==o&&this.$api.CC_request.get_cart_count().then((function(t){e.shop_car_num=t.count}));var u={};u=wx.getMenuButtonBoundingClientRect(),t.getSystemInfo({success:function(t){e.width=u.left||t.windowWidth,e.height=u.top?u.top+u.height+8:t.statusBarHeight+44,e.top=u.top?u.top+(u.height-32)/2:t.statusBarHeight+6,e.scrollH=t.windowWidth}})},methods:{shareFc:function(){var t=this;console.log("生成海报"),Object.assign(this.posterData,{url:this.getimg+this.list.imgs,icon:"https://img0.zuipin.cn/mp_zuipin/poster/hch-hyj.png",title:this.list.goods_name,discountPrice:this.list.price,orignPrice:this.list.market_price,code:"https://img0.zuipin.cn/mp_zuipin/poster/hch-code.png"}),this.$forceUpdate(),setTimeout((function(){t.canvasFlag=!1,t.is_share=!1,t.$refs.hchPoster.createCanvasImage()}),500)},canvasCancel:function(t){this.canvasFlag=t},sku_select_num:function(t){console.log("num:",t.value);var n=t.value;this.num=n},choose_sku_cs:function(t,n){this.select_attr_value[t]=n,this.select_product=this.sku_value[this.select_attr_value.join(",")],console.log(this.select_product)},add_cart:function(){var t=this;this.$api.CC_request.cart_add({productId:this.product_info.id,cartNum:this.num,uniqueId:this.select_product.unique,new:0}).then((function(n){t.$api.msg("加入成功"),t.$api.CC_request.get_cart_count().then((function(n){t.shop_car_num=n.count})),t.popupShow=!1}))},add_shopping:function(){console.log("add_shopping");var n=t.getStorageSync("is_login");n||t.navigateTo({url:"/pages/user/auth/wechat_auth"});this._CreateOrderData()},check_sku:function(){console.log("check_sku");var t=this;if(this.list.sku.length<1)return!0;for(var n=this.list.sku_arr.initialSku,e=0,o=Object.entries(n);e<o.length;e++){var u=i(o[e],2),r=(u[0],u[1]);if(""==r)return t.$api.msg("未选择规格"),!1}return!0},_CreateOrderData:function(){var n=this;this.$api.CC_request.cart_add({productId:this.product_info.id,cartNum:this.num,uniqueId:this.select_product.unique,new:0}).then((function(e){t.setStorageSync("order_cart_id",e.cartId),n.$api.CC_request.get_cart_count().then((function(t){n.shop_car_num=t.count})),t.redirectTo({url:"/pages/order/createOrder?state=buy"})}))},lq_coupon:function(t){var n=this;this.$api.http.get("coupon/add_coupon",{id:t}).then((function(t){200==t.status&&n.$api.msg("领取成功"),400==t.status&&n.$api.msg(t.msg)}))},toggleMask:function(t){var n=this,e="show"===t?10:300,o="show"===t?1:0;this.maskState=2,setTimeout((function(){n.maskState=o}),e)},jump_tohome:function(){t.switchTab({url:"/pages/index/index"})},jump_to:function(){t.setStorageSync("buy",this.list),t.navigateTo({url:"../../order/createOrder?state=buy"})},jump_toshop:function(){t.navigateTo({url:"../../shop/shop"})},jump_toevaluate:function(n){t.navigateTo({url:"../../evaluate/evaluate?id="+n})},jump_tocart:function(){t.switchTab({url:"../../cart/cart"})},bannerChange:function(t){this.bannerIndex=t.detail.current},bigimage:function(n){var e=[],i=this.$getimg;for(var u in this.list.banner_imgs_url){var r=this.list.banner_imgs_url[u];e[u]=i+r}console.log("arr:",e),t.previewImage(o({current:0,urls:e},"current",n))},back:function(){t.navigateBack()},openMenu:function(){this.menuShow=!0},closeMenu:function(){this.menuShow=!1},showPopup:function(){this.popupShow=!0},hidePopup:function(){this.popupShow=!1},change:function(t){this.value=t.value},collecting:function(){var t=this;this.collected?this.$api.CC_request.del_fav_product(this.id).then((function(n){t.$api.msg("取消收藏")})):this.$api.CC_request.fav_product(this.id).then((function(n){t.$api.msg("收藏成功")})),this.collected=!this.collected}},onPageScroll:function(t){var n=t.scrollTop<=0?0:t.scrollTop,e=n/this.scrollH;this.opcity>=1&&e>=1||(this.opcity=e,this.iconOpcity=.5*(1-e<0?0:1-e))},onShareAppMessage:function(t){return{title:"CC"}},onPullDownRefresh:function(){this._load(),setTimeout((function(){t.stopPullDownRefresh()}),2e3)}};n.default=w}).call(this,e("543d")["default"])},"7fdb":function(t,n,e){"use strict";e.r(n);var o=e("c870"),i=e("4402");for(var u in i)"default"!==u&&function(t){e.d(n,t,(function(){return i[t]}))}(u);e("09aa");var r,c=e("f0c5"),a=Object(c["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],r);n["default"]=a.exports},c870:function(t,n,e){"use strict";var o;e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return o}));var i=function(){var t=this,n=t.$createElement;t._self._c},u=[]},e676:function(t,n,e){},eed4:function(t,n,e){"use strict";(function(t){e("f238");o(e("66fd"));var n=o(e("7fdb"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])}},[["eed4","common/runtime","common/vendor"]]]);