(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-cms-edit-yunfei-yunfei"],{"50f8":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */.yunfei[data-v-f48c2c94]{background-color:#fafafa;min-height:100vh;font-size:15px;padding-top:1px}.yunfei .con[data-v-f48c2c94]{margin:10px 0;border-top:1px solid #f0f0f0}.yunfei .con .set[data-v-f48c2c94]{background-color:#fff;padding:15px 10px;display:-webkit-box;display:-webkit-flex;display:flex;border-bottom:1px solid #eee}.yunfei .con .set .set_l[data-v-f48c2c94]{padding-right:10px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.yunfei .con .set .set_m[data-v-f48c2c94]{-webkit-box-flex:1;-webkit-flex-grow:1;flex-grow:1}.yunfei .con .set .set_m .set_m_01[data-v-f48c2c94]{padding-bottom:10px}.yunfei .con .set .set_m .set_m_02[data-v-f48c2c94]{color:#a1a1a1}.yunfei .con .set .set_r[data-v-f48c2c94]{padding-left:10px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.yunfei .ti[data-v-f48c2c94]{padding:10px;line-height:18px}',""])},"5b3b":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"yunfei"},[i("v-uni-view",{staticClass:"con"},[i("v-uni-view",{staticClass:"set"},[i("v-uni-view",{staticClass:"set_l"},[i("v-uni-radio",{class:"A"==t.radio?"checked":"",attrs:{checked:"A"==t.radio,value:"A"}})],1),i("v-uni-view",{staticClass:"set_m"},[i("v-uni-view",{staticClass:"set_m_01"},[t._v("统一运费（0元）")]),i("v-uni-view",{staticClass:"set_m_02"},[t._v("未有商品使用")])],1),i("v-uni-view",{staticClass:"set_r"},[i("v-uni-navigator",{attrs:{url:"/pages/edit/yfset/yfset"}},[i("uni-icon",{attrs:{type:"compose",size:"30",color:"#669CE7"}})],1)],1)],1),t._l(t.list,function(e,n){return i("v-uni-view",{staticClass:"set"},[i("v-uni-view",{staticClass:"set_l"},[i("v-uni-radio",{class:"A"==t.radio?"checked":"",attrs:{checked:"A"==t.radio,value:"A"}})],1),i("v-uni-view",{staticClass:"set_m"},[i("v-uni-view",{staticClass:"set_m_01"},[t._v(t._s(e.num))]),i("v-uni-view",{staticClass:"set_m_02"},[t._v(t._s(e.mess))])],1),i("v-uni-view",{staticClass:"set_r"},[i("v-uni-navigator",{attrs:{url:"/pages/edit/yfmoban/yfmoban"}},[i("uni-icon",{attrs:{type:"info",size:"25",color:"#1A6AE2"}})],1)],1)],1)})],2),i("v-uni-view",{staticClass:"ti"},[t._v("需要创建更多运费模板，请登录“youzan.com”通过“订单---\x3e物流工具”新建")])],1)},s=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return s})},9543:function(t,e,i){"use strict";var n=i("b317"),s=i.n(n);s.a},"9d61":function(t,e,i){"use strict";var n=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=n(i("e761")),a={data:function(){return{list:""}},components:{uniIcon:s.default},onLoad:function(){this.list=this.$api.json.yunfei}};e.default=a},b01f:function(t,e,i){"use strict";i.r(e);var n=i("5b3b"),s=i("c56f");for(var a in s)"default"!==a&&function(t){i.d(e,t,function(){return s[t]})}(a);i("9543");var c=i("2877"),o=Object(c["a"])(s["default"],n["a"],n["b"],!1,null,"f48c2c94",null);e["default"]=o.exports},b317:function(t,e,i){var n=i("50f8");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var s=i("4f06").default;s("29799c6f",n,!0,{sourceMap:!1,shadowMode:!1})},c56f:function(t,e,i){"use strict";i.r(e);var n=i("9d61"),s=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);e["default"]=s.a}}]);