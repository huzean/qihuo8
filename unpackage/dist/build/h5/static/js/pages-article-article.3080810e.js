(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-article-article"],{"1ccd":function(t,e,n){var a=n("d111");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("191a8322",a,!0,{sourceMap:!1,shadowMode:!1})},8549:function(t,e,n){"use strict";n.r(e);var a=n("bc4a"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);e["default"]=i.a},bc4a:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{art:""}},onLoad:function(t){this.get_art_detail(t.id)},methods:{get_art_detail:function(t){var e=this;this.$api.http.get("article/get_one_article?id="+t).then(function(t){e.art=t.data})}},onPullDownRefresh:function(){setTimeout(function(){uni.stopPullDownRefresh()},2e3)}};e.default=a},cb89:function(t,e,n){"use strict";var a=n("1ccd"),i=n.n(a);i.a},d111:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".article[data-v-7ea76e03]{padding:20px 10px;font-size:14px}.article .tit[data-v-7ea76e03]{text-align:center;font-size:16px}.article .time[data-v-7ea76e03]{padding:5px 0 15px;text-align:center;color:#d1d1d1}",""])},f30d:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"article"},[n("v-uni-view",{staticClass:"tit"},[t._v(t._s(t.art.title))]),n("v-uni-view",{staticClass:"time"}),n("v-uni-view",{staticClass:"content"},[n("v-uni-rich-text",{attrs:{nodes:t.art.content}})],1)],1)},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},fd0f:function(t,e,n){"use strict";n.r(e);var a=n("f30d"),i=n("8549");for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);n("cb89");var c=n("2877"),u=Object(c["a"])(i["default"],a["a"],a["b"],!1,null,"7ea76e03",null);e["default"]=u.exports}}]);