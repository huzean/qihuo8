(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/order"],{"0788":function(t,e,n){"use strict";var r=n("8c90"),o=n.n(r);o.a},"0e21":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r}));var r={tuiTabs:function(){return n.e("components/tui-tabs/tui-tabs").then(n.bind(null,"1a3c"))}},o=function(){var t=this,e=t.$createElement;t._self._c},i=[]},3883:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=function(){n.e("components/tui-tabs/tui-tabs").then(function(){return resolve(n("1a3c"))}.bind(null,n)).catch(n.oe)},o=function(){n.e("components/extend/button/button").then(function(){return resolve(n("1920"))}.bind(null,n)).catch(n.oe)},i=function(){n.e("components/loadmore/loadmore").then(function(){return resolve(n("c0fd"))}.bind(null,n)).catch(n.oe)},u=function(){n.e("components/nomore/nomore").then(function(){return resolve(n("4e51"))}.bind(null,n)).catch(n.oe)},c=function(){n.e("components/list-cell/list-cell").then(function(){return resolve(n("80ca"))}.bind(null,n)).catch(n.oe)},a=function(){n.e("components/sticky/sticky").then(function(){return resolve(n("6b25"))}.bind(null,n)).catch(n.oe)},l={components:{tuiTabs:r,tuiButton:o,tuiLoadmore:i,tuiNomore:u,tuiListCell:c,tuiSticky:a},data:function(){return{img_url:this.$img_url,tabs:[{name:"全部"},{name:"待付款"},{name:"待发货"},{name:"待收货"},{name:"待评价"}],currentTab:0,current_order_type:999,pageIndex:1,loadding:!1,pullUpOn:!0,scrollTop:0,order_list:[],page_limit:3}},onLoad:function(t){var e=t.state;this.current_order_type=parseInt(e),999==this.current_order_type?this.currentTab=0:this.currentTab=this.current_order_type+1,this.get_order_data()},methods:{change:function(t){this.currentTab=t.index,this.pageIndex=1,0==t.index?this.current_order_type=999:this.current_order_type=t.index-1,this.order_list=[],this.pullUpOn=!0,this.loadding=!1,this.get_order_data()},detail:function(e){t.navigateTo({url:"/pages/user/myorder/myorder?id="+e})},get_order_data:function(){var t=this;if(0!=this.pullUpOn){var e={type:this.current_order_type,limit:this.page_limit,page:this.pageIndex};this.loadding=!0,this.$api.CC_request.order_get_list(e).then((function(e){var n=e;e.length>0&&(t.order_list=t.order_list.concat(n)),n.length<t.page_limit&&(t.loadding=!1,t.pullUpOn=!1),t.loadding=!1}))}},order_again:function(e){this.$api.CC_request.order_again(e).then((function(e){t.setStorageSync("order_cart_id",e.cartId),t.redirectTo({url:"/pages/order/createOrder?state=buy"})}))},confirm_take:function(t){var e=this;this.$api.CC_request.order_confirm_take(t).then((function(t){e.order_list=[],e.pullUpOn=!0,e.pageIndex=1,console.log("确认收货"),e.get_order_data()}))},cancel_order:function(t){var e=this;this.$api.CC_request.order_cancel(t).then((function(t){e.order_list=[],e.pullUpOn=!0,e.pageIndex=1,e.get_order_data(),e.$api.msg("取消订单成功")}))}},onPullDownRefresh:function(){setTimeout((function(){t.stopPullDownRefresh()}),200)},onReachBottom:function(){0!=this.pullUpOn&&(this.pageIndex=this.pageIndex+1,this.get_order_data())},onPageScroll:function(t){this.scrollTop=t.scrollTop}};e.default=l}).call(this,n("543d")["default"])},5367:function(t,e,n){"use strict";n.r(e);var r=n("0e21"),o=n("b6cf");for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);n("0788");var u,c=n("f0c5"),a=Object(c["a"])(o["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],u);e["default"]=a.exports},"54d2":function(t,e,n){"use strict";(function(t){n("f238");r(n("66fd"));var e=r(n("5367"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"8c90":function(t,e,n){},b6cf:function(t,e,n){"use strict";n.r(e);var r=n("3883"),o=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=o.a}},[["54d2","common/runtime","common/vendor"]]]);