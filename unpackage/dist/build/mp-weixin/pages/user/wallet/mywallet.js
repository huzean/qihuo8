(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/wallet/mywallet"],{"0d1b":function(t,e,n){"use strict";n.r(e);var u=n("4fea"),r=n.n(u);for(var c in u)"default"!==c&&function(t){n.d(e,t,(function(){return u[t]}))}(c);e["default"]=r.a},"177f":function(t,e,n){"use strict";var u;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return u}));var r=function(){var t=this,e=t.$createElement;t._self._c},c=[]},"185f":function(t,e,n){"use strict";(function(t){n("f238");u(n("66fd"));var e=u(n("f489"));function u(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"4fea":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=function(){n.e("components/list-cell/list-cell").then(function(){return resolve(n("80ca"))}.bind(null,n)).catch(n.oe)},r=function(){n.e("components/extend/button/button").then(function(){return resolve(n("1920"))}.bind(null,n)).catch(n.oe)},c={components:{tuiListCell:u,tuiButton:r},data:function(){return{current_user:{}}},onLoad:function(){var t=this;this.$api.CC_request.get_user().then((function(e){401!=e&&(t.current_user=e)}))},methods:{href:function(e){var n="";switch(e){case 1:n="/pages/user/wallet/purchase";break;case 2:n="../address/address";break;default:break}t.navigateTo({url:n})}}};e.default=c}).call(this,n("543d")["default"])},"670e":function(t,e,n){"use strict";var u=n("c6e7"),r=n.n(u);r.a},c6e7:function(t,e,n){},f489:function(t,e,n){"use strict";n.r(e);var u=n("177f"),r=n("0d1b");for(var c in r)"default"!==c&&function(t){n.d(e,t,(function(){return r[t]}))}(c);n("670e");var a,o=n("f0c5"),f=Object(o["a"])(r["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],a);e["default"]=f.exports}},[["185f","common/runtime","common/vendor"]]]);