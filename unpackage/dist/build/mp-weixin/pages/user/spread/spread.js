(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/spread/spread"],{"02df":function(t,e,n){"use strict";n.r(e);var o=n("e511"),u=n("cc99");for(var c in u)"default"!==c&&function(t){n.d(e,t,(function(){return u[t]}))}(c);n("e20b");var s,i=n("f0c5"),r=Object(i["a"])(u["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],s);e["default"]=r.exports},"599b":function(t,e,n){},"7ff1":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{is_click:!1,qr_poster:""}},onLoad:function(){var e=this;t.showLoading({title:"加载中"}),this.$api.CC_request.get_user_dis_qrcode().then((function(n){e.qr_poster=n[0],t.hideLoading()}))},methods:{save:function(){var e=this;this.is_click=!0,t.showLoading({title:"加载中"});var n=this.qr_poster.poster;t.authorize({scope:"scope.writePhotosAlbum",success:function(o){t.downloadFile({url:n,success:function(n){console.log(n),t.saveImageToPhotosAlbum({filePath:n.tempFilePath,success:function(n){console.log("save success",n),t.showToast({title:"图片保存成功",duration:2e3}),e.is_click=!1,t.hideLoading()}})}})}})}},onPullDownRefresh:function(){setTimeout((function(){t.stopPullDownRefresh()}),2e3)}};e.default=n}).call(this,n("543d")["default"])},c6d9:function(t,e,n){"use strict";(function(t){n("f238");o(n("66fd"));var e=o(n("02df"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},cc99:function(t,e,n){"use strict";n.r(e);var o=n("7ff1"),u=n.n(o);for(var c in o)"default"!==c&&function(t){n.d(e,t,(function(){return o[t]}))}(c);e["default"]=u.a},e20b:function(t,e,n){"use strict";var o=n("599b"),u=n.n(o);u.a},e511:function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return o}));var u=function(){var t=this,e=t.$createElement;t._self._c},c=[]}},[["c6d9","common/runtime","common/vendor"]]]);