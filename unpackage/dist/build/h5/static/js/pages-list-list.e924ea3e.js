(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-list-list"],{"03c8":function(n,t,e){t=n.exports=e("2350")(!1),t.push([n.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */.list[data-v-ed38f11a]{color:#7c7c7c;height:40px;line-height:40px;padding:0 10px;border-bottom:1px solid #e9e8e5;font-size:14px}',""])},"09e3":function(n,t,e){"use strict";e.r(t);var i=e("36a7"),a=e("dd5a");for(var r in a)"default"!==r&&function(n){e.d(t,n,function(){return a[n]})}(r);e("78d8");var u=e("2877"),o=Object(u["a"])(a["default"],i["a"],i["b"],!1,null,"ed38f11a",null);t["default"]=o.exports},"36a7":function(n,t,e){"use strict";var i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",n._l(n.list,function(t){return e("v-uni-view",[e("v-uni-view",{staticClass:"list",on:{click:function(e){arguments[0]=e=n.$handleEvent(e),n.jump(t.id)}}},[n._v(n._s(t.title))])],1)}),1)},a=[];e.d(t,"a",function(){return i}),e.d(t,"b",function(){return a})},"6a360":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{list:""}},onLoad:function(){this._load()},methods:{_load:function(){var n=this;this.$api.http.get("article/type_article?type=5").then(function(t){n.list=t.data})},jump:function(n){uni.navigateTo({url:"/pages/article/article?id="+n})}}};t.default=i},"78d8":function(n,t,e){"use strict";var i=e("a31b"),a=e.n(i);a.a},a31b:function(n,t,e){var i=e("03c8");"string"===typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);var a=e("4f06").default;a("01b71e18",i,!0,{sourceMap:!1,shadowMode:!1})},dd5a:function(n,t,e){"use strict";e.r(t);var i=e("6a360"),a=e.n(i);for(var r in i)"default"!==r&&function(n){e.d(t,n,function(){return i[n]})}(r);t["default"]=a.a}}]);