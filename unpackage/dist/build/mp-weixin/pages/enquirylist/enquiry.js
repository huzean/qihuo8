(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/enquirylist/enquiry"],{"2c2a":function(e,r,n){"use strict";var t=n("67a0"),o=n.n(t);o.a},"622c":function(e,r,n){"use strict";n.d(r,"b",(function(){return o})),n.d(r,"c",(function(){return i})),n.d(r,"a",(function(){return t}));var t={uniIcons:function(){return Promise.all([n.e("common/vendor"),n.e("components/uni-icons/uni-icons")]).then(n.bind(null,"2d26"))}},o=function(){var e=this,r=e.$createElement;e._self._c},i=[]},"65d0":function(e,r,n){"use strict";n.r(r);var t=n("c961"),o=n.n(t);for(var i in t)"default"!==i&&function(e){n.d(r,e,(function(){return t[e]}))}(i);r["default"]=o.a},"67a0":function(e,r,n){},"754c":function(e,r,n){"use strict";n.r(r);var t=n("622c"),o=n("65d0");for(var i in o)"default"!==i&&function(e){n.d(r,e,(function(){return o[e]}))}(i);n("2c2a");var c,a=n("f0c5"),u=Object(a["a"])(o["default"],t["b"],t["c"],!1,null,null,null,!1,t["a"],c);r["default"]=u.exports},c961:function(e,r,n){"use strict";(function(e){Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var t=function(){n.e("components/icon/icon").then(function(){return resolve(n("6752"))}.bind(null,n)).catch(n.oe)},o=function(){n.e("components/search/index").then(function(){return resolve(n("2ae1"))}.bind(null,n)).catch(n.oe)},i={components:{tuiIcon:t,Search:o},data:function(){return{tabbar:[{icon:"home",text:"首页",size:21},{icon:"category",text:"询价",size:24},{icon:"category",text:"报价",size:22},{icon:"people",text:"我的",size:24}],navList:[{name:"全部"},{name:"本周"},{name:"本月"},{name:"本年"}],navactive:0,enquiryList:[{order:"T1234563",time:"2020-12-1",orderNumber:"43100245",receiveoffer:"50",lowoffer:"500"},{order:"T1234563",time:"2020-12-1",orderNumber:"43100245",receiveoffer:"50",lowoffer:"500"},{order:"T1234563",time:"2020-12-1",orderNumber:"43100245",receiveoffer:"50",lowoffer:"500"},{order:"T1234563",time:"2020-12-1",orderNumber:"43100245",receiveoffer:"50",lowoffer:"500"},{order:"T1234563",time:"2020-12-1",orderNumber:"43100245",receiveoffer:"50",lowoffer:"500"},{order:"T1234563",time:"2020-12-1",orderNumber:"43100245",receiveoffer:"50",lowoffer:"500"},{order:"T1234563",time:"2020-12-1",orderNumber:"43100245",receiveoffer:"50",lowoffer:"500"},{order:"T1234563",time:"2020-12-1",orderNumber:"43100245",receiveoffer:"50",lowoffer:"500"}],current:1}},methods:{tabbarSwitch:function(r){var n=r.currentTarget.dataset.index;console.log(r);var t="";switch(n){case 0:t="/pages/index/index";break;case 1:break;case 2:t="/pages/makeoffers/make";break;case 3:t="/pages/user/user";break;default:break}t&&e.redirectTo({url:t})},lun_bo:function(e){this.navactive=e},getSearch:function(r){e.navigateTo({url:"../searhc/index"})},getInquirt:function(r){e.navigateTo({url:"../xunjia/index"})},handleto:function(r){e.navigateTo({url:"../enquirydetails/index"})}}};r.default=i}).call(this,n("543d")["default"])},f75f:function(e,r,n){"use strict";(function(e){n("f238");t(n("66fd"));var r=t(n("754c"));function t(e){return e&&e.__esModule?e:{default:e}}e(r.default)}).call(this,n("543d")["createPage"])}},[["f75f","common/runtime","common/vendor"]]]);