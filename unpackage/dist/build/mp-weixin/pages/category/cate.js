(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/category/cate"],{"4a7e":function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return c})),e.d(n,"a",(function(){return i}));var a=function(){var t=this,n=t.$createElement;t._self._c},c=[]},5209:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=function(){e.e("components/numberbox/numberbox").then(function(){return resolve(e("627a"))}.bind(null,e)).catch(e.oe)},a=function(){e.e("components/icon/icon").then(function(){return resolve(e("6752"))}.bind(null,e)).catch(e.oe)},c=function(){e.e("components/badge/badge").then(function(){return resolve(e("3547"))}.bind(null,e)).catch(e.oe)},r=function(){e.e("components/tag/tag").then(function(){return resolve(e("a60b"))}.bind(null,e)).catch(e.oe)},u=function(){e.e("components/loadmore/loadmore").then(function(){return resolve(e("c0fd"))}.bind(null,e)).catch(e.oe)},o=function(){e.e("components/nomore/nomore").then(function(){return resolve(e("4e51"))}.bind(null,e)).catch(e.oe)},s={components:{tuiNumberbox:i,tuiIcon:a,tuiBadge:c,tuiTag:r,tuiLoadmore:u,tuiNomore:o},data:function(){return{current:1,tabbar:[{icon:"home",text:"首页",size:21},{icon:"category",text:"分类",size:24},{icon:"cart",text:"购物车",size:22},{icon:"people",text:"我的",size:24}],hotSearch:["加多宝套餐","加多宝罐装","加多宝盒装"],img_url:this.$img_url,sizeCalcState:!1,tabScrollTop:0,currentId:0,currentSindex:-1,currentName:"",flist:[],slist:[],productList:[],pageIndex:1,page_limit:10,cart_num:[],cart_item_num:0,pullUpOn:!0,banner:[],touchData:{}}},onLoad:function(){},onShow:function(){var n=this;t.setNavigationBarTitle({title:this.$shop_name}),this.cart_num=[],this.pullUpOn=!0,this.pageIndex=1,this.productList=[],this.$api.CC_request.get_fcategory_list().then((function(t){console.log("1111",t),n.flist=[];var e=t;e.forEach((function(t){n.flist.push(t)})),n.currentId=0,n.currentName=e[0].cate_name,n.tabtap(0),console.log(n.slist[n.currentSindex]),n.loadProductDataByCateId(0)}))},onShareAppMessage:function(t){return{title:this.$shop_name,path:"/pages/index/index"}},methods:{loadProductData:function(){var t=this;0!=this.pullUpOn&&this.$api.CC_request.get_products({sid:this.flist[this.currentId].id,cid:this.flist[this.currentId].pid,page:this.pageIndex,limit:this.page_limit}).then((function(n){n.length<t.page_limit&&(t.pullUpOn=!1);var e=n;t.$api.CC_request.get_cart_list().then((function(n){if(401==n)t.productList=t.productList.concat(e);else{var i=n.valid;t.cart_item_num=i.length,e.forEach((function(n){n.cart_num=0,t.cart_num[n.id]={cart_id:0,num:0},i.forEach((function(e){n.id==e.product_id&&(n.cart_num=e.cart_num,t.cart_num[n.id]={cart_id:e.id,num:e.cart_num})}))})),t.productList=t.productList.concat(e)}}))}))},loadProductDataByCateId:function(){var t=this,n=0;-1!=this.currentSindex&&(n=this.slist[this.currentSindex].id),0!=this.pullUpOn&&this.$api.CC_request.get_products({sid:n,cid:this.flist[this.currentId].id,page:this.pageIndex,limit:this.page_limit}).then((function(n){n.length<t.page_limit&&(t.pullUpOn=!1);var e=n;t.$api.CC_request.get_cart_list().then((function(n){if(401==n)t.productList=t.productList.concat(e);else{var i=n.valid;t.cart_item_num=i.length,e.forEach((function(n){n.cart_num=0,t.cart_num[n.id]={cart_id:0,num:0},i.forEach((function(e){n.id==e.product_id&&(n.cart_num=e.cart_num,t.cart_num[n.id]={cart_id:e.id,num:e.cart_num})}))})),t.productList=t.productList.concat(e)}}))}))},tabtap:function(t){this.currentName=this.flist[t].cate_name,this.currentId=t,this.currentSindex=-1,this.pageIndex=1,this.pullUpOn=!0,this.slist=this.flist[t].children,this.productList=[],this.loadProductDataByCateId()},choose_scate:function(t){this.currentSindex=t,this.productList=[],this.pageIndex=1,this.pullUpOn=!0,this.loadProductDataByCateId()},reachBottom:function(){0!=this.pullUpOn&&(this.pageIndex=this.pageIndex+1,this.loadProductDataByCateId())},asideScroll:function(t){Math.round(t.detail.scrollTop)},detail:function(n){t.navigateTo({url:"/pages/extend-view/productDetail/productDetail?id="+n})},gotoPage:function(n){t.navigateTo({url:n})},search:function(){t.navigateTo({url:"/pages/extend-view/news-search/news-search"})},search_key:function(n){t.navigateTo({url:"/pages/extend-view/productList/productList?searchKey="+n})},numberChange:function(n,e,i){var a=this,c=t.getStorageSync("is_login");0==c&&t.showModal({title:"温馨提示",content:"选择登录，更多服务",success:function(n){if(n.confirm)t.navigateTo({url:"/pages/user/user"});else if(n.cancel)return}});var r=n.value;this.productList[e].cart_num=n.value,0!=r?this.cart_num[i.id].num>0?this.$api.CC_request.cart_update({id:this.cart_num[i.id].cart_id,number:n.value}).then((function(t){a.update_cart_item_num()})):this.$api.CC_request.cart_add({productId:i.id,cartNum:n.value,new:0}).then((function(t){a.cart_num[i.id]={cart_id:t.cartId,num:r},a.update_cart_item_num()})):this.$api.CC_request.cart_del({ids:this.cart_num[i.id].cart_id}).then((function(t){a.cart_num[i.id]={cart_id:0,num:0},a.update_cart_item_num()}))},update_cart_item_num:function(){var t=0;this.cart_num.forEach((function(n){n.num>0&&(t+=1)})),this.cart_item_num=t},tabbarSwitch:function(n){var e=n.currentTarget.dataset.index,i="";switch(e){case 0:i="/pages/index/index";break;case 1:break;case 2:i="/pages/cart/cart";break;case 3:i="/pages/user/user";break;default:break}i&&t.redirectTo({url:i})}}};n.default=s}).call(this,e("543d")["default"])},"638b":function(t,n,e){},"7bb6":function(t,n,e){"use strict";e.r(n);var i=e("4a7e"),a=e("a4fd");for(var c in a)"default"!==c&&function(t){e.d(n,t,(function(){return a[t]}))}(c);e("b8b2");var r,u=e("f0c5"),o=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);n["default"]=o.exports},8275:function(t,n,e){"use strict";(function(t){e("f238");i(e("66fd"));var n=i(e("7bb6"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},a4fd:function(t,n,e){"use strict";e.r(n);var i=e("5209"),a=e.n(i);for(var c in i)"default"!==c&&function(t){e.d(n,t,(function(){return i[t]}))}(c);n["default"]=a.a},b8b2:function(t,n,e){"use strict";var i=e("638b"),a=e.n(i);a.a}},[["8275","common/runtime","common/vendor"]]]);