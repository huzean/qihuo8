(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/set/set"],{"10de":function(t,n,e){},1628:function(t,n,e){"use strict";e.r(n);var o=e("8ff0"),r=e("1a12");for(var i in r)"default"!==i&&function(t){e.d(n,t,(function(){return r[t]}))}(i);e("e287");var c,u=e("f0c5"),a=Object(u["a"])(r["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],c);n["default"]=a.exports},"1a12":function(t,n,e){"use strict";e.r(n);var o=e("3bea"),r=e.n(o);for(var i in o)"default"!==i&&function(t){e.d(n,t,(function(){return o[t]}))}(i);n["default"]=r.a},"3bea":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=e("2f62");function r(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,o)}return e}function i(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?r(Object(e),!0).forEach((function(n){c(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function c(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var u=function(){e.e("components/uni/uni-icon/uni-icon").then(function(){return resolve(e("3d83"))}.bind(null,e)).catch(e.oe)},a={components:{uniIcon:u},data:function(){return{xgnc:!1,from:{headpic:0,nickname:"",sex:"",birthday:""},current:1}},onLoad:function(t){this._load()},methods:i(i({set:function(){var n=this;this.$api.http.post("user/edit_info",this.from).then((function(e){console.log(e),n.$api.msg("操作成功"),setTimeout((function(){t.switchTab({url:"/pages/user/user"})}),1500)}))},_load:function(){var n=this;this.$api.http.get("user/info").then((function(e){n.from=e,t.hideLoading()}))},radioChange:function(t){this.from.sex=t.detail.value},change_nc:function(){this.xgnc=!this.xgnc}},(0,o.mapMutations)(["logout"])),{},{navTo:function(t){this.$api.msg("跳转到".concat(t))},toLogout:function(){var n=this;t.showModal({content:"确定要退出登录么",success:function(e){e.confirm&&(n.logout(),t.clearStorageSync(),t.reLaunch({url:"/pages/public/login"}))}})},switchChange:function(t){var n=t.detail.value?"打开":"关闭";this.$api.msg("".concat(n,"消息推送"))}}),onPullDownRefresh:function(){console.log("refresh"),this._load(),setTimeout((function(){t.stopPullDownRefresh()}),2e3)}};n.default=a}).call(this,e("543d")["default"])},"8ff0":function(t,n,e){"use strict";var o;e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return o}));var r=function(){var t=this,n=t.$createElement;t._self._c},i=[]},b577:function(t,n,e){"use strict";(function(t){e("f238");o(e("66fd"));var n=o(e("1628"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},e287:function(t,n,e){"use strict";var o=e("10de"),r=e.n(o);r.a}},[["b577","common/runtime","common/vendor"]]]);