(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-record-record"],{1549:function(t,e,i){"use strict";i.r(e);var a=i("99f9"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);e["default"]=n.a},"387d":function(t,e,i){var a=i("5ba5");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("040a8688",a,!0,{sourceMap:!1,shadowMode:!1})},"5ba5":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */.record[data-v-275597fe]{font-size:14px}.record .head[data-v-275597fe]{background-color:#ff4d4d;padding:20px 10px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.record .head .head_l[data-v-275597fe]{color:#fff}.record .head .head_l .head_l_2[data-v-275597fe]{font-size:22px;padding-top:10px}.record .head .head_r[data-v-275597fe]{background-color:#fff;color:#fd6766;height:30px;line-height:30px;width:90px;text-align:center;border-radius:20px;margin-top:15px}.record .list[data-v-275597fe]{margin:15px 10px;box-shadow:0 0 10px #ededed;border-radius:5px;padding:15px 10px}.record .list .list_01[data-v-275597fe]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;font-size:16px;font-weight:600;padding-bottom:10px}.record .list .list_02[data-v-275597fe]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;color:#9a9a9a}.record .list .list_02 .list_01_r[data-v-275597fe]{color:#fc4f50}',""])},8794:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"record"},[i("v-uni-view",{staticClass:"head"},[i("v-uni-view",{staticClass:"head_l"},[i("v-uni-view",{staticClass:"head_l_1"},[t._v("余额（元）")]),i("v-uni-view",{staticClass:"head_l_2"},[t._v("0.00")])],1),i("v-uni-view",{staticClass:"head_r",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.jump_cash.apply(void 0,arguments)}}},[t._v("提现")])],1),t._l(t.list,function(e,a){return[i("v-uni-view",{key:a+"_0",staticClass:"list"},[i("v-uni-view",{staticClass:"list_01"},[i("v-uni-view",{staticClass:"list_01_l"},[t._v(t._s(e.type))]),i("v-uni-view",{staticClass:"list_01_r"},[t._v("-"+t._s(e.money))])],1),i("v-uni-view",{staticClass:"list_02"},[i("v-uni-view",{staticClass:"list_01_l"},[t._v(t._s(e.time))]),0==e.state?i("v-uni-view",{staticClass:"list_01_r"},[t._v("处理中")]):t._e(),1==e.state?i("v-uni-view",{},[t._v("交易成功")]):t._e()],1)],1)]})],2)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},"99f9":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{list:[],list2:[{type:"提现",money:"3000.00",time:"2019.06.29 14:00",state:1},{type:"提现",money:"3000.00",time:"2019.06.29 14:00",state:0},{type:"提现",money:"3000.00",time:"2019.06.29 14:00",state:1}]}},methods:{jump_cash:function(){uni.navigateTo({url:"/pages/user/cash/cash"})}}};e.default=a},e0aa:function(t,e,i){"use strict";i.r(e);var a=i("8794"),n=i("1549");for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);i("f55a");var r=i("2877"),o=Object(r["a"])(n["default"],a["a"],a["b"],!1,null,"275597fe",null);e["default"]=o.exports},f55a:function(t,e,i){"use strict";var a=i("387d"),n=i.n(a);n.a}}]);